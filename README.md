# To Do List

#### By Eliot Gronstal and Sarah Andyshak

#### A to do list page where people can add tasks to create a list of things to do.

## Technologies Used

* Javascript
* HTML
* CSS

## Description

A to do list page where people can add tasks to create a list of things to do created using TDD during Week 4 of Epicodus Coding School.


## TDD

Describe: function ToDo()

* Test One
Test: "This will add an item to our To Do list."
Code: 
ToDo.prototype.addlistItem = function(listItem) {
Expected Output:  ToDo {listItems: {…}}
listItems: ...

<!-- ToDo.prototype.addlistItem = function(listItem) {
  this.listItems[listItem.what] = listItem;
}; -->

Describe: function ListItems()

* Test One
Test: "It will create a list item."
Code: 
function ListItem(what, where, when);
let firstItem = new ListItem("grocery", "tomorrow", "Fred Meyer");
Expected Output: firstItem;
ListItems {what: 'grocery', when: 'Fred Meyer', where: 'tomorrow'}

<!--
function ListItem(what, where, when) {
  this.what = what;
  this.when = when;
  this.where = where;
}
-->

* Test Two


## Setup/Installation Requirements

* Clone the repository to your computer from Github.
* Enjoy reviewing our TDD in our README and seeing what we made in our Javascript.
* Hopefully soon we will format it with HTML and make it interactive!

## Known Bugs

* N/A

* If you have any questions or concerns please email Sarah <sarah.andyshak@gmail.com> or Eliot <eliot.lauren@gmail.com>.

## License

MIT

Copyright (c) 2023 Sarah Andyshak, Eliot Gronstal