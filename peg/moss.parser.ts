/* AutoGenerated Code, changes may be overwritten
* INPUT GRAMMAR:
* SourceFile := stmts=Statement*
* Statement := StyleStatement | TransformStatement | AnimationStatement | ImportStatement
* StyleStatement := Whitespace* 'style' Whitespace+ name=Identifier Whitespace* parents={ HeritageClause }? Whitespace* block=Block Whitespace*
* TransformStatement := Whitespace* 'transform' Whitespace+ name=Identifier Whitespace* parents={ HeritageClause }? Whitespace* block=Block Whitespace* 
* AnimationStatement := Whitespace* 'animation' Whitespace+ name=Identifier Whitespace* parents={ HeritageClause }? Whitespace* block=AnimationBlock Whitespace*
* ImportStatement := Whitespace* 'import' Whitespace+ list=CommaSeparatedList 'from' Whitespace+ path=StringLiteral Whitespace* ';'
* SelectorStatement := selector=Selector Whitespace+ block=Block
* Block := '\{' Whitespace+ elements={ element=Element Whitespace* }* '\}'
* AnimationBlock := '{' Whitespace+ elements={ progress=AnimationProgress element=Block Whitespace* }* '}'
* // SelectorBlock := '{' Whitespace+ elements=(element=SelectorElement Whitespace+)* '}'
* HeritageClause := ':' Whitespace* list=CommaSeparatedList
* CommaSeparatedList := first=Identifier Whitespace* last={ ',' Whitespace* next=Identifier Whitespace* }*
* Element := name=PropertyName Whitespace* ':' Whitespace* value=PropertyValue Whitespace* ';'
* Identifier := text='[a-zA-Z_][a-zA-Z0-9_]+'
* StringLiteral := text='"[^"]*"'
* Whitespace := '[ \t\r\n]'
* AnimationProgress := '[0-9][0-9]?%'
* PropertyName := text='[a-zA-Z_-][a-zA-Z0-9_-]+'
* PropertyValue := text='[^;]+'
* Selector := selectorKind='[#\.]?' text='[a-zA-Z_-][a-zA-Z0-9_-]+'
*/
type Nullable<T> = T | null;
type $$RuleType<T> = () => Nullable<T>;
export interface ASTNodeIntf {
    kind: ASTKinds;
}
export enum ASTKinds {
    SourceFile = "SourceFile",
    Statement_1 = "Statement_1",
    Statement_2 = "Statement_2",
    Statement_3 = "Statement_3",
    Statement_4 = "Statement_4",
    StyleStatement = "StyleStatement",
    StyleStatement_$0 = "StyleStatement_$0",
    TransformStatement = "TransformStatement",
    TransformStatement_$0 = "TransformStatement_$0",
    AnimationStatement = "AnimationStatement",
    AnimationStatement_$0 = "AnimationStatement_$0",
    ImportStatement = "ImportStatement",
    SelectorStatement = "SelectorStatement",
    Block = "Block",
    Block_$0 = "Block_$0",
    AnimationBlock = "AnimationBlock",
    AnimationBlock_$0 = "AnimationBlock_$0",
    HeritageClause = "HeritageClause",
    CommaSeparatedList = "CommaSeparatedList",
    CommaSeparatedList_$0 = "CommaSeparatedList_$0",
    Element = "Element",
    Identifier = "Identifier",
    StringLiteral = "StringLiteral",
    Whitespace = "Whitespace",
    AnimationProgress = "AnimationProgress",
    PropertyName = "PropertyName",
    PropertyValue = "PropertyValue",
    Selector = "Selector",
}
export interface SourceFile {
    kind: ASTKinds.SourceFile;
    stmts: Statement[];
}
export type Statement = Statement_1 | Statement_2 | Statement_3 | Statement_4;
export type Statement_1 = StyleStatement;
export type Statement_2 = TransformStatement;
export type Statement_3 = AnimationStatement;
export type Statement_4 = ImportStatement;
export interface StyleStatement {
    kind: ASTKinds.StyleStatement;
    name: Identifier;
    parents: Nullable<StyleStatement_$0>;
    block: Block;
}
export type StyleStatement_$0 = HeritageClause;
export interface TransformStatement {
    kind: ASTKinds.TransformStatement;
    name: Identifier;
    parents: Nullable<TransformStatement_$0>;
    block: Block;
}
export type TransformStatement_$0 = HeritageClause;
export interface AnimationStatement {
    kind: ASTKinds.AnimationStatement;
    name: Identifier;
    parents: Nullable<AnimationStatement_$0>;
    block: AnimationBlock;
}
export type AnimationStatement_$0 = HeritageClause;
export interface ImportStatement {
    kind: ASTKinds.ImportStatement;
    list: CommaSeparatedList;
    path: StringLiteral;
}
export interface SelectorStatement {
    kind: ASTKinds.SelectorStatement;
    selector: Selector;
    block: Block;
}
export interface Block {
    kind: ASTKinds.Block;
    elements: Block_$0[];
}
export interface Block_$0 {
    kind: ASTKinds.Block_$0;
    element: Element;
}
export interface AnimationBlock {
    kind: ASTKinds.AnimationBlock;
    elements: AnimationBlock_$0[];
}
export interface AnimationBlock_$0 {
    kind: ASTKinds.AnimationBlock_$0;
    progress: AnimationProgress;
    element: Block;
}
export interface HeritageClause {
    kind: ASTKinds.HeritageClause;
    list: CommaSeparatedList;
}
export interface CommaSeparatedList {
    kind: ASTKinds.CommaSeparatedList;
    first: Identifier;
    last: CommaSeparatedList_$0[];
}
export interface CommaSeparatedList_$0 {
    kind: ASTKinds.CommaSeparatedList_$0;
    next: Identifier;
}
export interface Element {
    kind: ASTKinds.Element;
    name: PropertyName;
    value: PropertyValue;
}
export interface Identifier {
    kind: ASTKinds.Identifier;
    text: string;
}
export interface StringLiteral {
    kind: ASTKinds.StringLiteral;
    text: string;
}
export type Whitespace = string;
export type AnimationProgress = string;
export interface PropertyName {
    kind: ASTKinds.PropertyName;
    text: string;
}
export interface PropertyValue {
    kind: ASTKinds.PropertyValue;
    text: string;
}
export interface Selector {
    kind: ASTKinds.Selector;
    selectorKind: string;
    text: string;
}
export class Parser {
    private readonly input: string;
    private pos: PosInfo;
    private negating: boolean = false;
    private memoSafe: boolean = true;
    constructor(input: string) {
        this.pos = {overallPos: 0, line: 1, offset: 0};
        this.input = input;
    }
    public reset(pos: PosInfo) {
        this.pos = pos;
    }
    public finished(): boolean {
        return this.pos.overallPos === this.input.length;
    }
    public clearMemos(): void {
    }
    public matchSourceFile($$dpth: number, $$cr?: ErrorTracker): Nullable<SourceFile> {
        return this.run<SourceFile>($$dpth,
            () => {
                let $scope$stmts: Nullable<Statement[]>;
                let $$res: Nullable<SourceFile> = null;
                if (true
                    && ($scope$stmts = this.loop<Statement>(() => this.matchStatement($$dpth + 1, $$cr), true)) !== null
                ) {
                    $$res = {kind: ASTKinds.SourceFile, stmts: $scope$stmts};
                }
                return $$res;
            });
    }
    public matchStatement($$dpth: number, $$cr?: ErrorTracker): Nullable<Statement> {
        return this.choice<Statement>([
            () => this.matchStatement_1($$dpth + 1, $$cr),
            () => this.matchStatement_2($$dpth + 1, $$cr),
            () => this.matchStatement_3($$dpth + 1, $$cr),
            () => this.matchStatement_4($$dpth + 1, $$cr),
        ]);
    }
    public matchStatement_1($$dpth: number, $$cr?: ErrorTracker): Nullable<Statement_1> {
        return this.matchStyleStatement($$dpth + 1, $$cr);
    }
    public matchStatement_2($$dpth: number, $$cr?: ErrorTracker): Nullable<Statement_2> {
        return this.matchTransformStatement($$dpth + 1, $$cr);
    }
    public matchStatement_3($$dpth: number, $$cr?: ErrorTracker): Nullable<Statement_3> {
        return this.matchAnimationStatement($$dpth + 1, $$cr);
    }
    public matchStatement_4($$dpth: number, $$cr?: ErrorTracker): Nullable<Statement_4> {
        return this.matchImportStatement($$dpth + 1, $$cr);
    }
    public matchStyleStatement($$dpth: number, $$cr?: ErrorTracker): Nullable<StyleStatement> {
        return this.run<StyleStatement>($$dpth,
            () => {
                let $scope$name: Nullable<Identifier>;
                let $scope$parents: Nullable<Nullable<StyleStatement_$0>>;
                let $scope$block: Nullable<Block>;
                let $$res: Nullable<StyleStatement> = null;
                if (true
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                    && this.regexAccept(String.raw`(?:style)`, $$dpth + 1, $$cr) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), false) !== null
                    && ($scope$name = this.matchIdentifier($$dpth + 1, $$cr)) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                    && (($scope$parents = this.matchStyleStatement_$0($$dpth + 1, $$cr)) || true)
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                    && ($scope$block = this.matchBlock($$dpth + 1, $$cr)) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                ) {
                    $$res = {kind: ASTKinds.StyleStatement, name: $scope$name, parents: $scope$parents, block: $scope$block};
                }
                return $$res;
            });
    }
    public matchStyleStatement_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<StyleStatement_$0> {
        return this.matchHeritageClause($$dpth + 1, $$cr);
    }
    public matchTransformStatement($$dpth: number, $$cr?: ErrorTracker): Nullable<TransformStatement> {
        return this.run<TransformStatement>($$dpth,
            () => {
                let $scope$name: Nullable<Identifier>;
                let $scope$parents: Nullable<Nullable<TransformStatement_$0>>;
                let $scope$block: Nullable<Block>;
                let $$res: Nullable<TransformStatement> = null;
                if (true
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                    && this.regexAccept(String.raw`(?:transform)`, $$dpth + 1, $$cr) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), false) !== null
                    && ($scope$name = this.matchIdentifier($$dpth + 1, $$cr)) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                    && (($scope$parents = this.matchTransformStatement_$0($$dpth + 1, $$cr)) || true)
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                    && ($scope$block = this.matchBlock($$dpth + 1, $$cr)) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                ) {
                    $$res = {kind: ASTKinds.TransformStatement, name: $scope$name, parents: $scope$parents, block: $scope$block};
                }
                return $$res;
            });
    }
    public matchTransformStatement_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<TransformStatement_$0> {
        return this.matchHeritageClause($$dpth + 1, $$cr);
    }
    public matchAnimationStatement($$dpth: number, $$cr?: ErrorTracker): Nullable<AnimationStatement> {
        return this.run<AnimationStatement>($$dpth,
            () => {
                let $scope$name: Nullable<Identifier>;
                let $scope$parents: Nullable<Nullable<AnimationStatement_$0>>;
                let $scope$block: Nullable<AnimationBlock>;
                let $$res: Nullable<AnimationStatement> = null;
                if (true
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                    && this.regexAccept(String.raw`(?:animation)`, $$dpth + 1, $$cr) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), false) !== null
                    && ($scope$name = this.matchIdentifier($$dpth + 1, $$cr)) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                    && (($scope$parents = this.matchAnimationStatement_$0($$dpth + 1, $$cr)) || true)
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                    && ($scope$block = this.matchAnimationBlock($$dpth + 1, $$cr)) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                ) {
                    $$res = {kind: ASTKinds.AnimationStatement, name: $scope$name, parents: $scope$parents, block: $scope$block};
                }
                return $$res;
            });
    }
    public matchAnimationStatement_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<AnimationStatement_$0> {
        return this.matchHeritageClause($$dpth + 1, $$cr);
    }
    public matchImportStatement($$dpth: number, $$cr?: ErrorTracker): Nullable<ImportStatement> {
        return this.run<ImportStatement>($$dpth,
            () => {
                let $scope$list: Nullable<CommaSeparatedList>;
                let $scope$path: Nullable<StringLiteral>;
                let $$res: Nullable<ImportStatement> = null;
                if (true
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                    && this.regexAccept(String.raw`(?:import)`, $$dpth + 1, $$cr) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), false) !== null
                    && ($scope$list = this.matchCommaSeparatedList($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:from)`, $$dpth + 1, $$cr) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), false) !== null
                    && ($scope$path = this.matchStringLiteral($$dpth + 1, $$cr)) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                    && this.regexAccept(String.raw`(?:;)`, $$dpth + 1, $$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.ImportStatement, list: $scope$list, path: $scope$path};
                }
                return $$res;
            });
    }
    public matchSelectorStatement($$dpth: number, $$cr?: ErrorTracker): Nullable<SelectorStatement> {
        return this.run<SelectorStatement>($$dpth,
            () => {
                let $scope$selector: Nullable<Selector>;
                let $scope$block: Nullable<Block>;
                let $$res: Nullable<SelectorStatement> = null;
                if (true
                    && ($scope$selector = this.matchSelector($$dpth + 1, $$cr)) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), false) !== null
                    && ($scope$block = this.matchBlock($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.SelectorStatement, selector: $scope$selector, block: $scope$block};
                }
                return $$res;
            });
    }
    public matchBlock($$dpth: number, $$cr?: ErrorTracker): Nullable<Block> {
        return this.run<Block>($$dpth,
            () => {
                let $scope$elements: Nullable<Block_$0[]>;
                let $$res: Nullable<Block> = null;
                if (true
                    && this.regexAccept(String.raw`(?:\{)`, $$dpth + 1, $$cr) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), false) !== null
                    && ($scope$elements = this.loop<Block_$0>(() => this.matchBlock_$0($$dpth + 1, $$cr), true)) !== null
                    && this.regexAccept(String.raw`(?:\})`, $$dpth + 1, $$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.Block, elements: $scope$elements};
                }
                return $$res;
            });
    }
    public matchBlock_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<Block_$0> {
        return this.run<Block_$0>($$dpth,
            () => {
                let $scope$element: Nullable<Element>;
                let $$res: Nullable<Block_$0> = null;
                if (true
                    && ($scope$element = this.matchElement($$dpth + 1, $$cr)) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                ) {
                    $$res = {kind: ASTKinds.Block_$0, element: $scope$element};
                }
                return $$res;
            });
    }
    public matchAnimationBlock($$dpth: number, $$cr?: ErrorTracker): Nullable<AnimationBlock> {
        return this.run<AnimationBlock>($$dpth,
            () => {
                let $scope$elements: Nullable<AnimationBlock_$0[]>;
                let $$res: Nullable<AnimationBlock> = null;
                if (true
                    && this.regexAccept(String.raw`(?:{)`, $$dpth + 1, $$cr) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), false) !== null
                    && ($scope$elements = this.loop<AnimationBlock_$0>(() => this.matchAnimationBlock_$0($$dpth + 1, $$cr), true)) !== null
                    && this.regexAccept(String.raw`(?:})`, $$dpth + 1, $$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.AnimationBlock, elements: $scope$elements};
                }
                return $$res;
            });
    }
    public matchAnimationBlock_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<AnimationBlock_$0> {
        return this.run<AnimationBlock_$0>($$dpth,
            () => {
                let $scope$progress: Nullable<AnimationProgress>;
                let $scope$element: Nullable<Block>;
                let $$res: Nullable<AnimationBlock_$0> = null;
                if (true
                    && ($scope$progress = this.matchAnimationProgress($$dpth + 1, $$cr)) !== null
                    && ($scope$element = this.matchBlock($$dpth + 1, $$cr)) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                ) {
                    $$res = {kind: ASTKinds.AnimationBlock_$0, progress: $scope$progress, element: $scope$element};
                }
                return $$res;
            });
    }
    public matchHeritageClause($$dpth: number, $$cr?: ErrorTracker): Nullable<HeritageClause> {
        return this.run<HeritageClause>($$dpth,
            () => {
                let $scope$list: Nullable<CommaSeparatedList>;
                let $$res: Nullable<HeritageClause> = null;
                if (true
                    && this.regexAccept(String.raw`(?::)`, $$dpth + 1, $$cr) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                    && ($scope$list = this.matchCommaSeparatedList($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.HeritageClause, list: $scope$list};
                }
                return $$res;
            });
    }
    public matchCommaSeparatedList($$dpth: number, $$cr?: ErrorTracker): Nullable<CommaSeparatedList> {
        return this.run<CommaSeparatedList>($$dpth,
            () => {
                let $scope$first: Nullable<Identifier>;
                let $scope$last: Nullable<CommaSeparatedList_$0[]>;
                let $$res: Nullable<CommaSeparatedList> = null;
                if (true
                    && ($scope$first = this.matchIdentifier($$dpth + 1, $$cr)) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                    && ($scope$last = this.loop<CommaSeparatedList_$0>(() => this.matchCommaSeparatedList_$0($$dpth + 1, $$cr), true)) !== null
                ) {
                    $$res = {kind: ASTKinds.CommaSeparatedList, first: $scope$first, last: $scope$last};
                }
                return $$res;
            });
    }
    public matchCommaSeparatedList_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<CommaSeparatedList_$0> {
        return this.run<CommaSeparatedList_$0>($$dpth,
            () => {
                let $scope$next: Nullable<Identifier>;
                let $$res: Nullable<CommaSeparatedList_$0> = null;
                if (true
                    && this.regexAccept(String.raw`(?:,)`, $$dpth + 1, $$cr) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                    && ($scope$next = this.matchIdentifier($$dpth + 1, $$cr)) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                ) {
                    $$res = {kind: ASTKinds.CommaSeparatedList_$0, next: $scope$next};
                }
                return $$res;
            });
    }
    public matchElement($$dpth: number, $$cr?: ErrorTracker): Nullable<Element> {
        return this.run<Element>($$dpth,
            () => {
                let $scope$name: Nullable<PropertyName>;
                let $scope$value: Nullable<PropertyValue>;
                let $$res: Nullable<Element> = null;
                if (true
                    && ($scope$name = this.matchPropertyName($$dpth + 1, $$cr)) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                    && this.regexAccept(String.raw`(?::)`, $$dpth + 1, $$cr) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                    && ($scope$value = this.matchPropertyValue($$dpth + 1, $$cr)) !== null
                    && this.loop<Whitespace>(() => this.matchWhitespace($$dpth + 1, $$cr), true) !== null
                    && this.regexAccept(String.raw`(?:;)`, $$dpth + 1, $$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.Element, name: $scope$name, value: $scope$value};
                }
                return $$res;
            });
    }
    public matchIdentifier($$dpth: number, $$cr?: ErrorTracker): Nullable<Identifier> {
        return this.run<Identifier>($$dpth,
            () => {
                let $scope$text: Nullable<string>;
                let $$res: Nullable<Identifier> = null;
                if (true
                    && ($scope$text = this.regexAccept(String.raw`(?:[a-zA-Z_][a-zA-Z0-9_]+)`, $$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.Identifier, text: $scope$text};
                }
                return $$res;
            });
    }
    public matchStringLiteral($$dpth: number, $$cr?: ErrorTracker): Nullable<StringLiteral> {
        return this.run<StringLiteral>($$dpth,
            () => {
                let $scope$text: Nullable<string>;
                let $$res: Nullable<StringLiteral> = null;
                if (true
                    && ($scope$text = this.regexAccept(String.raw`(?:"[^"]*")`, $$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.StringLiteral, text: $scope$text};
                }
                return $$res;
            });
    }
    public matchWhitespace($$dpth: number, $$cr?: ErrorTracker): Nullable<Whitespace> {
        return this.regexAccept(String.raw`(?:[ \t\r\n])`, $$dpth + 1, $$cr);
    }
    public matchAnimationProgress($$dpth: number, $$cr?: ErrorTracker): Nullable<AnimationProgress> {
        return this.regexAccept(String.raw`(?:[0-9][0-9]?%)`, $$dpth + 1, $$cr);
    }
    public matchPropertyName($$dpth: number, $$cr?: ErrorTracker): Nullable<PropertyName> {
        return this.run<PropertyName>($$dpth,
            () => {
                let $scope$text: Nullable<string>;
                let $$res: Nullable<PropertyName> = null;
                if (true
                    && ($scope$text = this.regexAccept(String.raw`(?:[a-zA-Z_-][a-zA-Z0-9_-]+)`, $$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.PropertyName, text: $scope$text};
                }
                return $$res;
            });
    }
    public matchPropertyValue($$dpth: number, $$cr?: ErrorTracker): Nullable<PropertyValue> {
        return this.run<PropertyValue>($$dpth,
            () => {
                let $scope$text: Nullable<string>;
                let $$res: Nullable<PropertyValue> = null;
                if (true
                    && ($scope$text = this.regexAccept(String.raw`(?:[^;]+)`, $$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.PropertyValue, text: $scope$text};
                }
                return $$res;
            });
    }
    public matchSelector($$dpth: number, $$cr?: ErrorTracker): Nullable<Selector> {
        return this.run<Selector>($$dpth,
            () => {
                let $scope$selectorKind: Nullable<string>;
                let $scope$text: Nullable<string>;
                let $$res: Nullable<Selector> = null;
                if (true
                    && ($scope$selectorKind = this.regexAccept(String.raw`(?:[#\.]?)`, $$dpth + 1, $$cr)) !== null
                    && ($scope$text = this.regexAccept(String.raw`(?:[a-zA-Z_-][a-zA-Z0-9_-]+)`, $$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.Selector, selectorKind: $scope$selectorKind, text: $scope$text};
                }
                return $$res;
            });
    }
    public test(): boolean {
        const mrk = this.mark();
        const res = this.matchSourceFile(0);
        const ans = res !== null;
        this.reset(mrk);
        return ans;
    }
    public parse(): ParseResult {
        const mrk = this.mark();
        const res = this.matchSourceFile(0);
        if (res)
            return {ast: res, errs: []};
        this.reset(mrk);
        const rec = new ErrorTracker();
        this.clearMemos();
        this.matchSourceFile(0, rec);
        const err = rec.getErr()
        return {ast: res, errs: err !== null ? [err] : []}
    }
    public mark(): PosInfo {
        return this.pos;
    }
    private loop<T>(func: $$RuleType<T>, star: boolean = false): Nullable<T[]> {
        const mrk = this.mark();
        const res: T[] = [];
        for (;;) {
            const t = func();
            if (t === null) {
                break;
            }
            res.push(t);
        }
        if (star || res.length > 0) {
            return res;
        }
        this.reset(mrk);
        return null;
    }
    private run<T>($$dpth: number, fn: $$RuleType<T>): Nullable<T> {
        const mrk = this.mark();
        const res = fn()
        if (res !== null)
            return res;
        this.reset(mrk);
        return null;
    }
    private choice<T>(fns: Array<$$RuleType<T>>): Nullable<T> {
        for (const f of fns) {
            const res = f();
            if (res !== null) {
                return res;
            }
        }
        return null;
    }
    private regexAccept(match: string, dpth: number, cr?: ErrorTracker): Nullable<string> {
        return this.run<string>(dpth,
            () => {
                const reg = new RegExp(match, "y");
                const mrk = this.mark();
                reg.lastIndex = mrk.overallPos;
                const res = this.tryConsume(reg);
                if(cr) {
                    cr.record(mrk, res, {
                        kind: "RegexMatch",
                        // We substring from 3 to len - 1 to strip off the
                        // non-capture group syntax added as a WebKit workaround
                        literal: match.substring(3, match.length - 1),
                        negated: this.negating,
                    });
                }
                return res;
            });
    }
    private tryConsume(reg: RegExp): Nullable<string> {
        const res = reg.exec(this.input);
        if (res) {
            let lineJmp = 0;
            let lind = -1;
            for (let i = 0; i < res[0].length; ++i) {
                if (res[0][i] === "\n") {
                    ++lineJmp;
                    lind = i;
                }
            }
            this.pos = {
                overallPos: reg.lastIndex,
                line: this.pos.line + lineJmp,
                offset: lind === -1 ? this.pos.offset + res[0].length : (res[0].length - lind - 1)
            };
            return res[0];
        }
        return null;
    }
    private noConsume<T>(fn: $$RuleType<T>): Nullable<T> {
        const mrk = this.mark();
        const res = fn();
        this.reset(mrk);
        return res;
    }
    private negate<T>(fn: $$RuleType<T>): Nullable<boolean> {
        const mrk = this.mark();
        const oneg = this.negating;
        this.negating = !oneg;
        const res = fn();
        this.negating = oneg;
        this.reset(mrk);
        return res === null ? true : null;
    }
    private memoise<K>(rule: $$RuleType<K>, memo: Map<number, [Nullable<K>, PosInfo]>): Nullable<K> {
        const $scope$pos = this.mark();
        const $scope$memoRes = memo.get($scope$pos.overallPos);
        if(this.memoSafe && $scope$memoRes !== undefined) {
        this.reset($scope$memoRes[1]);
        return $scope$memoRes[0];
        }
        const $scope$result = rule();
        if(this.memoSafe)
        memo.set($scope$pos.overallPos, [$scope$result, this.mark()]);
        return $scope$result;
    }
}
export function parse(s: string): ParseResult {
    const p = new Parser(s);
    return p.parse();
}
export interface ParseResult {
    ast: Nullable<SourceFile>;
    errs: SyntaxErr[];
}
export interface PosInfo {
    readonly overallPos: number;
    readonly line: number;
    readonly offset: number;
}
export interface RegexMatch {
    readonly kind: "RegexMatch";
    readonly negated: boolean;
    readonly literal: string;
}
export type EOFMatch = { kind: "EOF"; negated: boolean };
export type MatchAttempt = RegexMatch | EOFMatch;
export class SyntaxErr {
    public pos: PosInfo;
    public expmatches: MatchAttempt[];
    constructor(pos: PosInfo, expmatches: MatchAttempt[]) {
        this.pos = pos;
        this.expmatches = [...expmatches];
    }
    public toString(): string {
        return `Syntax Error at line ${this.pos.line}:${this.pos.offset}. Expected one of ${this.expmatches.map(x => x.kind === "EOF" ? " EOF" : ` ${x.negated ? 'not ': ''}'${x.literal}'`)}`;
    }
}
class ErrorTracker {
    private mxpos: PosInfo = {overallPos: -1, line: -1, offset: -1};
    private regexset: Set<string> = new Set();
    private pmatches: MatchAttempt[] = [];
    public record(pos: PosInfo, result: any, att: MatchAttempt) {
        if ((result === null) === att.negated)
            return;
        if (pos.overallPos > this.mxpos.overallPos) {
            this.mxpos = pos;
            this.pmatches = [];
            this.regexset.clear()
        }
        if (this.mxpos.overallPos === pos.overallPos) {
            if(att.kind === "RegexMatch") {
                if(!this.regexset.has(att.literal))
                    this.pmatches.push(att);
                this.regexset.add(att.literal);
            } else {
                this.pmatches.push(att);
            }
        }
    }
    public getErr(): SyntaxErr | null {
        if (this.mxpos.overallPos !== -1)
            return new SyntaxErr(this.mxpos, this.pmatches);
        return null;
    }
}