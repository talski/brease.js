import { presets } from "../presets";
import { BackEasing, BasicEasing, BezierEasing, CircularEasing, Easing, ElasticEasing, PolynomialEasing, SinusodialEasing, StepsEasing } from "../../easing";
export function create(input) {
    if (input instanceof Easing)
        return input.clone();
    if (typeof input in presets)
        return presets[input].clone();
    if (typeof input === "function")
        return new BasicEasing({ fn: input });
    if (typeof input === "object") {
        if (input.type === "back")
            return new BackEasing(input);
        if (input.type === "basic")
            return new BasicEasing(input);
        if (input.type === "bezier")
            return new BezierEasing(input);
        if (input.type === "circular")
            return new CircularEasing(input);
        if (input.type === "elastic")
            return new ElasticEasing(input);
        if (input.type === "polynomial")
            return new PolynomialEasing(input);
        if (input.type === "sinusodial")
            return new SinusodialEasing(input);
        if (input.type === "steps")
            return new StepsEasing(input);
    }
    return presets["linear"].clone();
}
