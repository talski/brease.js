"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const easing_1 = require("../easing");
const function_1 = require("./function");
const utils_1 = require("../penner/utils");
class Elastic extends easing_1.default {
    constructor(amplitude = 1, period = 0.3, direction = "in", ...args) {
        if (amplitude < 1)
            amplitude = 1;
        if (period <= 0)
            period = 0.3;
        let fn = (0, function_1.default)(amplitude, period);
        if (direction === "out")
            fn = (0, utils_1.toOut)(fn);
        else if (direction === "inOut")
            fn = (0, utils_1.toInOut)(fn);
        else if (direction === "outIn")
            fn = (0, utils_1.toOutIn)(fn);
        else if (direction !== "in")
            throw new Error("invalid direction");
        super(fn, ...args);
    }
}
exports.default = Elastic;
