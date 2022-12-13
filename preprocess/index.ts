import * as Kind from "@/peg/kind" 
import { isStyleStatement, isTransformStatement, isAnimationStatement } from "@/peg/traveler";

interface PreprocessorContext
{
    dataPool : Map<string, Kind.Statement>;
    parentTransform? : Kind.TransformStatement;
}

function InitializePool(source : Kind.SourceFile)
{
    const ctx : PreprocessorContext = {dataPool : new Map}

    source.statements.forEach(statement => {
        if(isStyleStatement(statement) || 
            isTransformStatement(statement) || 
            isAnimationStatement(statement))
        {
            ctx.dataPool.set(statement.name.text, statement);
        }
    });

    return ctx;
}

function AdjustTransform(ctx: PreprocessorContext)
{

}