import { test, expect } from 'vitest';
import { codeGenerator } from '../src/codeGenerator';
import { TRANSFORMED_AST, TransformedNodeType } from '../src/constant';

test("code generator", () => {
  expect(codeGenerator(TRANSFORMED_AST)).toBe('add(2, subtract(4, 2));');
});

test("two ExpressionStatement code generator", () => {

  const ast = {
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
    }, {
      type: TransformedNodeType.EXPRESSION_STATEMENT,
      expression: {
        type: TransformedNodeType.CALL_EXPRESSION,
        callee: {
          type: TransformedNodeType.IDENTIFIER,
          name: 'add'
        },
        arguments: [{
          type: TransformedNodeType.NUMBER_LITERAL,
          value: '1'
        }, {
          type: TransformedNodeType.CALL_EXPRESSION,
          callee: {
            type: TransformedNodeType.IDENTIFIER,
            name: 'subtract'
          },
          arguments: [{
            type: TransformedNodeType.NUMBER_LITERAL,
            value: '2'
          }, {
            type: TransformedNodeType.NUMBER_LITERAL,
            value: '3'
          }]
        }]
      }
    }]
  }
  expect(codeGenerator(ast)).toBe('add(2, subtract(4, 2)); add(1, subtract(2, 3));');
});

