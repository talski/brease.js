"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepsEasing = void 0;
const easing_1 = require("./easing");
const math_1 = require("../../util/math");
class StepsEasing extends easing_1.Easing {
    constructor(config) {
        super(config === null || config === void 0 ? void 0 : config.from, config === null || config === void 0 ? void 0 : config.to, config === null || config === void 0 ? void 0 : config.start, config === null || config === void 0 ? void 0 : config.end);
        this._steps = 1;
        this._continuity = "end";
        if (config === null || config === void 0 ? void 0 : config.steps)
            this.steps = config.steps;
        if (config === null || config === void 0 ? void 0 : config.continuity)
            this.continuity = config.continuity;
    }
    get steps() {
        return this._steps;
    }
    set steps(value) {
        this._steps = (0, math_1.lowerLimit)(Math.round(value), 1);
    }
    get continuity() {
        return this._continuity;
    }
    set continuity(value) {
        this._continuity = value;
    }
    clone() {
        return new StepsEasing({
            steps: this._steps,
            continuity: this._continuity,
            from: this.output.from,
            to: this.output.to,
            start: this.time.start,
            end: this.time.end
        });
    }
    calculate(x) {
        if (x === 0 || x === 1)
            return x;
        if (this._continuity === "start")
            return Math.ceil(x * this._steps) / this._steps;
        if (this._continuity === "end")
            return Math.floor(x * this._steps) / this._steps;
        if (this._continuity === "both")
            return Math.floor(x * this._steps + 1) / (this._steps + 1);
        return Math.floor(x * this._steps) / (this._steps - 1);
    }
}
exports.StepsEasing = StepsEasing;
