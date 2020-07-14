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
    function Iterable(value) {
        switch (value) {
            case undefined:
            case null:
                return false;
        }
        return typeof value[Symbol.iterator] === "function";
    }
    exports.default = Iterable;
});
//# sourceMappingURL=iterable.js.map