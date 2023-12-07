"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function steps(n, d) {
    if (d === "start")
        return t => t === 1 || t === 0 ? t : Math.ceil(t * n) / n;
    if (d === "end")
        return t => t === 1 || t === 0 ? t : Math.floor(t * n) / n;
    if (d === "both")
        return t => t === 1 || t === 0 ? t : Math.floor(t * n + 1) / (n + 1);
    return t => t === 1 || t === 0 ? t : Math.floor(t * n) / (n - 1);
}
exports.default = steps;
