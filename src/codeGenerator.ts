import { TransformedNodeType } from "./constant";

export function codeGenerator(node) {
  switch (node.type) {
    case TransformedNodeType.PROGRAM:
      return node.body.map(codeGenerator).join(' ');
    case TransformedNodeType.EXPRESSION_STATEMENT:
      return codeGenerator(node.expression) + ';'
    case TransformedNodeType.CALL_EXPRESSION:
      return node.callee.name + '(' + node.arguments.map(codeGenerator).join(', ') + ')'
    case TransformedNodeType.NUMBER_LITERAL:
      return node.value
    default:
  }
}
