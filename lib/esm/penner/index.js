import Easing from "../easing";
import library from "./library";
export default class Penner extends Easing {
    constructor(name, ...args) {
        if (!(name in library))
            throw new Error("unknown function");
        super(library[name], ...args);
    }
}
