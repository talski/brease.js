"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const presets_1 = require("../presets");
const easing_1 = require("../../easing");
function create(input) {
    if (input instanceof easing_1.Easing)
        return input.clone();
    if (typeof input in presets_1.presets)
        return presets_1.presets[input].clone();
    if (typeof input === "function")
        return new easing_1.BasicEasing({ fn: input });
    if (typeof input === "object") {
        if (input.type === "back")
            return new easing_1.BackEasing(input);
        if (input.type === "basic")
            return new easing_1.BasicEasing(input);
        if (input.type === "bezier")
            return new easing_1.BezierEasing(input);
        if (input.type === "circular")
            return new easing_1.CircularEasing(input);
        if (input.type === "elastic")
            return new easing_1.ElasticEasing(input);
        if (input.type === "polynomial")
            return new easing_1.PolynomialEasing(input);
        if (input.type === "sinusodial")
            return new easing_1.SinusodialEasing(input);
        if (input.type === "steps")
            return new easing_1.StepsEasing(input);
    }
    return presets_1.presets["linear"].clone();
}
exports.create = create;
