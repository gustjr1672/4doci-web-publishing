const pwd = document.getElementById("pwd");
const pwdCheck = document.getElementById("pwd-check");

const finishBtn = document.querySelector('.finish-btn button');
const inputs = document.querySelectorAll('input');




function checkPassword() {
    let passwordValue = pwd.value;
    let regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/;
    if (passwordValue && !regex.test(passwordValue)) {
        document.getElementById("pwd-error").innerHTML = "비밀번호는 숫자,영문자,특수문자를<br>모두 포함하여 8자 이상입니다";
        return false;
    } else {
        document.getElementById("pwd-error").innerHTML = "";
        return true;
    
    }
}

function checkDuplicate() {
    let passwordValue = pwd.value;
    let pwdCheckValue = pwdCheck.value;
    if (passwordValue && pwdCheckValue && passwordValue != pwdCheckValue) {
        document.getElementById("pwd-check-error").innerHTML = "비밀번호가 일치하지 않습니다.";
        return false;
    } else {
        document.getElementById("pwd-check-error").innerHTML = "";
        return true;
    }
    // password && pwdcheck && password != pwdcheck ? check = 
}


function checkInputValid() {
    const email = document.getElementById("email").value;
    const nickname = document.getElementById("nickname").value;
   
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

pwd.addEventListener("input", checkPassword);
pwdCheck.addEventListener("input", checkDuplicate);

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function () {
        if (checkInputValid()) {
            finishBtn.disabled = false;
            finishBtn.style.backgroundColor = '#333333';
        }

    });
}

