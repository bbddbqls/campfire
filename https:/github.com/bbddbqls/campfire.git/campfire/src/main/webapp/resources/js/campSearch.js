
//"tagBtn_group"
 // 태그를 클릭하면 해당 태그를 검색어로 설정하고 폼을 제출하는 함수
 function searchByTag(tag) {
  // 검색어 입력란을 가져옵니다.
  const searchKwdInput = document.getElementById("searchKwd");
  
  // 태그를 검색어로 설정합니다.
  searchKwdInput.value = tag;
  
  // 폼을 제출합니다.
  document.getElementById("campSearchForm").submit();
}
// 폼을 제출할 때 실행되는 함수
function submitForm() {
  // 여기에 폼 제출 시 추가적인 로직을 넣을 수 있습니다.
}

//상세조건 토글
function toggleDetailSearch() {
  var detailSearchBox = document.getElementById('campfindtop');
  var tagSearchBox = document.getElementById('tagSearchBox');
  var keywordSearchBox = document.getElementById('keywordSearchBox');
  
  detailSearchBox.style.display = 'block';
  tagSearchBox.style.display = 'none';
  keywordSearchBox.style.display = 'none';
}

function toggleTagSearch() {
  var detailSearchBox = document.getElementById('campfindtop');
  var tagSearchBox = document.getElementById('tagSearchBox');
  var keywordSearchBox = document.getElementById('keywordSearchBox');
  
  detailSearchBox.style.display = 'none';
  tagSearchBox.style.display = 'block';
  keywordSearchBox.style.display = 'none';
}

function toggleKeywordSearch() {
  var detailSearchBox = document.getElementById('campfindtop');
  var tagSearchBox = document.getElementById('tagSearchBox');
  var keywordSearchBox = document.getElementById('keywordSearchBox');
  
  detailSearchBox.style.display = 'none';
  tagSearchBox.style.display = 'none';
  keywordSearchBox.style.display = 'block';
}

function searchByTag(tag) {
  // 여기에 해당 태그를 이용하여 검색하는 기능을 추가할 수 있습니다.
  // 예를 들어, 선택된 태그를 서버로 전송하거나, 캠핑장 목록을 해당 태그에 따라 필터링할 수 있습니다.
  // 이 부분은 실제 검색 기능을 구현해야 하는 로직에 따라 상세히 구현되어야 합니다.
  alert(tag + " 태그로 검색합니다."); // 간단한 예시로 alert 창을 띄우는 예시입니다.
}

// 폼 제출할 때 실행되는 함수
function submitForm() {
  // 여기에 폼 제출 시 추가적인 로직을 넣을 수 있습니다.
  document.getElementById("campSearchForm").submit();
}



function submitForm() {
  // 상세검색 정보 가져오기
  var selectedRegion = document.getElementById("c_do").value;
  var selectedCampingType = document.getElementById("search_camping").value;

  // 태그 검색 정보 가져오기
  var selectedTags = [];
  var tagButtons = document.querySelectorAll(".tagBtn.selected");
  tagButtons.forEach(function(button) {
    selectedTags.push(button.textContent);
  });

  // 키워드 검색 정보 가져오기
  var keyword = document.getElementById("searchKwd").value;

  // 이 부분은 실제 검색 기능을 구현해야 하는 로직에 따라서 동작하게 됩니다.
  // 예시로 alert 창을 띄우는 것으로 대체합니다.
  var searchInfo = {
    region: selectedRegion,
    campingType: selectedCampingType,
    tags: selectedTags,
    keyword: keyword
  };

  alert("검색 정보: " + JSON.stringify(searchInfo));
}

// 캠핑장 정보를 보여주는 함수
function showCampingInfo(place) {
	document.getElementById('campingImage').src = place.image; // 캠핑장 사진 링크
	document.getElementById('bookmarkCount').innerText = '찜 개수: ' + place.bookmarks; // 찜 개수
	document.getElementById('viewCount').innerText = '조회수: ' + place.views; // 조회수
	document.getElementById('campingInfo').style.display = 'block';
}

// 캠핑장 정보를 숨기는 함수
function hideCampingInfo() {
	document.getElementById('campingInfo').style.display = 'none';
}

// 캠핑장 검색 결과에 이벤트 리스너를 추가하는 함수
function addCampingItemClickEvent(place) {
	var item = document.createElement('li');
	var link = document.createElement('a');
	link.href = 'javascript:showCampingInfo(' + JSON.stringify(place) + ')';
	link.innerText = place.name;
	item.appendChild(link);
	document.getElementById('placesList').appendChild(item);
}
//검색하기 버튼을 누르면 실행되는 함수 
function searchPlaces() {
  var keyword = document.getElementById('keyword').value;


  // 화면에 캠핑장 정보를 추가하는 로직
  var placesList = document.getElementById('placesList');
  placesList.innerHTML = '';

  for (var i = 0; i < campingPlaces.length; i++) {
    addCampingItem(campingPlaces[i]);
  }
}
 // 캠핑장 데이터 배열 (예시 데이터)
 const campingData = [
  {
    name: "캠핑장1",
    like: 100,
    views: 500,
    updateDate: "2023-07-24",
    recommend: 3,
  },
  {
    name: "캠핑장2",
    like: 120,
    views: 300,
    updateDate: "2023-07-25",
    recommend: 5,
  },
  // /resources. (다른 캠핑장 데이터도 추가)
];

// 캠핑장 데이터를 정렬하고 화면에 출력하는 함수
function displaySortedCampingData(sortOption) {
  const sortedData = sortCampingData([...campingData], sortOption);
  const campingInfoContainer = document.getElementById("campingInfoContainer");

  // 기존 캠핑장 정보 초기화
  campingInfoContainer.innerHTML = "";

  // 각 캠핑장 정보를 화면에 표시
  for (const camping of sortedData) {
    const campingInfo = `
      <div class="camping_info">
        <img src="캠핑장이미지.jpg" alt="캠핑장 이미지">
        <div class="camping_data">
          <h3>${camping.name}</h3>
          <p>찜 갯수: ${camping.like}</p>
          <p>조회수: ${camping.views}</p>
          <p>업데이트 날짜: ${camping.updateDate}</p>
          <p>추천 순위: ${camping.recommend}</p>
        </div>
      </div>
    `;
    campingInfoContainer.innerHTML += campingInfo;
  }
}

// 캠핑장 데이터를 정렬하는 함수
function sortCampingData(data, sortOption) {
  // sortOption에 따라 데이터를 정렬
  switch (sortOption) {
    case "s_click": // 조회순
      return data.sort((a, b) => b.views - a.views);
    case "s_frst_update": // 등록일순
      return data.sort((a, b) => new Date(a.updateDate) - new Date(b.updateDate));
    case "s_last_update": // 업데이트순
      return data.sort((a, b) => new Date(b.updateDate) - new Date(a.updateDate));
    case "s_recomend": // 추천순
      return data.sort((a, b) => b.recommend - a.recommend);
    default:
      return data;
  }
}

// 초기에 기본 정렬 방식으로 캠핑장 데이터 출력 (조회순)
displaySortedCampingData("s_click");

// 정렬 옵션 변경 시 이벤트 처리
const sortSelect = document.getElementById("sortSelect");
sortSelect.addEventListener("change", function() {
  const selectedOption = this.value; // 선택된 정렬 옵션 값 가져오기
  displayCampingInfo(selectedOption); // 캠핑장 정보 정렬하여 화면에 표시
});

// 캠핑장 데이터를 로드하고 정렬하는 함수 
function loadCampingData(option) {
	sortCampingData(option);
	for (var i = 0; i < campingData.length; i++) {
		addCampingItem(campingData[i]);
	}
}

// 캠핑장 정보를 추가하여 보여주는 함수
function addCampingItem(campingItem) {
	var placesList = document.getElementById('placesList');

	var item = document.createElement('li');
	item.classList.add('item');

	var campingImage = document.createElement('img');
	campingImage.src = campingItem.image;
	campingImage.alt = campingItem.name;
	campingImage.style.width = '400px';
	campingImage.style.height = '300px';
	item.appendChild(campingImage);

	var campingName = document.createElement('div');
	campingName.innerHTML = campingItem.name;
	item.appendChild(campingName);

	var bookmarkCount = document.createElement('div');
	bookmarkCount.innerHTML = '찜 개수: ' + campingItem.bookmarks;
	item.appendChild(bookmarkCount);

	var viewCount = document.createElement('div');
	viewCount.innerHTML = '조회수: ' + campingItem.views;
	item.appendChild(viewCount);

	var updateDate = document.createElement('div');
	updateDate.innerHTML = '업데이트 날짜: ' + campingItem.date;
	item.appendChild(updateDate);

	placesList.appendChild(item);
}

// // 검색하기 버튼을 누를 때 실행될 함수
// function submitForm() {
// 	var option = document.getElementById('selectList').value; // 정렬 옵션 값 가져오기
// 	document.getElementById('placesList').innerHTML = ''; // 목록 초기화
// 	loadCampingData(option); // 정렬된 캠핑장 데이터 로드
// 	searchPlaces(); // 검색 기능 실행
// 	return false; // 폼 전송 방지
// }

// // 검색하기1 버튼 클릭 시 캠핑장 정보를 보여주는 함수
// function showCampingInfo() {
//   // 캠핑장 정보를 보여줄 영역을 선택
//   const campingInfo = document.getElementById("campingInfo");
//   // 선택된 영역을 화면에 표시
//   campingInfo.style.display = "block";
//     // 캠핑장 정보를 가져왔다고 가정하고, 캠핑장의 고유한 ID를 사용하여 페이지 이동
//     const campingId = 123; // 캠핑장의 고유한 ID를 가져온다고 가정합니다.
//     window.location.href = "/camping/" + campingId; // 캠핑장 정보를 보여주는 페이지로 이동
//   }

//상세정보로이동
function goToDetailPage(url) {
  window.location.href = url;
}

//상세조건검색 어메니티
const div1Elements = document.querySelectorAll('.div1');
div1Elements.forEach(div1 => {
    const img = div1.querySelector('img');

    img.addEventListener('click', function () {
        div1.classList.toggle('selected'); // 클래스를 토글하여 테두리 보이기/숨기기
        const checkbox = div1.querySelector('input[type="checkbox"]');

    });
});
function toggleCheckbox(divElement) {
    divElement.classList.toggle('selected');
    const checkbox = divElement.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
}
const amenityBoxElement = document.getElementById('amenity');

function showSelectedAmenity() {
    const checkboxes = document.getElementsByName("amenityItem");
    const selected = [];

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
        }
    }

    const selectedAmenityParagraph = document.getElementById("selectedAmenity");
    selectedAmenityParagraph.textContent = selected.join(", ");
    selectedAmenityParagraph.style,display='block';

    if (selectedAmenityParagraph.style,display === 'none') {
        selectedAmenityParagraph.style,display='block';
    }else{
        selectedAmenityParagraph.style,display= 'none';
    }

    if (amenityBoxElement.style.display === 'none') {
        amenityBoxElement.style.display = 'block';
    }else{
        amenityBoxElement.style.display = 'none';
    }
}



function showAmenity(){
    if (amenityBoxElement.style.display === 'block') {
        amenityBoxElement.style.display = 'none';
    }else{
        amenityBoxElement.style.display = 'block';
    }
}
function closeSelectedAmenity(){
    if (amenityBoxElement.style.display === 'block') {
        amenityBoxElement.style.display = 'none';
    }else{
        amenityBoxElement.style.display = 'block';
    }
}
