export default function Iterable(value, valid) {
    let string = value.toString();
    if (valid) {
        return `value "${string}" is iterable"`;
    }
    else {
        return `value "${string}" is not iterable"`;
    }
}
//# sourceMappingURL=iterable.js.map