SourceFile := stmts=Statement*

Statement := StyleStatement | TransformStatement | AnimationStatement

StyleStatement := Whitespace* 'style' Whitespace+ name=Identifier Whitespace* parents={ HeritageClause }? Whitespace* block=Block Whitespace*
TransformStatement := Whitespace* 'transform' Whitespace+ name=Identifier Whitespace* parents={ HeritageClause }? Whitespace* block=Block Whitespace* 
AnimationStatement := Whitespace* 'animation' Whitespace+ name=Identifier Whitespace* parents={ HeritageClause }? Whitespace* block=AnimationBlock Whitespace*

SelectorStatement := selector=Selector Whitespace+ block=Block

Block := '\{' Whitespace+ elements={ element=Element Whitespace* }* '\}'
AnimationBlock := '{' Whitespace+ elements={ progress=AnimationProgress element=Block Whitespace* }* '}'
// SelectorBlock := '{' Whitespace+ elements=(element=SelectorElement Whitespace+)* '}'

HeritageClause := ':' Whitespace* first=Identifier Whitespace* last={ ',' Whitespace* next=Identifier Whitespace* }*

Element := name=PropertyName Whitespace* ':' Whitespace* value=PropertyValue Whitespace* ';'

Identifier := text='[a-zA-Z_][a-zA-Z0-9_]+'
Whitespace := '[ \t\r\n]'

AnimationProgress := '[0-9][0-9]?%'

PropertyName := text='[a-zA-Z_-][a-zA-Z0-9_-]+'
PropertyValue := text='[^;]+'

Selector := selectorKind='[#\.]?' text='[a-zA-Z_-][a-zA-Z0-9_-]+'