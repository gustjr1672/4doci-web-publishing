function loadFile(input) {
  let file = input.files[0]; //선택된 파일 가져오기
  let form = document.getElementById("image-form");
  form.style.visibility = "hidden";
  form.style.height = "0px";
  let newImage = document.getElementById("input-image");
  let imageBox = document.getElementById("image-box");
  imageBox.className = "image-box";
  newImage.className = "image-thumbnail";

  let formSection = document.querySelector(".form");
  newImage.src = URL.createObjectURL(file);
  imageBox.style.marginTop = "20px";
}
document.getElementById("plus-btn").addEventListener("click", function () {
  document.getElementById("achive-amount").value++;
});
document.getElementById("minus-btn").addEventListener("click", function () {
  if (document.getElementById("achive-amount").value > 0)
    document.getElementById("achive-amount").value--;
});

function openModal(id,contentId) {
  const modal = document.getElementById(id);
  var modalContent = document.getElementById(contentId);
  modal.style.display = "block";
  setTimeout(function () {
    modalContent.classList.add('active');
  }, 20);
   
 
}

function closeModal(id,contentId) {
  const modal = document.getElementById(id);
  var modalContent = document.getElementById(contentId);
  modalContent.classList.remove("active");
  setTimeout(function () {
    modal.style.display = "none";
  }, 300);
}