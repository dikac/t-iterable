
export default function First<
    Type extends any,
    Default extends Type|null
>(
    iterable : Iterable<Type>,
    defaults : Default
) : Type|Default {

    return iterable[Symbol.iterator]().next().value || defaults;
}
