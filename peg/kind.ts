export enum SyntaxKind {
    SourceFile = "SourceFile",
    StyleStatement = "StyleStatement",
    TransformStatement = "TransformStatement",
    AnimationStatement = "AnimationStatement",
    ImportStatement = "ImportStatement",
    GenericBlock = "GenericBlock",
    AnimationBlock = "AnimationBlock",
    GenericElement = "GenericElement",
    AnimationElement = "AnimationElement",
    Identifier = "Identifier",
    PropertyName = "PropertyName",
    StringLiteral = "StringLiteral",
}

export interface Node {
    kind: SyntaxKind;
    sourceFile?: SourceFile;
    parent?: Node;
    children?: Node[];
}

export interface SourceFile extends Node {
    kind: SyntaxKind.SourceFile;
    statements: Statement[];
    source: string; 
}

export interface Statement extends Node {
    _statementBrand: any;
}

export interface StyleStatement extends Statement {
    kind: SyntaxKind.StyleStatement;
    name: Identifier;
    heritages: Identifier[];
    block: Block;
}

export interface TransformStatement extends Statement {
    kind: SyntaxKind.TransformStatement;
    name: Identifier;
    heritages: Identifier[];
    block?: GenericBlock;
}

export interface AnimationStatement extends Statement {
    kind: SyntaxKind.AnimationStatement;
    name: Identifier;
    heritages: Identifier[];
    block?: AnimationBlock;
}

export interface ImportStatement extends Statement {
    kind: SyntaxKind.ImportStatement;
    exprs: Identifier[];
    path: StringLiteral;
}

export interface Block {
    _blockBrand: any;
}

export interface GenericBlock extends Block {
    kind: SyntaxKind.GenericBlock;
    elements: GenericElement[];
}

export interface AnimationBlock extends Block {
    kind: SyntaxKind.AnimationBlock;
    elements: AnimationElement[];
}

export interface GenericElement extends Node {
    kind: SyntaxKind.GenericElement;
    name: PropertyName;
    value: string;
}

export interface AnimationElement extends Node {
    kind: SyntaxKind.AnimationElement;
    progress: string;
    block: GenericBlock;
}

export interface Identifier extends Node {
    kind: SyntaxKind.Identifier;
    text: string;
}

export interface PropertyName extends Node {
    kind: SyntaxKind.PropertyName;
    text: string;
}

export interface StringLiteral extends Node {
    kind: SyntaxKind.StringLiteral;
    text: string; // without quotes
}
