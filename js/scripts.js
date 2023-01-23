// Make a to do list page where people can add tasks to create a list of things to do.

// Add an option for users to indicate a task is done.
// Allow users to remove a task from the list.
// Use test-driven development to write your business logic, and include the tests in your README.md. After every passing test, make sure to commit your code.
// If you complete the business logic, you may work on adding a user interface. (See the upcoming lessons for more on adding a UI.)

// Business Logic for Constructor aka ToDo ---------

function ToDo() {
  
}


// Business Logic for Objects aka ListItems ---------
function ListItems(what, where, when) {
  this.what = what;
  this.when = when;
  this.where = where;
}
//step one after function:
// let listItems = new ListItems();
//step two:
//let firstItem = new ListItems("grocery", "tomorrow", "Fred Meyer");