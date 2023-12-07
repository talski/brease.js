"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinusodialEasing = void 0;
const easing_1 = require("./easing");
const math_1 = require("../../util/math");
const function_1 = require("../../util/function");
class SinusodialEasing extends easing_1.Easing {
    constructor(config) {
        super(config === null || config === void 0 ? void 0 : config.from, config === null || config === void 0 ? void 0 : config.to, config === null || config === void 0 ? void 0 : config.start, config === null || config === void 0 ? void 0 : config.end);
        this._degree = 1;
        this._direction = "in";
        if (config === null || config === void 0 ? void 0 : config.degree)
            this.degree = config.degree;
        if (config === null || config === void 0 ? void 0 : config.direction)
            this.direction = config.direction;
    }
    get degree() {
        return this._degree;
    }
    set degree(value) {
        this._degree = (0, math_1.lowerLimit)(value, 1);
    }
    get direction() {
        return this._direction;
    }
    set direction(value) {
        this._direction = value;
    }
    clone() {
        return new SinusodialEasing({
            degree: this._degree,
            direction: this._direction,
            from: this.output.from,
            to: this.output.to,
            start: this.time.start,
            end: this.time.end
        });
    }
    calculate(x) {
        return (0, function_1.transform)(a => 1 - Math.pow(Math.cos(a * Math.PI / 2), (1 / this._degree)), this._direction, x);
    }
}
exports.SinusodialEasing = SinusodialEasing;
