import { travelSource } from "../traveler";
import { parse } from "../moss.parser";

const transform = parse(`
    import ButtonTransform, Props from "./style.moss";

    transform ButtonTransform : Transform {
        position: 0, 0;
    }
`);

const source = travelSource(transform);
console.log(source);