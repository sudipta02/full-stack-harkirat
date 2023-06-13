// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

/*
For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/

const fs = require("fs");

function removeExtraSpaces(filename) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // Remove extra spaces using regular expression
    const cleanData = data.replace(/\s+/g, " ");

    fs.writeFile(filename, cleanData, "utf8", (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(
        `Extra spaces removed and file '${filename}' updated successfully.`
      );
    });
  });
}

// Example usage: Remove extra spaces from 'example.txt' file
removeExtraSpaces("example.txt");
