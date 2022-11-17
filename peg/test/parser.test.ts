import { ParseResult, parse } from "../moss.parser";

const transform = parse(`
    transform ButtonTransform : Transform {
        position: 0, 0;
    }
`)

console.log(JSON.stringify(transform, null, 2));