import { test, expect } from 'vitest';
import { tokenizer } from '../src/tokenizer';
import { INPUT, TOKENS } from '../src/constant';

test.skip('tokenizer', () => {
  expect(tokenizer(INPUT)).toEqual(TOKENS);
});

test('paren', () => {
  const input = '()';
  const tokens = [TOKENS[0], TOKENS[8]];
  expect(tokenizer(input)).toEqual(tokens);
});

test('name', () => {
  const input = 'add subtract';
  const tokens = [TOKENS[1], TOKENS[4]];
  expect(tokenizer(input)).toEqual(tokens);
});
