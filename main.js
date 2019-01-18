function convertToBool(str) {
  if (['true', 'false'].includes(str)) {
    return str === 'true';
  }
}

function toggleToDo(element){

  var faClassName = element.getElementsByClassName("fa")[0];
  var isCompleted = convertToBool(element.getAttribute("data-completed"));
  let listWrapperId = "completed"

  if (isCompleted) {
    listWrapperId = "not-completed"
  }

  element.setAttribute('data-completed', !isCompleted);
  faClassName.classList.toggle("fa-check-square");
  faClassName.classList.toggle("fa-square-o");

  document.getElementById(listWrapperId).appendChild(element)
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
  let listWrapperId = "not-completed"
  let iconClass = "fa-square-o"
  if (toDoItem.completed) {
    listWrapperId = "completed"
    iconClass = "fa-check-square"
  }


  var newListItem = document.createElement("li")
  newListItem.classList.add("item")
  newListItem.setAttribute('data-completed', toDoItem.completed);
  newListItem.setAttribute("onclick", "toggleToDo(this)")
  var newIcon = document.createElement("i")
  newIcon.classList.add(iconClass)
  newIcon.classList.add("fa")
  var newListTitle = document.createElement("span")
  newListTitle.innerText = toDoItem.name
  newListItem.appendChild(newIcon)
  newListItem.appendChild(newListTitle)
  document.getElementById(listWrapperId).appendChild(newListItem)

});





  // let newClass;

  // console.log(element);

  // let completed = faClassName.classList.contains("fa-check-square");


  // if (completed) {
  //   newClass = faClassName.className.replace("fa-check-square", "fa-square-o");
  // } else {
  //   newClass = faClassName.className.replace("fa-square-o", "fa-check-square");
  // }
  // faClassName.className = newClass;


// function toggleToDo() {
// var faClassName = document.getElementsByClassName("item1");
// faClassName[1].classList.toggle("isClicked");
// }

// Question: why the i tag in the html doc?.
