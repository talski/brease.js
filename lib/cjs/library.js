"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./steps/function");
const function_2 = require("./bezier/function");
const library_1 = require("./penner/library");
let libary = {
    linear: t => t,
    ease: (0, function_2.default)(0.25, 0.1, 0.25, 1.0),
    easeIn: (0, function_2.default)(0.42, 0.0, 1.0, 1.0),
    easeOut: (0, function_2.default)(0.0, 0.0, 0.58, 1.0),
    easeInOut: (0, function_2.default)(0.42, 0.0, 0.58, 1.0),
    stepEnd: (0, function_1.default)(1, "end"),
    stepStart: (0, function_1.default)(1, "start")
};
for (let name in library_1.default)
    libary["ease" + name[0].toUpperCase() + name.slice(1)] = library_1.default[name];
exports.default = libary;
