import { CreateTokens, Token, TokenType } from "./expressionLexicalAnalyzer";
import { Stack } from "./Stack";

const operatorPriority : {[key:string] : number} = {
    '+' : 0,
    '-' : 0,
    '*' : 10,
    '/' : 10,
    '%' : 10,
    '**' : 30,
}

interface treeNode
{
    value? : Token

    left? : treeNode
    right? : treeNode
}

function ParseTokens(tokens : Token[])
{
    const root : treeNode = {};


    const expressionStack : Stack<number> = new Stack; 

    if(tokens.length === 3)
    {
        root.value = tokens[1];
        root.left = { value : tokens[0]};
        root.right = { value : tokens[2]};
        return root;
    }
    if(tokens.length === 1)
    {
        root.value = tokens[0];
        root.left = { };
        root.right = { };
        return root;
    }
    
    for(let i = 0; i < tokens.length; i++)
    {
        const token = tokens[i];

        if(token.type === TokenType.Keyword)
        {
            if(!expressionStack.isEmpty()){
                const stackTop = expressionStack.peek()!;

                if(operatorPriority[tokens[stackTop].value] < operatorPriority[token.value])
                {
                    root.value = tokens[stackTop];
                    root.left = ParseTokens(tokens.slice(0, stackTop));
                    root.right = ParseTokens(tokens.slice(stackTop + 1));

                    break;
                }
            }

            expressionStack.push(i);
        }
    }
    return root;
}

console.log(JSON.stringify(ParseTokens(CreateTokens("213+29/12923+1*65")), null, '  '));
