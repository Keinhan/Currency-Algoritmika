let buttonsLeft = document.querySelectorAll("#from button");
let buttonsRight = document.querySelectorAll("#to button");

change = (e) => {
  for (element of e.target.parentNode.children) {
    element.style = "background-color: #fff; color: #C6C6C6;";
  }
  e.target.style = "background-color: #833AE0; color: #fff;";
};

buttonsLeft.forEach((button) => {
  button.addEventListener("click", change);
});
buttonsRight.forEach((button) => {
  button.addEventListener("click", change);
});
