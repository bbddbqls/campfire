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
<%@ include file="../common/smarteditor.jsp"%>
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
						<strong>Campfire</strong> 글쓰기
					</a>

				</header>

				<!-- Content -->
				<section>

					<form action="/free/insert.do" method="post" enctype="multipart/form-data">
						<div class="mb-3 justify-content-center">
							<label for="exampleFormControlInput1" class="form-label">제목</label>
							<input type="text" class="form-control" name="title" id="exampleFormControlInput1" placeholder="제목을 입력하세요.">
						</div>

						<div class="mb-3 justify-content-center">
							<label for="categorySelect" class="form-label">카테고리</label>
							<select class="form-select" id="categorySelect" name="category">
								<option value="chat">추천</option>
								<option value="information">정보공유</option>
							</select>
						</div>

						<div id="smarteditor mb-3 justify-content-center">
							<label for="editorTxt" class="form-label">내용</label>
							<!-- <textarea name="content" id="editorTxt" class="form-control" rows="13" cols="10"
								placeholder="내용을 입력해주세요"></textarea> -->
							<textarea name="content" id="editorTxt" rows="10" cols="100" style="width: 100%; height: 412px; min-width: 500px; display: none;"></textarea>
						</div>
						<div class="btn-box">
							<button type="button" class="button small right-btn" onclick="history.back()">취소</button>
							<button type="submit" class="button small primary right-btn" onclick="save()" class="btn btn-primary">작성</button>
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
	<script src="../../resources/main/js/main.js"></script>

</body>

</html>