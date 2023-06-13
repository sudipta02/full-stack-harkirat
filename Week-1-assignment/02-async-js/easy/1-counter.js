//Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function counter() {
  let count = 0;

  // Function to increment the counter and display the value
  function incrementCounter() {
    count++;
    console.log(count);
  }

  // Start the counter by calling the incrementCounter function every second
  setInterval(incrementCounter, 1000);
}

// Start the counter
counter();
