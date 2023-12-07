"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElasticEasing = void 0;
const easing_1 = require("./easing");
const math_1 = require("../../util/math");
const function_1 = require("../../util/function");
class ElasticEasing extends easing_1.Easing {
    constructor(config) {
        super(config === null || config === void 0 ? void 0 : config.from, config === null || config === void 0 ? void 0 : config.to, config === null || config === void 0 ? void 0 : config.start, config === null || config === void 0 ? void 0 : config.end);
        this._period = 0.3;
        this._amplitude = 1;
        this._direction = "in";
        if (config === null || config === void 0 ? void 0 : config.period)
            this.period = config.period;
        if (config === null || config === void 0 ? void 0 : config.amplitude)
            this.amplitude = config.amplitude;
        if (config === null || config === void 0 ? void 0 : config.direction)
            this.direction = config.direction;
    }
    get period() {
        return this._period;
    }
    set period(value) {
        this._period = (0, math_1.lowerLimit)(value, 0.1);
    }
    get amplitude() {
        return this._amplitude;
    }
    set amplitude(value) {
        this._amplitude = (0, math_1.lowerLimit)(value, 1);
    }
    get direction() {
        return this._direction;
    }
    set direction(value) {
        this._direction = value;
    }
    clone() {
        return new ElasticEasing({
            period: this._period,
            amplitude: this._amplitude,
            direction: this._direction,
            from: this.output.from,
            to: this.output.to,
            start: this.time.start,
            end: this.time.end
        });
    }
    calculate(x) {
        return (0, function_1.transform)(a => {
            let s = this._period / (Math.PI * 2) * Math.asin(1 / this._amplitude);
            return -this._amplitude * Math.pow(2, (10 * (a - 1))) * Math.sin((a - 1 - s) * (2 * Math.PI) / this._period);
        }, this._direction, x);
    }
}
exports.ElasticEasing = ElasticEasing;
