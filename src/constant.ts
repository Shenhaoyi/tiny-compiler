export const INPUT = '(add 2 (subtract 4 2))';

export enum TokenType {
  PAREN,
  NAME,
  NUMBER
}

export const TOKENS = [
  { type: TokenType.PAREN, value: '(' },
  { type: TokenType.NAME, value: 'add' },
  { type: TokenType.NUMBER, value: '2' },
  { type: TokenType.PAREN, value: '(' },
  { type: TokenType.NAME, value: 'subtract' },
  { type: TokenType.NUMBER, value: '4' },
  { type: TokenType.NUMBER, value: '2' },
  { type: TokenType.PAREN, value: ')' },
  { type: TokenType.PAREN, value: ')' },
]

export enum NodeType {
  PROGRAM = 'Program',
  CALL_EXPRESSION = 'CallExpression',
  NUMBER_LITERAL = 'NumberLiteral'
}

export const AST = {
  type: NodeType.PROGRAM,
  body: [{
    type: NodeType.CALL_EXPRESSION,
    name: 'add',
    params: [{
      type: NodeType.NUMBER_LITERAL,
      value: '2',
    }, {
      type: NodeType.CALL_EXPRESSION,
      name: 'subtract',
      params: [{
        type: NodeType.NUMBER_LITERAL,
        value: '4',
      }, {
        type: NodeType.NUMBER_LITERAL,
        value: '2',
      }]
    }]
  }]
}

export enum TransformedNodeType {
  PROGRAM = 'Program',
  CALL_EXPRESSION = 'CallExpression',
  NUMBER_LITERAL = 'NumberLiteral',
  EXPRESSION_STATEMENT = 'ExpressionStatement',
  IDENTIFIER = 'Identifier'
}

export const TRANSFORMED_AST = {
  type: TransformedNodeType.PROGRAM,
  body: [{
    type: TransformedNodeType.EXPRESSION_STATEMENT,
    expression: {
      type: TransformedNodeType.CALL_EXPRESSION,
      callee: {
        type: TransformedNodeType.IDENTIFIER,
        name: 'add'
      },
      arguments: [{
        type: TransformedNodeType.NUMBER_LITERAL,
        value: '2'
      }, {
        type: TransformedNodeType.CALL_EXPRESSION,
        callee: {
          type: TransformedNodeType.IDENTIFIER,
          name: 'subtract'
        },
        arguments: [{
          type: TransformedNodeType.NUMBER_LITERAL,
          value: '4'
        }, {
          type: TransformedNodeType.NUMBER_LITERAL,
          value: '2'
        }]
      }]
    }
  }]
}
