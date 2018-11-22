function toggleToDo(element){
  var newClass;
  var completed = element.querySelector(".fa").classList.contains("fa-check-square");
  if (completed) {
    newClass = element.querySelector(".fa").className.replace("fa-check-square", "fa-square-o");
  } else {
    newClass = element.querySelector(".fa").className.replace("fa-square-o", "fa-check-square");
  }
  element.querySelector(".fa").className = newClass;
}
