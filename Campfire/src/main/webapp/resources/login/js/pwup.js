function checkForm() {
    const memberPw = document.getElementById("memberPw");
    const memberPwChk = document.getElementById("memberPwChk");

    if (memberPw.value === "" || memberPwChk.value === "") {
        alert("비밀번호를 입력하세요");
        return false;
    }

    if (memberPw.value !== memberPwChk.value) {
        alert("비밀번호가 일치하지 않습니다");
        return false;
    }

    return true;
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


//  회원가입 아이디,비밀번호 부분
/*** SECTION - ID ***/
const idInputEl = document.querySelector('#info__id input')
const idErrorMsgEl = document.querySelector('#info__id .error-msg')

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

    