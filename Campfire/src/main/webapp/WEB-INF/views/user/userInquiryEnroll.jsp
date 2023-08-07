<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<!--
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>

<head>
<%@ include file="../common/head.jsp"%>
<link rel="stylesheet" href="../../resources/main/css/inquiry.css" />
</head>

<body class="is-preload">

	<!-- Wrapper -->
	<div id="wrapper">

		<!-- Main -->
		<div id="main">
			<div class="inner">

				<!-- Header -->
				<header id="header">
					<a href="u_inquiry.html" class="logo">
						<strong>Campfire</strong> 문의사항 글쓰기
					</a>

				</header>

				<!-- Content -->
				<section>
					<form action="/user/enrollUserInquiry.do" method="post">
						<div class="title-box">
							<input type="text" class="form-control" id="exampleFormControlInput1" name="inquiryTitle" placeholder="제목을 입력하세요.">
						</div>

						<br>

						<div class="content-box">
							<textarea name="inquiryContext" id="editorTxt" class="form-control" rows="13" cols="10" placeholder="내용을 입력해주세요"></textarea>
						</div>
						<br>
						<div class="btn-box">
							<div>
								<label>
									<input type="radio" name="inquiryPublicFL" value="Y">
									공개
								</label>
								<label>
									<input type="radio" name="inquiryPublicFL" value="N" checked>
									비공개
								</label>
							</div>
							<div>
								<button type="button" class="button small" onclick="goBack()">취소</button>
								<button type="submit" class="button primary small">확인</button>
							</div>
						</div>
					</form>
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

</body>

</html>