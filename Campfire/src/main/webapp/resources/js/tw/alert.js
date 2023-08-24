

function toastFunction(msg, status) {

	const Toast = Swal.mixin({
		toast: true,
		position: 'center-center',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: false,
		// didOpen: (toast) => {
		// 	toast.addEventListener('mouseenter', Swal.stopTimer)
		// 	toast.addEventListener('mouseleave', Swal.resumeTimer)
		// }
	})
	
	Toast.fire({
		icon: status,
		title: msg
	})


	// Swal.fire({
	// 	icon: status,
	// 	title: status,
	// 	text: msg
	// });
}

function alertFunction(msg, title, status) {
	Swal.fire({
		text: msg,
		title: title,
		icon: status,
	});
}

function confirmFunction(msg) {
	Swal.fire({
		title: msg,
		text: '',
		icon: 'question',
		
		showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
		confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
		cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
		confirmButtonText: '삭제', // confirm 버튼 텍스트 지정
		cancelButtonText: '취소', // cancel 버튼 텍스트 지정
		
		reverseButtons: true, // 버튼 순서 거꾸로
	})
}