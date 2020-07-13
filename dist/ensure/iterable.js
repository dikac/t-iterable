(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/iterable", "../assert/throwable/iterable"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const iterable_1 = require("../assert/iterable");
    const iterable_2 = require("../assert/throwable/iterable");
    function Iterable(value, error = iterable_2.default) {
        iterable_1.default(value, error);
        return value;
    }
    exports.default = Iterable;
});
//# sourceMappingURL=iterable.js.map