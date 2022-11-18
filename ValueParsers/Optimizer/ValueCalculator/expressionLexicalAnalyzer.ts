
interface Token {
    value: string
    type: TokenType // 0 = Number, 1 = keyword
}

enum TokenType {
    Number,
    Keyword
}

const regnum: RegExp = /[0-9]/;

export function CreateTokens(formula: string) {
    let tokens: Token[] = [];
    
    for (let i = 0; i < formula.length;) {
        if (regnum.test(formula[i])) {
            const [length, value] = parseNumber(formula.slice(i));
            tokens.push({ value, type: TokenType.Number });
            i += length;
        }
        else {
            tokens.push({ value: formula[i], type: TokenType.Keyword });
            i++;
        }
    }

    return tokens;
}

function parseNumber(toParse: string): [number, string] {
    let value = "";
    let i = 0;

    while (regnum.test(toParse[i])) {
        value += toParse[i];
        i++;
    }

    return [i, value];
}

console.log(CreateTokens("1+2*3333"));