/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    if (typeof todo !== "string") {
      throw new Error("Invalid todo. Please provide a valid string value.");
    }
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (
      typeof indexOfTodo !== "number" ||
      indexOfTodo < 0 ||
      indexOfTodo >= this.todos.length
    ) {
      throw new Error(
        "Invalid index. Please provide a valid index within the range of todos."
      );
    }
    this.todos.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (typeof index !== "number" || index < 0 || index >= this.todos.length) {
      throw new Error(
        "Invalid index. Please provide a valid index within the range of todos."
      );
    }
    if (typeof updatedTodo !== "string") {
      throw new Error(
        "Invalid updated todo. Please provide a valid string value."
      );
    }
    this.todos[index] = updatedTodo;
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (
      typeof indexOfTodo !== "number" ||
      indexOfTodo < 0 ||
      indexOfTodo >= this.todos.length
    ) {
      throw new Error(
        "Invalid index. Please provide a valid index within the range of todos."
      );
    }
    return this.todos[indexOfTodo];
  }

  clear() {
    this.todos = [];
  }
}


const todoList = new Todo();

todoList.add("Buy groceries");
todoList.add("Finish homework");
todoList.add("Go for a run");

console.log(todoList.getAll()); // Output: ["Buy groceries", "Finish homework", "Go for a run"]

todoList.remove(1);
console.log(todoList.getAll()); // Output: ["Buy groceries", "Go for a run"]

todoList.update(0, "Buy new shoes");
console.log(todoList.get(0)); // Output: "Buy new shoes"

todoList.clear();
console.log(todoList.getAll()); // Output: []


module.exports = Todo;
