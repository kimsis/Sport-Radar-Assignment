import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import ConfigTournaments from "../models/ConfigTournaments";
import FixturesTournaments from "../models/FixturesTournaments";
import Match from "../models/Match";
import MatchesAssoc from "../models/MatchesAssoc";
import Tournament from "../models/Tournament";

type APIFetcher = {
    fetchTournaments: (setter: Dispatch<SetStateAction<any>>) => void;
    //fetchMatches: (_tid: number, setter: Dispatch<SetStateAction<any>>) => void;
}

function APIFetcher(httpBase: string): APIFetcher {

    // let configTournaments: ConfigTournaments;
    // let fixturesTournaments: FixturesTournaments;
    // let tournaments: Tournament[];
    // let matches: Match[];
    // const fetchTournaments: APIFetcher['fetchTournaments'] = async (setter) => {
    //     let pipeline = Pipeline<string>(
    //         (http, next) => {
    //             getData(http, setter);
    //         }
    //     )
    //     let http = httpBase + "/config_tournaments/1/17";
    //     return pipeline.execute(http);
    // }
    // const fetchMatches: APIFetcher['fetchMatches'] = async (_tid, setter) => {
    //     let pipeline = Pipeline<string>(
    //         (http, next) => {
    //             getData(http, setter);
    //         }
    //     );
    //     let http = httpBase + "/fixtures_tournament/" + _tid + "/2021";
    //     return pipeline.execute(http);
    // }

    /**
     * A middleware function to retreive the data from the API and parse it properly, using interfaces for typehinting
     * @param setter a Dispatch to set the state of the matchesAssoc object, returning the final data
     */
    const fetchTournaments: APIFetcher['fetchTournaments'] = async (setter) => {
        let configTournaments: ConfigTournaments | undefined,
            fixturesTournaments: FixturesTournaments[],
            tournaments: Tournament[] | undefined;

        // Getting the tournaments data
        let http = httpBase + "/config_tournaments/1/17";
        configTournaments =
            await axios(http)
                .then(response => response.data)
                .catch(error => {
                    throw(error);
                });
        // Retreiving the array of tournaments, to iterate over for the retreival of matches
        tournaments = configTournaments?.doc[0].data.tournaments;
        if (tournaments !== undefined) {
            // Retreiving each tournament's matches
            Promise.all(tournaments.map(tournament =>
                axios(httpBase + "/fixtures_tournament/" + tournament._tid + "/2021")
                    .catch(error => {
                        throw (error);
                    })
            ))
                .then(data => {
                    fixturesTournaments = [];
                    // Iterating over the retreived data and saving it as an array of fixturesTournaments objects
                    data.map((data, key) => {
                        let tournament = data.data;
                        fixturesTournaments[key] = tournament;
                    })
                    let matchesAssoc = {} as MatchesAssoc;

                    // Parsing the matches onto the matchesAssoc object, for each tournament
                    for(let i=0; i< tournaments!.length; i++) {
                        let temp: Match[] = Object.values(fixturesTournaments[i].doc[0].data.matches).slice(-5);
                        let matches: Match[] = [];
                        temp.map((match, key) => {
                            matches.push(new Match(match.time, match.teams, match.comment));
                        })
                        matchesAssoc[tournaments![i].name] = matches;
                    }
                    setter(matchesAssoc)
                })
        } else {
            throw {
                name: "InvalidResponseData",
                message: "Error detected retreiving tournament data",
                toString: function () { return this.name + " " + this.message }
            }
        }
    }
    return { fetchTournaments /*, fetchMatches*/ };
}
// Initial attempt at splitting the tasks into functions and calling them via a Pipeline.
// Main issue was that I was unable to find a way to return non-final values
// e.g. retreive and return all tournaments, so that I can use them to fetch the matches.
// I wasn't able to come up with a proper return type (as it is a promise) for getData to achieve this
//
// async function getData(http: string, setter: Dispatch<SetStateAction<any>>) {
//     let parsedData;
//     return await fetch(http).then(response => response.json());
//     await axios
//         .get(http)
//         .then((response: AxiosResponse) => {
//             let parsedData = JSON.parse(JSON.stringify(response.data));
//             setter(parsedData);
//         })
//         .catch((error) => {
//             setError(error);
//         });
//     return parsedData;
// }

// function setError(error: any) {
//     console.log(error);
// }

export default APIFetcher;