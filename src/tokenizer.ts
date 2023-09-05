import { TOKEN_TYPE } from './constant';

export interface Token {
  type: TOKEN_TYPE,
  value: string
}

// 词法解析
export const tokenizer = function (input: string) {
  let tokens: Token[] = []; // 存放匹配到的内容
  let current = 0; // 指针
  const { length } = input
  while (current < length) {
    const char = input[current];
    if (['(', ')'].includes(char) ) {
      tokens.push({ type: TOKEN_TYPE.PAREN, value: char })
    }
    current++;
  }
  return tokens
}
