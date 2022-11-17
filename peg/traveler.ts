import * as Parser from "./moss.parser";
import * as Syntax from "./kind";

interface TravelerContext {
    source: Parser.ParseResult;
}

export function travelSource(source: Parser.ParseResult): Syntax.SourceFile {
    return {
        kind: "SourceFile",
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
        kind: "ImportStatement",
        exprs: travelCommaSeperatedList(statement.list),
        path: travelStringLiteral(statement.path),
        _statementBrand: undefined,
    };
}

function travelStyleStatement(statement: Parser.StyleStatement): Syntax.StyleStatement {
    return {
        kind: "StyleStatement",
        name: travelIdentifier(statement.name),
        heritages: statement.heritages ? travelHeritageClause(statement.heritages) : [],
        block: travelGenericBlock(statement.block),
        _statementBrand: undefined,
    };
}

function travelTransformStatement(statement: Parser.TransformStatement): Syntax.TransformStatement {
    return {
        kind: "TransformStatement",
        name: travelIdentifier(statement.name),
        heritages: statement.heritages ? travelHeritageClause(statement.heritages) : [],
        block: statement.block ? travelGenericBlock(statement.block) : undefined,
        _statementBrand: undefined,
    };
}

function travelAnimationStatement(statement: Parser.AnimationStatement): Syntax.AnimationStatement {
    return {
        kind: "AnimationStatement",
        name: travelIdentifier(statement.name),
        heritages: statement.heritages ? travelHeritageClause(statement.heritages) : [],
        block: statement.block ? travelAnimationBlock(statement.block) : undefined,
        _statementBrand: undefined,
    };
}

function travelGenericBlock(block: Parser.Block): Syntax.GenericBlock {
    return {
        kind: "GenericBlock",
        elements: block.elements.map(travelGenericElement),
        _blockBrand: undefined,
    };
}

function travelAnimationBlock(block: Parser.AnimationBlock): Syntax.AnimationBlock {
    return {
        kind: "AnimationBlock",
        elements: block.elements.map(travelAnimationElement),
        _blockBrand: undefined,
    };
}

function travelGenericElement(element: Parser.Element): Syntax.GenericElement {
    return {
        kind: "GenericElement",
        name: travelPropertyName(element.name),
        value: element.value.text,
    };
}

function travelAnimationElement(element: Parser.AnimationElement): Syntax.AnimationElement {
    return {
        kind: "AnimationElement",
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
        kind: "Identifier",
        text: identifier.text,
    };
}

function travelStringLiteral(literal: Parser.StringLiteral): Syntax.StringLiteral {
    return {
        kind: "StringLiteral",
        text: literal.text.slice(1, -1), // remove quotes
    };
}

function travelPropertyName(name: Parser.PropertyName): Syntax.PropertyName {
    return {
        kind: "PropertyName",
        text: name.text,
    };
}