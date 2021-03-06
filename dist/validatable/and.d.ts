import Compound from "./compound";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * And operator for {@link Validatable}
 */
export default class And<Arguments extends Iterable<Validatable>> extends Compound<Arguments> {
    get valid(): boolean;
}
