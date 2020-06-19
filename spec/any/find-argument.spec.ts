import Type from "../../dist/boolean/type";
import FindArgument from "../../dist/any/find-argument";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});



describe("array", function() {


    let array : Array<{id:number, name :string}> = [
        {id:1, name :'one'},
        {id:2, name :'two'},
        {id:3, name :'three'}

    ];

    it(`contain`, () => {

        let result = FindArgument(
            array,
            {id:1}, (val, cmp) => val.id === cmp.id,
            {id:0, name :'zero'}
        )

        expect(result.name).toBe('one');
    });

    it(`not contain`, () => {

        let result = FindArgument(
            array,
            {id:-1}, (val, cmp) => val.id === cmp.id,
            {id:0, name :'zero'}
        )

        expect(result.name).toBe('zero');
    });

});
