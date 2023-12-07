"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./function");
const easing_1 = require("../easing");
const utils_1 = require("../penner/utils");
class Back extends easing_1.default {
    constructor(overshoot = 1.5, direction = "in", ...args) {
        let fn = (0, function_1.default)(overshoot);
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
exports.default = Back;
