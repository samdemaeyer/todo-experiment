function convertToBool(str) {
  if (['true', 'false'].includes(str)) {
    return str === 'true';
  }
}

function toggleToDo(element){
  const faClassName = element.getElementsByClassName('fa')[0];
  const isCompleted = convertToBool(element.getAttribute('data-completed'));
  let listWrapperId = 'completed';

  if (isCompleted) {
    listWrapperId = 'not-completed';
  }

  element.setAttribute('data-completed', !isCompleted); //Why are we changing it to true/false
  faClassName.classList.toggle('fa-check-square');
  faClassName.classList.toggle('fa-square-o');

  document.getElementById(listWrapperId).appendChild(element);
  element.classList.add('transition-in');
  function transition(timeoutID){
    element.classList.remove('transition-in');
    window.clearTimeout(timeoutID);
  }
  const timeoutID = window.setTimeout(() => transition(timeoutID), 100);

  validateListItems('not-completed');
  validateListItems('completed');

  //When there are no items and you manually add an item, the "there are no items" message remains


}
document.getElementById('addButton').addEventListener('click', function(){
  var itemToAdd = document.getElementById('entered-listItem').value;

  ammendHtml(itemToAdd);
  validateListItems('not-completed');
  document.getElementById('entered-listItem').value = '';
});

document.getElementById('entered-listItem').addEventListener('input', function(){
  const inputValue = document.getElementById('entered-listItem').value;
  const button = document.getElementById('addButton');
  if (inputValue.trim()) {
    button.removeAttribute('disabled');
  }
  else {
    button.setAttribute('disabled', '');
  }

});


function validateListItems(wrapperId) {
  const wrapperElement = document.getElementById(wrapperId);
  const notCompletedLength = wrapperElement.getElementsByClassName('item').length;//Stores the number of items

  if (notCompletedLength === 0) {//If statement for if the li element equals 0, then create a new li saying 'There are no items'
    const noItems = document.createElement('li'); //create a new li element
    noItems.classList.add('no-items-placeholder'); //Add class 'no-items-placeholder'
    noItems.innerText = 'There are no items';//Add innertext to the li element
    wrapperElement.appendChild(noItems);//append noItems to parent which is ul
  } else {
    const elementToRemove = wrapperElement.querySelector('.no-items-placeholder'); //get id for for no

    if (elementToRemove) {
      wrapperElement.removeChild(elementToRemove);
    }
  }
}

const toDoItems = [ //Create an array of 6 objects with a flag completed or not completed
  { name: 'Todo 1', completed: false },
  { name: 'Todo 2', completed: false },
  { name: 'Todo 3', completed: false },
  { name: 'Todo 4', completed: true },
  { name: 'Todo 5', completed: true },
  { name: 'Todo 6', completed: true },
];


toDoItems.forEach(toDoItem => ammendHtml(toDoItem));


function ammendHtml (item) {
  let listWrapperId = 'not-completed'; //Set default ids for the wrapper of completed or not completed list items
  let iconClass = 'fa-square-o';//Set default icon class for completed or not completed item

  if (item.completed) { //Loop through the array to overwite the defaults if needed
    listWrapperId = 'completed';
    iconClass = 'fa-check-square';
  }

  const newListItem = document.createElement('li'); //Create a new li element
  newListItem.classList.add('item'); //Add a class called 'item'
  newListItem.setAttribute('data-completed', item.completed);
  newListItem.setAttribute('onclick', 'toggleToDo(this)');//set onclick attribute and assign toggleToDo(this)
  const newIcon = document.createElement('i');//Create a new i tag
  newIcon.classList.add(iconClass);//Add a the 'iconClass' class  to the i tag
  newIcon.classList.add('fa');//Add a the 'fa' class  to the i tag
  const newListTitle = document.createElement('span');//Create a span

  if(typeof item === 'string') {
    newListTitle.innerText = item;
  }
  else {
    newListTitle.innerText = item.name;//Add the name of the item to the span
  }

  newListItem.appendChild(newIcon);//Add the icon to newListItem
  newListItem.appendChild(newListTitle);//Add the span to newListItem
  document.getElementById(listWrapperId).appendChild(newListItem);
  //Get all the newListItems(which can be either completed or not completed) add all the newListItems


}

//var newlyAddedToDoItem = items;
