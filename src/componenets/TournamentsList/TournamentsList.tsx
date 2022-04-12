import MatchesAssoc from "../../models/MatchesAssoc";
import MatchesList from "../MatchesList/MatchesList";
import "./TournamentsList.css"

const TournamentsList: React.FC<{
    matchesAssoc: MatchesAssoc | undefined,
}> = (props) => {

    let list = [];
    for (var key in props.matchesAssoc) {
        list.push(
            <MatchesList matches={props.matchesAssoc[key]} name={key} />
        )
    }

    return <div className="wrapper">{list}</div>;
}

export default TournamentsList