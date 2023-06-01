const btns = document.getElementById("btns");
const leftBtn = btns.querySelector(".left-btn");
const rightBtn = btns.querySelector(".right-btn");
const leftContent = document.querySelector("#left-content");
const rightContent = document.querySelector("#right-content");

function toggleContent(content) {
  if (content === "left") {
    leftBtn.classList.add("active");
    rightBtn.classList.remove("active");
    leftContent.classList.remove("hidden");
    rightContent.classList.add("hidden");
  } else if (content === "right") {
    rightBtn.classList.add("active");
    leftBtn.classList.remove("active");
    rightContent.classList.remove("hidden");
    leftContent.classList.add("hidden");
  }
}
