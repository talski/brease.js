import { limit } from "../util/math";
export class Time {
    constructor(start = 0, end = 1) {
        this._t1 = start;
        this._t2 = end;
    }
    get start() {
        return this._t1;
    }
    set start(value) {
        this._t1 = value;
    }
    get end() {
        return this._t2;
    }
    set end(value) {
        this._t2 = value;
    }
    get duration() {
        return this._t2 - this._t1;
    }
    set duration(value) {
        this._t2 = this._t1 + value;
    }
    get range() {
        return [this._t1, this._t2];
    }
    set range(value) {
        this._t1 = value[0];
        this._t2 = value[1];
    }
    toRelative(value) {
        value -= this._t1;
        value /= this._t2 - this._t1;
        return limit(value, 0, 1);
    }
    toAbsolute(value) {
        value *= this._t2 - this._t1;
        value += this._t1;
        return limit(value, this._t1, this._t2);
    }
}
