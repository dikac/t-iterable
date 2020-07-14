import Guard from "../boolean/iterable";
import Throwable from "./throwable/iterable";
import Function from "@dikac/t-function/function";

export default function Iterable<Enumerate>(
    value : unknown,
    error : Function<[unknown], Error> = Throwable
) : asserts value is Enumerate[keyof Enumerate] {

    if(!Guard(value)) {

        throw error(value);
    }
}


