<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
	<%@ include file="../common/head.jsp"  %>
	<link rel="stylesheet" href="/resources/css/campSearch.css" />
	<link rel="stylesheet" href="/resources/css/map.css" />
	<link rel="stylesheet" href="/resources/css/tag.css" />
</head>

<body class="is-preload">

	<!-- Wrapper -->
	<div id="wrapper">

		<!-- Main -->
		<div id="main">
			<div class="inner">
				<!-- Header -->
				<header id="header">
					<a href="index.html" class="logo"><strong>Campfire</strong>캠핑장 찾기</a>
				</header>
				<section>
					<!--검색박스-->
					<div class="top_search_box">
						<button class="tab-button" data-tab-section="tab-section-1" onclick="toggleDetailSearch()">상세 조건
							검색</button>
						<button class="tab-button" data-tab-section="tab-section-2" onclick="toggleTagSearch()">태그로
							검색</button>
						<button class="tab-button" data-tab-section="tab-section-3" onclick="toggleKeywordSearch()"> 키워드
							검색</button>
						<!-- 상세 조건 검색 영역 -->
						<div id="campfindtop">
							<form id="campSearchForm" action="index.html" method="get">

								<!-- <div class="campfindtop"  style="display: block;">
							<button class="tab-button" data-tab-section="tab-section-1" onclick="toggleDetailSearch()">상세 조건 검색</button> -->
								<ul>
									<br>
									<li class="tt"><strong class="title">지역</strong>
										<div class="select_box">
											<!-- 지역 선택 -->
											<label for="c_do">도/특별시</label>
											<select id="c_do" name="c_do" class="detail_select" title="도/특별시">

												<option value="" selected="selected">전체</option>
												<option value="1">서울특별시</option>
												<option value="2">부산광역시</option>
												<option value="3">대구광역시</option>
												<option value="4">인천광역시</option>
												<option value="5">광주광역시</option>
												<option value="6">대전광역시</option>
												<option value="7">울산광역시</option>
												<option value="8">세종특별자치시</option>
												<option value="9">경기도</option>
												<option value="10">강원도</option>
												<option value="11">충청북도</option>
												<option value="12">충청남도</option>
												<option value="13">전라북도</option>
												<option value="14">전라남도</option>
												<option value="15">경상북도</option>
												<option value="16">경상남도</option>
												<option value="17">제주도</option>
											</select>
										</div>
									</li>

									<li><strong class="title"></strong>
										<div class="select_box">
											<!-- 캠핑 유형 선택 -->
											<label for="search_camping">캠핑유형</label>
											<select class="detail_select" title="테마선택">
												<option value="" selected="selected">전체</option>
												<option value="18">백패킹</option>
												<option value="19">오토캠핑</option>
												<option value="20">글램핑</option>
												<option value="21">카라반</option>
											</select>
									</li>

									<!--편의시설-->
							<div id="amenity">
								<div class="amenity-box">
								   <div class="div1" onclick="toggleCheckbox(this)">
									  <label onclick="toggleCheckbox(this)">
										 <input type="checkbox" name="amenityItem" value="마트"><img src="/resources/images/마트.png"
											alt="">
									  </label>
									  <span>마트</span>
								   </div>
								   <div class="div1" onclick="toggleCheckbox(this)">
									  <label>
										 <input type="checkbox" name="amenityItem" value="바베큐"><img src="/resources/images/바베큐.png"
											alt="">
									  </label>
									  <span>바베큐</span>
								   </div>
								   <div class="div1" onclick="toggleCheckbox(this)">
									  <label>
										 <input type="checkbox" name="amenityItem" value="산책"><img src="/resources/images/산책.png"
											alt="">
									  </label>
									  <span>산책</span>
								   </div>
								   <div class="div1" onclick="toggleCheckbox(this)">
									  <label>
										 <input type="checkbox" name="amenityItem" value="수영장"><img src="/resources/images/수영장.png"
											alt="">
									  </label>
									  <span>수영장</span>
								   </div>
								   <div class="div1" onclick="toggleCheckbox(this)">
									  <label>
										 <input type="checkbox" name="amenityItem" value="와이파이"><img
											src="/resources/images/와이파이.png" alt="">
									  </label>
									  <span>와이파이</span>
								   </div>
								   <div class="div1" onclick="toggleCheckbox(this)">
									  <label>
										 <input type="checkbox" name="amenityItem" value="운동장"><img src="/resources/images/운동장.png"
											alt="">
									  </label>
									  <span>운동장</span>
								   </div>
								   <div class="div1" onclick="toggleCheckbox(this)">
									  <label>
										 <input type="checkbox" name="amenityItem" value="조식"><img src="/resources/images/조식.png"
											alt="">
									  </label>
									  <span>조식</span>
								   </div>
								   <div class="div1" onclick="toggleCheckbox(this)">
									  <label>
										 <input type="checkbox" name="amenityItem" value="TV"><img src="/resources/images/tv.png"
											alt="">
									  </label>
									  <span>TV</span>
								   </div>
								</div>
								<button type="button" class="small primary right-btn"
								   onclick="showSelectedAmenity()">선택</button>
								<button type="button" class="small right-btn" onclick="closeSelectedAmenity()">취소</button>
							 </div>
								</ul>
							</form>
						</div>
						<!-- <nav id="tab-button-nav"></nav> -->
						<!-- 키워드 검색 영역 -->

					</div>
					<div id="keywordSearchBox" style="display: none;">
						<div class="input_search">

							<fieldset class="totalSearch">
								<label for="searchKwd" class="skip">키워드 검색어를 입력하세요.</label>
								<input id="searchKwd" class="m_search_in" style="vertical-align: middle;"
									title="검색어를 입력하세요." placeholder="검색어를 입력하세요." type="text" value="">
								<br>
							</fieldset>
						</div>
					</div>

					<!-- 태그검색영역-->
					<div class="tagSearchBox" id="tagSearchBox" style="display: none;">
						<h2><span class="skip">태그검색</span></h2>
						<!-- /resources. (태그 검색에 필요한 HTML 추가) /resources.  -->
						<div class="tag_title">
							<p>#추천태그</p>
						</div>
						<span class="tag_stt">추천태그를 클릭하여 검색해보세요. 원하는 유형의 캠핑장 정보를 확인하실 수 있습니다.</span>
						<br>
						<div id="tag">
							<div class="tag-box">
							   <div class="div2" onclick="toggleCheckbox(this)">
								  <label onclick="toggleCheckbox(this)">
									 <input type="checkbox" name="tagItem" value="#야경"><span>#야경</span>
								  </label>
							   </div>
							   <div class="div2" onclick="toggleCheckbox(this)">
								  <label onclick="toggleCheckbox(this)">
									 <input type="checkbox" name="tagItem" value="#물맑은"><span>#물맑은</span>
								  </label>
							   </div>
							   <div class="div2" onclick="toggleCheckbox(this)">
								  <label onclick="toggleCheckbox(this)">
									 <input type="checkbox" name="tagItem" value="#깨끗한"><span>#깨끗한</span>
								  </label>
							   </div>
							   <div class="div2" onclick="toggleCheckbox(this)">
								  <label onclick="toggleCheckbox(this)">
									 <input type="checkbox" name="tagItem" value="#가족"><span>#가족</span>
								  </label>
							   </div>
							   <div class="div2" onclick="toggleCheckbox(this)">
								  <label onclick="toggleCheckbox(this)">
									 <input type="checkbox" name="tagItem" value="#커플"><span>#커플</span>
								  </label>
							   </div>
							   <div class="div2" onclick="toggleCheckbox(this)">
								  <label onclick="toggleCheckbox(this)">
									 <input type="checkbox" name="tagItem" value="#계곡"><span>#계곡</span>
								  </label>
							   </div>
							   <div class="div2" onclick="toggleCheckbox(this)">
								  <label onclick="toggleCheckbox(this)">
									 <input type="checkbox" name="tagItem" value="#바다"><span>#바다</span>
								  </label>
							   </div>
							   <div class="div2" onclick="toggleCheckbox(this)">
								  <label onclick="toggleCheckbox(this)">
									 <input type="checkbox" name="tagItem" value="#축제"><span>#축제</span>
								  </label>
							   </div>
							   <div class="div2" onclick="toggleCheckbox(this)">
								  <label onclick="toggleCheckbox(this)">
									 <input type="checkbox" name="tagItem" value="#힐링"><span>#힐링</span>
								  </label>
							   </div>
							</div>
							
						 </div>
						
					</div>

					<div class="tagSearch">
						<a href="#" class="btn_reset" onclick="reset()"><img src="/resources/images/btn_reset.png"
								style="vertical-align: middle" alt="초기화"> 초기화</a>
						<a href="#" class="btn_search" oonclick="showCampingInfo()"><img src="/resources/images/btn_search.png"
								style="vertical-align: middle" alt="검색하기"> 검색하기1</a>
					</div>

					<hr />
					<div class="selectList">
						<select class="form-select" title="정렬하기">
							<option value="s_last_update">업데이트순</option>
							<option value="s_frst_update">등록일순</option>
							<option value="s_click" selected="selected">조회순</option>
							<option value="s_recomend">추천순</option>
						</select>
					</div>

					<!-- 검색 및 캠핑장 정보를 표시하는 영역 -->
					<div id="campingInfo" style="display: none;">
						<!-- /resources. (기존 캠핑장 정보를 표시하는 HTML 코드) /resources. -->
					</div>
					<div class="camping_info" onclick="goToDetailPage('./campInfo.jsp')"> <!-- 여기서 '/detail_page_url'은 상세 정보 페이지의 URL을 넣어주어야 합니다. -->
						<img src="/resources/images/리썸글램핑.jpg" alt="캠핑장 이미지">
						<div class="camping_data" name="캠핑장1">
							<h4>리썸 글램핑</h4>
							<p>찜 갯수: 1</p>
							<p>조회수: 5</p>
							<p>업데이트 날짜: 2023-07-24</p>
						</div>
					</div>
					<hr>
					<div class="camping_info">
						<img src="/resources/images/리썸글램핑.jpg" alt="캠핑장 이미지">
						<div class="camping_data" name="캠핑장2">
							<h4>캠핑장 이름</h4>
							<p>찜 갯수: 10</p>
							<p>조회수: 50</p>
							<p>업데이트 날짜: 2023-07-25</p>
						</div>
					</div>
					<hr>
					<div class="camping_info">
						<img src="/resources/images/리썸글램핑.jpg" alt="캠핑장 이미지">
						<div class="camping_data">
							<h4>캠핑장 이름</h4>
							<p>찜 갯수: 100</p>
							<p>조회수: 500</p>
							<p>업데이트 날짜: 2023-07-26</p>
						</div>
					</div>
					<div class="camping_info">
						<img src="/resources/images/리썸글램핑.jpg" alt="캠핑장 이미지">
						<div class="camping_data">
							<h4>캠핑장 이름</h4>
							<p>찜 갯수: 100</p>
							<p>조회수: 500</p>
							<p>업데이트 날짜: 2023-07-27</p>
						</div>
					</div>
					<div class="camping_info">
						<img src="/resources/images/리썸글램핑.jpg" alt="캠핑장 이미지">
						<div class="camping_data">
							<h4>캠핑장 이름</h4>
							<p>찜 갯수: 100</p>
							<p>조회수: 500</p>
							<p>업데이트 날짜: 2023-07-28</p>
						</div>
					</div>
					<ul class="pagination">
						<li><span class="button disabled">Prev</span></li>
						<li><a href="#" class="page active">1</a></li>
						<li><a href="#" class="page">2</a></li>
						<li><a href="#" class="page">3</a></li>
						<li><a href="#" class="page">4</a></li>
						<li><a href="#" class="page">5</a></li>
						<li><a href="#" class="page">6</a></li>
						<li><a href="#" class="page">7</a></li>
						<li><a href="#" class="page">8</a></li>
						<li><a href="#" class="page">9</a></li>
						<li><a href="#" class="page">10</a></li>
						<li><a href="#" class="button">Next</a></li>
					</ul>
					<hr>
					<h2>지도로 캠핑장 검색하기</h2>
					<script type="text/javascript"
					src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7b7e3f9163cbe6490f97df41fe3fab55&libraries=services"></script>
					<div class="map_wrap"> 
						 <div id="map" style="width:100%;height:100%;position:relative;overflow:hidden;"></div>
						<div id="menu_wrap" class="bg_white">
							<div class="option">
								<div>
									<form onsubmit="searchPlaces(); return false;">
										키워드 : <input type="text" value="캠핑장" id="keyword" size="15">
										<button type="submit">검색하기</button>
									</form>
								</div>
							</div>
							<hr>
							<ul id="placesList"></ul>
							<div id="pagination"></div>
						</div>
					</div> 
					 <div id="map" ></div>
					</section>
			</div>
		</div>



		<%@ include file="../common/sidebar.jsp"  %>
	<!-- Scripts -->
	<script src="../../resources/js/jquery.min.js"></script>
	<script src="../../resources/js/browser.min.js"></script>
	<script src="../../resources/js/breakpoints.min.js"></script>
	<script src="../../resources/js/util.js"></script>
	<script src="../../resources/js/main.js"></script>
	<script src="../../resources/js/campSearch.js"></script>
	<script src="../../resources/js/map.js"></script>
	<script src="../../resources/js/tag.js"></script>

</body>

</html>