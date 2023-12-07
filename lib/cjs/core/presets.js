"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.presets = void 0;
const easing_1 = require("../easing");
exports.presets = {
    ease: new easing_1.BezierEasing({ x1: 0.25, y1: 0.1, x2: 0.25, y2: 1.0 }),
    linear: new easing_1.BasicEasing({ fn: x => x }),
    stepEnd: new easing_1.StepsEasing({ steps: 1, continuity: "end" }),
    stepStart: new easing_1.StepsEasing({ steps: 1, continuity: "start" }),
    // Ease in
    easeIn: new easing_1.BezierEasing({ x1: 0.42, y1: 0.0, x2: 1.0, y2: 1.0 }),
    easeInQuad: new easing_1.PolynomialEasing({ degree: 2, direction: "in" }),
    easeInCubic: new easing_1.PolynomialEasing({ degree: 3, direction: "in" }),
    easeInQuart: new easing_1.PolynomialEasing({ degree: 4, direction: "in" }),
    easeInQuint: new easing_1.PolynomialEasing({ degree: 5, direction: "in" }),
    easeInExpo: new easing_1.BasicEasing({ fn: x => Math.pow(2, (10 * x - 10)), direction: "in" }),
    easeInSine: new easing_1.SinusodialEasing({ degree: 1, direction: "in" }),
    easeInCirc: new easing_1.CircularEasing({ degree: 2, direction: "in" }),
    easeInBack: new easing_1.BackEasing({ overshoot: 1.70158, direction: "in" }),
    easeInElastic: new easing_1.ElasticEasing({ amplitude: 1, period: 0.3, direction: "in" }),
    // Ease out
    easeOut: new easing_1.BezierEasing({ x1: 0.0, y1: 0.0, x2: 0.58, y2: 1.0 }),
    easeOutQuad: new easing_1.PolynomialEasing({ degree: 2, direction: "out" }),
    easeOutCubic: new easing_1.PolynomialEasing({ degree: 3, direction: "out" }),
    easeOutQuart: new easing_1.PolynomialEasing({ degree: 4, direction: "out" }),
    easeOutQuint: new easing_1.PolynomialEasing({ degree: 5, direction: "out" }),
    easeOutExpo: new easing_1.BasicEasing({ fn: x => Math.pow(2, (10 * x - 10)), direction: "out" }),
    easeOutSine: new easing_1.SinusodialEasing({ degree: 1, direction: "out" }),
    easeOutCirc: new easing_1.CircularEasing({ degree: 2, direction: "out" }),
    easeOutBack: new easing_1.BackEasing({ overshoot: 1.70158, direction: "out" }),
    easeOutElastic: new easing_1.ElasticEasing({ amplitude: 1, period: 0.3, direction: "out" }),
    // Ease in-out
    easeInOut: new easing_1.BezierEasing({ x1: 0.42, y1: 0.0, x2: 0.58, y2: 1.0 }),
    easeInOutQuad: new easing_1.PolynomialEasing({ degree: 2, direction: "inOut" }),
    easeInOutCubic: new easing_1.PolynomialEasing({ degree: 3, direction: "inOut" }),
    easeInOutQuart: new easing_1.PolynomialEasing({ degree: 4, direction: "inOut" }),
    easeInOutQuint: new easing_1.PolynomialEasing({ degree: 5, direction: "inOut" }),
    easeInOutExpo: new easing_1.BasicEasing({ fn: x => Math.pow(2, (10 * x - 10)), direction: "inOut" }),
    easeInOutSine: new easing_1.SinusodialEasing({ degree: 1, direction: "inOut" }),
    easeInOutCirc: new easing_1.CircularEasing({ degree: 2, direction: "inOut" }),
    easeInOutBack: new easing_1.BackEasing({ overshoot: 2.5949095, direction: "inOut" }),
    easeInOutElastic: new easing_1.ElasticEasing({ amplitude: 1, period: 0.45, direction: "inOut" }),
    // Ease out-in
    easeOutInQuad: new easing_1.PolynomialEasing({ degree: 2, direction: "outIn" }),
    easeOutInCubic: new easing_1.PolynomialEasing({ degree: 3, direction: "outIn" }),
    easeOutInQuart: new easing_1.PolynomialEasing({ degree: 4, direction: "outIn" }),
    easeOutInQuint: new easing_1.PolynomialEasing({ degree: 5, direction: "outIn" }),
    easeOutInExpo: new easing_1.BasicEasing({ fn: x => Math.pow(2, (10 * x - 10)), direction: "outIn" }),
    easeOutInSine: new easing_1.SinusodialEasing({ degree: 1, direction: "outIn" }),
    easeOutInCirc: new easing_1.CircularEasing({ degree: 2, direction: "outIn" }),
    easeOutInBack: new easing_1.BackEasing({ overshoot: 2.5949095, direction: "outIn" }),
    easeOutInElastic: new easing_1.ElasticEasing({ amplitude: 1, period: 0.45, direction: "outIn" })
};
