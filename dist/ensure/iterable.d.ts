export default function Iterable<Enumerate>(value: unknown, error?: (value: unknown) => Error): Enumerate[keyof Enumerate];
