const {NumberToWord}= require("multilingual-number-to-words")


let n = new NumberToWord();
console.log(n.getWord(3));
console.log(n.convertToComaSeparetedString(1234567564000, "LakhsAndCrore"));

