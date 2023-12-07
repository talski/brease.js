import { presets } from "../../presets";
import { BackEasing, BezierEasing, CircularEasing, ElasticEasing, PolynomialEasing, SinusodialEasing, StepsEasing } from "../../../easing";
import { backFunctionPattern, bezierFunctionPattern, circularFunctionPattern, elasticFunctionPattern, polynomialFunctionPattern, sinusodialFunctionPattern, stepsFunctionPattern } from "./constants";
export function parse(input) {
    input = input.trim();
    if (input in presets)
        return presets[input].clone();
    let state = { input };
    return (parseBack(state) ||
        parseBezier(state) ||
        parseCircular(state) ||
        parseElastic(state) ||
        parsePolynomial(state) ||
        parseSinusodial(state) ||
        parseSteps(state) ||
        null);
}
function praseArguments(state, pattern) {
    var _a, _b;
    return (_b = (_a = state.input.match(pattern)) === null || _a === void 0 ? void 0 : _a.slice(1)) !== null && _b !== void 0 ? _b : null;
}
function parseBack(state) {
    let args = praseArguments(state, backFunctionPattern);
    if (!args)
        return null;
    let config = {};
    if (args[0])
        config.overshoot = parseFloat(args[0]);
    if (args[1])
        config.direction = args[1];
    return new BackEasing(config);
}
function parseBezier(state) {
    let args = praseArguments(state, bezierFunctionPattern);
    if (!args)
        return null;
    return new BezierEasing({
        x1: parseFloat(args[0]),
        y1: parseFloat(args[1]),
        x2: parseFloat(args[2]),
        y2: parseFloat(args[3])
    });
}
function parseCircular(state) {
    let args = praseArguments(state, circularFunctionPattern);
    if (!args)
        return null;
    let config = {};
    if (args[0])
        config.degree = parseFloat(args[0]);
    if (args[1])
        config.direction = args[1];
    return new CircularEasing(config);
}
function parseElastic(state) {
    let args = praseArguments(state, elasticFunctionPattern);
    if (!args)
        return null;
    let config = {};
    if (args[0])
        config.amplitude = parseFloat(args[0]);
    if (args[1])
        config.period = parseFloat(args[1]);
    if (args[2])
        config.direction = args[2];
    return new ElasticEasing(config);
}
function parsePolynomial(state) {
    let args = praseArguments(state, polynomialFunctionPattern);
    if (!args)
        return null;
    let config = {};
    if (args[0])
        config.degree = parseFloat(args[0]);
    if (args[1])
        config.direction = args[1];
    return new PolynomialEasing(config);
}
function parseSinusodial(state) {
    let args = praseArguments(state, sinusodialFunctionPattern);
    if (!args)
        return null;
    let config = {};
    if (args[0])
        config.degree = parseFloat(args[0]);
    if (args[1])
        config.direction = args[1];
    return new SinusodialEasing(config);
}
function parseSteps(state) {
    let args = praseArguments(state, stepsFunctionPattern);
    if (!args)
        return null;
    let config = { steps: parseFloat(args[0]) }, continuity = args[1];
    if (continuity) {
        if (continuity === "jump-start")
            config.continuity = "start";
        else if (continuity === "jump-end")
            config.continuity = "end";
        else
            config.continuity = continuity;
    }
    return new StepsEasing(config);
}
