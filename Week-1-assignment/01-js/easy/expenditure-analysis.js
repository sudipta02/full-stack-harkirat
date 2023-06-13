/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  // Iterate over each transaction
  for (let transaction of transactions) {
    const { category, price } = transaction;

    // If the category is not present in the categoryMap, initialize it with 0
    if (!categoryMap[category]) {
      categoryMap[category] = 0;
    }

    // Add the price to the total amount spent on the category
    categoryMap[category] += price;
  }

  // Convert the categoryMap into an array of objects
  const result = Object.entries(categoryMap).map(([category, totalSpent]) => ({
    [category]: totalSpent,
  }));

  return result;
}

const transactions = [
  { itemName: "Item 1", category: "Category 1", price: 10, timestamp: "2023-06-13" },
  { itemName: "Item 2", category: "Category 2", price: 20, timestamp: "2023-06-13" },
  { itemName: "Item 3", category: "Category 1", price: 15, timestamp: "2023-06-13" },
  { itemName: "Item 4", category: "Category 2", price: 5, timestamp: "2023-06-13" },
  { itemName: "Item 5", category: "Category 1", price: 25, timestamp: "2023-06-13" }
];

console.log(calculateTotalSpentByCategory(transactions));


// module.exports = calculateTotalSpentByCategory;
