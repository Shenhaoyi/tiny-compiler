import { TOKEN_TYPE } from './constant';

export interface Token {
  type: TOKEN_TYPE,
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
      tokens.push({ type: TOKEN_TYPE.PAREN, value: char })
      next()
      continue;
    }

    // 解析name
    const LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let name = '';
      while (char && LETTERS.test(char)) { // 第一个条件防止undefined，undefined会被正则匹配为true
        name += char;
        next();
      }
      tokens.push({ type: TOKEN_TYPE.NAME, value: name })
      continue;
    }

    // 都没匹配上时，移动指针
    next();
  }

  return tokens
}
