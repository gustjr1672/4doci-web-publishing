const showbtns = document.querySelectorAll(".btn-show");
// const hidebtns = document.querySelectorAll(".btn-hide");

showbtns.forEach((btn) => {
  btn.addEventListener("click", showList);
});

function showList() {
  let packageTitle = this.parentNode;
  let label = packageTitle.parentNode;
  let option = label.parentNode;
  let img = this.querySelector("img");
  img.classList.toggle("up-arrow");
  const list = option.querySelector("ul");
  list.classList.toggle("show");
  let contents = list.querySelectorAll("li");
  setTimeout(() => {
    contents.forEach((content) => {
      content.classList.toggle("visible");
    });
  }, 0);
}
