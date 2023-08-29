function leaveChatBtn(sessionMemberIdx, tradingIdx, tradingMemberIdx) {
	// confirmFunction(msg)
	Swal.fire({
		title: '채팅방에서 나갈까요?',
		text: '모든 채팅 기록은 삭제됩니다.',
		icon: 'question',
		
		showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
		confirmButtonColor: '#d33', // confrim 버튼 색깔 지정
		cancelButtonColor: '#3085d6', // cancel 버튼 색깔 지정
		confirmButtonText: '떠나기', // confirm 버튼 텍스트 지정
		cancelButtonText: '취소', // cancel 버튼 텍스트 지정
		
		reverseButtons: true, // 버튼 순서 거꾸로
	})
	.then(result => {
		// 만약 Promise리턴을 받으면,
		if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
			document.querySelector('#messageListContainer').setAttribute("data-leave_requested_flag", 1); 
		}
	});
}

function sendMessage(senderIdx) {
	const messagingBox = document.querySelector('#messagingContainer input');

	if (messagingBox.value == '') {	
		return;
	}

	var content = messagingBox.value;
	messagingBox.value = '';

	var messageListContainer = document.querySelector('#messageListContainer');
	var chatRoomIdx = messageListContainer.getAttribute("data-chat_room_idx");

	var formData = new FormData();
	formData.append("chatRoomIdx", chatRoomIdx);
	formData.append("senderIdx", senderIdx);
	formData.append("content", content);

	// 데이터 보내기
	fetch('http://localhost/chat/insertMessage.do', {
		method: 'POST',
		body: formData,
		redirect: 'manual'
	})
	.then(response => {
		
		return response.text();
	})
	.then(result => {
		if (result === "") {
			// 없음
		} else {
			window.location.href = "/trading/list.do"
		}
	})
	.catch(error => {
		window.location.href = "/trading/list.do"
	});

}

function extractTimeFromDateString(dateString) {
	const parsedDate = new Date(dateString);
	const hours = parsedDate.getHours();
	const minutes = parsedDate.getMinutes();
	const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
	return formattedTime;
}