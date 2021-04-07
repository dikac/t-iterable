export default function Last(iterable, defaults) {
    let result = defaults;
    for (const value of iterable) {
        result = value;
    }
    return result;
}
//# sourceMappingURL=last.js.map