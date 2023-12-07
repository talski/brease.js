import type { Args } from "../types";
import type { Direction } from "../penner/utils";
import Easing from "../easing";
export default class Elastic extends Easing {
    constructor(amplitude?: number, period?: number, direction?: Direction, ...args: Args);
}
