export default function Find<Type extends any, Default extends Type | null>(iterable: Iterable<Type>, validation: (block: Type) => boolean, defaults: Default): Type | Default;
