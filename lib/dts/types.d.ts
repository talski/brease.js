import type { Direction as PennerDirection, Name as PennerName } from "./penner/utils";
export declare type Args = [o1?: number, o2?: number, t1?: number, t2?: number];
export declare type Range = [start: number, end: number];
export declare type Param = Function | Name;
export declare type Function = (t: number) => number;
export declare type Name = `ease${Capitalize<PennerDirection>}${PennerName}` | "linear" | "ease" | "easeIn" | "easeOut" | "easeInOut" | "stepEnd" | "stepStart";
