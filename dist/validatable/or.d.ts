import Compound from "./compound";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * Or operator for {@link Validatable}
 */
export default class Or<Arguments extends Iterable<Validatable>> extends Compound<Arguments> {
    get valid(): boolean;
}
