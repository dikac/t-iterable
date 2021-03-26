export default class MemoizedReturnCallback {
    constructor(sources = []) {
        this.returns = [];
        this.sources = [];
        this.sources = [...sources];
    }
    *[Symbol.iterator]() {
        yield* this.returns;
        while (this.sources.length) {
            const resolve = this.sources.shift()();
            this.returns.push(resolve);
            yield resolve;
        }
    }
}
//# sourceMappingURL=memoized-return-callback.js.map