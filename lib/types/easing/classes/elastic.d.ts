import type { Direction, BaseConfiguration } from "../types";
import { Easing } from "./easing";
export interface ElasticEasingConfiguration extends BaseConfiguration {
    period?: number | undefined;
    amplitude?: number | undefined;
    direction?: Direction | undefined;
}
export declare class ElasticEasing extends Easing {
    private _period;
    private _amplitude;
    private _direction;
    constructor(config?: ElasticEasingConfiguration);
    get period(): number;
    set period(value: number);
    get amplitude(): number;
    set amplitude(value: number);
    get direction(): Direction;
    set direction(value: Direction);
    clone(): ElasticEasing;
    protected calculate(x: number): number;
}
