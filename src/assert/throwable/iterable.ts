import EnumType from "../../boolean/string/iterable";

export default function Iterable<Value>(
    value : unknown,
) : Error {

    return new Error(EnumType(value, false))
}
