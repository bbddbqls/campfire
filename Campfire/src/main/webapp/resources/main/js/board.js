	let heartIcon = document.getElementById('heart');
	let postNum = document.getElementById('heart').getAttribute('data-jstl-value');
	let likeCount = document.getElementById('like-count');
	
  heartIcon.addEventListener('click', function() {
    if (heartIcon.classList.contains('fa-regular')) {
    	likePost(postNum);
    } else {
    	unlikePost(postNum);
    }
  });
  
    function likePost(postNum) {
    $.ajax({
      type: 'POST',
      url: '/user/board/likePost.do', // insert 컨트롤러의 URL을 입력하세요
      data: { postNum: postNum }, // 실제로 전송할 데이터를 지정하세요
      success: function(response) {
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid', 'solid-heart-icon');
        
        likeCount.textContent = response;
        console.log(response);
      },
      error: function() {
        console.log('Error occurred during likePost');
      }
    });
  }

  function unlikePost(postNum) {
    $.ajax({
      type: 'POST',
      url: '/user/board/unlikePost.do', // delete 컨트롤러의 URL을 입력하세요
      data: { postNum: postNum }, // 실제로 전송할 데이터를 지정하세요
      success: function(response) {
        heartIcon.classList.remove('fa-solid', 'solid-heart-icon');
        heartIcon.classList.add('fa-regular');
        
        likeCount.textContent = response;
        console.log(response);
      },
      error: function() {
        console.log('Error occurred during unlikePost');
      }
    });
  }