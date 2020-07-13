import Assert from "../assert/iterable";
import Throwable from "../assert/throwable/iterable";
import Function from "@dikac/t-function/function";

export default function Iterable<Enumerate>(
    value : unknown,
    error : Function<[unknown], Error> = Throwable
) :  Enumerate[keyof Enumerate] {

    Assert(value, error);
    return value;
}


