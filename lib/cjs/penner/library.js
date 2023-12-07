"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("../elastic/function");
const utils_1 = require("./utils");
const function_2 = require("../back/function");
let baseBack = (0, function_2.default)(1.70158), baseBackDouble = (0, function_2.default)(2.5949095);
let baseElastic = (0, function_1.default)(1, 0.3), baseElasticDouble = (0, function_1.default)(1, 0.45);
let base = {
    Quad: t => Math.pow(t, 2),
    Cubic: t => Math.pow(t, 3),
    Quart: t => Math.pow(t, 4),
    Quint: t => Math.pow(t, 5),
    Expo: t => t === 0 ? 0 : Math.pow(2, (10 * t - 10)),
    Sine: t => 1 - Math.cos(t * Math.PI / 2),
    Circ: t => 1 - Math.sqrt(1 - Math.pow(t, 2))
};
let library = {};
for (let n of utils_1.names) {
    for (let d of utils_1.directions) {
        let b;
        if (n === "Back")
            b = d === "in" || d === "out" ? baseBack : baseBackDouble;
        else if (n === "Elastic")
            b = d === "in" || d === "out" ? baseElastic : baseElasticDouble;
        else
            b = base[n];
        let fn = b;
        if (d === "out")
            fn = (0, utils_1.toOut)(b);
        if (d === "inOut")
            fn = (0, utils_1.toInOut)(b);
        if (d === "outIn")
            fn = (0, utils_1.toOutIn)(b);
        library[d + n] = fn;
    }
}
exports.default = library;
