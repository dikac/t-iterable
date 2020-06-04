import Type from "../../dist/boolean/type";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe("boolean", function() {

    it(`array`, () => {
        expect(Type([])).toBeTrue();
    });

    it(`map`, () => {
        expect(Type(new Map())).toBeTrue();
    });

});

describe("string", function() {

    it(`object`, () => {
        expect(Type(new String('str'))).toBeFalse();
    });

});


describe("object", function() {

    it(`plain`, () => {
        expect(Type({})).toBeFalse();
    });

    it(`instance`, () => {
        expect(Type(new Error())).toBeFalse();
    });

});

describe("function", function() {

    it(`anonymous `, () => {
        expect(Type(function () {})).toBeFalse();
    });

    it(`anonymous arrow`, () => {
        expect(Type(()=>{})).toBeFalse();
    });

    it(`named`, () => {
        expect(Type(isNaN)).toBeFalse();
    });

});

