"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stepsFunctionPattern = exports.sinusodialFunctionPattern = exports.polynomialFunctionPattern = exports.elasticFunctionPattern = exports.circularFunctionPattern = exports.bezierFunctionPattern = exports.backFunctionPattern = void 0;
const numberPattern = "[+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?";
const directionPattern = "in|out|in-out|out-in";
exports.backFunctionPattern = createFunctionPattern(["back"], [], [numberPattern, directionPattern]);
exports.bezierFunctionPattern = createFunctionPattern(["bezier", "cubic-bezier"], [numberPattern, numberPattern, numberPattern, numberPattern]);
exports.circularFunctionPattern = createFunctionPattern(["circular"], [], [numberPattern, directionPattern]);
exports.elasticFunctionPattern = createFunctionPattern(["elastic"], [], [numberPattern, numberPattern, directionPattern]);
exports.polynomialFunctionPattern = createFunctionPattern(["polynomial"], [], [numberPattern, directionPattern]);
exports.sinusodialFunctionPattern = createFunctionPattern(["sinusodial"], [], [numberPattern, directionPattern]);
exports.stepsFunctionPattern = createFunctionPattern(["steps"], [numberPattern], ["start|jump-start|end|jump-end|none|both"]);
function createFunctionPattern(name, required = [], optional = []) {
    let total = 0;
    // Optional
    let optionalArg = (i = 0) => {
        if (i >= optional.length)
            return "";
        return `(?:${total++ > 1 ? "," : ""}\\s*(${optional[i]})\\s*${optionalArg(i + 1)})?`;
    };
    // Source
    let source = `^(?:${name.join("|")})\\(`;
    for (let i = 0; i < required.length; i++) {
        if (total > 0)
            source += ",";
        source += `\\s*(${required[i]})\\s*`;
        total++;
    }
    return `${source}${optionalArg()}\\)$`;
}
