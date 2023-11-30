{
  /*Write a loop to find the Golden Numbers of a Fibonacci Series. Use the following
Fibonacci Series: 0,1, 1, 2, 3, 5, 8, 13, 21

The golden ratio is derived by dividing each number of the Fibonacci series by its
 immediate predecessor. 
 */
}
const series = [0, 1, 1, 2, 3, 5, 8, 13, 21];
const goldenNumber = [];

for (let counter = 2; counter <= series.length; counter++) {
  const currentFibonacci = series[counter];
  const previousFibonacci = series[counter - 1];
  const goldenRatio = currentFibonacci / previousFibonacci;

  goldenNumber.push(goldenRatio);
}

console.log(`golden number: ${goldenNumber}`);
