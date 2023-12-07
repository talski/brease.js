import type { Preset } from "../../types";
import { BackEasing, BezierEasing, CircularEasing, ElasticEasing, PolynomialEasing, SinusodialEasing, StepsEasing } from "../../../easing";
export declare function parse(input: Preset | (string & {})): BackEasing | import("../../../easing").BasicEasing | BezierEasing | CircularEasing | ElasticEasing | PolynomialEasing | SinusodialEasing | StepsEasing | null;
