/**
 * Convert iterable to object
 */
export default function Iterable<
    Property extends PropertyKey,
    Value extends any
>(
    iterable : globalThis.Iterable<[Property, Value]>
) : Record<Property, Value> {

    const object : Record<Property, Value> = <Record<Property, Value>>{};

    for (const [property, value] of iterable) {

        object[property] = value;
    }

    return object;
}

