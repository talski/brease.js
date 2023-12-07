import type { Direction, BaseConfiguration } from "../types";
import { Easing } from "./easing";
export interface BackEasingConfiguration extends BaseConfiguration {
    overshoot?: number | undefined;
    direction?: Direction | undefined;
}
export declare class BackEasing extends Easing {
    private _overshoot;
    private _direction;
    constructor(config?: BackEasingConfiguration);
    get overshoot(): number;
    set overshoot(value: number);
    get direction(): Direction;
    set direction(value: Direction);
    clone(): BackEasing;
    protected calculate(x: number): number;
}
