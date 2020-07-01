/**
 * Convert iterable to object
 */
export default function Iterable<Property extends PropertyKey, Value extends any>(iterable: globalThis.Iterable<[Property, Value]>): Record<Property, Value>;
