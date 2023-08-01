function searchPostCode() {
    new daum.Postcode({
        oncomplete: function (data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            const api_key = "f56f8461b6c1bd3d445e592479cd7a79"; 
            const address = addr;
            const base_url = "https://dapi.kakao.com/v2/local/search/address.json";

            const url = `${base_url}?query=${encodeURIComponent(address)}`;
            fetch(url, {
                headers: {
                    "Authorization": `KakaoAK ${api_key}`
                }
            })
                .then(response => response.json())
                .then(apiData  => {
                    const coordinates = apiData.documents[0].address;
                    const latitude = parseFloat(coordinates.y);
                    const longitude = parseFloat(coordinates.x);

                    console.log("y좌표 : " + latitude);
                    console.log("x좌표 : " + longitude);
                    
                    document.getElementById('x').value = longitude;
                    document.getElementById('y').value = latitude;
                })
                .catch(error => {
                    console.error("Error:", error);
                });

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('postcode').value = data.zonecode;
            document.getElementById('address').value = addr;
        }
    }).open();
}