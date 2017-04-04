var todoList = document.querySelector('#todo-list');
var inputDiv = document.querySelector('#new-todo');
var newTodoInput = document.querySelector('#new-todo > input');

// TODO: Create an array to hold the items
var items = [];

function itemTemplate(text) {
  return `
    <div class="item">
      <input type="checkbox">
      <p>${text}</p>
    </div>
  `;
}

// TODO: Write a render function that displays a given *array* of items
// inside some div
function render(displayDiv, itemsArr) {
}

function submitTodo(text) {
  var template = itemTemplate(text);
  // TODO: Store the new item inside our array
  items.push(text);
  // TODO: Store the updated array of items inside localStorage
  localStorage.setItem('items', JSON.stringify(items));
  todoList.innerHTML = todoList.innerHTML + template;
}

newTodoInput.addEventListener('keydown', function(e) {
  if (e.keyCode === 13 && this.value === '') {
    submitTodo(this.value);
    this.value = '';
  }
})

// render(todoList, items);

// TODO: On initial page load, get data from localStorage

// TODO: Store the state of the to-do items in addtion to their names,
// and test to see if it renders correctly

// TODO: Attach an event listener to register the click on checkboxes
// (Naive method?)

// TODO: Write a function that, when a checkbox is clicked, the "done"
// attribute of the corresponding item in the items array is toggled
// (Hint: store the item index in the HTML markup using the data-index
// attribute)