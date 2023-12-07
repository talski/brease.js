import back from "./function";
import Easing from "../easing";
import { toInOut, toOut, toOutIn } from "../penner/utils";
export default class Back extends Easing {
    constructor(overshoot = 1.5, direction = "in", ...args) {
        let fn = back(overshoot);
        if (direction === "out")
            fn = toOut(fn);
        else if (direction === "inOut")
            fn = toInOut(fn);
        else if (direction === "outIn")
            fn = toOutIn(fn);
        else if (direction !== "in")
            throw new Error("invalid direction");
        super(fn, ...args);
    }
}
