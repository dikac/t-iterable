
type Infer<Data> = Data extends Iterable<infer As> ? As : never;
export default Infer;
