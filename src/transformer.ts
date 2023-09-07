import { NodeType, TransformedNodeType } from "./constant";
import { ExpressionNode, RootNode } from "./parser";
import { Visitor, traverser } from "./traverser";

// 转换ast
export function transformer(ast: RootNode) {
  const newAst = {
    type: TransformedNodeType.PROGRAM,
    body: []
  }
  ast.context = newAst.body; // 将容器挂在原始ast上

  const visitor: Visitor = {
    [NodeType.CALL_EXPRESSION]: {
      enter(node, parent) {
        let expression = {
          type: TransformedNodeType.CALL_EXPRESSION,
          callee: {
            type: TransformedNodeType.IDENTIFIER,
            name: (node as ExpressionNode).name
          },
          arguments: []
        }
        node.context = expression.arguments;
        if (parent?.type === NodeType.PROGRAM) {
          parent.context?.push({
            type: TransformedNodeType.EXPRESSION_STATEMENT,
            expression
          })
        } else {
          parent?.context?.push(expression)
        }
      },
    },
    [NodeType.NUMBER_LITERAL]: {
      enter(node, parent) {
        parent?.context?.push({
          ...node
        })
      },
    },
  }
  traverser(ast, visitor)
  return newAst
}
