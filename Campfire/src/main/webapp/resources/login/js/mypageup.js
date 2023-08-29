       
        
  // 에러 메세지 객체
const errMsg = {

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






   
  //회원수정주소입력  
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

const birthErrorMsgEl = document.querySelector('#info__birth .error-msg')
// '출생 연도' 셀렉트 박스 option 목록 동적 생성
const birthYearEl = document.querySelector('#birth-year')
// option 목록 생성 여부 확인
isYearOptionExisted = false;
birthYearEl.addEventListener('focus', function () {
  // year 목록 생성되지 않았을 때 (최초 클릭 시)
  if(!isYearOptionExisted) {
    isYearOptionExisted = true
    for(var i = 1940; i <= 2023; i++) {
      // option element 생성
      const yearOption = document.createElement('option')
      yearOption.setAttribute('value', i)
      yearOption.innerText = i
      // birthYearEl의 자식 요소로 추가
      this.appendChild(yearOption);
    }
  }
});

birthYearEl.addEventListener('change', () => {
  birthArr[0] = birthYearEl.value
  birthYearEl.style.color = "#383838"
  checkBirthValid(birthArr)
  console.log(account, birthArr)
  console.log('Birth year changed:', birthYearEl.value);
});

// 월 select box
const birthMonthEl = document.querySelector('#birth-month')
isMonthOptionExisted = false;
birthMonthEl.addEventListener('focus', function () {
  if(!isMonthOptionExisted) {
    isMonthOptionExisted = true
    for(var i = 1; i <= 12; i++) {
      const monthOption = document.createElement('option')
      if(i < 10)
        monthOption.setAttribute('value', '0' + i)
      else
        monthOption.setAttribute('value', i)
      monthOption.innerText = i
      this.appendChild(monthOption);
    }
  }
});

birthMonthEl.addEventListener('change', () => {
  birthArr[1] = birthMonthEl.value
  birthMonthEl.style.color = "#383838"
  checkBirthValid(birthArr)
  console.log(account, birthArr)
});

// 일 select box
const birthDayEl = document.querySelector('#birth-day')
isDayOptionExisted = false;
birthDayEl.addEventListener('focus', function () {
  if(!isDayOptionExisted) {
    isDayOptionExisted = true
    for(var i = 1; i <= 31; i++) {
      const dayOption = document.createElement('option')
      if(i < 10)
        dayOption.setAttribute('value', '0' + i)
      else
        dayOption.setAttribute('value', i)
      dayOption.innerText = i
      this.appendChild(dayOption);
    }
  }
});

birthDayEl.addEventListener('change', () => {
  birthArr[2] = birthDayEl.value
  birthDayEl.style.color = "#383838"
  checkBirthValid(birthArr)
  console.log(account, birthArr)
});



