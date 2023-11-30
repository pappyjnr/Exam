// Generate a random alpha-numeric character string similar to a UUID
function generateRandomString() {
  return crypto.randomUUID();
}

// Example usage
const randomString = generateRandomString();
console.log(randomString);
