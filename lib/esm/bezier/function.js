/**
 * https://github.com/gre/bezier-easing/blob/master/src/index.js
 */
const kSplineTableSize = 11;
const kSampleStepSize = 1 / (kSplineTableSize - 1);
let A = (a1, a2) => 1 - 3 * a2 + 3 * a1;
let B = (a1, a2) => 3 * a2 - 6 * a1;
let C = (a1) => 3 * a1;
let slope = (t, a1, a2) => 3 * A(a1, a2) * t * t + 2 * B(a1, a2) * t + C(a1);
let calculate = (t, a1, a2) => ((A(a1, a2) * t + B(a1, a2)) * t + C(a1)) * t;
function subdivide(x, a, b, x1, x2) {
    let currentX, currentT, i = 0;
    do {
        currentT = a + (b - a) / 2;
        currentX = calculate(currentT, x1, x2) - x;
        if (currentX > 0)
            b = currentT;
        else
            a = currentT;
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
    return currentT;
}
function iterate(x, g, x1, x2) {
    for (let i = 0; i < 4; ++i) {
        let currentSlope = slope(g, x1, x2);
        if (currentSlope === 0)
            return g;
        let currentX = calculate(g, x1, x2) - x;
        g -= currentX / currentSlope;
    }
    return g;
}
export default function bezier(x1, y1, x2, y2) {
    let s = new Float32Array(kSplineTableSize);
    if (x1 !== y1 || x2 !== y2) {
        for (let i = 0; i < kSplineTableSize; ++i) {
            s[i] = calculate(i * kSampleStepSize, x1, x2);
        }
    }
    let getTForX = (x) => {
        let intervalStart = 0, si = 1, sl = kSplineTableSize - 1;
        for (; si !== sl && s[si] <= x; ++si)
            intervalStart += kSampleStepSize;
        --si;
        let dist = (x - s[si]) / (s[si + 1] - s[si]), guessForT = intervalStart + dist * kSampleStepSize, initialSlope = slope(guessForT, x1, x2);
        if (initialSlope >= 0.001)
            return iterate(x, guessForT, x1, x2);
        if (initialSlope === 0.0)
            return guessForT;
        return subdivide(x, intervalStart, intervalStart + kSampleStepSize, x1, x2);
    };
    return x => {
        if (x1 === y1 && x2 === y2)
            return x;
        if (x === 0 || x === 1)
            return x;
        return calculate(getTForX(x), y1, y2);
    };
}
