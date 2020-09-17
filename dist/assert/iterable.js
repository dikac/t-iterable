import Guard from "../boolean/iterable";
import Throwable from "./throwable/iterable";
export default function Iterable(value, error = Throwable) {
    if (!Guard(value)) {
        throw error(value);
    }
}
//# sourceMappingURL=iterable.js.map