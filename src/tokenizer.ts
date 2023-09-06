import { TokenType } from './constant';

export interface Token {
  type: TokenType,
  value: string
}

// 词法解析
export const tokenizer = function (input: string) {
  let tokens: Token[] = []; // 存放匹配到的内容
  const { length } = input
  let current = -1; // 指针
  let char = '';
  // 移动指针
  const next = () => {
    current++;
    char = input[current];
  }
  next();
  while (current < length) {
    // 解析圆括号
    if (/\(|\)/.test(char)) {
      tokens.push({ type: TokenType.PAREN, value: char })
      next()
      continue;
    }

    // 解析name
    const LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';
      while (current < length && LETTERS.test(char)) { // 第一个条件防止undefined，undefined会被正则匹配为true
        value += char;
        next();
      }
      tokens.push({ type: TokenType.NAME, value })
      continue;
    }

    // 解析number
    const NUMBERS = /\d/;
    if (NUMBERS.test(char)) {
      let value = '';
      while (current < length && NUMBERS.test(char)) {
        value += char;
        next();
      }
      tokens.push({ type: TokenType.NUMBER, value })
      continue;
    }

    // 都没匹配上时，移动指针
    next();
  }

  return tokens
}
