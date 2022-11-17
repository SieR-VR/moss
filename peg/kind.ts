export interface Node {
    sourceFile?: SourceFile;
    parent?: Node;
    children?: Node[];
}

export interface SourceFile extends Node {
    statements: Statement[];
    source: string; 
}

export interface Statement extends Node {
    _statementBrand: any;
}

export interface StyleStatement extends Statement {
    name: Identifier;
    heritages: Identifier[];
    block: Block;
}

export interface TransformStatement extends Statement {
    name: Identifier;
    heritages: Identifier[];
    block?: GenericBlock;
}

export interface AnimationStatement extends Statement {
    name: Identifier;
    heritages: Identifier[];
    block?: AnimationBlock;
}

export interface ImportStatement extends Statement {
    exprs: Identifier[];
    path: StringLiteral;
}

export interface Block {
    _blockBrand: any;
}

export interface GenericBlock extends Block {
    elements: GenericElement[];
}

export interface AnimationBlock extends Block {
    elements: AnimationElement[];
}

export interface GenericElement extends Node {
    name: PropertyName;
    value: string;
}

export interface AnimationElement extends Node {
    progress: string;
    block: GenericBlock;
}

export interface Identifier extends Node {
    text: string;
}

export interface PropertyName extends Node {
    text: string;
}

export interface StringLiteral extends Node {
    text: string; // without quotes
}
