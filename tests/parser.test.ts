import { test, expect } from 'vitest';
import { TOKENS, AST, NodeType, TokenType } from '../src/constant';
import { parser } from '../src/parser';

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

test('one level 2', () => {
  const tokens = [
    { type: TokenType.PAREN, value: '(' },
    { type: TokenType.NAME, value: 'add' },
    { type: TokenType.NUMBER, value: '2' },
    { type: TokenType.PAREN, value: ')' },
    { type: TokenType.PAREN, value: '(' },
    { type: TokenType.NAME, value: 'add' },
    { type: TokenType.NUMBER, value: '3' },
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
      },
      ]
    }, {
      type: NodeType.CALL_EXPRESSION,
      name: 'add',
      params: [{
        type: NodeType.NUMBER_LITERAL,
        value: '3',
      },
      ]
    }]
  }
  expect(parser(tokens)).toEqual(ast);
});

test('parser', () => {
  expect(parser(TOKENS)).toEqual(AST);
});

test('three level', () => {
  const tokens = [
    { type: TokenType.PAREN, value: '(' },
    { type: TokenType.NAME, value: 'add' },
    { type: TokenType.NUMBER, value: '2' },
    { type: TokenType.PAREN, value: '(' },
    { type: TokenType.NAME, value: 'subtract' },
    { type: TokenType.NUMBER, value: '4' },
    { type: TokenType.NUMBER, value: '2' },
    { type: TokenType.PAREN, value: '(' },
    { type: TokenType.NAME, value: 'subtract' },
    { type: TokenType.NUMBER, value: '5' },
    { type: TokenType.NUMBER, value: '0' },
    { type: TokenType.PAREN, value: ')' },
    { type: TokenType.PAREN, value: ')' },
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
      }, {
        type: NodeType.CALL_EXPRESSION,
        name: 'subtract',
        params: [{
          type: NodeType.NUMBER_LITERAL,
          value: '4',
        }, {
          type: NodeType.NUMBER_LITERAL,
          value: '2',
        }, {
          type: NodeType.CALL_EXPRESSION,
          name: 'subtract',
          params: [{
            type: NodeType.NUMBER_LITERAL,
            value: '5',
          }, {
            type: NodeType.NUMBER_LITERAL,
            value: '0',
          }]
        }
        ]
      }]
    }]
  }
  expect(parser(tokens)).toEqual(ast);
});
