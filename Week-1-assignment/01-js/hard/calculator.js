/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.validateNumber(number);
    this.result += number;
  }

  subtract(number) {
    this.validateNumber(number);
    this.result -= number;
  }

  multiply(number) {
    this.validateNumber(number);
    this.result *= number;
  }

  divide(number) {
    this.validateNumber(number);
    if (number === 0) {
      throw new Error("Cannot divide by zero.");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const sanitizedExpression = expression.replace(/\s+/g, ""); // Remove all whitespace

    if (!/^[0-9+\-*/().\s]+$/.test(sanitizedExpression)) {
      throw new Error(
        "Invalid expression. Only numerical values and arithmetic operators are allowed."
      );
    }

    try {
      this.result = eval(sanitizedExpression); // Using eval() for simplicity, but be cautious with user inputs
    } catch (error) {
      throw new Error("Invalid expression. Please check your input.");
    }
  }

  validateNumber(number) {
    if (typeof number !== "number" || isNaN(number)) {
      throw new Error(
        "Invalid number. Please provide a valid numerical value."
      );
    }
  }
}

const calculator = new Calculator();

calculator.add(5); // result = 5
calculator.subtract(2); // result = 3
calculator.multiply(4); // result = 12
calculator.divide(3); // result = 4
console.log(calculator.getResult()); // Output: 4

calculator.clear(); // result = 0
calculator.calculate("10 + 2 * (6 - (4 + 1) / 2) + b");
console.log(calculator.getResult()); // Output: 19



// module.exports = Calculator;
