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
					<a href="a_inquiry.html" class="logo">
						<strong>Campfire</strong> 커뮤니티
					</a>

				</header>

				<!-- Content -->
				<section>

					<div class="board-info">
						
						<c:choose>
							<c:when test="${ckeckLike eq 1}">
								<i id="heart" class="fa-solid fa-heart fa-xl" data-jstl-value="${board.postNum}"style="color: #ff8fb6;"></i>
							</c:when>
							<c:otherwise>
								<i id="heart" class="fa-regular fa-heart fa-xl" data-jstl-value="${board.postNum}" style="color: #ff8fb6;"></i>
							</c:otherwise>
						</c:choose>
						<span id="like-count">${likeCount }</span> 
						<i class="fa-solid fa-eye fa-lg" style="color: #5c5c5c; margin-right: 3px;"></i><span>${boardList.postViewCount }</span> <span>등록 날짜 : ${boardList.newCreateDate }</span>
					</div>
					<div class="board-title">
						<c:choose>
							<c:when test="${board.postCategory eq 'recommend'}">
								<p>추천</p>
							</c:when>
							<c:otherwise>
								<p>정보공유</p>
							</c:otherwise>
						</c:choose>
						<h2>${board.postTitle }</h2>
					</div>

					<p class="user-id">
						<i class="fa-solid fa-tree fa-2xl" style="color: #155b3a;"></i><strong>userId</strong>
					</p>
					<div id="main-text">
						<br> ${board.postContent }
					</div>
					<div class="btn-box">
						<br>
						<c:if test="${sessionScope.memberNum == board.memberNum}">
							<button type="button" class="button small right-btn" onclick="location.href = '/user/board/showModifyBoard.do?postCategory=${board.postCategory}&memberNum=${board.memberNum}&postNum=${board.postNum}'" class="btn btn-primary">수정</button>
							<button type="button" class="button small right-btn" onclick="location.href = '/user/board/deleteBoard.do?postCategory=${board.postCategory}&memberNum=${board.memberNum}&postNum=${board.postNum}'" class="btn btn-primary">삭제</button>
						</c:if>
						<c:if test="${sessionScope.memberNum != board.memberNum && sessionScope.memberDivision eq 'admin'}">
							<button type="button" class="button small right-btn" onclick="location.href = '/user/board/deleteBoard.do?postCategory=${board.postCategory}&memberNum=${board.memberNum}&postNum=${board.postNum}'" class="btn btn-primary">삭제</button>
						</c:if>
						<button type="button" class="button small primary right-btn" onclick="location.href = '/user/board/showBoardList.do?postCategory=${board.postCategory}'">목록</button>
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
	<script src="../../resources/main/js/board.js"></script>
	<script src="https://kit.fontawesome.com/0cf27f7ac1.js" crossorigin="anonymous"></script>
</body>

</html>