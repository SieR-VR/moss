import { Parse, Str } from 'pegts';

type Statement = 
    | StyleStatement 
    | SelectorStatement 
    | TransformStatement
    | AnimationStatement;

type StyleStatement = {
    type: "style";
    identifier: string;
    heritage?: string[];
    props: Element[];
}

type TransformStatement = {
    type: "transform";
    identifier: string;
    heritage?: string[];
    props: Element[];
}

type AnimationStatement = {
    type: "animation";
    identifier: string;
    heritage?: string[];
    frames: AnimationFrame[];
}

type AnimationFrame = {
    type: "frame";
    progress: number;
    props: Element[];
}

type SelectorStatement = {
    type: "selector";
    query: string;

    transform?: TransformStatement;
    style?: StyleStatement;
    animation?: AnimationStatement;

    submoss?: SelectorStatement[];
}

type Element = {
    type: "element";
    property: string;
    value: string;
}

import { ParseResult, parse } from "./moss.parser";

const sample = `
    style Button {
        background-color: #000;
        color: #fff;
    }

    transform ButtonTransform {
        position: 0, 0;
        scale: 1, 1;
    }
`;

const result = parse(sample);
console.log(JSON.stringify(result, null, 4));