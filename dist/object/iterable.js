/**
 * Convert iterable to object
 */
export default function Iterable(iterable) {
    const object = {};
    for (const [property, value] of iterable) {
        object[property] = value;
    }
    return object;
}
//# sourceMappingURL=iterable.js.map