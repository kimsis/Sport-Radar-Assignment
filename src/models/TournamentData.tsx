import Tournament from "./Tournament";
import UniqueTournament from "./UniqueTournament";

export default interface TournamentData {
    tournaments: Tournament[];
    unique_tournaments: UniqueTournament[];
}