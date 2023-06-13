//  Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

function writeFile(filename, data) {
  fs.writeFile(filename, data, "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Data written to ${filename} successfully.`);
  });
}

// Example usage: Write 'Hello, World!' to 'example.txt' file
writeFile("write.txt", "Hello, World!");
