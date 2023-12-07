"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicEasing = void 0;
const function_1 = require("../../util/function");
const easing_1 = require("./easing");
;
class BasicEasing extends easing_1.Easing {
    constructor(config) {
        super(config === null || config === void 0 ? void 0 : config.from, config === null || config === void 0 ? void 0 : config.to, config === null || config === void 0 ? void 0 : config.start, config === null || config === void 0 ? void 0 : config.end);
        this._fn = x => x;
        this._direction = "in";
        if (config === null || config === void 0 ? void 0 : config.fn)
            this._fn = config.fn;
        if (config === null || config === void 0 ? void 0 : config.direction)
            this.direction = config.direction;
    }
    get fn() {
        return this._fn;
    }
    set fn(value) {
        this._fn = value;
    }
    get direction() {
        return this._direction;
    }
    set direction(value) {
        this._direction = value;
    }
    clone() {
        return new BasicEasing({
            fn: this._fn,
            direction: this._direction,
            from: this.output.from,
            to: this.output.to,
            start: this.time.start,
            end: this.time.end
        });
    }
    calculate(x) {
        return (0, function_1.transform)(this._fn, this._direction, x);
    }
}
exports.BasicEasing = BasicEasing;
