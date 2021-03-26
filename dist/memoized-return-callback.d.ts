export default class MemoizedReturnCallback<Type extends any = any> implements Iterable<Type> {
    private returns;
    private sources;
    constructor(sources?: ReadonlyArray<() => Type>);
    [Symbol.iterator](): Iterator<Type>;
}
