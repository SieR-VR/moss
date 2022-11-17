import * as Parser from "./moss.parser";
import * as Syntax from "./kind";

interface TravelerContext {
    source: Parser.ParseResult;
}

export function travelSource(source: Parser.ParseResult): Syntax.SourceFile {
    return {
        kind: Syntax.SyntaxKind.SourceFile,
        statements: source.ast ? source.ast.stmts.map(travelStatement) : [],
        source: "",
    };
}

function travelStatement(statement: Parser.Statement): Syntax.Statement {
    switch (statement.kind) {
        case "ImportStatement":
            return travelImportStatement(statement);
        case "StyleStatement":
            return travelStyleStatement(statement);
        case "TransformStatement":
            return travelTransformStatement(statement);
        case "AnimationStatement":
            return travelAnimationStatement(statement);
    }

    throw new Error("Unknown statement kind: " + statement.kind);
}

function travelImportStatement(statement: Parser.ImportStatement): Syntax.ImportStatement {
    return {
        kind: Syntax.SyntaxKind.ImportStatement,
        exprs: travelCommaSeperatedList(statement.list),
        path: travelStringLiteral(statement.path),
        _statementBrand: undefined,
    };
}

function travelStyleStatement(statement: Parser.StyleStatement): Syntax.StyleStatement {
    return {
        kind: Syntax.SyntaxKind.StyleStatement,
        name: travelIdentifier(statement.name),
        heritages: statement.heritages ? travelHeritageClause(statement.heritages) : [],
        block: travelGenericBlock(statement.block),
        _statementBrand: undefined,
    };
}

function travelTransformStatement(statement: Parser.TransformStatement): Syntax.TransformStatement {
    return {
        kind: Syntax.SyntaxKind.TransformStatement,
        name: travelIdentifier(statement.name),
        heritages: statement.heritages ? travelHeritageClause(statement.heritages) : [],
        block: statement.block ? travelGenericBlock(statement.block) : undefined,
        _statementBrand: undefined,
    };
}

function travelAnimationStatement(statement: Parser.AnimationStatement): Syntax.AnimationStatement {
    return {
        kind: Syntax.SyntaxKind.AnimationStatement,
        name: travelIdentifier(statement.name),
        heritages: statement.heritages ? travelHeritageClause(statement.heritages) : [],
        block: statement.block ? travelAnimationBlock(statement.block) : undefined,
        _statementBrand: undefined,
    };
}

function travelGenericBlock(block: Parser.Block): Syntax.GenericBlock {
    return {
        kind: Syntax.SyntaxKind.GenericBlock,
        elements: block.elements.map(travelGenericElement),
        _blockBrand: undefined,
    };
}

function travelAnimationBlock(block: Parser.AnimationBlock): Syntax.AnimationBlock {
    return {
        kind: Syntax.SyntaxKind.AnimationBlock,
        elements: block.elements.map(travelAnimationElement),
        _blockBrand: undefined,
    };
}

function travelGenericElement(element: Parser.Element): Syntax.GenericElement {
    return {
        kind: Syntax.SyntaxKind.GenericElement,
        name: travelPropertyName(element.name),
        value: element.value.text,
    };
}

function travelAnimationElement(element: Parser.AnimationElement): Syntax.AnimationElement {
    return {
        kind: Syntax.SyntaxKind.AnimationElement,
        progress: element.progress,
        block: travelGenericBlock(element.block),
    };
}

function travelHeritageClause(clause: Parser.HeritageClause): Syntax.Identifier[] {
    return travelCommaSeperatedList(clause.list);
}

function travelCommaSeperatedList(list: Parser.CommaSeparatedList): Syntax.Identifier[] {
    return [list.first, ...list.rest.map(item => item.next)].map(travelIdentifier);
}

function travelIdentifier(identifier: Parser.Identifier): Syntax.Identifier {
    return {
        kind: Syntax.SyntaxKind.Identifier,
        text: identifier.text,
    };
}

function travelStringLiteral(literal: Parser.StringLiteral): Syntax.StringLiteral {
    return {
        kind: Syntax.SyntaxKind.StringLiteral,
        text: literal.text.slice(1, -1), // remove quotes
    };
}

function travelPropertyName(name: Parser.PropertyName): Syntax.PropertyName {
    return {
        kind: Syntax.SyntaxKind.PropertyName,
        text: name.text,
    };
}

export function isStatement(node: Syntax.Node): node is Syntax.Statement {
    return node.kind === "ImportStatement"
        || node.kind === "StyleStatement"
        || node.kind === "TransformStatement"
        || node.kind === "AnimationStatement";
}

export function isImportStatement(node: Syntax.Node): node is Syntax.ImportStatement {
    return node.kind === "ImportStatement";
}

export function isStyleStatement(node: Syntax.Node): node is Syntax.StyleStatement {
    return node.kind === "StyleStatement";
}

export function isTransformStatement(node: Syntax.Node): node is Syntax.TransformStatement {
    return node.kind === "TransformStatement";
}

export function isAnimationStatement(node: Syntax.Node): node is Syntax.AnimationStatement {
    return node.kind === "AnimationStatement";
}

export function isGenericBlock(node: Syntax.Node): node is Syntax.GenericBlock {
    return node.kind === "GenericBlock";
}

export function isAnimationBlock(node: Syntax.Node): node is Syntax.AnimationBlock {
    return node.kind === "AnimationBlock";
}

export function isGenericElement(node: Syntax.Node): node is Syntax.GenericElement {
    return node.kind === "GenericElement";
}

export function isAnimationElement(node: Syntax.Node): node is Syntax.AnimationElement {
    return node.kind === "AnimationElement";
}

export function isIdentifier(node: Syntax.Node): node is Syntax.Identifier {
    return node.kind === "Identifier";
}

export function isStringLiteral(node: Syntax.Node): node is Syntax.StringLiteral {
    return node.kind === "StringLiteral";
}

export function isPropertyName(node: Syntax.Node): node is Syntax.PropertyName {
    return node.kind === "PropertyName";
}
