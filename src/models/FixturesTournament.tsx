import Match from "./Match";
import Tournament from "./Tournament";

export default interface FixturesTournament {
    data: {
        matches: Object;
        cups: any[];
        tables: any[];
        seasons: any[];
        tournaments: Tournament[];
        categories: any[];
        sports: any[];
    }
}