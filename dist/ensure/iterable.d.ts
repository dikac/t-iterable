import Function from "@dikac/t-function/function";
export default function Iterable<Enumerate>(value: unknown, error?: Function<[unknown], Error>): Enumerate[keyof Enumerate];
