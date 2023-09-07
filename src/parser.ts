import { Token } from "./tokenizer";
import { NodeType, TokenType } from './constant';

interface Node {
  type: NodeType
}

interface RootNode extends Node {
  body: ExpressionNode[]
}

const createRootNode = (): RootNode => ({
  type: NodeType.PROGRAM,
  body: []
})

interface ExpressionNode extends Node {
  name: string;
  params: (NumberLiteralNode | ExpressionNode)[]
}

const createCallExpressionNode = (name: string): ExpressionNode => ({
  type: NodeType.CALL_EXPRESSION,
  name,
  params: []
})

interface NumberLiteralNode extends Node {
  value: string;
}

const createNumberLiteralNode = (value: string): NumberLiteralNode => ({
  type: NodeType.NUMBER_LITERAL,
  value
})

// 将token列表转换为AST树
export function parser(tokens: Token[]) {
  const { length } = tokens;
  const rootNode = createRootNode();
  let node: ExpressionNode | NumberLiteralNode;

  let current = -1;
  let token = {} as Token;
  const next = () => {
    current++;
    token = tokens[current];
  }
  next();

  const parseOneLevel = (container: (ExpressionNode | NumberLiteralNode)[]) => {
    if (token.value === '(') {
      next();
      node = createCallExpressionNode(token.value);
      node.name = token.value;
      container.push(node);
      next()
      while (current < length && token.type === TokenType.NUMBER) {
        node.params.push(createNumberLiteralNode(token.value))
        next()
      }
      parseOneLevel(node.params)
    } else {
      next();
    }
  }
  parseOneLevel(rootNode.body)

  return rootNode;
}
