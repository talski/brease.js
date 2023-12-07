"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const time_1 = require("./time");
const output_1 = require("./output");
const library_1 = require("./library");
class Easing {
    constructor(easing = "linear", ...args) {
        let fn;
        if (typeof easing === "string") {
            if (!(easing in library_1.default))
                throw new Error("unknown easing");
            fn = library_1.default[easing];
        }
        else if (typeof easing === "function")
            fn = easing;
        else
            throw new Error("invalid easing");
        let [o1, o2, t1, t2] = args;
        this._fn = fn;
        this.time = new time_1.default(t1, t2);
        this.output = new output_1.default(o1, o2);
    }
    get fn() {
        return t => this.at(t);
    }
    /**
     * Returns the output at the specified time
     * @param t
     * @returns output
     */
    at(t) {
        let x = this.normalise((t - this.time.start) / this.time.duration), y = this._fn(x);
        return this.output.start + y * this.output.delta;
    }
    /**
     * Returns the difference of the outputs at the specified times
     * @param t1
     * @param t2
     * @returns
     */
    delta(t1, t2) {
        return this.at(t2) - this.at(t1);
    }
    /**
     * Returns an array of n keyframes
     * @param n
     */
    keyframes(n) {
        let final = [this.at(this.time.start)];
        for (let i = 1; i < n - 1; i++) {
            let x = this.time.start + this.time.duration / (n - 1) * i;
            final.push(this.at(x));
        }
        final.push(this.at(this.time.end));
        return final;
    }
    /**
     * Inverts the easing
     */
    invert() {
        let { start, end } = this.output;
        this.output.end = start;
        this.output.start = end;
    }
    /**
     * Clones the easing
     * @returns easing
     */
    clone() {
        return new Easing(this._fn, ...this.time.range, ...this.output.range);
    }
    /**
     * Normalises the specified time
     * @param t
     * @returns normalised time
     */
    normalise(t) {
        return t < 0 ? 0 : t > 1 ? 1 : t;
    }
}
exports.default = Easing;
