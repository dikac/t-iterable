export declare type Infer<Data> = Data extends Iterable<infer As> ? As : never;
