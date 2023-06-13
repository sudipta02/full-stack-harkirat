/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
  const start = performance.now();

  // Calculation of the sum from 1 to n
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  const end = performance.now();
  const timeInSeconds = (end - start) / 1000; // Convert milliseconds to seconds

  return timeInSeconds;
}

const n = 1000000;
const time = calculateSumTime(n);
console.log(`Time taken to calculate sum from 1 to ${n}: ${time} seconds`);

  