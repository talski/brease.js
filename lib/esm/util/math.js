export function limit(value, min, max) {
    return value < min ? min : value > max ? max : value;
}
export function lowerLimit(value, min) {
    return Math.max(value, min);
}
export function upperLimit(value, max) {
    return Math.min(value, max);
}
