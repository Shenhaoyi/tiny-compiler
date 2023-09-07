import { AST, NodeType } from './constant';
import { RootNode, ChildNode, ExpressionNode } from './parser';

export function traverser(ast: RootNode) {
  const result = [] as any[];
  const traverseArray = (array: ChildNode[]) => {
    array.forEach(traverseNode)
  }

  function traverseNode(node: ChildNode | RootNode) {
    switch (node.type) {
      case NodeType.NUMBER_LITERAL:
        result.push(node.type)
        break;
      case NodeType.PROGRAM:
        result.push(node.type)
        traverseArray((node as RootNode).body)
        break;
      case NodeType.CALL_EXPRESSION:
        result.push(node.type)
        traverseArray((node as ExpressionNode).params)
        break;
    }
  }
  traverseNode(ast);
  return result;
}
