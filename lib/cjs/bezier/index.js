"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const easing_1 = require("../easing");
const function_1 = require("./function");
class Bezier extends easing_1.default {
    constructor(x1, y1, x2, y2, ...agrs) {
        if (!(0 <= x1 && x1 <= 1 && 0 <= x2 && x2 <= 1))
            throw new Error("invalid points");
        super((0, function_1.default)(x1, y1, x1, y2), ...agrs);
    }
}
exports.default = Bezier;
