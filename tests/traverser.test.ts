import { test, expect } from 'vitest';
import { Visitor, traverser } from '../src/traverser';
import { AST, NodeType } from '../src/constant';

test('traverser', () => {
  const callList: [string, NodeType, NodeType | ''][] = [] // 调用记录

  const visitor: Visitor = {
    [NodeType.PROGRAM]: {
      enter(node) {
        callList.push(["program-enter", node.type, ""]);
      },
      exit(node) {
        callList.push(["program-exit", node.type, ""]);
      },
    },

    [NodeType.CALL_EXPRESSION]: {
      enter(node, parent) {
        callList.push(["callExpression-enter", node.type, parent!.type]);
      },
      exit(node, parent) {
        callList.push(["callExpression-exit", node.type, parent!.type]);
      },
    },

    [NodeType.NUMBER_LITERAL]: {
      enter(node, parent) {
        callList.push(["numberLiteral-enter", node.type, parent!.type]);
      },
      exit(node, parent) {
        callList.push(["numberLiteral-exit", node.type, parent!.type]);
      },
    },
  };

  traverser(AST, visitor)

  expect(callList).toEqual([
    ["program-enter", NodeType.PROGRAM, ""],
    ["callExpression-enter", NodeType.CALL_EXPRESSION, NodeType.PROGRAM],
    ["numberLiteral-enter", NodeType.NUMBER_LITERAL, NodeType.CALL_EXPRESSION],
    ["numberLiteral-exit", NodeType.NUMBER_LITERAL, NodeType.CALL_EXPRESSION],
    ["callExpression-enter", NodeType.CALL_EXPRESSION, NodeType.CALL_EXPRESSION,],
    ["numberLiteral-enter", NodeType.NUMBER_LITERAL, NodeType.CALL_EXPRESSION],
    ["numberLiteral-exit", NodeType.NUMBER_LITERAL, NodeType.CALL_EXPRESSION],
    ["numberLiteral-enter", NodeType.NUMBER_LITERAL, NodeType.CALL_EXPRESSION],
    ["numberLiteral-exit", NodeType.NUMBER_LITERAL, NodeType.CALL_EXPRESSION],
    ["callExpression-exit", NodeType.CALL_EXPRESSION, NodeType.CALL_EXPRESSION],
    ["callExpression-exit", NodeType.CALL_EXPRESSION, NodeType.PROGRAM],
    ["program-exit", NodeType.PROGRAM, ""],
  ]);
});


