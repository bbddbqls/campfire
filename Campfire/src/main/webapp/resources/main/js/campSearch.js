
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
	event.preventDefault();

  document.getElementById("campSearchForm").submit();
  
}
function submitCategory(){
	const test = document.getElementById('category').value;

		$('form[id="campSearchForm"]').append(test);
		$('form[id="campSearchForm"]').submit();

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

//상세정보로이동
function goToDetailPage(url) {
  window.location.href = url;
}

//상세조건검색 어메니티

function toggleCheckbox(divElement) {
    divElement.classList.toggle('selected');
    const checkbox = divElement.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
}

function parentCheckBox(parentElement) {
	const checkbox = document.getElementById(parentElement);
	checkbox.classList.toggle('selected');
	checkbox.checked = !checkbox.checked;
}




const amenityBoxElement = document.getElementById('amenity');

function showSelectedAmenity(test) {
    const checkboxes1 = document.getElementsByName("campAmenity");
    const selected1 = [];
    const checkboxes2 = document.getElementsByName("tagItem");
    const selected2 = [];
    
    
    const selectedAmenityParagraph1 = document.getElementById("selectedAmenity");
    const selectedAmenityParagraph2 = document.getElementById("selectedTag");

    for (let i = 0; i < checkboxes1.length; i++) {

        if (checkboxes1[i].checked) {
        	if(test == 1){
        		selected1.push(checkboxes1[i].value);        		
        	}else{
        		checkboxes1[i].checked = false;
        	}

        }
    }

    for (let i = 0; i < checkboxes2.length; i++) {
        if (checkboxes2[i].checked) {
        	if(test == 1){
        		selected2.push(checkboxes2[i].value);        		
        	}else{
        		checkboxes2[i].checked = false;
        	}

        }
    }

    selectedAmenityParagraph1.textContent = "선택된 편의시설: " + selected1.join(", ");
    selectedAmenityParagraph2.textContent = "선택된 태그: " + selected2.join(", ");
    selectedAmenityParagraph1.style.display='block';
    selectedAmenityParagraph2.style.display='block';
}

//초기화
function reset() {
    // 각 조건값 초기화
    document.getElementById("c_addr").selectedIndex = 0;
    document.getElementById("c_type").selectedIndex = 0;
    document.getElementById("searchKwd").value = '';
    
    tagAmenityRemove('.div1');
    tagAmenityRemove('.div2');
    

    // 검색 결과를 보여주는 영역 숨기기
    document.getElementById("campingInfo").style.display = "none";
    showSelectedAmenity(-1);
}

function tagAmenityRemove(className){
	const checkboxes4 = document.querySelectorAll(className);
    checkboxes4.forEach(function(checkbox){
    	checkbox.classList.remove('selected');
    })
}


//
//function showAmenity(){
//    if (amenityBoxElement.style.display === 'block') {
//        amenityBoxElement.style.display = 'none';
//    }else{
//        amenityBoxElement.style.display = 'block';
//    }
//}
//function closeSelectedAmenity(){
//    if (amenityBoxElement.style.display === 'block') {
//        amenityBoxElement.style.display = 'none';
//    }else{
//        amenityBoxElement.style.display = 'block';
//    }
//}
