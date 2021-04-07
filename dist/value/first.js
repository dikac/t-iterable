export default function First(iterable, defaults) {
    return iterable[Symbol.iterator]().next().value || defaults;
}
//# sourceMappingURL=first.js.map