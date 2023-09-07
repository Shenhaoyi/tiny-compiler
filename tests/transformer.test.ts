import { test, expect } from 'vitest';
import { AST, TRANSFORMED_AST } from '../src/constant';
import { transformer } from '../src/transformer';

test('transformer', () => {
  expect(transformer(AST)).toEqual(TRANSFORMED_AST);
});
