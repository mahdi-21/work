let input = document.querySelector(".input-Field");
let submit = document.querySelector(".add-button");
let list = document.querySelector("ul");

list.addEventListener("click", function (el) {
  if (el.target.tagName == "LI") {
    el.target.classList.toggle("checked");
  }
});
