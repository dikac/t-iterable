export default function Iterable<Value>(
    value : unknown,
    valid : boolean
) : string {

    let string = (<any>value).toString();

    if(valid) {

        return `value "${string}" is iterable"`;

    } else {

        return `value "${string}" is not iterable"`;
    }
}

