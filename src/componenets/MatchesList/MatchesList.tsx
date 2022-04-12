import Collapsible from "react-collapsible";
import Match from "../../models/Match";
import MatchListItem from "../MatchListItem/MatchListItem";
import "./MatchesList.css"

const MatchesList: React.FC<{
    matches: Match[] | undefined,
    name: string
}> = (props) => {
    let list;
    if (props.matches !== undefined && props.matches.length > 0) {
        list = props.matches.map((match, key) => (
            <p>
            <MatchListItem match={match} id={key} />
            </p>
        ))
    }
    return <Collapsible className="tournaments" trigger={props.name}>{list}</Collapsible>;
}

export default MatchesList