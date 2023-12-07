// Name 
export const names = ["Quad", "Cubic", "Quart", "Quint", "Expo", "Sine", "Circ", "Back", "Elastic"];
// Direction 
export const directions = ["in", "out", "inOut", "outIn"];
// Transform 
export function toOut(fn) {
    return t => 1 - fn(1 - t);
}
export function toInOut(fn) {
    return t => t < 0.5 ? fn(t * 2) / 2 : 1 - fn(t * -2 + 2) / 2;
}
export function toOutIn(fn) {
    return t => t < 0.5 ? (1 - fn(1 - t * 2)) / 2 : (fn(t * 2 - 1) + 1) / 2;
}
