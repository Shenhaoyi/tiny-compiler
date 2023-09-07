import { test, expect } from 'vitest';
import { tokenizer } from '../src/tokenizer';
import { SOURCE_CODE, TOKENS, TokenType } from '../src/constant';

test('tokenizer', () => {
  expect(tokenizer(SOURCE_CODE)).toEqual(TOKENS);
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

test('number', () => {
  const input = '2 4 123';
  const tokens = [TOKENS[2], TOKENS[5], { type: TokenType.NUMBER, value: '123' }];
  expect(tokenizer(input)).toEqual(tokens);
});
