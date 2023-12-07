"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toOutIn = exports.toInOut = exports.toOut = exports.directions = exports.names = void 0;
// Name 
exports.names = ["Quad", "Cubic", "Quart", "Quint", "Expo", "Sine", "Circ", "Back", "Elastic"];
// Direction 
exports.directions = ["in", "out", "inOut", "outIn"];
// Transform 
function toOut(fn) {
    return t => 1 - fn(1 - t);
}
exports.toOut = toOut;
function toInOut(fn) {
    return t => t < 0.5 ? fn(t * 2) / 2 : 1 - fn(t * -2 + 2) / 2;
}
exports.toInOut = toInOut;
function toOutIn(fn) {
    return t => t < 0.5 ? (1 - fn(1 - t * 2)) / 2 : (fn(t * 2 - 1) + 1) / 2;
}
exports.toOutIn = toOutIn;
