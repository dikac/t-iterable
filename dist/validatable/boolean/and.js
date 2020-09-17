export default function And(validatables, defaults = true) {
    for (let validatable of validatables) {
        defaults = validatable.valid;
        if (!defaults) {
            return false;
        }
    }
    return defaults;
}
//# sourceMappingURL=and.js.map