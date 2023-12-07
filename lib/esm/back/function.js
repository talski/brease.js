export default function back(overshoot) {
    return t => t === 1 || t === 0 ? t : Math.pow(t, 2) * ((overshoot + 1) * t - overshoot);
}
