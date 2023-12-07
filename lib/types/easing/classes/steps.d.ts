import type { BaseConfiguration } from "../types";
import { Easing } from "./easing";
export declare type StepsEasingContinuity = "start" | "end" | "none" | "both";
export interface StepsEasingConfiguration extends BaseConfiguration {
    steps?: number | undefined;
    continuity?: StepsEasingContinuity | undefined;
}
export declare class StepsEasing extends Easing {
    private _steps;
    private _continuity;
    constructor(config?: StepsEasingConfiguration);
    get steps(): number;
    set steps(value: number);
    get continuity(): StepsEasingContinuity;
    set continuity(value: StepsEasingContinuity);
    clone(): StepsEasing;
    protected calculate(x: number): number;
}
