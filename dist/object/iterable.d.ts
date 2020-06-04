export default function Iterable<Property extends string | symbol | number, Value extends any>(iterable: globalThis.Iterable<[Property, Value]>): Record<Property, Value>;
