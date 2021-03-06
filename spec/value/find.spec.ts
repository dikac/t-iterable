import MemoizedReturnCallback from "../../dist/memoized-return-callback";
import Find from "../../dist/value/find";


it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('subjects', function () {

    let first = 0;
    let second = 0;

    let subjects = [
        ()=>{
            first++
            return 1;
        },
        ()=>{
            second++
            return 2;
        }
    ];

    let callbacks = new MemoizedReturnCallback(subjects);

    it("first call", () => {

        expect(Find(callbacks, returns=>returns===1, 0)).toEqual(1);
        expect(first).toEqual(1);
        expect(second).toEqual(0);
    });

    it("second call", () => {

        expect(Find(callbacks, returns=>returns===2, 0)).toEqual(2);
        expect(first).toEqual(1);
        expect(second).toEqual(1);

    });

});
