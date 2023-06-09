function goBack(){
    window.history.back();
}

function more(){
const modal = document.getElementById('modal-wrap');
const closeBtn = modal.querySelector('.close-btn');

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        modal.style.display = 'block';
    }
}

closeBtn.onclick = function () {
    modal.style.display = 'none';
}
}