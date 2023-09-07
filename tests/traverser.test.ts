import { test, expect } from 'vitest';
import { traverser } from '../src/traverser';
import { AST } from '../src/constant';

test('traverser', () => {
  expect(traverser(AST)).toEqual([0, 1, 2, 1, 2, 2])
});


