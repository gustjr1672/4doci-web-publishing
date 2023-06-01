const pwd = document.getElementById("pwd");
const newPwd = document.getElementById("new-pwd");
const newPwdCheck = document.getElementById("check-pwd");

const finishBtn = document.querySelector('.finish-btn button');
const inputs = document.querySelectorAll('input');

function checkDiffernt(){

}


function checkPassword() {
    let pwdValue = pwd.value;
    let newPwdValue = newPwd.value;
    let regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/;
    if (newPwdValue && !regex.test(newPwdValue)) {
        document.getElementById("pwd-error").innerHTML = "비밀번호는 숫자,영문자,특수문자를<br>모두 포함하여 8자 이상입니다";
        return false;
    } 
    else if(pwdValue == newPwdValue){
        document.getElementById("pwd-error").innerHTML = "기존 비밀번호와 동일하니 새로운 비밀번호를 입력하세요.";
        return false;
    }
        
    else {
        document.getElementById("pwd-error").innerHTML = "";
        return true;
    
    }
}

function checkDuplicate() {
    let newPwdValue = newPwd.value;
    let newPwdCheckValue = newPwdCheck.value;
    if (newPwdValue && newPwdCheckValue && newPwdValue != newPwdCheckValue) {
        document.getElementById("pwd-check-error").innerHTML = "비밀번호가 일치하지 않습니다.";
        return false;
    } else {
        document.getElementById("pwd-check-error").innerHTML = "";
        return true;
    }
}

function checkInputValid() {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            return false; // 어느 하나라도 비어있다면 유효하지 않음
        }
    }
    if(!checkPassword()){
        return false
    }
    if (!checkDuplicate()) {
        return false; // 비밀번호와 비밀번호 확인이 일치하지 않음
    }

    return true; // 모든 입력값이 유효하다면 true 반환
}

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function () {
        if (checkInputValid()) {
            finishBtn.disabled = false;
            finishBtn.style.backgroundColor = '#333333';
        }

    });
}

newPwd.addEventListener("input", checkPassword);
newPwdCheck.addEventListener("input", checkDuplicate);