export default interface Tournament {
    _doc: string;
    _id: number;
    _sid: number;
    _rcid: number;
    _isk: number;
    _tid: number;
    _utid: number;
    name: string;
    abbr: string;
    ground: any;
    friendly: boolean;
    seasonid: number;
    currentseason: number;
    year: string;
    seasontype: string;
    seasontypename: string;
    seasontypeunique: string;
    groupname: string;
    livetable: number;
    cuprosterid: any;
    roundbyround: boolean;
    tournamentlevelorder: number;
    tournamentlevelname: string;
    outdated: boolean;
    _sk: boolean;
}