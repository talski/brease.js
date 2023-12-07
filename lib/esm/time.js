export default class Time {
    constructor(start = 0, end = 1) {
        this._end = end;
        this._start = start;
    }
    get start() {
        return this._start;
    }
    set start(value) {
        this._start = value;
    }
    get end() {
        return this._end;
    }
    set end(value) {
        this._end = value;
    }
    get duration() {
        return this._end - this._start;
    }
    set duration(value) {
        this._end = this._start + value;
    }
    get range() {
        return [this._start, this._end];
    }
    set range(value) {
        this._end = value[1];
        this._start = value[0];
    }
}
