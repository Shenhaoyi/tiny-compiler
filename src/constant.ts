export const INPUT = '(add 2 (subtract 4 2))';

export enum TOKEN_TYPE {
  PAREN,
  NAME,
  NUMBER
}

export const TOKENS = [
  { type: TOKEN_TYPE.PAREN, value: '(' },
  { type: TOKEN_TYPE.NAME, value: 'add' },
  { type: TOKEN_TYPE.NUMBER, value: '2' },
  { type: TOKEN_TYPE.PAREN, value: '(' },
  { type: TOKEN_TYPE.NAME, value: 'subtract' },
  { type: TOKEN_TYPE.NUMBER, value: '4' },
  { type: TOKEN_TYPE.NUMBER, value: '2' },
  { type: TOKEN_TYPE.PAREN, value: ')' },
  { type: TOKEN_TYPE.PAREN, value: ')' },
]
