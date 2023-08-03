// 사업자회원가입창 이동
function handleButtonClick1() {
window.location.href = "#businessjoin";
}

// 개인회원가입창 이동
function handleButtonClick2() {
window.location.href = "#personaljoin";
}       
          
//이미지 접근시 색상 변동
function darkenImage(element) {
  element.querySelector("img").style.filter = "brightness(80%)";
}

function resetImage(element) {
  element.querySelector("img").style.filter = "none";
}



// 에러 메세지 객체
const errMsg = {
  id: { 
    invalid: "6~20자의 영문 소문자와 숫자만 사용 가능합니다",
    success: "사용 가능한 아이디입니다",
    fail: "사용할 수 없는 아이디입니다"
  },
  pw: "8~20자의 영문, 숫자, 특수문자를 모두 포함한 비밀번호를 입력해주세요",
  pwRe: {
    success: "비밀번호가 일치합니다",
    fail: "비밀번호가 일치하지 않습니다"
  },
  birth: "생년월일을 다시 확인해주세요"
}

// 계정 정보 객체
const account = {
  id: null,
  pw: null,
  birth: null
}


// 사업자 회원가입 아이디,비밀번호 부분
/*** SECTION - ID ***/
const idInputEl = document.querySelector('#info__id input')
const idErrorMsgEl = document.querySelector('#info__id .error-msg')
const idCheckBtn = document.querySelector('#id-check')
idInputEl.addEventListener('change', () => {
  const idRegExp = /^[a-zA-Z0-9]{6,20}$/
  if(idRegExp.test(idInputEl.value)) { // 정규식 조건 만족 O
    idErrorMsgEl.textContent = ""
    account.id = idInputEl.value
  } else { // 정규식 조건 만족 X
    idErrorMsgEl.style.color = "red"
    idErrorMsgEl.textContent = errMsg.id.invalid
    account.id = null
  }
  console.log(account)
});

idCheckBtn.addEventListener('click', () => {
  const randVal = Math.floor(Math.random() * 10)
  if(account.id !== null) {
    if(randVal < 7) {
      idErrorMsgEl.style.color = "green"
      idErrorMsgEl.textContent = errMsg.id.success
    }
    else {
      idErrorMsgEl.style.color = "red"
      idErrorMsgEl.textContent = errMsg.id.fail
    }
  }
})

/*** SECTION - PASSWORD ***/
// pwVal: 패스워드, pwReVal: 패스워드 재입력, isPwValid: 패스워드 유효 여부
let pwVal = "", pwReVal = "", isPwValid = false
// 비밀번호와 재입력 값 일치 여부
function checkPwValid() {
  account.pw = null
  if(pwReVal === "") { // 미입력
    pwReErrorMsgEl.textContent = ""
  }
  else if(pwVal === pwReVal) { // 비밀번호 재입력 일치
    if(isPwValid)
      account.pw = pwVal
    pwReErrorMsgEl.style.color = "green"
    pwReErrorMsgEl.textContent = errMsg.pwRe.success
  }
  else { // 비밀번호 재입력 불일치
    pwReErrorMsgEl.style.color = "red"
    pwReErrorMsgEl.textContent = errMsg.pwRe.fail
  }
}

const pwInputEl = document.querySelector('#info__pw input')
const pwErrorMsgEl = document.querySelector('#info__pw .error-msg')
pwInputEl.addEventListener('change', () => {
  const pwRegExp = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
  pwVal = pwInputEl.value
  if(pwRegExp.test(pwVal)) { // 유효성 검사 성공
    isPwValid = true
    pwErrorMsgEl.textContent = ""
  } 
  else { // 유효성 검사 실패
    isPwValid = false
    pwErrorMsgEl.textContent = errMsg.pw
  }
  checkPwValid()
  console.log(pwVal, pwReVal, isPwValid, account)
});

/*** SECTION - PASSWORD RECHECK ***/
const pwReInputEl = document.querySelector('#info__pwRe input')
const pwReErrorMsgEl = document.querySelector('#info__pwRe .error-msg')
pwReInputEl.addEventListener('change', () => {
  pwReVal = pwReInputEl.value
  checkPwValid()
  console.log(pwVal, pwReVal, isPwValid, account)
});



//  개인 회원가입 아이디,비밀번호 부분
/*** SECTION - ID ***/
const idInputEl1 = document.querySelector('#info__id1 input');
const idErrorMsgEl1 = document.querySelector('#info__id1 .error-msg');
const idCheckBtn1 = document.querySelector('#id-check');

idInputEl1.addEventListener('change', () => {
  const idRegExp = /^[a-zA-Z0-9]{6,20}$/;
  if (idRegExp.test(idInputEl1.value)) { // 정규식 조건 만족 O
    idErrorMsgEl1.textContent = "";
    account.id = idInputEl1.value;
  } else { // 정규식 조건 만족 X
    idErrorMsgEl1.style.color = "red";
    idErrorMsgEl1.textContent = errMsg.id.invalid;
    account.id = null;
  }
  console.log(account);
});

idCheckBtn1.addEventListener('click', () => {
  const randVal = Math.floor(Math.random() * 10);
  if (account.id !== null) {
    if (randVal < 7) {
      idErrorMsgEl1.style.color = "green";
      idErrorMsgEl1.textContent = errMsg.id.success;
    } else {
      idErrorMsgEl1.style.color = "red";
      idErrorMsgEl1.textContent = errMsg.id.fail;
    }
  }
});

/*** SECTION - PASSWORD ***/
// pwVal: 패스워드, pwReVal: 패스워드 재입력, isPwValid: 패스워드 유효 여부
let pwVal1 = "", pwReVal1 = "", isPwValid1 = false;
// 비밀번호와 재입력 값 일치 여부
function checkPwValid1() {
  account.pw = null;
  if (pwReVal1 === "") { // 미입력
    pwReErrorMsgEl1.textContent = "";
  } else if (pwVal1 === pwReVal1) { // 비밀번호 재입력 일치
    if (isPwValid)
      account.pw = pwVal1;
    pwReErrorMsgEl1.style.color = "green";
    pwReErrorMsgEl1.textContent = errMsg.pwRe.success;
  } else { // 비밀번호 재입력 불일치
    pwReErrorMsgEl1.style.color = "red";
    pwReErrorMsgEl1.textContent = errMsg.pwRe.fail;
  }
}

const pwInputEl1 = document.querySelector('#info__pw1 input');
const pwErrorMsgEl1 = document.querySelector('#info__pw1 .error-msg');
pwInputEl1.addEventListener('change', () => {
  const pwRegExp = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  pwVal1 = pwInputEl1.value;
  if (pwRegExp.test(pwVal1)) { // 유효성 검사 성공
    isPwValid = true;
    pwErrorMsgEl1.textContent = "";
  } else { // 유효성 검사 실패
    isPwValid = false;
    pwErrorMsgEl1.textContent = errMsg.pw;
  }
  checkPwValid1();
  console.log(pwVal1, pwReVal1, isPwValid1, account);
});

/*** SECTION - PASSWORD RECHECK ***/
const pwReInputEl1 = document.querySelector('#info__pwRe1 input');
const pwReErrorMsgEl1 = document.querySelector('#info__pwRe1 .error-msg');
pwReInputEl1.addEventListener('change', () => {
  pwReVal1 = pwReInputEl1.value;
  checkPwValid1();
  console.log(pwVal1, pwReVal1, isPwValid1, account);
});



/*** SECTION - BIRTH ***/
const birthArr = [-1, -1, -1]
/* 유효한 날짜인지 여부 확인 (윤년/평년) */
function checkBirthValid(birthArr) {
  isBirthValid = true
  y = birthArr[0]
  m = birthArr[1]
  d = birthArr[2]
  // 생년월일 모두 선택 완료 시
  if(y > 0 && m > 0 && d > 0) {
    if ((m == 4 || m == 6 || m == 9 || m == 11) && d == 31) { 
      isBirthValid = false
    }
    else if (m == 2) {
      if(((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) { // 윤년
        if(d > 29) { // 윤년은 29일까지
          isBirthValid = false
        }
      } else { // 평년
        if(d > 28) { // 평년은 28일까지
          isBirthValid = false
        }
      }
    }

    if(isBirthValid) { // 유효한 날짜
      birthErrorMsgEl.textContent = ""
      account.birth = birthArr.join('')
    } else { // 유효하지 않은 날짜
      birthErrorMsgEl.textContent = "생년월일을 다시 확인해주세요"
      account.birth = null
    }
  }
}

    //사업자 가입창 년월일부분
    const birthErrorMsgEl = document.querySelector("#info__birth .error-msg");
    // '출생 연도' 셀렉트 박스 option 목록 동적 생성
    const birthYearEl = document.querySelector("#birth-year");
    // option 목록 생성 여부 확인
    isYearOptionExisted = false;
    birthYearEl.addEventListener("focus", function () {
      // year 목록 생성되지 않았을 때 (최초 클릭 시)
      if (!isYearOptionExisted) {
        isYearOptionExisted = true;
        for (var i = 1940; i <= 2023; i++) {
          // option element 생성
          const yearOption = document.createElement("option");
          yearOption.setAttribute("value", i);
          yearOption.innerText = i;
          // birthYearEl의 자식 요소로 추가
          this.appendChild(yearOption);
        }
      }
    });

    // 월 select box
    const birthMonthEl = document.querySelector("#birth-month");
    isMonthOptionExisted = false;
    birthMonthEl.addEventListener("focus", function () {
      if (!isMonthOptionExisted) {
        isMonthOptionExisted = true;
        for (var i = 1; i <= 12; i++) {
          const monthOption = document.createElement("option");
          if (i < 10) monthOption.setAttribute("value", "0" + i);
          else monthOption.setAttribute("value", i);
          monthOption.innerText = i;
          this.appendChild(monthOption);
        }
      }
    });

    // 일 select box
    const birthDayEl = document.querySelector("#birth-day");
    isDayOptionExisted = false;
    birthDayEl.addEventListener("focus", function () {
      if (!isDayOptionExisted) {
        isDayOptionExisted = true;
        for (var i = 1; i <= 31; i++) {
          const dayOption = document.createElement("option");
          if (i < 10) dayOption.setAttribute("value", "0" + i);
          else dayOption.setAttribute("value", i);
          dayOption.innerText = i;
          this.appendChild(dayOption);
        }
      }
    });

    birthYearEl.addEventListener("change", () => {
      birthArr[0] = birthYearEl.value;
      birthYearEl.style.color = "white";
      checkBirthValid(birthArr);
      console.log(account, birthArr);
    });

    birthMonthEl.addEventListener("change", () => {
      birthArr[1] = birthMonthEl.value;
      birthMonthEl.style.color = "white";
      checkBirthValid(birthArr);
      console.log(account, birthArr);
    });

    birthDayEl.addEventListener("change", () => {
      birthArr[2] = birthDayEl.value;
      birthDayEl.style.color = "white";

      checkBirthValid(birthArr);
      console.log(account, birthArr);
      console.log(birthArr);
    });

// 사업자 주소입력부분
    function sample6_execDaumPostcode() {
      new daum.Postcode({
        oncomplete: function (data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 각 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          var addr = ""; // 주소 변수
          var extraAddr = ""; // 참고항목 변수

          //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            addr = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            addr = data.jibunAddress;
          }

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          document.getElementById("sample6_postcode").value = data.zonecode;
          document.getElementById("sample6_address").value = addr;
          // 커서를 상세주소 필드로 이동한다.
          document.getElementById("sample6_detailAddress").focus();
        },
      }).open();
    }

     //개인가입 가입창 년월일부분
    const birthErrorMsgEl1 = document.querySelector("#info__birth1 .error-msg");
    // '출생 연도' 셀렉트 박스 option 목록 동적 생성
    const birthYearEl1 = document.querySelector("#birth-year1");
    // option 목록 생성 여부 확인
    isYearOptionExisted1 = false;
    birthYearEl1.addEventListener("focus", function () {
      // year 목록 생성되지 않았을 때 (최초 클릭 시)
      if (!isYearOptionExisted1) {
        isYearOptionExisted1 = true;
        for (var i = 1940; i <= 2023; i++) {
          // option element 생성
          const yearOption = document.createElement("option");
          yearOption.setAttribute("value", i);
          yearOption.innerText = i;
          // birthYearEl의 자식 요소로 추가
          this.appendChild(yearOption);
        }
      }
    });

    // 월 select box
    const birthMonthEl1 = document.querySelector("#birth-month1");
    isMonthOptionExisted1 = false;
    birthMonthEl1.addEventListener("focus", function () {
      if (!isMonthOptionExisted1) {
        isMonthOptionExisted1 = true;
        for (var i = 1; i <= 12; i++) {
          const monthOption = document.createElement("option");
          if (i < 10) monthOption.setAttribute("value", "0" + i);
          else monthOption.setAttribute("value", i);
          monthOption.innerText = i;
          this.appendChild(monthOption);
        }
      }
    });

    // 일 select box
    const birthDayEl1 = document.querySelector("#birth-day1");
    isDayOptionExisted1 = false;
    birthDayEl1.addEventListener("focus", function () {
      if (!isDayOptionExisted1) {
        isDayOptionExisted1 = true;
        for (var i = 1; i <= 31; i++) {
          const dayOption = document.createElement("option");
          if (i < 10) dayOption.setAttribute("value", "0" + i);
          else dayOption.setAttribute("value", i);
          dayOption.innerText = i;
          this.appendChild(dayOption);
        }
      }
    });

    birthYearEl1.addEventListener("change", () => {
      birthArr[0] = birthYearEl1.value;
      birthYearEl1.style.color = "white";
      checkBirthValid(birthArr);
      console.log(account, birthArr);
    });

    birthMonthEl1.addEventListener("change", () => {
      birthArr[1] = birthMonthEl1.value;
      birthMonthEl1.style.color = "white";
      checkBirthValid(birthArr);
      console.log(account, birthArr);
    });

    birthDayEl1.addEventListener("change", () => {
      birthArr[2] = birthDayEl1.value;
      birthDayEl1.style.color = "white";

      checkBirthValid(birthArr);
      console.log(account, birthArr);
      console.log(birthArr);
    });


// 개인회원 주소입력부분
    function sample6_execDaumPostcode1() {
      new daum.Postcode({
        oncomplete: function (data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 각 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          var addr1 = ""; // 주소 변수
        

          //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            addr1 = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            addr1 = data.jibunAddress;
          }

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          document.getElementById("sample6_postcode1").value = data.zonecode;
          document.getElementById("sample6_address1").value = addr1;
          // 커서를 상세주소 필드로 이동한다.
          document.getElementById("sample6_detailAddress1").focus();
        },
      }).open();
    }



/*** SUBMIT ***/
// const submitBtn = document.querySelector('#submit')
// const resultFailEl = document.querySelector('#result-fail')
// submitBtn.addEventListener('click', function() {
//   let isAllFilled = true
//   const word = {  
//     id: "아이디를",
//     pw: "비밀번호를",
//     email: "이메일을",
//     birth: "생년월일을",
//     mobile: "휴대폰 번호를"
//   }
//   for(element in account) {
//     console.log(element)
//     if(account[element] === null) {
//       resultFailEl.textContent = word[element] + " 다시 한번 확인해주세요"
//       isAllFilled = false
//       break
//     }
//   }
//   if (isAllFilled === true) {
//     resultFailEl.textContent = ""
//     setTimeout(function() {
//       alert("서버 전송 데이터 : " + JSON.stringify(account))
//     }, 300)
//   }
// })