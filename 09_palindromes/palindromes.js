const palindromes = function (text) {
  const cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9]+/g,"");
  const temp = [...cleanText].reverse().join("");
  if (temp === cleanText) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
