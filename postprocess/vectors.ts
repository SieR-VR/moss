export function hex2int(value:string)
{
    const colorBits = parseInt(value, 16);

    const rgba = colorBits>>0&0xFF;

    return `(${rgba})`;
}

export function hex2vector4(value:string)
{
    const colorBits = parseInt(value, 16);

    const rgba = [colorBits>>24&0xFF, colorBits>>16&0xFF, colorBits>>8&0xFF, colorBits>>0&0xFF];

    return `(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
}

export function hex2vector3(value:string)
{
    const colorBits = parseInt(value, 16);

    const rgba = [colorBits>>16&0xFF, colorBits>>8&0xFF, colorBits>>0&0xFF];

    return `(${rgba[0]}, ${rgba[1]}, ${rgba[2]})`;
}

export function hex2vector2(value:string)
{
    const colorBits = parseInt(value, 16);

    const rgba = [colorBits>>8&0xFF, colorBits>>0&0xFF];

    return `(${rgba[0]}, ${rgba[1]})`;
}