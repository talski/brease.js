import { Time } from "../../util/time";
import { Output } from "../../util/output";
export declare class Easing {
    protected _time: Time;
    protected _output: Output;
    constructor(from?: number, to?: number, start?: number, end?: number);
    get time(): Time;
    get output(): Output;
    at(t: number): number;
    clone(): Easing;
    delta(t1: number, t2: number): number;
    keyframes(n: number): number[];
    protected calculate(x: number): number;
}
