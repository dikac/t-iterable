import InferValue from "../infer/value";

/**
 * Find match {@param compare} in {@param list} value according
 * to {@param validation}
 *
 * return {@param defaults} if no match found
 */
export default function FindArgument<Val, Default, Compare extends Partial<Val>>(
    list : Iterable<Val>,
    compare : Compare,
    validation : (value : Val, compare : Compare) => boolean,
    defaults : Default
) : Val|Default {

    for(let object of list) {

        if(validation(object, compare)) {

            return object;
        }
    }

    return defaults;
}
