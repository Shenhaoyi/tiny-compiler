import { test, expect } from 'vitest';
import { tokenizer } from '../src/tokenizer';
import { INPUT, TOKENS, TOKEN_TYPE } from '../src/constant';

test('tokenizer', () => {
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

test('number', () => {
  const input = '2 4 123';
  const tokens = [TOKENS[2], TOKENS[5], { type: TOKEN_TYPE.NUMBER, value: '123' }];
  expect(tokenizer(input)).toEqual(tokens);
});
