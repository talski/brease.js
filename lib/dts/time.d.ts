import type { Range } from "./types";
export default class Time {
    private _end;
    private _start;
    constructor(start?: number, end?: number);
    get start(): number;
    set start(value: number);
    get end(): number;
    set end(value: number);
    get duration(): number;
    set duration(value: number);
    get range(): Range;
    set range(value: Range);
}
