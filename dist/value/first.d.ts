export default function First<Type extends any, Default extends Type | null>(iterable: Iterable<Type>, defaults: Default): Type | Default;
