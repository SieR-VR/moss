import { ParseResult, parse } from "../moss.parser";

const transform = parse(`
    import ButtonTransform, Props from "./style.moss";

    transform ButtonTransform : Transform {
        position: 0, 0;
    }

    .button {
        transform: ButtonTransform {

        }
    }
`);

console.log(JSON.stringify(transform, null, 2));