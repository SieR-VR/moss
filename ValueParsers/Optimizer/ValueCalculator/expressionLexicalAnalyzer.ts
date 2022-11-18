
interface Token
{
    value : string
    type : number // 0 = Number, 1 = keyword
}

export function CreateTokens(formula:string)
{
    let lastTokenType = 0; 
    let tokens : Token[] = [{type:0, value:''}];

    const regnum : RegExp = /[^0-9]/;

    for(let i = 0; i < formula.length; i++)
    {
        while(true)
        {
            if(lastTokenType === 0)
            {
                if(!Number.isNaN(parseInt(formula[i]))) // is number
                {
                    tokens[tokens.length-1] += formula[i];
                }
                else // is keyword
                {
                    tokens.push(formula[i]);
                    lastTokenType = 1;
                    break;
                }
            }
            else
            {
                if(Number.isNaN(parseInt(formula[i]))) // is keyword
                {
                    tokens[tokens.length-1] += formula[i];
                }
                else // is number
                {
                    tokens.push(formula[i]);
                    lastTokenType = 0;
                    break;
                }
            }
            i++;
        }
    }

    return tokens;
}