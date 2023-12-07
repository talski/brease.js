"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const easing_1 = require("../easing");
const function_1 = require("./function");
const Directions = ["start", "end", "none", "both"];
class Steps extends easing_1.default {
    constructor(number, direction = "end", ...args) {
        if (Directions.indexOf(direction) === -1)
            throw new Error("unknown direction");
        super((0, function_1.default)(Math.max(Math.round(number), 1), direction), ...args);
    }
}
exports.default = Steps;
