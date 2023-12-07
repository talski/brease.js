import type { BaseConfiguration, Direction, Function } from "../types";
import { Easing } from "./easing";
export interface BasicEasingConfiguration extends BaseConfiguration {
    fn: Function;
    direction?: Direction | undefined;
}
export declare class BasicEasing extends Easing {
    private _fn;
    private _direction;
    constructor(config?: BasicEasingConfiguration);
    get fn(): Function;
    set fn(value: Function);
    get direction(): Direction;
    set direction(value: Direction);
    clone(): BasicEasing;
    protected calculate(x: number): number;
}
