
export default function Last<
    Type extends any,
    Default extends Type|null
>(
    iterable : Iterable<Type>,
    defaults : Default
) : Type|Default {

    let result : Type|Default = defaults;

    for (const value of iterable) {

        result = value;
    }

    return result;
}
