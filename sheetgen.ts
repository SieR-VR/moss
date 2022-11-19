import parseMoss from "./parser";
import * as Kind from "./peg/kind";
import * as ValueParser from "./ValueParsers/Parser";
import { isAnimationBlock, isAnimationStatement, isStyleStatement, isTransformStatement } from "./peg/traveler";

const mossSheet = `
style StyleA
{
    backgroundColor : #FFFFFFFF;
}

style StyleB
{
    textColor : #FFFFFFFF;
}

style StyleC : StyleA, StyleB
{
    textColor : #0000FFFF;
}

transform transformA
{
    position : (50%, 48rem, 0);
    rotation : 45d;
    scale : (100% ,30px);
}

animation animationA
{
    0%
    {
        position : (*, *, *);
    }
    100%
    {
        position : (+10%, *, *);
    }
}
`

const SourceFile = parseMoss(mossSheet);

let css = '';

SourceFile.statements.forEach((statement, index) => {
    css += `${statement2CSS(statement)}\n`;
});

console.log(css);

function statement2CSS(statement : Kind.Statement)
{


    if(isStyleStatement(statement)) return `.${statement.name.text} { ${StyleStatement(statement)} }`;
    if(isTransformStatement(statement))
    {
        
    }
    if(isAnimationStatement(statement))
    {

    }
}

function StyleStatement(statement:Kind.StyleStatement)
{
    let css = '';
    (statement.block as Kind.GenericBlock).elements.forEach(element => {

        const value = element.value.startsWith('#')
                            ? ValueParser.convertHexVector(element.value)
                            : element.value;

        css += `${element.name.text} : ${value}; `;
    });

    return css;
}

function AnimationStatement(statement:Kind.AnimationStatement)
{
    let css = '';
    (statement.block as Kind.AnimationBlock).elements.forEach(element => {

    });

    return css;
}

function TransformStatement(statement:Kind.TransformStatement)
{

    return css;
}