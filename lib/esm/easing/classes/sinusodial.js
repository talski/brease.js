import { Easing } from "./easing";
import { lowerLimit } from "../../util/math";
import { transform } from "../../util/function";
export class SinusodialEasing extends Easing {
    constructor(config) {
        super(config === null || config === void 0 ? void 0 : config.from, config === null || config === void 0 ? void 0 : config.to, config === null || config === void 0 ? void 0 : config.start, config === null || config === void 0 ? void 0 : config.end);
        this._degree = 1;
        this._direction = "in";
        if (config === null || config === void 0 ? void 0 : config.degree)
            this.degree = config.degree;
        if (config === null || config === void 0 ? void 0 : config.direction)
            this.direction = config.direction;
    }
    get degree() {
        return this._degree;
    }
    set degree(value) {
        this._degree = lowerLimit(value, 1);
    }
    get direction() {
        return this._direction;
    }
    set direction(value) {
        this._direction = value;
    }
    clone() {
        return new SinusodialEasing({
            degree: this._degree,
            direction: this._direction,
            from: this.output.from,
            to: this.output.to,
            start: this.time.start,
            end: this.time.end
        });
    }
    calculate(x) {
        return transform(a => 1 - Math.pow(Math.cos(a * Math.PI / 2), (1 / this._degree)), this._direction, x);
    }
}
