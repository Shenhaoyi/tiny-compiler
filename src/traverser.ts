import { NodeType } from './constant';
import { RootNode, ChildNode, ExpressionNode } from './parser';

type VisitorFn = (node: ChildNode | RootNode, parent?: ChildNode | RootNode) => void
interface VisitorOption {
  enter: VisitorFn;
  exit: VisitorFn;
}

export interface Visitor {
  [NodeType.PROGRAM]: VisitorOption,
  [NodeType.CALL_EXPRESSION]: VisitorOption,
  [NodeType.NUMBER_LITERAL]: VisitorOption,
}

export function traverser(ast: RootNode, visitor: Visitor) {
  const traverseArray = (array: ChildNode[], parent?: ChildNode | RootNode) => {
    array.forEach((node) => {
      traverseNode(node, parent)
    })
  }

  const traverseNode = (node: ChildNode | RootNode, parent?: ChildNode | RootNode) => {
    const { type } = node
    switch (type) {
      case NodeType.NUMBER_LITERAL:
        visitor[type].enter(node, parent);
        visitor[type].exit(node, parent);
        break;
      case NodeType.PROGRAM:
        visitor[type].enter(node);
        traverseArray((node as RootNode).body, node)
        visitor[type].exit(node);
        break;
      case NodeType.CALL_EXPRESSION:
        visitor[type].enter(node, parent);
        traverseArray((node as ExpressionNode).params, node)
        visitor[type].exit(node, parent);
        break;
    }
  }
  traverseNode(ast);
}
