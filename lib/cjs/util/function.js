"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
function transform(fn, direction, x) {
    if (x === 0 || x === 1)
        return x;
    if (direction === "out")
        return 1 - fn(1 - x);
    if (direction === "inOut")
        return x < 0.5 ? fn(x * 2) / 2 : 1 - fn(x * -2 + 2) / 2;
    if (direction === "outIn")
        return x < 0.5 ? (1 - fn(1 - x * 2)) / 2 : (fn(x * 2 - 1) + 1) / 2;
    return fn(x);
}
exports.transform = transform;
