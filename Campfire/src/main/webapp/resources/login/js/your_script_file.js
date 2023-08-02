// '출생 연도' 셀렉트 박스 option 목록 동적 생성
const birthYearEl = document.querySelector('#birth-year');
// option 목록 생성 여부 확인
let isYearOptionExisted = false;

birthYearEl.addEventListener('focus', function () {
  // year 목록 생성되지 않았을 때 (최초 클릭 시)
  if (!isYearOptionExisted) {
    isYearOptionExisted = true;
    for (let i = 1940; i <= 2022; i++) {
      // option element 생성
      const yearOption = document.createElement('option');
      yearOption.setAttribute('value', i);
      yearOption.innerText = i;
      // birthYearEl의 자식 요소로 추가
      this.appendChild(yearOption);
    }
  }
});// Month, Day도 동일한 방식으로 구현