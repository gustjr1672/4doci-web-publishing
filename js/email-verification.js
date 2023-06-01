function startTimer(duration, display) { //타이머
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10); //문자열로 된 timer 변수를 10진수 int 로 변환
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes; // 10보다 작은 수는 앞에 0 을 붙히기 위한 코드
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds; // 분과 초를 표시하기 위한 코드

    if (timer === 179) {  // 타이머가 0이면 메시지를 업데이트하고 타이머를 멈춥니다.
      // clearInterval(intervalId);
      display.textContent = "00:00";
      document.getElementById("message").textContent = "인증번호 유효시간이 만료되었습니다.인증번호를 다시 받아주세요.";
    } else if (--timer < 0) {  // 타이머가 0보다 작아지면 초기값으로 설정합니다.
      timer = duration;
    }
  }, 1000);


}

function addcheck() { // 인증번호 입력칸 및 버튼 추가 코드
  const emailInput = document.getElementById("email");
  if (emailInput.checkValidity()) {
    const container = document.getElementById("checkContainer");
    container.innerHTML = `
     
        <div class="check-input">
          <label for="check">인증번호</label>
          <div class="check-input-form">
          <input type="text" id="check" name="check" required />
          <button type="button" onclick="addBtn()">인증확인</button>
        </div>
        
        <div class="timer">03:00</div>
        <div id="message"></div>
      

      <div id="finish-btn-Container"></div>

      `;
    const timerDisplay = document.querySelector(".timer");
    startTimer(180, timerDisplay);
  }
}

function addBtn() { // 완료버튼 추가 코드(gpt 안쓰고 혼자힘으로 해봉)
  const checkInput = document.getElementById("check");
  // 지금은 인증번호 인증칸에 입력값이 있으면 버튼추가로 조건걸어놨으나 인증번호 유효성확인후 추가로 수정필요
  if (checkInput.checkValidity()) {
    const container = document.getElementById("finish-btn-Container")
    container.innerHTML = `
      <div class="finish-btn">
      <button type="submit">완료</button>
    </div>
    `

  }

}
