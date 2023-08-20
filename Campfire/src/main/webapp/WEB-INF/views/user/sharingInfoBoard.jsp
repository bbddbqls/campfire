<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML>
<!--
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>

<head>
<%@ include file="../common/head.jsp"%>
<link rel="stylesheet" href="../../resources/main/css/recommend.css" />
</head>

<body class="is-preload">

	<!-- Wrapper -->
	<div id="wrapper">

		<!-- Main -->
		<div id="main">
			<div class="inner">

				<!-- Header -->
				<header id="header">
					<a href="recommend.html" class="logo">
						<strong>Campfire</strong> 정보공유
					</a>
					<ul class="icons">
						<li>
							<a href="#" class="icon brands fa-twitter">
								<span class="label">Twitter</span>
							</a>
						</li>
						<li>
							<a href="#" class="icon brands fa-facebook-f">
								<span class="label">Facebook</span>
							</a>
						</li>
						<li>
							<a href="#" class="icon brands fa-snapchat-ghost">
								<span class="label">Snapchat</span>
							</a>
						</li>
						<li>
							<a href="#" class="icon brands fa-instagram">
								<span class="label">Instagram</span>
							</a>
						</li>
						<li>
							<a href="#" class="icon brands fa-medium-m">
								<span class="label">Medium</span>
							</a>
						</li>
					</ul>
				</header>

				<!-- Content -->
				<section>
					<div>
						<strong style="font-size: 20px;">인기글</strong>
					</div>
					<div>
						<div class="row gtr-50 gtr-uniform">
							<div class="col-3">
								<div class="item-box">
									<span class="image fit my-margin"><img src="../images/pic01.jpg" alt="" /></span>
									<p>아아아</p>
								</div>
							</div>
							<div class="col-3">
								<span class="image fit my-margin"><img src="../images/pic02.jpg" alt="" /></span>아아아
							</div>
							<div class="col-3">
								<span class="image fit my-margin"><img src="../images/pic03.jpg" alt="" /></span>아아아
							</div>
							<div class="col-3">
								<span class="image fit my-margin"><img src="../images/pic03.jpg" alt="" /></span>아아아
							</div>
						</div>
					</div>
					<div class="row all-content">
						<div class="col-6">
							<strong style="font-size: 20px;">전체글</strong>
						</div>
						<div class="col-6 menu-container">
							<img class="menu-logo" id="menu-logo1" src="../images/icon2-select.png" alt=""> <img class="menu-logo" id="menu-logo2" src="../images/icon1.png" alt="">
						</div>
					</div>
					<br>
					<!-- 리스트 스타일 1 -->
					<div class="box alt" id="ls1">
						<div class="row gtr-50 gtr-uniform">
							<div class="col-6 items">
								<div class="img-box">
									<img src="../images/pic01.jpg" alt="">
								</div>
								<div class="content-box">
									<p class="my-margin content-title">
										<strong>title</strong>

									</p>
									<p class="my-margin content-main">본문입니다.본문입니다.본문입니다.본문입니다.본문입니다.</p>
									<p class="my-margin content-function">
										<img src="../images/like.png" alt="">0 <img src="../images/comment.png" alt=""> 0 <span class="font-small content-time right-align1">시간전</span> <span class="font-small content-view right-align2">0읽음</span>
									</p>
								</div>
							</div>
							<div class="col-6 items">
								<div class="img-box">
									<img src="../images/pic01.jpg" alt="">
								</div>
								<div class="content-box">
									<p class="my-margin content-title">
										<strong>title</strong> <span class="font-small content-time right-align1">시간전</span> <span class="font-small content-view right-align2">0읽음</span>
									</p>
									<p class="my-margin content-main">본문입니다.본문입니다.본문입니다.본문입니다.본문입니다.</p>
									<p class="my-margin content-function">
										<img src="../images/like.png" alt="">0 <img src="../images/comment.png" alt=""> 0
									</p>
								</div>
							</div>
							<div class="col-6 items">
								<div class="img-box">
									<img src="../images/pic01.jpg" alt="">
								</div>
								<div class="content-box">
									<p class="my-margin content-title">
										<strong>title</strong> <span class="font-small content-time right-align1">시간전</span> <span class="font-small content-view right-align2">0읽음</span>
									</p>
									<p class="my-margin content-main">본문입니다.본문입니다.본문입니다.본문입니다.본문입니다.</p>
									<p class="my-margin content-function">
										<img src="../images/like.png" alt="">0 <img src="../images/comment.png" alt=""> 0
									</p>
								</div>
							</div>
							<div class="col-6 items">
								<div class="img-box">
									<img src="../images/pic01.jpg" alt="">
								</div>
								<div class="content-box">
									<p class="my-margin content-title">
										<strong>title</strong> <span class="font-small content-time right-align1">시간전</span> <span class="font-small content-view right-align2">0읽음</span>
									</p>
									<p class="my-margin content-main">본문입니다.본문입니다.본문입니다.본문입니다.본문입니다.</p>
									<p class="my-margin content-function">
										<img src="../images/like.png" alt=""><span>0</span> <img src="../images/comment.png" alt=""><span>0</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<!-- 리스트 스타일 2 -->
					<div class="features" id="ls2" style="display: none;">
						<article>
							<span class="icon" style="background-image: url('../images/김7.jpg')"></span>
							<div class="content">
								<h3>Portitor ullamcorper</h3>
								<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
								<p class="no-margin content-function">
									<img src="../images/like.png" alt="">0 <img src="../images/comment.png" alt=""> 0 <span class="font-small content-time right-align1">시간전</span> <span class="font-small content-view right-align2">0읽음</span>
								</p>
							</div>
						</article>
						<article>
							<span class="icon" style="background-image: url('../images/김7.jpg')"></span>
							<div class="content">
								<h3>Portitor ullamcorper</h3>
								<span class="font-small content-time right-align1">시간전</span> <span class="font-small content-view right-align2">0읽음</span>
								<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.</p>
								<p class="no-margin content-function">
									<img src="../images/like.png" alt="">0 <img src="../images/comment.png" alt=""> 0
								</p>
							</div>
						</article>
						<article>
							<span class="icon" style="background-image: url('../images/김7.jpg')"></span>
							<div class="content">
								<h3>Portitor ullamcorper</h3>
								<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
							</div>
						</article>
					</div>

					<div>
						&nbsp;
						<button class="button small primary right-btn" onclick="location.href='userEnroll.html'">글쓰기</button>
					</div>

					<div class="section-pagination">
						<ul class="pagination">
							<c:choose>
								<c:when test="${pi.currentPage eq 1}">
									<li>
										<a href="#" class="button small disabled">Prev</a>
									</li>
								</c:when>
								<c:otherwise>
									<li>
										<a href="showUserInquiry.do?cpage=${ pi.currentPage - 1 }&searchCtg=${ searchCtg }&searchTxt=${ searchTxt }" class="button small">Prev</a>
									</li>
								</c:otherwise>
							</c:choose>

							<c:forEach var="page" begin="${ pi.startPage }" end="${ pi.endPage }">
								<li>
									<c:choose>
										<c:when test="${page eq pi.currentPage}">
											<a class="page active" href="showUserInquiry.do?cpage=${ page }&searchCtg=${ searchCtg }&searchTxt=${ searchTxt }">${ page }</a>
										</c:when>
										<c:otherwise>
											<a class="page" href="showUserInquiry.do?cpage=${ page }&searchCtg=${ searchCtg }&searchTxt=${ searchTxt }">${ page }</a>
										</c:otherwise>
									</c:choose>
								</li>
							</c:forEach>

							<c:choose>
								<c:when test="${pi.currentPage eq pi.maxPage}">
									<li>
										<a href="#" class="button small disabled">Next</a>
									</li>
								</c:when>
								<c:otherwise>
									<li>
										<a href="showUserInquiry.do?cpage=${ pi.currentPage + 1 }&searchCtg=${ searchCtg }&searchTxt=${ searchTxt }" class="button small">Next</a>
									</li>
								</c:otherwise>
							</c:choose>
						</ul>
					</div>

				</section>

			</div>
		</div>

		<!-- Sidebar -->
		<%@ include file="../common/sidebar.jsp"%>

	</div>

	<!-- Scripts -->
	<script src="../../resources/main/js/jquery.min.js"></script>
	<script src="../../resources/main/js/browser.min.js"></script>
	<script src="../../resources/main/js/breakpoints.min.js"></script>
	<script src="../../resources/main/js/util.js"></script>
	<script src="../../resources/main/js/main.js"></script>
	<script src="../../resources/main/js/changeListStyle.js"></script>

</body>

</html>