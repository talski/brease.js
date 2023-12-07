/**
 * Based on:
 * https://github.com/gre/bezier-easing/blob/master/src/index.js
 * by Gaëtan Renaudeau
 */
import type { BaseConfiguration } from "../types";
import { Easing } from "./easing";
export interface BezierEasingConfiguration extends BaseConfiguration {
    x1?: number | undefined;
    y1?: number | undefined;
    x2?: number | undefined;
    y2?: number | undefined;
}
export declare class BezierEasing extends Easing {
    private _x1;
    private _y1;
    private _x2;
    private _y2;
    private _newtonSlope;
    private _newtonIterations;
    private _sample;
    private _sampleSize;
    private _sampleCoords;
    private _subdivisionStep;
    private _subdivisionPrecision;
    private _subdivisionIterations;
    constructor(config?: BezierEasingConfiguration);
    get x1(): number;
    set x1(value: number);
    get y1(): number;
    set y1(value: number);
    get x2(): number;
    set x2(value: number);
    get y2(): number;
    set y2(value: number);
    clone(): BezierEasing;
    private bezier;
    private tangent;
    private sample;
    private subdivide;
    private iterate;
    protected calculate(x: number): number;
}
