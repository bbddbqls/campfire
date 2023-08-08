<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="memberDivision" scope="session">
	<c:choose>
		<c:when test="${not empty sessionScope.memberDivision}">
			<c:out value="${sessionScope.memberDivision}" />
		</c:when>
		<c:otherwise>
            user
        </c:otherwise>
	</c:choose>
</c:set>
<div id="sidebar">
	<div class="inner">
		<!-- Menu -->
		<nav id="menu">
			<header class="major">
				<h2>Menu</h2>
			</header>
			<ul>
				<li>
					<a href="../user/index.html">Homepage</a>
				</li>
				<li>
					<a href="../user/campInfo.html">캠핑장 찾기</a>
				</li>
				<li>
					<a href="../user/elements.html">당근</a>
				</li>
				<li>
					<span class="opener">커뮤니티</span>
					<ul>
						<li>
							<a href="../user/recommend.html">추천</a>
						</li>
						<li>
							<a href="../user/sharingInfo.html">정보공유</a>
						</li>
						<li>
							<a href="../user/recruitment.html">모임 결성</a>
						</li>
					</ul>
				</li>
				<c:if test="${sessionScope.memberDivision eq 'user' || sessionScope.memberDivision eq 'admin'}">
					<li>
						<a href="/user/showUserInquiry.do">문의 사항</a>
					</li>
				</c:if>
				<!--관리자만 보이게-->
				<c:if test="${sessionScope.memberDivision eq 'admin'}">
					<li>
						<span class="opener">admin</span>
						<ul>
							<li>
								<a href="../admin/a_management.html">회원 관리</a>
							</li>
							<li>
								<a href="#">캠핑장 등록</a>
							</li>
							<li>
								<a href="/admin/showAdminInquiry.do">문의사항 답변</a>
							</li>
						</ul>
					</li>
				</c:if>
				<!--사업자만 보이게-->
				<c:if test="${sessionScope.memberDivision eq 'business'}">

					<li>
						<span class="opener">buisnessman</span>
						<ul>
							<li>
								<a href="/business/registration/showRegistration.do">등록 요청</a>
							</li>
							<li>
								<a href="">문의사항</a>
							</li>
						</ul>
					</li>
				</c:if>
			</ul>
		</nav>



		<!-- Section -->
		<section>
			<header class="major">
				<h2>Get in touch</h2>
			</header>
			<p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
			<ul class="contact">
				<li class="icon solid fa-envelope">
					<a href="#">information@untitled.tld</a>
				</li>
				<li class="icon solid fa-phone">(000) 000-0000</li>
				<li class="icon solid fa-home">
					1234 Somewhere Road #8254<br /> Nashville, TN 00000-0000
				</li>
			</ul>
		</section>

		<!-- Footer -->
		<footer id="footer">
			<p class="copyright">
				&copy; Untitled. All rights reserved. Demo Images:
				<a href="https://unsplash.com">Unsplash</a>
				. Design:
				<a href="https://html5up.net">HTML5 UP</a>
				.
			</p>
		</footer>

	</div>
</div>