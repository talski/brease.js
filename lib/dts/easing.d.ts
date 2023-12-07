import type { Args, Function, Param } from "./types";
import Time from "./time";
import Output from "./output";
export default class Easing {
    private _fn;
    readonly time: Time;
    readonly output: Output;
    constructor(easing?: Param, ...args: Args);
    get fn(): Function;
    /**
     * Returns the output at the specified time
     * @param t
     * @returns output
     */
    at(t: number): number;
    /**
     * Returns the difference of the outputs at the specified times
     * @param t1
     * @param t2
     * @returns
     */
    delta(t1: number, t2: number): number;
    /**
     * Returns an array of n keyframes
     * @param n
     */
    keyframes(n: number): number[];
    /**
     * Inverts the easing
     */
    invert(): void;
    /**
     * Clones the easing
     * @returns easing
     */
    clone(): Easing;
    /**
     * Normalises the specified time
     * @param t
     * @returns normalised time
     */
    private normalise;
}
