export interface Node {
    kind: string;
    sourceFile?: SourceFile;
    parent?: Node;
    children?: Node[];
}

export interface SourceFile extends Node {
    kind: "SourceFile";
    statements: Statement[];
    source: string; 
}

export interface Statement extends Node {
    _statementBrand: any;
}

export interface StyleStatement extends Statement {
    kind: "StyleStatement";
    name: Identifier;
    heritages: Identifier[];
    block: Block;
}

export interface TransformStatement extends Statement {
    kind: "TransformStatement";
    name: Identifier;
    heritages: Identifier[];
    block?: GenericBlock;
}

export interface AnimationStatement extends Statement {
    kind: "AnimationStatement";
    name: Identifier;
    heritages: Identifier[];
    block?: AnimationBlock;
}

export interface ImportStatement extends Statement {
    kind: "ImportStatement";
    exprs: Identifier[];
    path: StringLiteral;
}

export interface Block {
    _blockBrand: any;
}

export interface GenericBlock extends Block {
    kind: "GenericBlock";
    elements: GenericElement[];
}

export interface AnimationBlock extends Block {
    kind: "AnimationBlock";
    elements: AnimationElement[];
}

export interface GenericElement extends Node {
    kind: "GenericElement";
    name: PropertyName;
    value: string;
}

export interface AnimationElement extends Node {
    kind: "AnimationElement";
    progress: string;
    block: GenericBlock;
}

export interface Identifier extends Node {
    kind: "Identifier";
    text: string;
}

export interface PropertyName extends Node {
    kind: "PropertyName";
    text: string;
}

export interface StringLiteral extends Node {
    kind: "StringLiteral";
    text: string; // without quotes
}
