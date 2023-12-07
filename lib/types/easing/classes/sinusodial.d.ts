import type { BaseConfiguration, Direction } from "../types";
import { Easing } from "./easing";
export interface SinusodialEasingConfiguration extends BaseConfiguration {
    degree?: number | undefined;
    direction?: Direction | undefined;
}
export declare class SinusodialEasing extends Easing {
    private _degree;
    private _direction;
    constructor(config?: SinusodialEasingConfiguration);
    get degree(): number;
    set degree(value: number);
    get direction(): Direction;
    set direction(value: Direction);
    clone(): SinusodialEasing;
    protected calculate(x: number): number;
}
