// Make a to do list page where people can add tasks to create a list of things to do.

// Add an option for users to indicate a task is done.
// Allow users to remove a task from the list.
// Use test-driven development to write your business logic, and include the tests in your README.md. After every passing test, make sure to commit your code.
// If you complete the business logic, you may work on adding a user interface. (See the upcoming lessons for more on adding a UI.)

// Business Logic for Constructor aka ToDo ---------

//constructor, ie. database/index
function ToDo() {
  this.listItems = {};
  this.currentId = 0;
}

// this method adds an entry to ToDo
ToDo.prototype.addListItem = function(listItem) {
  listItem.id = this.assignId(); //added this line of code after creating prototype.assignID as a separate, secondary function.
  this.listItems[listItem.id] = listItem; //change from listItem.what to listItem.id for tracking with ID
};

//prototype to assign unique ID
ToDo.prototype.assignID = function() {
  this.currentId += 1;
  return this.currentId;
};


// Business Logic for Objects aka ListItems ---------
function ListItem(what, where, when) {
  this.what = what;
  this.when = when;
  this.where = where;
}
//step one after function:
// let listItem = new ListItem();
//step two:
//let firstItem = new ListItem("grocery", "tomorrow", "Fred Meyer");
//let secondItem = new ListItem("post office", "2pm", "USPS downtown");
//step three:
//toDo.addListItem(firstItem);
//toDo.addListItem(secondItem);