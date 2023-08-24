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
  
$('.insert-reqly').on('click', function() {
    let postNum = document.getElementById('comment-content').getAttribute('data-postNum-value');
    console.log(postNum);
    let commentText = $('#comment-content').val();
    if (!commentText) {
        window.alert("댓글을 입력해 주세요!!!!");
    }
    else {
        // 서버에 AJAX 요청 보내기
        $.ajax({
            url: '/user/board/insertReply.do', 
            method: 'POST',
            data: { postNum: postNum, postReplyContent: commentText},
            success: function(response) {
                    if (response && response !== null && response.length > 0) {
                    let newComment = 
                        '<div class="comment-list"id="comment-list-'+response[0].postReplyNum+'">' +
                            '<div class="comment">' +
                                '<div class="comment-user">'+response[0].memberId+'</div>' +
                                '<div class="comment-date">'+response[0].newDate +
                                '<c:if test="${sessionScope.memberNum == '+response[0].memberNum+'}">' +
                                ' <i class="fa-solid fa-trash-can" style="color: #8a8a8a;"onclick="deleteReply('+response[0].postReplyNum+')"></i>' +
                                '</c:if>' +
                                '</div>' +
                            '</div>' +
                            '<div class="comment">' +
                                '<div class="comment-content">'+response[0].postReplyContent+'</div>' +
                                '<div class="comment-like">' +
                                    '<i class="fa-regular fa-thumbs-up" style="color: #1e6bf1;" onclick="likePostReply('+response[0].postReplyNum+');"></i> <span id="comment-like-count'+response[0].postReplyNum+'">0</span>' +
                                '</div>' +
                            '</div>' +
                        '</div>';
                    $('.comment-container').append(newComment);
                    
                    $('#comment-content').val('');
                } else {
                    console.log('Error:', error);
                }
            },
            error: function(error) {
                console.log('Error:', error);
            },
        });
    }
});

function likePostReply(postReplyNum) {
    $.ajax({
      type: 'POST',
      url: '/user/board/replyLikePost.do', // insert 컨트롤러의 URL을 입력하세요
      data: { postReplyNum: postReplyNum }, // 실제로 전송할 데이터를 지정하세요
      success: function(response) {
        let likeCount = document.getElementById('comment-like-count' + postReplyNum);
        likeCount.textContent = response;
        console.log(response);
      },
      error: function() {
        console.log('Error occurred during likePost');
      }
    });
  }
  
  function deleteReply(postReplyNum) {
  let commentListId = 'comment-list-'+postReplyNum;
    let commentList = document.getElementById(commentListId);
    $.ajax({
      type: 'POST',
      url: '/user/board/deleteReply.do', // insert 컨트롤러의 URL을 입력하세요
      data: { postReplyNum: postReplyNum }, // 실제로 전송할 데이터를 지정하세요
      success: function(response) {
        if(response == true){
        	commentList.remove();
        }else{
        window.alert("댓글 삭제 실패");
        }
      },
      error: function() {
        console.log('Error occurred during likePost');
      }
    });
  }