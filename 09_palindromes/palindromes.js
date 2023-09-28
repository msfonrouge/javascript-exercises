const palindromes = function (text) {
  let punctuation = /[\.,?!" "]/g;
  text = text.toLowerCase().replace(punctuation, "");
  return text === text.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
