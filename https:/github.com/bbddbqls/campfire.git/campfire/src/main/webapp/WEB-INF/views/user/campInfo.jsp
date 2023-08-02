<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<!--
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>

<head>
	
	<%@ include file="../common/head.jsp"  %>
	<link rel="stylesheet" href="/resources/css/campInfo.css" />
</head>

<body class="is-preload">

	<!-- Wrapper -->
	<div id="wrapper">

		<!-- Main -->
		<div id="main">
			<div class="inner">

				<!-- Header -->
				<header id="header">
					<a href="index.html" class="logo"><strong>Campfire</strong> 캠핑장 정보</a>

				</header>

				<!-- Content -->
				<section>
					<div id="sub_title_wrap">

						<div class="layout">
							<h2>
								<span class="skip">다온숲</span>
								<span>
									<img class="heart-icon" src="/resources/images/heart.png" alt="Heart Icon">
									<span class="heart-count">0</span></span>
								<span>
									<img class="star-icon" src="/resources/images/star.png" alt="Star Icon">
									<span class="star-count">0</span></span>
							</h2>

							<!-- 다른 사용자들의 정보도 추가 가능 -->
							<!--사진-->
							<div class="carousel-container">
								<div class="carousel-slider">
									<!-- 각 슬라이드 아이템들을 추가합니다. -->
									<div class="carousel-slide active">
										<img src="/resources/images/다온숲1.jpg" alt="Image 1" class="img-fluid">
									</div>
									<div class="carousel-slide ">
										<img src="/resources/images/다온숲2.jpg" alt="Image 2" class="img-fluid">
									</div>
									<div class="carousel-slide">
										<img src="/resources/images/다온숲3.jpg" alt="Image 3" class="img-fluid">
									</div>
									<div class="carousel-slide">
										<img src="/resources/images/다온숲4.jpg" alt="Image 4" class="img-fluid">
									</div>
									<!-- 추가적인 이미지 태그를 원하는 만큼 추가 가능 -->
								</div>

								<!-- 좌우 슬라이드 버튼 -->
								<button class="carousel-btn-prev" onclick="moveSlide(-1)">&#10094;</button>
								<button class="carousel-btn-next" onclick="moveSlide(1)">&#10095;</button>
							</div>

							<table class="table">
								<colgroup>
									<col style="width: 30%;">
									<col style="width: 70%;">
								</colgroup>
								<br>
								<tbody>
									<tr>
										<th scope="col">주소</th>
										<td>세종특별자치시 전동면 깊은내길 213 </td>
									</tr>
									<tr class="camp_call_pcVer">
										<th scope="col">문의처</th>
										<td>
											010-2606-7323
										</td>
									</tr>
									<tr>
										<th scope="col">캠핑장 유형</th>
										<td>글램핑장</td>
									</tr>
									<tr>
										<th scope="col">홈페이지</th>
										<td><a href="https://www.daonsup.com/index.asp" target="_BLANK"
												title="새창열림">홈페이지 바로가기</a>
											<i class="ico_link"><span class="skip">새창으로</span></i>
										</td>
									</tr>
									<tr>
										<th scope="col">태그</th>
										<td>#친절한 #깨끗한 #가족 # 커플 #힐링 #시골 </td>
									</tr>
									<tr>
										<th scope="col">주변이용가능시설</th>
										<td>산책로, 고복저수지, 송학산 </td>
									</tr>
								</tbody>
							</table>
							<!--//타이틀-->

						</div>

					</div>
					<!-- 상세정보 바 -->
					<div class="campinfo-bar">
						<ul>
							<li id="c_intro">캠핑장 소개</li>
							<li id="c_amenity">시설정보</li>
							<li id="c_map">위치</li>
							<li id="c_review">캠핑 후기</li>
						</ul>
					</div>


					<div class="camp_intro">
						<p class="camp_intro_txt">
							<span>다온숲에 오신 것을 환영합니다.
								다온 이란 뜻은 "좋은 모든 일들이 다 온다” 는 순 우리말입니다.
								저희 임직원 일동은 고객님께 항상 좋은 일들이 가득하시길 기원합니다.
								더불어 사회와 가족과 개인적인 일상속에서 항상 건강하고 유쾌한 삶이 되시길 바랍니다.
							</span>
						</p>
						<hr>
					</div>
					<div class="camp_intro_amenity">
						<div id="amenity">
							<h4 class="icon_h3">캠핑장 시설정보</h4>

							<div class="amenity-box">
								<div class="div1">
									<img src="/resources/images/마트.png" alt="">
									<span>마트</span>
								</div>
								<div class="div1">
									<img src="/resources/images/바베큐.png" alt="">

									<span>바베큐</span>
								</div>
								<div class="div1">

									<img src="/resources/images/산책.png" alt="">

									<span>산책</span>
								</div>
								<div class="div1">
									<img src="/resources/images/와이파이.png" alt="">

									<span>와이파이</span>
								</div>
								<div class="div1">
									<img src="/resources/images/수영장.png" alt="">

									<span>수영장</span>
								</div>
								<br>
							</div>
							<p class="camp_intro_txt">
								<span class="info_notice">
									* campfire에 등록된 정보는 현장상황과 다소 다를 수 있으니 반려동물 동반 여부, 부가
										시설물,추가차량 등 원활한 캠핑을 위해 꼭 필요한 사항은 해당 캠핑장에 미리 확인하시기 바랍니다.
								</span>
							</p>
						</div>
						<hr>
					</div>
					<div class="camp_intro_map">

						<script type="text/javascript"
							src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7b7e3f9163cbe6490f97df41fe3fab55&libraries=services"></script>
						<div class="map_wrap">
							<div id="map" style="overflow:hidden;">
							</div>
						</div>
						<hr>
					</div>
					<div class="camp_intro_review">
						<h3>댓글 목록</h3>
						<div id="comment-section">
							<!-- 여기에 댓글들이 동적으로 추가됩니다. -->
							<div class="comment">
								<div class="comment-text">댓글 내용 1</div>
								<div class="comment-actions">
									<button class="comment-like-btn"> 공감</button>
									<button class="comment-delete-btn">삭제</button>
								</div>
							</div>
							<!-- 추가적인 댓글들도 동일한 구조로 추가 가능 -->
						</div>

					<h4>새로운 댓글 작성</h4>
						<form id="comment-form">
							<input type="text" id="comment-text" placeholder="댓글을 입력하세요">
							<button type="submit">작성</button>
						</form>
						<hr>
					</div>
					<strong>* 가격정보</strong>
					<div class="camp_intro">
							<!--가격 테이블-->
							<div class="table_w">
								<table class="table camp_info_tb">
									<caption>
										<!-- <strong>글램핑 가격 테이블입니다.</strong> -->
										<!-- <p>글램핑의 평상시의 주중, 주말과 성수기의 주중, 주말로 나뉘어 설명합니다.</p> -->
									</caption>
									<colgroup>
										<col style="width: 20%">
										<col style="width: 20%">
										<col style="width: 20%">
										<col style="width: 20%">
										<col style="width: 20%">
									</colgroup>
									<thead>
										<tr>
											<th rowspan="2" scope="col">구분</th>
											<th colspan="2" scope="colgroup">비성수기</th>
											<th colspan="2" scope="colgroup">성수기</th>
										</tr>
						
										<tr>
											<th scope="col" class="gray">주중</th>
											<th scope="col" class="gray">주말</th>
											<th scope="col" class="gray">주중</th>
											<th scope="col" class="gray">주말</th>
										</tr>
									</thead>
									<tbody class="t_c">
										<tr>
											<th scope="col">글램핑</th>
											<td data-cell-header="비성수기 주중：">200,000</td>
											<td data-cell-header="비성수기 주말：">250,000</td>
											<td data-cell-header="성수기 주중：">350,000</td>
											<td data-cell-header="성수기 주말：">395,000</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--//가격 테이블-->
					</div>

					<hr>
					<div class="box_photo">
							<div class="grid-container">
								<!-- 여기에 작은 사진들을 추가합니다. -->
								<div class="grid-item"><img src="/resources/images/다온숲1.jpg" alt="사진 1" width="100%" height="auto" data-index="0"></div>
								<div class="grid-item"><img src="/resources/images/다온숲2.jpg" alt="사진 2" width="100%" height="auto" data-index="1"></div>
								<div class="grid-item"><img src="/resources/images/다온숲3.jpg" alt="사진 3" width="100%" height="auto" data-index="2"></div>
								<div class="grid-item"><img src="/resources/images/다온숲1.jpg" alt="사진 1" width="100%" height="auto" data-index="0"></div>
								<div class="grid-item"><img src="/resources/images/다온숲2.jpg" alt="사진 2" width="100%" height="auto" data-index="1"></div>
								<div class="grid-item"><img src="/resources/images/다온숲3.jpg" alt="사진 3" width="100%" height="auto" data-index="2"></div>
								<div class="grid-item"><img src="/resources/images/다온숲1.jpg" alt="사진 1" width="100%" height="auto" data-index="0"></div>
								<div class="grid-item"><img src="/resources/images/다온숲2.jpg" alt="사진 2" width="100%" height="auto" data-index="1"></div>
								<div class="grid-item"><img src="/resources/images/다온숲3.jpg" alt="사진 3" width="100%" height="auto" data-index="2"></div>
							</div>

							<!-- 확대 보기를 위한 모달 박스 -->
							<div id="modal" class="modal">
								<div class="close">&times;</div>
								<div class="modal-content">
									<div class="prev" onclick="changeImage(-1)">&#10094;</div>
									<img id="modal-image" src="" alt="확대 보기">
									<div class="next" onclick="changeImage(1)">&#10095;</div>
								</div>
							</div>
					</div>
				</section>
			</div>
		</div>


		<!-- Sidebar -->
		<div id="sidebar">
			<div class="inner">
				<!-- Menu -->
				<nav id="menu">
					<header class="major">
						<h2>Menu</h2>
					</header>
					<ul>
						<li><a href="index.html">Homepage</a></li>
						<li><a href="./campSearch.jsp">캠핑장 찾기</a></li>
						<li><a href="./campInfo.jsp">당근</a></li>
						<li>
							<span class="opener">커뮤니티</span>
							<ul>
								<li><a href="#">추천</a></li>
								<li><a href="#">정보공유</a></li>
								<li><a href="#">모임 결성</a></li>
							</ul>
						</li>
						<li><a href="#">Etiam Dolore</a></li>
						<li><a href="#">Adipiscing</a></li>
						<li>
							<span class="opener">Another Submenu</span>
							<ul>
								<li><a href="#">Lorem Dolor</a></li>
								<li><a href="#">Ipsum Adipiscing</a></li>
								<li><a href="#">Tempus Magna</a></li>
								<li><a href="#">Feugiat Veroeros</a></li>
							</ul>
						</li>
						<li><a href="#">Maximus Erat</a></li>
						<li><a href="#">Sapien Mauris</a></li>
						<li><a href="#">Amet Lacinia</a></li>
					</ul>
				</nav>



				<!-- Section -->
				<section>
					<header class="major">
						<h2>Get in touch</h2>
					</header>
					<p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem
						ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
						tempus
						aliquam.</p>
					<ul class="contact">
						<li class="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
						<li class="icon solid fa-phone">(000) 000-0000</li>
						<li class="icon solid fa-home">1234 Somewhere Road #8254<br />
							Nashville, TN 00000-0000</li>
					</ul>
				</section>

				<!-- Footer -->
				<footer id="footer">
					<p class="copyright">&copy; Untitled. All rights reserved. Demo Images: <a
							href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5
							UP</a>.
					</p>
				</footer>

			</div>
		</div>

	<!-- Scripts -->
	<script src="../../resources/js/jquery.min.js"></script>
	<script src="../../resources/js/browser.min.js"></script>
	<script src="../../resources/js/breakpoints.min.js"></script>
	<script src="../../resources/js/util.js"></script>
	<script src="../../resources/js/main.js"></script>
	<script src="../../resources/js/campInfo.js"></script>
	<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
		crossorigin="anonymous"></script> -->

</body>

</html>