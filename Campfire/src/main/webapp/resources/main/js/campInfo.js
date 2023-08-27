//
////하트
//var heartIcon = document.getElementById('heart');
//
//heartIcon.addEventListener('click', function() {
//  if (heartIcon.classList.contains('fa-regular')) {
//    heartIcon.classList.remove('fa-regular');
//    heartIcon.classList.add('fa-solid');
//  } else {
//    heartIcon.classList.remove('fa-solid');
//    heartIcon.classList.add('fa-regular');
//  }
//});
//
////즐찾
//var starIcon = document.getElementById('star');
//
//starIcon.addEventListener('click', function() {
//  if (starIcon.classList.contains('fa-regular')) {
//    starIcon.classList.remove('fa-regular');
//    starIcon.classList.add('fa-solid');
//  } else {
//	  starIcon.classList.remove('fa-solid');
//	  starIcon.classList.add('fa-regular');
//  }
//});

//좋아요카운트
let heartIcon = document.getElementById('heart');
let campNum = document.getElementById('heart').getAttribute('data-jstl-value');
let likeCount = document.getElementById('heart-count');

heartIcon.addEventListener('click', function() {
 if (heartIcon.classList.contains('fa-regular')) {
    likeCamp(campNum);
 } else {
    unlikeCamp(campNum);
 }
});

 function likeCamp(campNum) {
 $.ajax({
   type: 'POST',
   url: '/campInfo/likeCamp.do', // insert 컨트롤러의 URL을 입력하세요
   data: { campNum: campNum }, // 실제로 전송할 데이터를 지정하세요
   success: function(response) {
     heartIcon.classList.remove('fa-regular');
     heartIcon.classList.add('fa-solid', 'solid-heart-icon');
     
     console.log(response);
     likeCount.textContent = response;
   },
   error: function() {
     console.log('Error occurred during likeCamp');
   }
 });
}

function unlikeCamp(campNum) {
 $.ajax({
   type: 'POST',
   url: '/campInfo/unlikeCamp.do', // delete 컨트롤러의 URL을 입력하세요
   data: { campNum: campNum }, // 실제로 전송할 데이터를 지정하세요
   success: function(response) {
     heartIcon.classList.remove('fa-solid', 'solid-heart-icon');
     heartIcon.classList.add('fa-regular');
     
     console.log(response);
     likeCount.textContent = response;
   },
   error: function() {
     console.log('Error occurred during unlikeCamp');
   }
 });
}


//즐찾카운트 
let starIcon = document.getElementById('star');
let campNumm = document.getElementById('star').getAttribute('data-jstl-value');
let wishlistCount = document.getElementById('star-count');

starIcon.addEventListener('click', function() {
 if (starIcon.classList.contains('fa-regular')) {
    wishlist(campNumm);
 } else {
    unwishlist(campNumm);
 }
});

 function wishlist(campNumm) {
 $.ajax({
   type: 'POST',
   url: '/campInfo/wishlist.do', // insert 컨트롤러의 URL을 입력하세요
   data: { campNum: campNumm }, // 실제로 전송할 데이터를 지정하세요
   success: function(response) {
	   starIcon.classList.remove('fa-regular');
	   starIcon.classList.add('fa-solid');
     
	   wishlistCount.textContent = response;
     console.log(response);
   },
   error: function() {
     console.log('Error occurred during wishlist');
   }
 });
}

function unwishlist(campNumm) {
 $.ajax({
   type: 'POST',
   url: '/campInfo/unwishlist.do', // delete 컨트롤러의 URL을 입력하세요
   data: { campNum: campNumm }, // 실제로 전송할 데이터를 지정하세요
   success: function(response) {
	   starIcon.classList.remove('fa-solid');
	   starIcon.classList.add('fa-regular');
     
     wishlistCount.textContent = response;
     console.log(response);
   },
   error: function() {
     console.log('Error occurred during unwishlist');
   }
 });
}

//사진슬라이드
// 슬라이드를 보여주는 함수
let slideIndex = 0;
showSlide(slideIndex);

function moveSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
	  const slides = document.getElementsByClassName("carousel-slide");
	  if (slides.length > 0) { // 사진이 있는 경우에만 실행
	    if (n >= slides.length) {
	      slideIndex = 0;
	    }
	    if (n < 0) {
	      slideIndex = slides.length - 1;
	    }
	    for (let i = 0; i < slides.length; i++) {
	      slides[i].classList.remove("active");
	    }
	    slides[slideIndex].classList.add("active");

	    const slider = document.querySelector(".carousel-slider");
	    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
	  }
	}

// //이전 버튼 클릭 시 슬라이드 이동
// prevBtn.addEventListener('click', () => {
//   slideIndex = Math.max(slideIndex - 1, 0);
//   showSlide(slideIndex);
// });

// // 다음 버튼 클릭 시 슬라이드 이동
// nextBtn.addEventListener('click', () => {
//   slideIndex = Math.min(slideIndex + 1, slides.length - 1);
//   showSlide(slideIndex);
// });

// 초기에 첫 번째 슬라이드 보이도록 설정
// showSlide(slideIndex);


//지도
const mapTest = document.getElementById('map');
function apicall() {
  mapTest.innerHTML='';

  var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
      center: new kakao.maps.LatLng(36.6424, 127.2541), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };

  var map = new kakao.maps.Map(mapContainer, mapOption);

  // 마커가 표시될 위치입니다 
  var markerPosition = new kakao.maps.LatLng(36.6424, 127.2541);

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition
  });
//jstl변수 사용하기
  let mapX = document.getElementById('mapX').getAttribute('data-jstl-value');
  let mapY = document.getElementById('mapY').getAttribute('data-jstl-value');
  let campName = document.getElementById('campName').getAttribute('data-jstl-value');
  
  console.log(mapX);
  console.log(mapY);
  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  var iwContent = '<div style="padding:5px;">💚'+campName+'💚 <br><a href="https://map.kakao.com/link/map/다온숲,'+mapX+','+mapY+' style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,36.6424,127.2541" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(mapX,mapY); //인포윈도우 표시 위치입니다

  // 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
    position: iwPosition,
    content: iwContent
  });

  // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
  infowindow.open(map, marker);

}



//캠핑장 소개
document.addEventListener("DOMContentLoaded", function () {
  const cIntro = document.querySelector("#c_intro");
  const cAmenity = document.querySelector("#c_amenity");
  const cMap = document.querySelector("#c_map");
  const cReview = document.querySelector("#c_review");

  const campIntro = document.querySelector(".camp_intro");
  const campIntroAmenity = document.querySelector(".camp_intro_amenity");
  const campIntroMap = document.querySelector(".camp_intro_map");
  const campIntroReview = document.querySelector(".camp_intro_review");

  cIntro.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작인 페이지 이동을 막습니다.
    campIntro.style.display = "block";
    campIntroAmenity.style.display = "none";
    campIntroMap.style.display = "none";
    campIntroReview.style.display = "none";

  });

  cAmenity.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작인 페이지 이동을 막습니다.
    campIntro.style.display = "none";
    campIntroAmenity.style.display = "block";
    campIntroMap.style.display = "none";
    campIntroReview.style.display = "none";

  });

  cMap.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작인 페이지 이동을 막습니다.
    campIntro.style.display = "none";
    campIntroAmenity.style.display = "none";
    campIntroMap.style.display = "block";
    campIntroReview.style.display = "none";
    apicall()
  });

  cReview.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작인 페이지 이동을 막습니다.
    campIntro.style.display = "none";
    campIntroAmenity.style.display = "none";
    campIntroMap.style.display = "none";
    campIntroReview.style.display = "block";

  });
});

//댓글
$('.insert-reqly').on('click', function() {
    let campNum = document.getElementById('comment-content').getAttribute('data-campNum-value');
    let commentText = $('#comment-content').val();
    if (!commentText) {
        window.alert("댓글을 입력해 주세요!!!!");
    }
    else {
        // 서버에 AJAX 요청 보내기
        $.ajax({
            url: '/campInfo/insertReply.do', 
            method: 'POST',
            data: { campNum: campNum, postReplyContent: commentText},
            success: function(response) {
                if (response && response !== null) {
                    let newComment = 
                        '<div class="comment-list" id="comment-list-'+response[0].postReplyNum+'">' +
                            '<div class="comment">' +
                                '<div class="comment-user"><i class="fa-solid fa-tree fa-xl" style="color: #155b3a;"></i> '+ response[0].memberId+'</div>' +
                                '<div class="comment-date">'+response[0].newDate+'</div>' +
                            '</div>' +
                            '<div class="comment">' +
                                '<div class="comment-content">'+response[0].postReplyContent+'</div>' +
                                '<div class="comment-like">' +
                                    '<i class="fa-regular fa-thumbs-up" style="color: #1e6bf1;" onclick="likePostReply('+response[0].postReplyNum+');"></i> <span id="comment-like-count'+response[0].postReplyNum+'">0</span> <i class="fa-solid fa-trash-can" style="color: #949494;" onclick="deleteReply('+response[0].postReplyNum+')"></i>' +
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
      url: '/campInfo/replyLikePost.do', // insert 컨트롤러의 URL을 입력하세요
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

//댓글 삭제 
function deleteReply(postReplyNum) {
	  let commentListId = 'comment-list-'+postReplyNum;
	    let commentList = document.getElementById(commentListId);
	    $.ajax({
	      type: 'POST',
	      url: '/campInfo/deleteReply.do', // insert 컨트롤러의 URL을 입력하세요
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

//const commentForm = document.getElementById('comment-form');
//const commentText = document.getElementById('comment-text');
//const commentSection = document.getElementById('comment-section');
//
//// 댓글 데이터 저장용 배열
//let comments = [];
//
//// 댓글 추가 함수
//function addComment(commentText, userId) {
//  const comment = {
//    id: Date.now(),
//    text: commentText,
//    userId: userId, // 작성자 아이디를 추가
//    likes: 0
//  };
//  comments.push(comment);
//  updateCommentSection();
//}
//
//// 댓글 삭제 함수
//function deleteComment(commentId) {
//  comments = comments.filter(comment => comment.id !== commentId);
//  updateCommentSection();
//}
//
//// 댓글 공감 함수
//function likeComment(commentId) {
//  const comment = comments.find(comment => comment.id === commentId);
//  if (comment) {
//    comment.likes += 1;
//    updateCommentSection();
//  }
//}
//
//// 댓글 섹션 업데이트 함수
//function updateCommentSection() {
//  commentSection.innerHTML = '';
//  comments.forEach(comment => {
//    const commentDiv = document.createElement('div');
//    commentDiv.innerHTML = `
//          <p><strong>${comment.userId}</strong>: ${comment.text}
//          <button class="comment-like-btn small" onclick="likeComment(${comment.id})">공감 (${comment.likes})</button>
//          <button class="comment-delete-btn small" onclick="deleteComment(${comment.id})">삭제</button>
//          </p>
//          <hr>
//        `;
//    commentSection.appendChild(commentDiv);
//  });
//}
//
//// 댓글 작성 폼 제출 이벤트 리스너
//commentForm.addEventListener('submit', function (event) {
//  event.preventDefault();
//  const text = commentText.value.trim();
//  const userId = '<i class="fa-solid fa-tree fa-xl" style="color: #155b3a;"></i>'; // 회원가입과 로그인을 구현하지 않았으므로 임시 아이디를 사용합니다.
//  if (text !== '') {
//    addComment(text, userId);
//    commentText.value = '';
//  }
//});

// 초기화: 몇 개의 더미 댓글을 추가해봅시다.


// 사진박스
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeBtn = document.getElementsByClassName("close")[0];
const prevBtn = document.getElementsByClassName("prev")[0];
const nextBtn = document.getElementsByClassName("next")[0];

const images = document.querySelectorAll(".grid-item img");
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});

function openModal(index) {
  modal.style.display = "block";
  modalImage.src = images[index].src;
  currentIndex = index;
}

function closeModal() {
  modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);

function changeImage(offset) {
  currentIndex += offset;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  modalImage.src = images[currentIndex].src;
}

prevBtn.addEventListener("click", () => changeImage(-1));
nextBtn.addEventListener("click", () => changeImage(1));

