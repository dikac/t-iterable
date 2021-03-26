export default function Find(iterable, validation, defaults) {
    for (const value of iterable) {
        if (validation(value)) {
            return value;
        }
    }
    return defaults;
}
//# sourceMappingURL=find.js.map