"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upperLimit = exports.lowerLimit = exports.limit = void 0;
function limit(value, min, max) {
    return value < min ? min : value > max ? max : value;
}
exports.limit = limit;
function lowerLimit(value, min) {
    return Math.max(value, min);
}
exports.lowerLimit = lowerLimit;
function upperLimit(value, max) {
    return Math.min(value, max);
}
exports.upperLimit = upperLimit;
