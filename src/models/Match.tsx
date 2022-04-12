// import Period from "./Period";
// import Periods from "./Periods";
// import Result from "./Result";
// import RoundName from "./RoundName";
// import Team from "./Team";
import Teams from "./Teams";
import Time from "./Time";

export default class Match {
    // _doc: string;
    // _id: number;
    // _sid: number;
    // _rcid: number;
    // _tid: number;
    // _utid: number;
    time: Time;
    // round: number;
    // roundname: RoundName;
    // week: number;
    // result: Result;
    // periods: Periods;
    teams: Teams;
    // neutralground: boolean;
    comment: string;
    // status: any;
    // tobeannounced: boolean;
    // postponed: boolean;
    // canceled: boolean;
    // inlivescore: boolean;
    // stadiumid: number;
    // bestof: any;
    // walkover: boolean;
    // retired: boolean;
    // disqualified: boolean;

    constructor(time: Time, teams: Teams, comment: string) {
        this.time = time;
        this.teams = teams;
        this.comment = comment
    }
}