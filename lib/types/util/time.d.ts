declare type Range = [start: number, end: number];
export declare class Time {
    private _t1;
    private _t2;
    constructor(start?: number, end?: number);
    get start(): number;
    set start(value: number);
    get end(): number;
    set end(value: number);
    get duration(): number;
    set duration(value: number);
    get range(): Range;
    set range(value: Range);
    toRelative(value: number): number;
    toAbsolute(value: number): number;
}
export {};
