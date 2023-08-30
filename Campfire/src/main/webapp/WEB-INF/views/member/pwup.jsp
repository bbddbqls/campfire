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
<title>Camp Search Page</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<%@ include file="../common/head.jsp"%>
<link rel="stylesheet" href="/resources/login/css/mypage.css" />
<link rel="stylesheet" href="/resources/main/css/campSearch.css" />
<link rel="stylesheet" href="/resources/main/css/tag.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


</head>

<body class="is-preload">

	<!-- Wrapper -->
	<div id="wrapper">

		<!-- Main -->
		<div id="main">
			<div class="inner">
				<!-- Header -->
				<header id="header">
					<a href="/campSearch/camping.do" class="logo">
						<strong>Campfire</strong> 마이페이지
					</a>
					<c:choose>
						<c:when test="${sessionScope.memberNum != null}">
							<ul class="list-bar">
								<li>
									<a href="/member/mypage.do">마이페이지</a>
								</li>
								<li>
									<a href="/myList/likeList.do"> 찜 목록 </a>
								</li>
								<li>
									<a href="/myList/wishList.do"> 즐겨찾기 목록 </a>
								</li>
								<li>
									<a href="/member/logout.do"> 로그아웃 </a>
								</li>

							</ul>
						</c:when>
						<c:otherwise>
							<ul class="list-bar">

								<li>
									<a href="/">로그인 </a>
								</li>

							</ul>
						</c:otherwise>
					</c:choose>

				</header>



				<section class="bg-light">

					<h2 style="text-align: center; margin-top: 20px;">비밀번호변경</h2>
					<div class="container py-4">
						<div class="row align-items-center justify-content-between"></div>

						<form action="pwup.do" method="post" onsubmit="return checkForm()">

							<div class="info" id="info__id">
								<div id="id-input">
									<label for="id">아이디</label>
									<input class="box" id="id" type="text" name="memberUserId" value="${member.memberUserId}" disabled />
								</div>
								<div class="error-msg"></div>
							</div>



							<div class="info" id="info__pw">
								<input class="box" type="password" placeholder="새 비밀번호 입력 (문자, 숫자, 특수문자 포함 8~20자)" name="memberPw" id="memberPw"/>
								<div class="error-msg"></div>
							</div>
							<div class="info" id="info__pwRe">
								<input class="box" type="password" placeholder="새 비밀번호 재입력" name="memberPwChk" id="memberPwChk" />
								<div class="error-msg"></div>
							</div>


							<br>

							<div class="d-grid gap-2">
								<button class="btn btn-primary btn-lg" type="submit">변경 하기</button>
								<button type="button" onclick="history.go(-1);">Cancel</button>
							</div>
						</form>



					</div>
				</section>

			</div>
		</div>
		<%@ include file="../common/sidebar.jsp"%>

	</div>

	<!-- Scripts -->

	<script src="/resources/login/js/pwup.js"></script>
	<script src="/resources/main/js/jquery.min.js"></script>
	<script src="/resources/main/js/browser.min.js"></script>
	<script src="/resources/main/js/breakpoints.min.js"></script>
	<script src="/resources/main/js/util.js"></script>
	<script src="/resources/main/js/main.js"></script>
	<script src="/resources/main/js/tag.js"></script>
	<script src="http://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
</body>

</html>