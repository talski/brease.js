import Easing from "../easing";
import steps from "./function";
const Directions = ["start", "end", "none", "both"];
export default class Steps extends Easing {
    constructor(number, direction = "end", ...args) {
        if (Directions.indexOf(direction) === -1)
            throw new Error("unknown direction");
        super(steps(Math.max(Math.round(number), 1), direction), ...args);
    }
}
