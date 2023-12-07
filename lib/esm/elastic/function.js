export default function elastic(a, p) {
    let s = p / (Math.PI * 2) * Math.asin(1 / a);
    return t => t === 1 || t === 0 ? t : -a * Math.pow(2, (10 * (t - 1))) * Math.sin((t - 1 - s) * (2 * Math.PI) / p);
}
