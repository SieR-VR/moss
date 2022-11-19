import * as Kind from "../../peg/kind" 

interface PreprocessorContext
{
    pool : Map<string, Kind.Statement>;
}