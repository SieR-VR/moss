SourceFile := stmts=Statement*

Statement := StyleStatement | TransformStatement | AnimationStatement | SelectorStatement | ImportStatement

StyleStatement := Whitespace* 'style' Whitespace+ name=Identifier Whitespace* heritages=HeritageClause? Whitespace* block=GenericBlock Whitespace*
TransformStatement := Whitespace* 'transform' Whitespace+ name=Identifier Whitespace* heritages=HeritageClause? Whitespace* block=GenericBlock Whitespace* 
AnimationStatement := Whitespace* 'animation' Whitespace+ name=Identifier Whitespace* heritages=HeritageClause? Whitespace* block=AnimationBlock Whitespace*
ImportStatement := Whitespace* 'import' Whitespace+ list=CommaSeparatedList 'from' Whitespace+ path=StringLiteral Whitespace* ';'
SelectorStatement := Whitespace* selector=Selector Whitespace* block=SelectorBlock Whitespace*

Block := GenericBlock | AnimationBlock | SelectorBlock

GenericBlock := '{' Whitespace+ elements=GenericElement* '}'
AnimationBlock := '{' Whitespace+ elements=AnimationElement* '}'
SelectorBlock := '{' Whitespace+ elements=SelectorElement* '}'

GenericElement := name=PropertyName Whitespace* ':' Whitespace* value=PropertyValue Whitespace* ';' Whitespace*
AnimationElement := progress=AnimationProgress block=GenericBlock Whitespace*
SelectorElement := SelectorStyleElement | SelectorTransformElement | SelectorAnimationElement | SelectorStatement

SelectorStyleElement := Whitespace* 'style' Whitespace* heritages=HeritageClause? Whitespace* block=GenericBlock Whitespace*
SelectorTransformElement := Whitespace* 'transform' Whitespace* heritages=HeritageClause? Whitespace* block=GenericBlock Whitespace*
SelectorAnimationElement := Whitespace* 'animation' Whitespace* heritages=HeritageClause? Whitespace* block=AnimationBlock Whitespace*

HeritageClause := ':' Whitespace* list=CommaSeparatedList
CommaSeparatedList := first=Identifier Whitespace* rest={ ',' Whitespace* next=Identifier Whitespace* }*

Identifier := text='[a-zA-Z_][a-zA-Z0-9_]+'
StringLiteral := text='"[^"]*"'
Whitespace := '[ \t\r\n]'

AnimationProgress := '[0-9][0-9]?%'

PropertyName := text='[a-zA-Z_-][a-zA-Z0-9_-]+'
PropertyValue := text='[^;]+'

Selector := selectorKind='[#\.]?' text='[a-zA-Z_-][a-zA-Z0-9_-]+'