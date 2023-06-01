
// const btn = document.querySelector('.btn-select');
// const list = document.querySelector('.list-member');
// btn.addEventListener('click', () => {
//     list.classList.toggle('on');
// });
// list.addEventListener('click', (event) => {
//     if (event.target.nodeName === "BUTTON") {
//         btn.innerText = event.target.innerText;
//         list.classList.remove('on');
//     }
// });
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    setTimeout(function () {
      modal.classList.add("open");
    }, 100);
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.classList.remove("open");
    setTimeout(function () {
      modal.style.display = "none";
    }, 300);
  }
  
