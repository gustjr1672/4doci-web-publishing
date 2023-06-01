function checkAll(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== source) {
            checkboxes[i].checked = source.checked;
        }
    }
    checkEach();
}

function checkEach() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var allChecked = true;
    for (var i = 1; i < checkboxes.length; i++) {
        if (!checkboxes[i].checked) {
            allChecked = false;
            break;
        }
    }
    checkboxes[0].checked = allChecked;

    const finishBtn = document.querySelector('.finish-btn button');

    if (allChecked) {
        finishBtn.disabled = false;
        finishBtn.style.backgroundColor = '#333333';
    }
}

const btns = document.querySelectorAll('.popup-btn');
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
