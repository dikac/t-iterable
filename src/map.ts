export default function * Map<Type, Mapped>(
    iterable: Iterable<Type>,
    mapper : (value: Type) => Mapped
) : Iterable<Mapped> {

    for(const value of iterable) {

        yield mapper(value);
    }
}
