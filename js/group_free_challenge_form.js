
function groupAlert(){
    let input = document.getElementById("group_name").value;
    let alert = document.getElementById("check_group_length");

    if(input.length > 20)
        alert.textContent="20자 이내로 작성해 주세요";
    else
        alert.textContent="";

}

function challengeAlert(){
    let input = document.getElementById("challenge_name").value;
    let alert = document.getElementById("check_challenge_length");

    if(input.length > 30)
        alert.textContent="30자 이내로 작성해 주세요";
    else
        alert.textContent="";

}
