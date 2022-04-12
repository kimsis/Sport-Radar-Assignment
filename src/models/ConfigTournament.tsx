import TournamentData from "./TournamentData";

export default interface ConfigTournament {
    event: string;
    _dob: number;
    _maxage: number;
    _configid: number;
    data: TournamentData;
}