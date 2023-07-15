const inputString = 'abcadeecfb';
const outputString = removeDuplicates(inputString);
 function removeDuplicates(str) {
  let result = '';
  let charcter = {};

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (!charcter[ch]) {
      result += ch;
      charcter[ch] = true;
    }
  }

  return result;
}

console.log(outputString); 


function countAlphabets(string) {
  const alphabetCount = new Map();

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (/[a-zA-Z]/.test(char)) {
      if (alphabetCount.has(char)) {
        alphabetCount.set(char, alphabetCount.get(char) + 1);
      } else {
        alphabetCount.set(char, 1);
      }
    }
  }

  for (const [char, count] of alphabetCount) {
    console.log(`${char}=${count}`);
  }
}


const string = "abcadeecfb";
countAlphabets(string);