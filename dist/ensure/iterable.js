import Assert from "../assert/iterable";
import Throwable from "../assert/throwable/iterable";
export default function Iterable(value, error = Throwable) {
    Assert(value, error);
    return value;
}
//# sourceMappingURL=iterable.js.map