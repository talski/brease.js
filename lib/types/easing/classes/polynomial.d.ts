import type { Direction, BaseConfiguration } from "../types";
import { Easing } from "./easing";
export interface PolynomialEasingConfiguration extends BaseConfiguration {
    degree?: number | undefined;
    direction?: Direction | undefined;
}
export declare class PolynomialEasing extends Easing {
    private _degree;
    private _direction;
    constructor(config?: PolynomialEasingConfiguration);
    get degree(): number;
    set degree(value: number);
    get direction(): Direction;
    set direction(value: Direction);
    clone(): PolynomialEasing;
    protected calculate(x: number): number;
}
