import type { Args } from "../types";
import type { Direction } from "../penner/utils";
import Easing from "../easing";
export default class Back extends Easing {
    constructor(overshoot?: number, direction?: Direction, ...args: Args);
}
