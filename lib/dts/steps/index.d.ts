import type { Args } from "../types";
import Easing from "../easing";
declare const Directions: readonly ["start", "end", "none", "both"];
export declare type Direction = (typeof Directions)[number];
export default class Steps extends Easing {
    constructor(number: number, direction?: Direction, ...args: Args);
}
export {};
