"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackEasing = void 0;
const easing_1 = require("./easing");
const math_1 = require("../../util/math");
const function_1 = require("../../util/function");
class BackEasing extends easing_1.Easing {
    constructor(config) {
        super(config === null || config === void 0 ? void 0 : config.from, config === null || config === void 0 ? void 0 : config.to, config === null || config === void 0 ? void 0 : config.start, config === null || config === void 0 ? void 0 : config.end);
        this._overshoot = 1.5;
        this._direction = "in";
        if (config === null || config === void 0 ? void 0 : config.overshoot)
            this.overshoot = config.overshoot;
        if (config === null || config === void 0 ? void 0 : config.direction)
            this.direction = config.direction;
    }
    get overshoot() {
        return this._overshoot;
    }
    set overshoot(value) {
        this._overshoot = (0, math_1.lowerLimit)(value, 1);
    }
    get direction() {
        return this._direction;
    }
    set direction(value) {
        this._direction = value;
    }
    clone() {
        return new BackEasing({
            overshoot: this._overshoot,
            direction: this._direction,
            from: this.output.from,
            to: this.output.to,
            start: this.time.start,
            end: this.time.end
        });
    }
    calculate(x) {
        return (0, function_1.transform)(a => Math.pow(a, 2) * ((this._overshoot + 1) * a - this._overshoot), this._direction, x);
    }
}
exports.BackEasing = BackEasing;
