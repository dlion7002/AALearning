function isPangram(string){
    let codex = /\a+\f/g;
    return codex.test(string);
  }


const test = "af."
console.log(isPangram(test));
