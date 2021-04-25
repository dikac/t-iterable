export default function* Filter(iterable, validation) {
    for (const value of iterable) {
        if (validation(value)) {
            yield value;
        }
    }
}
//# sourceMappingURL=filter.js.map