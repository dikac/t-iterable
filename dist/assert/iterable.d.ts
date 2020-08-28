export default function Iterable<Enumerate>(value: unknown, error?: (value: unknown) => Error): asserts value is Enumerate[keyof Enumerate];
