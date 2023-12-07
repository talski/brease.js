"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const easing_1 = require("../easing");
const library_1 = require("./library");
class Penner extends easing_1.default {
    constructor(name, ...args) {
        if (!(name in library_1.default))
            throw new Error("unknown function");
        super(library_1.default[name], ...args);
    }
}
exports.default = Penner;
