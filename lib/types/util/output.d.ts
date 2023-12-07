declare type Range = [from: number, to: number];
export declare class Output {
    private _x1;
    private _x2;
    constructor(from?: number, to?: number);
    get from(): number;
    set from(value: number);
    get to(): number;
    set to(value: number);
    get delta(): number;
    set delta(value: number);
    get range(): Range;
    set range(value: Range);
    toRelative(value: number): number;
    toAbsolute(value: number): number;
}
export {};
