let saveImage = document.getElementById("save-img");

saveImage.onclick = function () {
  if (saveImage.getAttribute("src") === "/image/login/saveId.png") {
    saveImage.setAttribute("src", "/image/login/saveIdOnClick.png");
  } else {
    saveImage.setAttribute("src", "/image/login/saveId.png");
  }
};
