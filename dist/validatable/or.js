import Compound from "./compound";
import FunctionOr from "./boolean/or";
/**
 * Or operator for {@link Validatable}
 */
export default class Or extends Compound {
    get valid() {
        return FunctionOr(this.subjects, this.defaults);
    }
}
//# sourceMappingURL=or.js.map