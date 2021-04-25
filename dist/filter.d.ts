export default function Filter<Type extends any = any>(iterable: Iterable<Type>, validation: (value: Type) => boolean): Iterable<Type>;
