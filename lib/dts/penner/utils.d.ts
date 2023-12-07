import type { Function } from "../types";
export declare const names: readonly ["Quad", "Cubic", "Quart", "Quint", "Expo", "Sine", "Circ", "Back", "Elastic"];
export declare type Name = (typeof names)[number];
export declare const directions: readonly ["in", "out", "inOut", "outIn"];
export declare type Direction = (typeof directions)[number];
export declare function toOut(fn: Function): Function;
export declare function toInOut(fn: Function): Function;
export declare function toOutIn(fn: Function): Function;
