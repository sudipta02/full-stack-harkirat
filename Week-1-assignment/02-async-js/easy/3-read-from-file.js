//  Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

function readFileAndPrint(filename) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(data);
  });
}

// Example usage: Read and print the contents of 'example.txt' file
readFileAndPrint("example.txt");
let sum = 0;
for (let i = 0; i < 10_000_000_000; i++) {
  sum++;
}
console.log(sum);
