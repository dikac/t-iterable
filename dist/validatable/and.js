import Compound from "./compound";
import FunctionAnd from "./boolean/and";
/**
 * And operator for {@link Validatable}
 */
export default class And extends Compound {
    get valid() {
        return FunctionAnd(this.subjects, this.defaults);
    }
}
//# sourceMappingURL=and.js.map