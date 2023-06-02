function loadFile(input) {
    let file = input.files[0]; //선택된 파일 가져오기
    
    let userImg = document.querySelector(".user-image");
    userImg.style.backgroundImage = `url("${URL.createObjectURL(file)}")`;

  }