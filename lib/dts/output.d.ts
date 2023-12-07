import type { Range } from "./types";
export default class Output {
    private _end;
    private _start;
    constructor(start?: number, end?: number);
    get start(): number;
    set start(value: number);
    get end(): number;
    set end(value: number);
    get delta(): number;
    set delta(value: number);
    get range(): Range;
    set range(value: Range);
}
