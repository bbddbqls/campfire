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
					<form method="post" action="/user/modifyForm.do">
						<input type="hidden" name="inquiryNum" value="${detail.inquiryNum }" />
						<input type="hidden" name="memberNum" value="${detail.memberNum }" />
						<input type="hidden" name="inquiryPublicFL" value="${detail.inquiryPublicFL }" />
						<input type="hidden" name="inquiryTitle" value="${detail.inquiryTitle }" />
						<input type="hidden" name="inquiryContext" value="${detail.inquiryContext }" />

						<div class="post-info">
							<p>
								<span class="info-user">작성자:${ detail.memberId }</span><span class="info-time">작성일:${ detail.inquiryNewDate }</span>
							</p>
						</div>
						<div class="title-box">
							<input type="text" class="form-control" id="exampleFormControlInput1" name="inquiryTitle" value="${ detail.inquiryTitle }" disabled>
						</div>

						<br>

						<div class="content-box">
							<textarea name="inquiryContext" id="editorTxt" class="form-control" rows="13" cols="10" disabled>${ detail.inquiryContext }</textarea>
						</div>
						<c:if test="${detail.inquiryAnswerFL eq 'Y'}">
							<br>
							<div class="reply-wrapper">
								<div class="reply-line"></div>
								<span>답글</span>
								<div class="reply-line"></div>
							</div>
							<br>
							<div class="post-info">
								<p>
									<span class="info-user">작성자:${ detail.answerAdmin }</span><span class="info-time">작성일:${ detail.answerNewDate }</span>
								</p>
							</div>
							<div class="title-box">
								<input type="text" class="form-control" id="exampleFormControlInput1" name="title" value="${ detail.answerTitle }">
							</div>

							<br>

							<div class="content-box">
								<textarea name="content" id="editorTxt" class="form-control" rows="13" cols="10">${ detail.answerContext }</textarea>
							</div>
						</c:if>
						<br>
						<div class="right-btn-box">
							<button type="button" class="button small" onclick="goBack()">목록</button>
							<c:if test="${(sessionScope.memberNum == detail.memberNum) && (detail.inquiryAnswerFL eq 'N')}">
								<button type="submit" class="button primary small">수정</button>
								<button type="button" class="button primary small" onclick="location.href='/user/deleteUserInquiry.do?inNum=${detail.inquiryNum}&memberNum=${detail.memberNum}'">삭제</button>
							</c:if>
							<c:if test="${sessionScope.memberDivision eq 'admin'}">
								<button type="button" class="button primary small" onclick="location.href='/admin/deleteAdminInquiry.do?inNum=${detail.inquiryNum}'">문의사항 삭제</button>
							</c:if>
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