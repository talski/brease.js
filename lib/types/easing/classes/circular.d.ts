import type { BaseConfiguration, Direction } from "../types";
import { Easing } from "./easing";
export interface CircularEasingConfiguration extends BaseConfiguration {
    degree?: number | undefined;
    direction?: Direction | undefined;
}
export declare class CircularEasing extends Easing {
    private _degree;
    private _direction;
    constructor(config?: CircularEasingConfiguration);
    get degree(): number;
    set degree(value: number);
    get direction(): Direction;
    set direction(value: Direction);
    clone(): CircularEasing;
    protected calculate(x: number): number;
}
