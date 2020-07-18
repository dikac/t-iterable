
type Return<Data> = Data extends Iterable<infer As> ? As : never;
export default Return;
