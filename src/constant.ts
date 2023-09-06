export const INPUT = '(add 2 (subtract 4 2))';

export enum TokenType {
  PAREN,
  NAME,
  NUMBER
}

export const TOKENS = [
  { type: TokenType.PAREN, value: '(' },
  { type: TokenType.NAME, value: 'add' },
  { type: TokenType.NUMBER, value: '2' },
  { type: TokenType.PAREN, value: '(' },
  { type: TokenType.NAME, value: 'subtract' },
  { type: TokenType.NUMBER, value: '4' },
  { type: TokenType.NUMBER, value: '2' },
  { type: TokenType.PAREN, value: ')' },
  { type: TokenType.PAREN, value: ')' },
]
