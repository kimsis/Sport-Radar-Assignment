import { useContext, useEffect, useState } from "react";
import APIFetcher from "../middleware/APIFetcher"
import MatchesAssoc from "../models/MatchesAssoc";
import AppContext from "../providers/AppContext";
import TournamentsList from "./TournamentsList/TournamentsList";

const MatchesWidget: React.FC = (props) => {
    const appContext = useContext(AppContext);

    // First solution, however it doesn't utilize the middleware pattern well.
    // On top of that it does multiple re-renders unnecesarily
    //
    // const [configTournaments, setConfigTournaments] = useState<ConfigTournaments>();
    // const [fixturesTournaments, setFixturesTournaments] = useState<FixturesTournaments>();
    // const [tournaments, setTournaments] = useState<Tournament[] | undefined>();
    // const [matches, setMatches] = useState<Match[] | undefined>();

    // useEffect(() => {
    //     if (configTournaments != undefined) {
    //         setTournaments(configTournaments.doc[0].data.tournaments);
    //     }
    // }, [configTournaments])

    // useEffect(() => {
    //     tournaments?.map((tournament) => {
    //         //fetcher.fetchMatches(tournament._tid, setFixturesTournaments);
    //     })
    // }, [tournaments])

    // let matchesList;

    // useEffect(() => {
    //     if (fixturesTournaments != undefined) {
    //         let tempMatches: Match[] = Object.values(fixturesTournaments.doc[0].data.matches);
    //         setMatches(tempMatches.slice(-5));
    //     }
    // }, [fixturesTournaments])

    // useEffect(() => {
    //     console.log(matches);
    // }, [matches])

    const [matchesAssoc, setMatchesAssoc] = useState<MatchesAssoc | undefined>();

    let fetcher: APIFetcher = APIFetcher(appContext.http + appContext.suffix);
    useEffect(() => {
        fetcher.fetchTournaments(setMatchesAssoc);
    }, [fetcher]);

    return (
        <div>
        <TournamentsList matchesAssoc={matchesAssoc} />
        </div>
    )
}

export default MatchesWidget