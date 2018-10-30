var items = [
  { completed: false, title: "item 1" },
  { completed: false, title: "item 2" },
  { completed: false, title: "item 3" },
  { completed: true, title: "item 4" },
  { completed: true, title: "item 5" },
  { completed: true, title: "item 6" },
];

var htmlitems = items.map(function(item) {
  var listItem = document.createElement("li");
  listItem.className = 'todo-list';
  var icon = document.createElement("i");
  icon.className = 'fa fa-square-o';
  listItem.appendChild(icon) ;
  var title = document.createTextNode(item.title);
  listItem.appendChild(title);
  return listItem;
});
