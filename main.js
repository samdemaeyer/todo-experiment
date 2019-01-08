function toggleToDo(element){

  var faClassName = element.querySelector(".fa");

  faClassName.classList.toggle("fa-check-square");
  faClassName.classList.toggle("fa-square-o");
}

const toDoItems = [
  {name: "Todo 1", completed:false},
  {name: "Todo 2", completed:false},
  {name: "Todo 3", completed:false},
  {name: "Todo 4", completed:true},
  {name: "Todo 5", completed:true},
  {name: "Todo 6", completed:true},
]

toDoItems.forEach(function(toDoItem) {
  let listItemId = "not-completed"
  let iconClass = "fa-square-o"
  if (toDoItem.completed) {
    listItemId = "completed"
    iconClass = "fa-check-square"
  }

  var newListItem = document.createElement("li")
  newListItem.classList.add("item")
  newListItem.setAttribute("onclick", "toggleToDo(this)")
  var newIcon = document.createElement("i")
  newIcon.classList.add(iconClass)
  newIcon.classList.add("fa")
  var newListTitle = document.createElement("span")
  newListTitle.innerText = toDoItem.name
  newListItem.appendChild(newIcon)
  newListItem.appendChild(newListTitle)
  document.getElementById(listItemId).appendChild(newListItem)

});
