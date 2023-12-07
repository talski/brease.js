import type { Args } from "../types";
import type { Direction, Name } from "./utils";
import Easing from "../easing";
export default class Penner extends Easing {
    constructor(name: `${Direction}${Name}`, ...args: Args);
}
