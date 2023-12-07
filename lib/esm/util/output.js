import { limit } from "./math";
export class Output {
    constructor(from = 0, to = 1) {
        this._x1 = from;
        this._x2 = to;
    }
    get from() {
        return this._x1;
    }
    set from(value) {
        this._x1 = value;
    }
    get to() {
        return this._x2;
    }
    set to(value) {
        this._x2 = value;
    }
    get delta() {
        return this._x2 - this._x1;
    }
    set delta(value) {
        this._x2 = this._x1 + value;
    }
    get range() {
        return [this._x1, this._x2];
    }
    set range(value) {
        this._x1 = value[0];
        this._x2 = value[1];
    }
    toRelative(value) {
        value -= this._x1;
        value /= this._x2 - this._x1;
        return limit(value, 0, 1);
    }
    toAbsolute(value) {
        value *= this._x2 - this._x1;
        value += this._x1;
        return value;
    }
}
