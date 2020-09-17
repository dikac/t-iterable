/**
 * base for creating compound wrapper for {@template Validatables}
 */
export default class Compound {
    /**
     * {@param subjects} multiple {@link Validatable} to be processed by subclass
     *
     * {@param defaults} is used if {@param subjects} is empty
     */
    constructor(subjects, defaults = true) {
        this.subjects = subjects;
        this.defaults = defaults;
    }
    [Symbol.iterator]() {
        return this.subjects[Symbol.iterator]();
    }
}
//# sourceMappingURL=compound.js.map