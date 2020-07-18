import Return from "../return/return";
import Validatable from "@dikac/t-validatable/validatable";

/**
 * base for creating compound wrapper for {@template Validatables}
 */
export default abstract class  Compound<Validatables extends Iterable<Validatable>> implements Readonly<Validatable>, Iterable<Return<Validatables>> {

    /**
     * {@param subjects} multiple {@link Validatable} to be processed by subclass
     *
     * {@param defaults} is used if {@param subjects} is empty
     */
    constructor(
        public subjects : Validatables,
        public defaults : boolean = true
    ) {

    }

    [Symbol.iterator]() : Iterator<Return<Validatables>> {

        return <Iterator<Return<Validatables>>> this.subjects[Symbol.iterator]();
    }

    abstract readonly valid: boolean;
}
