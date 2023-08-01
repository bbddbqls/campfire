<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<!--
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>

<head>
	<%@ include file="../common/head.jsp"%>
	<link rel="stylesheet" href="../../resources/css/inquiry.css" />
</head>

<body class="is-preload">

	<!-- Wrapper -->
	<div id="wrapper">

		<!-- Main -->
		<div id="main">
			<div class="inner">

				<!-- Header -->
				<header id="header">
					<a href="a_inquiry.html" class="logo"><strong>Campfire</strong> 문의사항 글쓰기</a>

				</header>

				<!-- Content -->
				<section>
						<div class="title-box">
							<input type="text" class="form-control"
								id="exampleFormControlInput1" name="title"
								placeholder="제목을 입력하세요.">
						</div>

						<br>

						<div class="content-box">
							<textarea name="content" id="editorTxt" class="form-control"
								rows="13" cols="10" placeholder="내용을 입력해주세요"></textarea>
						</div>
						<br>
						<div class="right-btn-box">
							<button type="button" class="button small" onclick="goBack()">취소</button>
							<button type="button" class="button primary small" onclick="location.href='a_inquiryModify.html'">수정</button>
							<button type="button" class="button primary small" onclick="/* 삭제 주소*/">삭제</button>
						</div>
				</section>

			</div>
		</div>

		<!-- Sidebar -->
		<%@ include file="../common/sidebar.jsp"%>

	</div>

	<!-- Scripts -->
	<script src="../../resources/js/jquery.min.js"></script>
	<script src="../../resources/js/browser.min.js"></script>
	<script src="../../resources/js/breakpoints.min.js"></script>
	<script src="../../resources/js/util.js"></script>
	<script src="../../resources/js/main.js"></script>

</body>

</html>