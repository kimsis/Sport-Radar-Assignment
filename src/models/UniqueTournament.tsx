export default interface UniqueTournament {
    _doc: string;
    _id: number;
    _utid: number;
    _sid: number;
    _rcid: number;
    name: string;
    currentseason: number;
    friendly: boolean;
}