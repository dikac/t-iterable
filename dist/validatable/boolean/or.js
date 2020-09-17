export default function Or(validatables, defaults = true) {
    for (let validatable of validatables) {
        defaults = validatable.valid;
        if (defaults) {
            return true;
        }
    }
    return defaults;
}
//# sourceMappingURL=or.js.map