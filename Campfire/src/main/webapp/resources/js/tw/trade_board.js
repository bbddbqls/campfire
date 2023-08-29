// function addFilterBtnEvent(btnObj) {
// 	if ($(btnObj).hasClass('on')) {
// 		$(btnObj).removeClass('on');
// 		$('.filter_items').hide();
// 	} else {
// 		$(btnObj).addClass('on');
// 		$('.filter_items').show();
// 	}
// }



// 리스트뷰로 전환
function addListViewBtnEvent(btnObj) {
	var gridViewBtn = document.getElementById('filterSearchResultsTypeGrid');
	var listViewBtn = document.getElementById('filterSearchResultsTypeList');

	if (listViewBtn.classList.contains('on')) {
		// 이미 리스트뷰가 선택된 상태이므로 아무 작업도 수행하지 않음
	} else {
		gridViewBtn.classList.remove('on');
		gridViewBtn.src = '../resources/images/icon2.png'
		listViewBtn.classList.add('on');
		listViewBtn.src = '../resources/images/icon1-select.png'

		var gridViewItems = document.querySelectorAll('.grid-style-item');
		gridViewItems.forEach(function (item) {
			item.classList.remove('grid-style-item');
			item.classList.remove('col-6');
			item.classList.add('list-style-item');
			item.classList.add('col-12');
		});

	}

	applyFilter();
}

document.addEventListener("DOMContentLoaded", function() {
	var urlParams = new URLSearchParams(window.location.search);
	var scrollX = urlParams.get("scrollX");
	var scrollY = urlParams.get("scrollY");
	
	console.log("scrollX: " + scrollX);
	console.log("scrollY: " + scrollY);

	if (!(scrollX == null && scrollY == null)) {
		window.scrollTo(parseInt(scrollX), parseInt(scrollY));
	}
});

function resetFilter() {
	const filterNameList = [
		'filterCategory1', // 0
		'filterCategory2', // 1
		'filterKeyword', // 2
		'filterRegion1', // 3
		'filterRegion2', // 4
		'filterMinPrice', // 5
		'filterMaxPrice', // 6
		'filterResultMaxNumber', // 7
		'filterSearchResultsType', // 8
		'filterShowOnlyMine', // 9
		'isOpenFilterDrawer', // 10
		'scrollX', // 11
		'scrollY', // 12
	];

	const category1 = document.querySelector('#filterCategory1'); // 0
	const category2 = document.querySelector('#filterCategory2'); // 1
	const keyword = document.querySelector('#filterKeyword'); // 2
	const region1 = document.querySelector('#filterRegion1'); // 3
	const region2 = document.querySelector('#filterRegion2'); // 4
	const minPrice = document.querySelector('#filterMinPrice'); // 5 
	const maxPrice = document.querySelector('#filterMaxPrice'); // 6
	const resultNumber = document.querySelector('#filterResultMaxNumber'); // 7
	// 8
	const filterSearchResultsTypeGrid = document.querySelector('#filterSearchResultsTypeGrid');
	var filterSearchResultsType = '' 
	if(filterSearchResultsTypeGrid.classList.contains('on')) {
		filterSearchResultsType = 'grid';
	} else {
		filterSearchResultsType = 'list';
	}
	const isShowOnlyMine = document.querySelector('#filterShowOnlyMine'); // 9
	// 10
	var isOpenFilterDrawer = ''
	if(document.querySelector('.filter_items').classList.contains('on')) { 
		isOpenFilterDrawer = 'true';
	} else {
		isOpenFilterDrawer = 'false';
	}
	var scrollX =  window.scrollX; // 11
	var scrollY =  window.scrollY; // 12
	
	var filterValueList = [
		'', // 0
		'', // 1
		'', // 2
		'', // 3
		'', // 4
		'', // 5
		'', // 6
		resultNumber.value.toString(), // 7
		filterSearchResultsType, // 8
		isShowOnlyMine.checked.toString(), // 9
		isOpenFilterDrawer, // 10
		parseInt(scrollX).toString(), // 11
		parseInt(scrollY).toString(), // 12
	];

	redirectWithFilter(filterNameList, filterValueList);
}

function applyFilter() {
	const filterNameList = [
		'filterCategory1', // 0
		'filterCategory2', // 1
		'filterKeyword', // 2
		'filterRegion1', // 3
		'filterRegion2', // 4
		'filterMinPrice', // 5
		'filterMaxPrice', // 6
		'filterResultMaxNumber', // 7
		'filterSearchResultsType', // 8
		'filterShowOnlyMine', // 9
		'isOpenFilterDrawer', // 10
		'scrollX', // 11
		'scrollY', // 12
		'currentPage', // 13
	];

	const category1 = document.querySelector('#filterCategory1'); // 0
	const category2 = document.querySelector('#filterCategory2'); // 1
	const keyword = document.querySelector('#filterKeyword'); // 2
	const region1 = document.querySelector('#filterRegion1'); // 3
	const region2 = document.querySelector('#filterRegion2'); // 4
	const minPrice = document.querySelector('#filterMinPrice'); // 5 
	const maxPrice = document.querySelector('#filterMaxPrice'); // 6
	const resultNumber = document.querySelector('#filterResultMaxNumber'); // 7
	// 8
	const filterSearchResultsTypeGrid = document.querySelector('#filterSearchResultsTypeGrid');
	var filterSearchResultsType = '' 
	if(filterSearchResultsTypeGrid.classList.contains('on')) {
		filterSearchResultsType = 'grid';
	} else {
		filterSearchResultsType = 'list';
	}
	const isShowOnlyMine = document.querySelector('#filterShowOnlyMine'); // 9
	// 10
	var isOpenFilterDrawer = ''
	if(document.querySelector('.filter_items').classList.contains('on')) { 
		isOpenFilterDrawer = 'true';
	} else {
		isOpenFilterDrawer = 'false';
	}
	var scrollX =  window.scrollX; // 11
	var scrollY =  window.scrollY; // 12
	// 13
	var currentPage = document.querySelector('.navigation.active');
	var currentPageValue;
	if (currentPage !== null) {
		currentPageValue = currentPage.dataset.value;
	} else {
		currentPageValue = 1;
	}
	
	var filterValueList = [
		category1.options[category1.selectedIndex].value.toString(), // 0
		category2.options[category2.selectedIndex].value.toString(), // 1
		keyword.value.toString(), // 2
		region1.options[region1.selectedIndex].value.toString(), // 3
		region2.options[region2.selectedIndex].value.toString(), // 4
		minPrice.value.toString().split(' ').join(''), // 5
		maxPrice.value.toString().split(' ').join(''), // 6
		resultNumber.value.toString(), // 7
		filterSearchResultsType, // 8
		isShowOnlyMine.checked.toString(), // 9
		isOpenFilterDrawer, // 10
		parseInt(scrollX).toString(), // 11
		parseInt(scrollY).toString(), // 12
		currentPageValue.toString() // 13
	];

	redirectWithFilter(filterNameList, filterValueList);
}

function redirectWithFilter(filterNameList, filterValueList) {
	// drop useless part of url
	for (let i = 0; i < filterValueList.length; i++) {

		if(filterValueList[i] !== null) {
			switch (i) {
			case 0: // category1.options[category1.selectedIndex].value.toString()
				if (filterValueList[i] === '전체') {
					filterValueList[i] = '';
				}
				break;
			case 1: // category2.options[category2.selectedIndex].value.toString()
				if ((filterValueList[i] === '전체') || (filterValueList[i] === '기타')) {
					filterValueList[i] = '';
				}
				break;
			case 2: // keyword.value.toString()

				break;
			case 3: // region1.options[region1.selectedIndex].value.toString()
				if (filterValueList[i] === '전국') {
					filterValueList[i] = '';
				}
				break;
			case 4: // region2.options[region2.selectedIndex].value.toString()
				if (filterValueList[i] === '전 지역') {
					filterValueList[i] = '';
				}
				break;
			case 5: // minPrice.value.toString()

				break;
			case 6: // maxPrice.value.toString()

				break;
			case 7: // resultNumber.value.toString()
				if (filterValueList[i] === '6') {
					filterValueList[i] = '';
				}
				break;
			case 8: // filterSearchResultsType
			if (filterValueList[i] === 'grid') {
				filterValueList[i] = '';
			}
				break;
			case 9: // isShowOnlyMine.checked.toString()
				if (filterValueList[i] === 'false') {
					filterValueList[i] = '';
				}
				break;
			case 10: // isOpenFilterDrawer 
				if (filterValueList[i] === 'false') {
					filterValueList[i] = '';
				}
				break;
			case 11: // scrollX
				if (filterValueList[i] === '0') {
					filterValueList[i] = '';
				}
				break;
			case 12: // scrollY 
				if (filterValueList[i] === '0') {
					filterValueList[i] = '';
				}
				break;
			case 13: // currentPage.toString() 
				if (filterValueList[i] === '1') {
					filterValueList[i] = '';
				}
				break;
			}
		}
	}


	// 숫자데이터검증
	var formData = new FormData();
	console.log("minPrice: ".concat(filterValueList[5]));
	console.log("maxPrice: ".concat(filterValueList[6]));
    formData.append("minPrice", filterValueList[5]);
    formData.append("maxPrice", filterValueList[6]);

	fetch('http://localhost/trading/filterVerify.do', {
        method: 'POST',
        body: formData,
        redirect: 'manual'
    })
    .then(response => {
        console.log("response.status 상태 코드:", response.status);
        console.log("response의 최종 URL:", response.url);
        console.log("response:", response);
        
        return response.text();
    })
    .then(result => {
        console.log("response.text()의 result: " + result);
        if (result === "") {

			// get링크 생성 및 전송
			var hrefString = 'list.do';
			var isFirstArgsInputted = false;

			for (let i = 0; i < filterNameList.length; i++) {
				// judge useless part of url
				if (filterValueList[i] !== null && filterValueList[i] !== '') {
					// add necessary part of url
					if (isFirstArgsInputted == false) {
						hrefString = hrefString + '?' + filterNameList[i] + '=' + filterValueList[i];
						isFirstArgsInputted = true;
					} else {
						hrefString = hrefString + '&' + filterNameList[i] + '=' + filterValueList[i];
					}
				}	
			}
			location.href = hrefString;

        } else {
            alertFunction(result, '상세 검색 불가', 'warning');
        }
    })
    .catch(error => {
        alertFunction('서버가 응답하지 않습니다. 잠시 후 다시 시도해주세요.', 'error', 'error');
    });


}

const resultNumber = document.querySelector('#filterResultMaxNumber');
resultNumber.addEventListener("change", function () {
	applyFilter();
});

const isShowOnlyMine = document.querySelector('#filterShowOnlyMine');
isShowOnlyMine.addEventListener("change", function () {
	applyFilter();
});



// 상세검색 버튼
function addFilterBtnEvent(btnObj) {
	var filterItems = document.querySelector('.filter_items')
	var icon = document.querySelector('.btn_srh img')

	if (filterItems.classList.contains('on')) {
		filterItems.classList.remove('on');

		icon.src = '../resources/images/tw/arrow_drop_down.png';
	
	} else {
		filterItems.classList.add('on');

		icon.src = '../resources/images/tw/arrow_drop_up.png';
	}
}

// 그리드뷰로 전환
function addGridViewBtnEvent(btnObj) {
	var gridViewBtn = document.getElementById('filterSearchResultsTypeGrid');
	var listViewBtn = document.getElementById('filterSearchResultsTypeList');

	if (gridViewBtn.classList.contains('on')) {
		// 이미 그리드뷰가 선택된 상태이므로 아무 작업도 수행하지 않음
	} else {
		gridViewBtn.classList.add('on');
		gridViewBtn.src = '../resources/images/icon2-select.png'
		listViewBtn.classList.remove('on');
		listViewBtn.src = '../resources/images/icon1.png'

		var listViewItems = document.querySelectorAll('.list-style-item');
		listViewItems.forEach(function (item) {
			item.classList.remove('list-style-item');
			item.classList.remove('col-12');
			item.classList.add('grid-style-item');
			item.classList.add('col-6');
		});
	}

	applyFilter();
}

function pageButton(btnObj) {
	var navBtnActiveList = document.querySelectorAll('.navigation.active');
	navBtnActiveList.forEach(function (item) {
		item.classList.remove('active');
	});
	btnObj.classList.add('active');

	applyFilter();
}

function detailTrading(tradingThumbObj) {
	var tradingIdx = tradingThumbObj.dataset.trading_idx;

	console.log('detail.do?' + 'tradingIdx' + '=' + tradingIdx);
	location.href = 'detail.do?' + 'tradingIdx' + '=' + tradingIdx;
}


