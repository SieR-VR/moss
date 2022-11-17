import { travelSource } from "./peg/traveler";
import { parse } from "./peg/moss.parser";

import { SourceFile } from "./peg/kind";

export default function parseMoss(source: string): SourceFile {
    return travelSource(parse(source));
}
