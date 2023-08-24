<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!--
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
<head>
<title>모닥불</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<link rel="stylesheet" href="/resources/login/css/main.css" />

<noscript>
	<link rel="stylesheet" href="/resources/login/css/noscript.css" />
</noscript>
<!-- 네이버 로그인 연동 api start -->
<script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js" charset="utf-8"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<!-- 네이버 로그인 연동 api end-->
<style>
.kakao {
	margin-top: 15px;
	height: 60px;
	border: solid 1px #FEE500;
	background: #FEE500;
	color: #3c1d1e;
	font-size: 18px;
	box-sizing: border-box;
	border-radius: 5px;
	cursor: pointer;
	width: 450px;
	display: flex;
}

.kakao_i {
	background: url(resources/icons/kakao.png) no-repeat;
	width: 40px;
	height: 100%;
	background-size: 90%;
	background-position: 50%;
	margin: 0 20px;
}

.kakao_txt {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
	padding-right: 60px;
}
</style>
</head>
<body class="is-preload">
	<!-- Wrapper -->
	<div id="wrapper">
		<!-- Header -->
		<header id="header">
			<div class="logo">
				<img src="/resources/images/logo4.png" alt="" />
			</div>
			<div class="content">
				<div class="inner">
					<h1>campfire</h1>
					<p>
						campfire는 늘어나는 캠퍼들에게 다양한 정보를 제공하는 웹사이트 입니다. <br /> 사람들과 소통하며 휴식과 모험의 즐거움을 함께 나눠보세요 <br /> Enjoy nature in various ways!
					</p>
				</div>
			</div>
			<nav>
				<ul>
					<li>
						<a href="/member/go.do">Go</a>
					</li>
					<li>
						<a href="#contact">Login</a>
					</li>
					<!--<li><a href="#elements">Elements</a></li>-->
				</ul>
			</nav>
		</header>

		<!-- Main -->
		<div id="main">
			<!-- Contact -->

			<article id="contact">

				<h2 align="center">Login</h2>

				<form method="post" action="member/login.do">
					<div class="fields">
						<div class="field">
							<label for="id">ID</label>
							<input type="text" name="memberId" id="id" />
						</div>

						<div class="field">
							<label for="password">Password</label>
							<input type="password" name="memberPassword" id="password" />
						</div>


						<div style="display: flex; justify-content: center; margin-top: 10px">
							<button type="submit" class="btn_login" id="log.login">
								<span class="btn_text">로그인</span>
							</button>
						</div>

						<div style="display: flex; justify-content: center; margin-top: -15px">
							<a href="#joinj" style="font-size: 0.6rem; margin-left: 6rem; margin-top: 0.5rem">
								<span>회원가입</span>
							</a>
							&nbsp; &nbsp;
							<a href="#" style="font-size: 0.6rem; margin-right: 5.5rem; margin-top: 0.5rem;">
								<span>ID·PW 찾기</span>
							</a>
							&nbsp; &nbsp;
						</div>
						<a class="kakao" href="https://kauth.kakao.com/oauth/authorize?client_id=f56f8461b6c1bd3d445e592479cd7a79&redirect_uri=http://localhost/member/kakaoLogin&response_type=code">
							<!-- REST_API키 및 REDIRECT_URI는 본인걸로 수정하세요 -->

							<div class="kakao_i"></div>
							<div class="kakao_txt">카카오톡으로 간편로그인</div>
						</a>
					</div>




					<ul class="icons">
						<li>
							<a href="#" onmouseover="darkenImage(this)" onmouseout="resetImage(this)" style="cursor: pointer">
								<img src="/resources/images/google-plus-165-svgrepo-com.svg" alt="" style="border-radius: 50%; border: 1px solid white; width: 35px; height: 35px; object-fit: contain;" class="brighten-on-hover" />
							</a>
						</li>
						<li>
							<a href="#" onmouseover="darkenImage(this)" onmouseout="resetImage(this)" style="cursor: pointer">
								<img src="/resources/images/kakao-talk-fill-svgrepo-com.svg" alt="" style="border-radius: 50%; border: 1px solid white; width: 35px; height: 35px; object-fit: contain;" class="brighten-on-hover" />
							</a>
						</li>

						<li>
							<a href="#" onmouseover="darkenImage(this)" onmouseout="resetImage(this)" style="cursor: pointer">
								<img src="/resources/images/btnDC.png" alt="" style="border-radius: 50%; border: 1px solid white; width: 35px; height: 35px; object-fit: contain;" class="brighten-on-hover" />
							</a>
						</li>

						<!-- 네이버 로그인 연동 api -->
						<!-- <div id="naver_id_login" style="border: 1px solid white; border-radius: 50%; overflow: hidden;"></div>
						
									<script type="text/javascript">
										var naver_id_login = new naver_id_login("bNV7FA3DKIkdirkFc7IO", "http://localhost:5500/test2.html");
										var state = naver_id_login.getUniqState();
										naver_id_login.setButton("dark", 1, 40);
										naver_id_login.setDomain("http://localhost:5500/test1.html");
										naver_id_login.setState(state);
										naver_id_login.setPopup();
										naver_id_login.init_naver_id_login();
									</script> -->

						<!-- 네이버 로그인 연동 api -->
						<!-- <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
									<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
						-->
					</ul>

		</form>

		</article>
		<article id="joinj">
			<div>
				<a id="business" onclick="handleButtonClick1()" onmouseover="darkenImage(this)" onmouseout="resetImage(this)" style="cursor: pointer">
					<img src="/resources/images/tie-svgrepo-com.svg" alt="" style="border-radius: 60%; border: 1px solid white; width: 50px; height: 50px; object-fit: contain;" />
				</a>
				<p>사업자</p>
			</div>

			<div>
				<a id="personal" onclick="handleButtonClick2()" onmouseover="darkenImage(this)" onmouseout="resetImage(this)" style="cursor: pointer">
					<img src="/resources/images/camping-svgrepo-com.svg" alt="" style="border-radius: 60%; border: 1px solid white; width: 50px; height: 50px; object-fit: contain;" class="brighten-on-hover" />
				</a>

				<p>개인</p>
			</div>


		</article>


		<!-- 사업자 회원가입 -->
		<article id="businessjoin">
			<h3>정보입력</h3>
			<div class="form-container">
				<section>
					<div class="info" id="info__id">
						<div id="id-input">
							<input class="box" type="text" placeholder="아이디 입력(6~20자)" />
							<button id="id-check">중복 확인</button>
						</div>
						<div class="error-msg"></div>
					</div>
					<div class="info" id="info__pw">
						<input class="box" type="password" placeholder="비밀번호 입력 (문자, 숫자, 특수문자 포함 8~20자)" />
						<div class="error-msg"></div>
					</div>
					<div class="info" id="info__pwRe">
						<input class="box" type="password" placeholder="비밀번호 재입력" />
						<div class="error-msg"></div>
					</div>

					<input type="text" class="box" type="busineessnub" placeholder="사업자번호 :" />
					<input type="text" class="box" id="name" required placeholder="이름:" />

					<div style="display: flex; gap: 10px">
						<input type="text" class="box" id="sample6_postcode" placeholder="우편번호" style="flex-basis: 70%" />
						<input type="button" id="search" onclick="sample6_execDaumPostcode()" value="우편번호 찾기" />
					</div>

					<input type="text" class="box" id="sample6_address" placeholder="주소" />
					<input type="text" id="sample6_detailAddress" placeholder="상세주소" style="flex-basis: 70%" />
					<br />
					<div class="gender-container">
						성별:
						<input type="radio" id="male" name="gender" value="남성" />
						<label for="male">남성</label>
						<input type="radio" id="female" name="gender" value="여성" />
						<label for="female">여성</label>
					</div>
					<br />

					<div class="info" id="info__birth">
						<div id="birth-flex">
							<select class="box" id="birth-year" style="width: 100px">
								<option>년</option>
							</select>
							<select class="box" id="birth-month" style="width: 100px">
								<option>월</option>
							</select>
							<select class="box" id="birth-day" style="width: 100px">
								<option>일</option>
							</select>
						</div>
						<div class="error-msg"></div>
					</div>
				</section>

				<br />
				<button type="submit" id="submit">가입하기</button>
			</div>
		</article>


		<!-- 개인 회원가입 -->
		<article id="personaljoin">
			<h3>정보입력</h3>
			<div class="form-container">
				<section>
					<div class="info" id="info__id1">
						<div id="id-input1">
							<input class="box" type="text" placeholder="아이디 입력(6~20자)" />
							<button id="id-check1">중복 확인</button>
						</div>
						<div class="error-msg"></div>
					</div>
					<div class="info" id="info__pw1">
						<input class="box" type="password" placeholder="비밀번호 입력 (문자, 숫자, 특수문자 포함 8~20자)" />
						<div class="error-msg"></div>
					</div>
					<div class="info" id="info__pwRe1">
						<input class="box" type="password" placeholder="비밀번호 재입력" />
						<div class="error-msg"></div>
					</div>
					<input type="text" class="box" id="name" required placeholder="이름:" />

					<div style="display: flex; gap: 10px">
						<input type="text" class="box" id="sample6_postcode1" placeholder="우편번호" style="flex-basis: 70%" />
						<input type="button" id="search" onclick="sample6_execDaumPostcode1()" value="우편번호 찾기" />
					</div>

					<input type="text" class="box" id="sample6_address1" placeholder="주소" />
					<input type="text" id="sample6_detailAddress1" placeholder="상세주소" style="flex-basis: 70%" />
					<br />
					<div class="gender-container">
						성별:
						<input type="radio" id="male1" name="gender" value="남성" />
						<label for="male1">남성</label>
						<input type="radio" id="female1" name="gender" value="여성" />
						<label for="female1">여성</label>
					</div>
					<br />

					<div class="info" id="info__birth1">
						<div id="birth-flex">
							<select class="box" id="birth-year1" style="width: 100px">
								<option>년</option>
							</select>
							<select class="box" id="birth-month1" style="width: 100px">
								<option>월</option>
							</select>
							<select class="box" id="birth-day1" style="width: 100px">
								<option>일</option>
							</select>
						</div>
						<div class="error-msg"></div>
					</div>
				</section>

				<br />
				<button type="submit" id="submit">가입하기</button>
			</div>
		</article>

		<!-- Elements -->
		<article id="elements">
			<h2 class="major">Elements</h2>

			<section>
				<h3 class="major">Text</h3>
				<p>
					This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>. This is <sup>superscript</sup> text and this is <sub>subscript</sub> text. This is <u>underlined</u> and this is code:
					<code>for (;;) { ... }</code>
					. Finally,
					<a href="#">this is a link</a>
					.
				</p>
				<hr />
				<h2>Heading Level 2</h2>
				<h3>Heading Level 3</h3>
				<h4>Heading Level 4</h4>
				<h5>Heading Level 5</h5>
				<h6>Heading Level 6</h6>
				<hr />
				<h4>Blockquote</h4>
				<blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
				<h4>Preformatted</h4>
				<pre>
						<code>i = 0;

while (!deck.isInOrder()) {
    print 'Iteration ' + i;
    deck.shuffle();
    i++;
}

print 'It took ' + i + ' iterations to sort the deck.';</code>
					</pre>
			</section>

			<section>
				<h3 class="major">Lists</h3>

				<h4>Unordered</h4>
				<ul>
					<li>Dolor pulvinar etiam.</li>
					<li>Sagittis adipiscing.</li>
					<li>Felis enim feugiat.</li>
				</ul>

				<h4>Alternate</h4>
				<ul class="alt">
					<li>Dolor pulvinar etiam.</li>
					<li>Sagittis adipiscing.</li>
					<li>Felis enim feugiat.</li>
				</ul>

				<h4>Ordered</h4>
				<ol>
					<li>Dolor pulvinar etiam.</li>
					<li>Etiam vel felis viverra.</li>
					<li>Felis enim feugiat.</li>
					<li>Dolor pulvinar etiam.</li>
					<li>Etiam vel felis lorem.</li>
					<li>Felis enim et feugiat.</li>
				</ol>
				<h4>Icons</h4>
				<ul class="icons">
					<li>
						<a href="#" class="icon brands fa-facebook-f">
							<span class="label">Facebook</span>
						</a>
					</li>
					<li>
						<a href="#" class="icon brands fa-instagram">
							<span class="label">Instagram</span>
						</a>
					</li>
					<li>
						<a href="#" class="icon brands fa-github">
							<span class="label">Github</span>
						</a>
					</li>
				</ul>

				<h4>Actions</h4>
				<ul class="actions">
					<li>
						<a href="#" class="button primary">Default</a>
					</li>
					<li>
						<a href="#" class="button">Default</a>
					</li>
				</ul>
				<ul class="actions stacked">
					<li>
						<a href="#" class="button primary">Default</a>
					</li>
					<li>
						<a href="#" class="button">Default</a>
					</li>
				</ul>
			</section>

			<section>
				<h3 class="major">Table</h3>
				<h4>Default</h4>
				<div class="table-wrapper">
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Description</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Item One</td>
								<td>Ante turpis integer aliquet porttitor.</td>
								<td>29.99</td>
							</tr>
							<tr>
								<td>Item Two</td>
								<td>Vis ac commodo adipiscing arcu aliquet.</td>
								<td>19.99</td>
							</tr>
							<tr>
								<td>Item Three</td>
								<td>Morbi faucibus arcu accumsan lorem.</td>
								<td>29.99</td>
							</tr>
							<tr>
								<td>Item Four</td>
								<td>Vitae integer tempus condimentum.</td>
								<td>19.99</td>
							</tr>
							<tr>
								<td>Item Five</td>
								<td>Ante turpis integer aliquet porttitor.</td>
								<td>29.99</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td colspan="2"></td>
								<td>100.00</td>
							</tr>
						</tfoot>
					</table>
				</div>

				<h4>Alternate</h4>
				<div class="table-wrapper">
					<table class="alt">
						<thead>
							<tr>
								<th>Name</th>
								<th>Description</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Item One</td>
								<td>Ante turpis integer aliquet porttitor.</td>
								<td>29.99</td>
							</tr>
							<tr>
								<td>Item Two</td>
								<td>Vis ac commodo adipiscing arcu aliquet.</td>
								<td>19.99</td>
							</tr>
							<tr>
								<td>Item Three</td>
								<td>Morbi faucibus arcu accumsan lorem.</td>
								<td>29.99</td>
							</tr>
							<tr>
								<td>Item Four</td>
								<td>Vitae integer tempus condimentum.</td>
								<td>19.99</td>
							</tr>
							<tr>
								<td>Item Five</td>
								<td>Ante turpis integer aliquet porttitor.</td>
								<td>29.99</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td colspan="2"></td>
								<td>100.00</td>
							</tr>
						</tfoot>
					</table>
				</div>
			</section>

			<section>
				<h3 class="major">Buttons</h3>
				<ul class="actions">
					<li>
						<a href="#" class="button primary">Primary</a>
					</li>
					<li>
						<a href="#" class="button">Default</a>
					</li>
				</ul>
				<ul class="actions">
					<li>
						<a href="#" class="button">Default</a>
					</li>
					<li>
						<a href="#" class="button small">Small</a>
					</li>
				</ul>
				<ul class="actions">
					<li>
						<a href="#" class="button primary icon solid fa-download">Icon</a>
					</li>
					<li>
						<a href="#" class="button icon solid fa-download">Icon</a>
					</li>
				</ul>
				<ul class="actions">
					<li>
						<span class="button primary disabled">Disabled</span>
					</li>
					<li>
						<span class="button disabled">Disabled</span>
					</li>
				</ul>
			</section>

			<section>
				<h3 class="major">Form</h3>
				<form method="post" action="#">
					<div class="fields">
						<div class="field half">
							<label for="demo-name">Name</label>
							<input type="text" name="demo-name" id="demo-name" value="" placeholder="Jane Doe" />
						</div>
						<div class="field half">
							<label for="demo-email">Email</label>
							<input type="email" name="demo-email" id="demo-email" value="" placeholder="jane@untitled.tld" />
						</div>
						<div class="field">
							<label for="demo-category">Category</label>
							<select name="demo-category" id="demo-category">
								<option value="">-</option>
								<option value="1">Manufacturing</option>
								<option value="1">Shipping</option>
								<option value="1">Administration</option>
								<option value="1">Human Resources</option>
							</select>
						</div>
						<div class="field half">
							<input type="radio" id="demo-priority-low" name="demo-priority" checked />
							<label for="demo-priority-low">Low</label>
						</div>
						<div class="field half">
							<input type="radio" id="demo-priority-high" name="demo-priority" />
							<label for="demo-priority-high">High</label>
						</div>
						<div class="field half">
							<input type="checkbox" id="demo-copy" name="demo-copy" />
							<label for="demo-copy">Email me a copy</label>
						</div>
						<div class="field half">
							<input type="checkbox" id="demo-human" name="demo-human" checked />
							<label for="demo-human">Not a robot</label>
						</div>
						<div class="field">
							<label for="demo-message">Message</label>
							<textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
						</div>
					</div>
					<ul class="actions">
						<li>
							<input type="submit" value="Send Message" class="primary" />
						</li>
						<li>
							<input type="reset" value="Reset" />
						</li>
					</ul>
				</form>
			</section>
		</article>
	</div>

	<!-- Footer -->
	<footer id="footer">
		<p class="copyright">
			&copy; Untitled. Design:
			<a href="https://html5up.net">HTML5 UP</a>
			.
		</p>
	</footer>
	</div>

	<!-- BG -->
	<div id="bg"></div>

	<!-- Scripts -->
	<script src="/resources/login/js/jquery.min.js"></script>
	<script src="/resources/login/js/browser.min.js"></script>
	<script src="/resources/login/js/breakpoints.min.js"></script>
	<script src="/resources/login/js/util.js"></script>
	<script src="/resources/login/js/main.js"></script>
	<script src="/resources/login/js/section.js"></script>
	<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
</body>
</html>
