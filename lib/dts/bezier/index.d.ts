import type { Args } from "../types";
import Easing from "../easing";
export default class Bezier extends Easing {
    constructor(x1: number, y1: number, x2: number, y2: number, ...agrs: Args);
}
