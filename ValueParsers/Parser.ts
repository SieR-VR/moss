import * as Vectors from "./vectors"

const VectorConverters = [Vectors.hex2int, Vectors.hex2vector2, Vectors.hex2vector3, Vectors.hex2vector4];

export function convertHexVector(string : string)
{
    const hex = string.replace('#', '');

    return VectorConverters[Math.floor((hex.length-1)/2)](hex);
}