import { Time } from "../../util/time";
import { Output } from "../../util/output";
export class Easing {
    constructor(from, to, start, end) {
        this._time = new Time(start, end);
        this._output = new Output(from, to);
    }
    get time() {
        return this._time;
    }
    get output() {
        return this._output;
    }
    at(t) {
        return this._output.toAbsolute(this.calculate(this._time.toRelative(t)));
    }
    clone() {
        return new Easing(this._output.from, this._output.to, this._time.start, this._time.end);
    }
    delta(t1, t2) {
        return Math.abs(this.at(t2) - this.at(t1));
    }
    keyframes(n) {
        let final = [this.at(this._time.start)];
        for (let i = 1; i < n - 1; i++) {
            let x = this._time.start + this._time.duration / (n - 1) * i;
            final.push(this.at(x));
        }
        final.push(this.at(this._time.end));
        return final;
    }
    calculate(x) {
        return x;
    }
}
