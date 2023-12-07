import type { Classes } from "./classes";
import type { presets } from "../presets";
import type { Easing, EasingFunction } from "../../easing";
export declare type Type = keyof Classes;
export declare type Preset = keyof typeof presets;
export declare type Input = Configuration | EasingFunction | Easing | Preset;
export declare type Configuration = {
    [T in Type]: {
        type: T;
    } & Classes[T]["config"];
}[Type];
