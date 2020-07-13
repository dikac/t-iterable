(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/iterable"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const iterable_1 = require("../string/iterable");
    function Iterable(value) {
        return new Error(iterable_1.default(value, false));
    }
    exports.default = Iterable;
});
//# sourceMappingURL=iterable.js.map