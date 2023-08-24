var categorySelect1 = document.querySelector('#filterCategory1');

categorySelect1.onchange = function() {
    var categorySelect2 = document.querySelector('#filterCategory2');
    var nowCategorySelect1 = categorySelect1.options[categorySelect1.selectedIndex].value;

    var optionsOfCategorySelect2 = {
        all: [
            '전체'
        ],
        carCamping: [
            '전체',
            '차박 텐트',
            '차박 타프',
            '자충식 / 에어매트',
            '차량용매트',
            '미니 테이블',
            '충전식 랜턴',
            '기타'
        ],
        tent: [
            '전체',
            '1인용~2인용',
            '2인용~3인용',
            '3인용~4인용',
            '4인용~5인용',
            '5인용~6인용',
            '6인용 이상',
            '차박텐트',
            '돔텐트',
            '터널형텐트',
            '거실형텐트',
            '티피텐트',
            '캐빈텐트',
            '기타'
        ],
        tarp: [
            '전체',
            '렉타(사각) 타프',
            '헥사(육각) 타프',
            '차량용타프',
            '타프스크린',
            '사이드/프론트월',
            '텐트/타프소품',
            '파라솔',
            '파라솔소품',
            '캐노피천막',
            '천막소품',
            '기타'
        ],
        mat: [
            '전체',
            '에어매트',
            '자충식매트',
            '피크닉매트',
            '엠보싱(발포)매트',
            '에어소파',
            '에어펌프',
            '기타'
        ],
        lanternLamp: [
            '전체',
            '캠핑실내등',
            '클래식랜턴',
            '손전등',
            '헤드랜턴',
            '작업등',
            '랜턴소품',
            '기타'
        ],
        iceboxWagon: [
            '전체',
            '웨건',
            '아이스박스',
            '쿨러백',
            '워터저그/물통',
            '아이스팩',
            '쿨러스탠드',
            '기타'
        ],
        chairFurniture: [
            '전체',
            '캠핑의자',
            '캠핑테이블',
            '의자/테이블세트',
            '키친/BBQ테이블',
            '미니/경량테이블',
            '캠핑박스',
            '쿨러스탠드/쉘프',
            '야전침대',
            '해먹',
            '기타'
        ],
        burner: [
            '전체',
            '휴대용가스레인지',
            '화로',
            '훈제그릴',
            '스토브(버너)',
            '가스그릴',
            '버너용품',
            '기타'
        ],
        sleeping: [
            '전체',
            '머미형침낭',
            '사각형침낭',
            '사각형침낭(후드)',
            '2인용침낭',
            '라이너/담요',
            '베개',
            '기타'
        ],
        fuelFirewood: [
            '전체',
            '숯',
            '장작',
            '착화제',
            '가스',
            '고체연료',
            '연료통',
            '기타'
        ],
        cooking: [
            '전체',
            '코펠',
            '컵',
            '수저/커트러리',
            '캠핑용식기',
            '냄비/팬',
            '더치오븐',
            '주방소품',
            '설거지 용품',
            '기타'
        ],
        powerBank: [
            '전체',
            '리튬이온파워뱅크',
            '리튬인산철파워뱅크',
            '패널/배터리',
            '기타'
        ],
        props: [
            '전체',
            '다용도칼/멀티툴',
            '케이스/가방',
            '도끼/손도끼',
            '캠핑용선풍기',
            '전선릴',
            '핸드카트/트럭',
            '캠핑용 보조배터리',
            '핫팩/손난로',
            '난로',
            '전기장판',
            '기타'
        ],
        etc: [
            '기타'
        ]
    }

    switch(nowCategorySelect1) {
        case '전체':
            var optionOfCategorySelect2 = optionsOfCategorySelect2.all;
            break;
        case '차박캠핑용품':
            var optionOfCategorySelect2 = optionsOfCategorySelect2.carCamping;
            break;
        case '텐트':
            var optionOfCategorySelect2 = optionsOfCategorySelect2.tent;
            break;
        case '타프/파라솔/천막':
            var optionOfCategorySelect2 = optionsOfCategorySelect2.tarp;
            break;
        case '매트':
            var optionOfCategorySelect2 = optionsOfCategorySelect2.mat;
            break;
        case '랜턴/램프':
            var optionOfCategorySelect2 = optionsOfCategorySelect2.lanternLamp;
            break;
        case '아이스박스/웨건':
            var optionOfCategorySelect2 = optionsOfCategorySelect2.iceboxWagon;
            break;
        case '의자/테이블/가구':
            var optionOfCategorySelect2 = optionsOfCategorySelect2.chairFurniture;
            break;
        case '버너/화로/스토브':
            var optionOfCategorySelect2 = optionsOfCategorySelect2.burner;
            break;
        case '침낭/침구':
            var optionOfCategorySelect2 = optionsOfCategorySelect2.sleeping;
            break;
        case '가스/장작/연료':
            var optionOfCategorySelect2 = optionsOfCategorySelect2.fuelFirewood;
            break;
        case '코펠/취사도구':
            var optionOfCategorySelect2 = optionsOfCategorySelect2.cooking;
            break;
        case '캠핑용파워뱅크':
            var optionOfCategorySelect2 = optionsOfCategorySelect2.powerBank;
            break;
        case '캠핑소품':
            var optionOfCategorySelect2 = optionsOfCategorySelect2.props;
            break;
        case '기타':
            var optionOfCategorySelect2 = optionsOfCategorySelect2.etc;
            break;
    }

    categorySelect2.options.length = 0;
    for(var i = 0; i < optionOfCategorySelect2.length; i++) {
        var option = document.createElement('option');
        option.value = optionOfCategorySelect2[i];
        option.innerText = optionOfCategorySelect2[i];
        categorySelect2.append(option);

        if(nowCategorySelect1 === '전체' || nowCategorySelect1 === '기타') {
            categorySelect2.classList.add('disabled');
        } else {
            categorySelect2.classList.remove('disabled');
        }
    }

}