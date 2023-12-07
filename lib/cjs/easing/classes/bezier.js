"use strict";
/**
 * Based on:
 * https://github.com/gre/bezier-easing/blob/master/src/index.js
 * by Gaëtan Renaudeau
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BezierEasing = void 0;
const easing_1 = require("./easing");
const math_1 = require("../../util/math");
const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
const b = (a1, a2) => 3 * a2 - 6 * a1;
const c = (a1) => 3 * a1;
class BezierEasing extends easing_1.Easing {
    constructor(config) {
        super(config === null || config === void 0 ? void 0 : config.from, config === null || config === void 0 ? void 0 : config.to, config === null || config === void 0 ? void 0 : config.start, config === null || config === void 0 ? void 0 : config.end);
        this._x1 = 0;
        this._y1 = 0;
        this._x2 = 1;
        this._y2 = 1;
        this._newtonSlope = 0.001;
        this._newtonIterations = 4;
        this._sampleSize = 11;
        this._subdivisionStep = 1 / (this._sampleSize - 1);
        this._subdivisionPrecision = 0.0000001;
        this._subdivisionIterations = 10;
        if (config === null || config === void 0 ? void 0 : config.x1)
            this.x1 = config.x1;
        if (config === null || config === void 0 ? void 0 : config.y1)
            this.y1 = config.y1;
        if (config === null || config === void 0 ? void 0 : config.x2)
            this.x2 = config.x2;
        if (config === null || config === void 0 ? void 0 : config.y2)
            this.y2 = config.y2;
        this.sample();
    }
    get x1() {
        return this._x1;
    }
    set x1(value) {
        this._x1 = (0, math_1.limit)(value, 0, 1);
    }
    get y1() {
        return this._y1;
    }
    set y1(value) {
        this._y1 = value;
    }
    get x2() {
        return this._x2;
    }
    set x2(value) {
        this._x2 = (0, math_1.limit)(value, 0, 1);
    }
    get y2() {
        return this._y2;
    }
    set y2(value) {
        this._y2 = value;
    }
    clone() {
        return new BezierEasing({
            x1: this._x1,
            y1: this._y1,
            x2: this._x2,
            y2: this._y2,
            from: this.output.from,
            to: this.output.to,
            start: this.time.start,
            end: this.time.end
        });
    }
    bezier(u, a1, a2) {
        return ((a(a1, a2) * u + b(a1, a2)) * u + c(a1)) * u;
    }
    tangent(u, a1, a2) {
        return 3 * a(a1, a2) * Math.pow(u, 2) + 2 * b(a1, a2) * u + c(a1);
    }
    sample() {
        this._sample = new Float32Array(this._sampleSize);
        this._sampleCoords = [this._x1, this._x2];
        for (let i = 0; i < this._sampleSize; i++) {
            this._sample[i] = this.bezier(i * this._subdivisionStep, this._x1, this._x2);
        }
    }
    subdivide(x, start, end, a1, a2) {
        let u, m, i = 0;
        do {
            console.log(start, end);
            i++;
            m = start + (end - start) / 2;
            u = this.bezier(m, a1, a2) - x;
            if (u > 0)
                end = m;
            else
                start = m;
        } while (Math.abs(u) > this._subdivisionPrecision && i < this._subdivisionIterations);
        return m;
    }
    iterate(x, u, a1, a2) {
        for (let i = 0; i < this._newtonIterations; i++) {
            let t = this.tangent(u, a1, a2);
            if (t === 0)
                return u;
            let y = this.bezier(u, a1, a2) - x;
            u -= y / t;
        }
        return u;
    }
    calculate(x) {
        if (x === 0 || x === 1)
            return x;
        if (this._x1 === this._y1 && this._x2 === this._y2)
            return x;
        if (this._x1 !== this._sampleCoords[0] || this._x2 !== this._sampleCoords[1])
            this.sample();
        let i = 0, start = 0;
        while (i++ < this._sampleSize - 1 && this._sample[i] <= x)
            start += this._subdivisionStep;
        let dist = (x - this._sample[i - 1]) / (this._sample[i] - this._sample[i - 1]), u = start + dist * this._subdivisionStep, t = this.tangent(u, this._x1, this._x2);
        if (t >= this._newtonSlope)
            u = this.iterate(x, u, this._x1, this._x2);
        else if (t !== 0)
            u = this.subdivide(x, start, start + this._subdivisionStep, this._x1, this._x2);
        return this.bezier(u, this._y1, this._y2);
    }
}
exports.BezierEasing = BezierEasing;
