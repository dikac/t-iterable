export default function Iterable(value) {
    switch (value) {
        case undefined:
        case null:
            return false;
    }
    return typeof value[Symbol.iterator] === "function";
}
//# sourceMappingURL=iterable.js.map