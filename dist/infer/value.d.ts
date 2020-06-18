declare type Value<Data> = Data extends Iterable<infer As> ? As : never;
export default Value;
