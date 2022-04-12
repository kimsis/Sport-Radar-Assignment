import Match from "../../models/Match";
import "./MatchListItem.css"

const MatchListItem: React.FC<{
    match: Match;
    id: number;
}> = (props) => {

    console.log(props.match.comment);

    return (
        <div>
            <span className="home">Home: {props.match.teams.home.name}</span>
            <span className="away">Away: {props.match.teams.away.name}</span>
            <div className="match" key={props.id}>
                <p>{props.match.comment}</p>
                <p>{props.match.time.date + " " + props.match.time.time}</p>
            </div>
        </div>
    )
}

export default MatchListItem