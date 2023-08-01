<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
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
					<a href="u_inquiry.html" class="logo"><strong>Campfire</strong> 문의사항</a>

				</header>

				<!-- Content -->
				<section>
					<div class="section-header">
						<h4>문의사항</h4>
					</div>
					<div class="table-wrapper">
						<!-- <ul class="list_tap">
							<li>전체</li>
							<li>처리할 목록</li>
						</ul> -->
						<table>
							<thead>
								<tr>
									<th class="td-num">번호</th>
									<th class="td-title">제목</th>
									<th class="td-id">아이디</th>
									<th class="td-time">시간</th>
								</tr>
							</thead>
							<tbody>
								<tr onclick="location.href='u_inquiryDetail.html'">
									<td class="td-num">3</td>
									<td class="td-title">Ante turpis integ,Ante turpis integAnte turpis integAnte turpis
										integ</td>
									<td class="td-id">bbqdbqls</td>
									<td class="td-time">07/18</td>
								</tr>
								<tr class="tr-reply">
									<td class="td-num"></td>
									<td class="td-title">&rarr;[답글]안녕하세요.안녀여여여여여ㅕㅇㅇㄴ ㄴ머ㅑㄴㅁㅇㄴ</td>
									<td class="td-id">admin</td>
									<td class="td-time">07/19</td>
								</tr>
								<tr>
									<td class="td-num">2</td>
									<td class="td-title">Ante turpis integ,Ante turpis integAnte turpis integAnte turpis
										integ</td>
									<td class="td-id">29.99</td>
									<td class="td-time">29.99</td>
								</tr>
								<tr>
									<td class="td-num">2</td>
									<td class="td-title">Ante turpis integ,Ante turpis integAnte turpis integAnte turpis
										integ</td>
									<td class="td-id">29.99</td>
									<td class="td-time">29.99</td>
								</tr>
								<tr>
									<td class="td-num">1</td>
									<td class="td-title">Ante turpis integ,Ante turpis integAnte turpis integAnte turpis
										integ</td>
									<td class="td-id">29.99</td>
									<td class="td-time">29.99</td>
								</tr>
							</tbody>
						</table>
						<button class="button small primary write-btn" onclick="location.href='u_inquiryEnroll.html'">글쓰기</button>
					</div>
					<div class="section-pagination">
						<ul class="pagination">
							<li><span class="button small disabled">Prev</span></li>
							<li><a href="#" class="page active">1</a></li>
							<li><a href="#" class="page">2</a></li>
							<li><a href="#" class="page">3</a></li>
							<li><span>…</span></li>
							<li><a href="#" class="page">8</a></li>
							<li><a href="#" class="page">9</a></li>
							<li><a href="#" class="page">10</a></li>
							<li><a href="#" class="button small">Next</a></li>
						</ul>
					</div>
					<form action="">
						<div class="section-search">

							<select name="category" id="category">
								<option value="">제목</option>
								<option value="1">내용</option>
								<option value="1">작성자</option>
							</select>
							<input type="text" name="demo-name" id="demo-name" value="" placeholder="검색어">
							<button type="submit" class="button primary small icon solid fa-search"></button>
						</div>
					</form>
				</section>

			</div>
		</div>

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