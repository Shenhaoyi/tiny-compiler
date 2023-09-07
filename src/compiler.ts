import { parser } from "./parser";
import { tokenizer } from "./tokenizer";
import { transformer } from './transformer';
import { codeGenerator } from './codeGenerator';

export function compiler(code: string) {
  const tokens = tokenizer(code)
  const ast = parser(tokens)
  const newAst = transformer(ast)
  const newCode = codeGenerator(newAst)
  return newCode;
}
