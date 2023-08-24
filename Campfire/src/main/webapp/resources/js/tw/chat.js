function toggleChat(chatToggleButton) {
	const chatIcon = document.getElementById('chatIcon');
	const chatIconChatDivider = document.querySelector('.chatIconChatDivider');

	if (chatToggleButton.classList.contains('on')) {
		chatToggleButton.classList.remove('on');

		chatIconChatDivider.style.bottom = '-35vw';
		chatIcon.src = '../resources/images/tw/keyboard_arrow_up.png';
		chatIcon.style.top = 'calc(-4vw - 4vw)';

	} else {
		chatToggleButton.classList.add('on')

		chatIconChatDivider.style.bottom = '0';
		chatIcon.src = '../resources/images/tw/keyboard_arrow_down.png';
		chatIcon.style.top = 'calc(-4vw - 1vw)';
	}


}
