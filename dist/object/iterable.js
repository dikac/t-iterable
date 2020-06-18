(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Convert iterable to object
     */
    function Iterable(iterable) {
        const object = {};
        for (const [property, value] of iterable) {
            object[property] = value;
        }
        return object;
    }
    exports.default = Iterable;
});
//# sourceMappingURL=iterable.js.map