       function handleButtonClick() {
            window.location.href = "/business/deleteBusinessRegistration.do"; // 이동할 페이지 URL을 여기에 넣어주세요
        }

        // 버튼 클릭 이벤트를 할당
        let button = document.getElementById("deleteBusiness");
        button.addEventListener("click", handleButtonClick);