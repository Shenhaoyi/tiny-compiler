import { test, expect } from 'vitest';
import { TOKENS, AST, NodeType, TokenType } from '../src/constant';
import { parser } from '../src/parser';

test.skip('parser', () => {
  expect(parser(TOKENS)).toEqual(AST);
});

test('one level', () => {
  const tokens = [
    { type: TokenType.PAREN, value: '(' },
    { type: TokenType.NAME, value: 'add' },
    { type: TokenType.NUMBER, value: '2' },
    { type: TokenType.PAREN, value: ')' },
  ]
  const ast = {
    type: NodeType.PROGRAM,
    body: [{
      type: NodeType.CALL_EXPRESSION,
      name: 'add',
      params: [{
        type: NodeType.NUMBER_LITERAL,
        value: '2',
      }]
    }]
  }
  expect(parser(tokens)).toEqual(ast);
});
