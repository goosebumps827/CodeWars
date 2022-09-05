const getMatchingBracketIndexes = (code) => {
    const stack = [];
    const indexes = {};
    for (let i = 0; i < code.length; i++) {
      if (code[i] === '[') stack.push(i);
      else if (code[i] === ']') {
        const start = stack.pop();
        indexes[i] = start;
        indexes[start] = i;
      }
    }
    return indexes;
  };
  
  function interpreter(code, tape) {
    const data = [...tape].map(x => x === '1');
    const matching = getMatchingBracketIndexes(code);
    let p = 0;
    for (let i = 0; i < code.length && p >= 0 && p < data.length; i++) {
      if (code[i] === '*') data[p] = !data[p];
      else if (code[i] === '>') p++;
      else if (code[i] === '<') p--;
      else if (code[i] === '[' && !data[p]) i = matching[i];
      else if (code[i] === ']' && data[p]) i = matching[i];
    }
    console.log('data', data)
    return data.map(Number).join('');
  }