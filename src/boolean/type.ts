export default function Type<Assumption extends any>(object : object): object is Iterable<Assumption> {

    return typeof object[Symbol.iterator] === "function";

}
