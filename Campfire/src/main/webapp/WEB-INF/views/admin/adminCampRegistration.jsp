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
</head>

<body class="is-preload">

	<!-- Wrapper -->
	<div id="wrapper">

		<!-- Main -->
		<div id="main">
			<div class="inner">

				<!-- Header -->
				<header id="header">
					<a href="index.html" class="logo"><strong>Campfire</strong> 회원 관리</a>

				</header>

				<!-- Content -->
				<section>
					<h4>사업자 승인</h4>
					<div class="table-wrapper">
						<table>
							<thead>
								<tr>
									
									<th class="td-bNum">사업자 번호</th>
									<th class="td-id">아이디</th>
									<th class="td-name">이름</th>
									<th class="td-company">회사명</th>
									<th class="td-representative">대표명</th>
									<th class="td-stt">사업자 상태</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									
									<td class="td-bNum">398-87-01116</td>
									<td class="td-id">bbqdbqls</td>
									<td class="td-name">황유빈</td>
									<td class="td-company">(주)우리금융지주</td>
									<td class="td-representative">황유빈</td>
									<td class="td-stt">계속사업자</td>
								</tr>
								<tr>
									<td class="td-approval" colspan="3"><button class="button primary small">승인</button></td>
									<td class="td-refuse"colspan="3"><button class="button small">거절</button></td>
								</tr>
								
							</tbody>
						</table>
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