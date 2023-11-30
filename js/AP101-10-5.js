function generateRandomAlphaNumeric() {
  const generateRandomChar = (min, max) =>
    String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);
  let result = "";

  result += generateRandomChar(65, 90);
  result += generateRandomChar(65, 90);

  result += Math.floor(Math.random() * 10);
  result += Math.floor(Math.random() * 10);

  result += generateRandomChar(65, 90);
  result += generateRandomChar(65, 90);

  result += Math.floor(Math.random() * 10);
  result += Math.floor(Math.random() * 10);

  result += generateRandomChar(65, 90);
  result += generateRandomChar(65, 90);

  result += Math.floor(Math.random() * 10);
  result += Math.floor(Math.random() * 10);

  return result;
}
console.log(generateRandomAlphaNumeric());
