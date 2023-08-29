var regionSelect1 = document.querySelector('#filterRegion1');

regionSelect1.onchange = function() {
    var regionSelect2 = document.querySelector('#filterRegion2');
    var nowRegionSelect1 = regionSelect1.options[regionSelect1.selectedIndex].value;

    var optionsOfRegionSelect2 = {
        all: [
            '전 지역'
        ],
        seoul: [
            '전 지역',
            '강남구',
            '강동구',
            '강북구',
            '강서구',
            '관악구',
            '광진구',
            '구로구',
            '금천구',
            '노원구',
            '도봉구',
            '동대문구',
            '동작구',
            '마포구',
            '서대문구',
            '서초구',
            '성동구',
            '성북구',
            '송파구',
            '양천구',
            '영등포구',
            '용산구',
            '은평구',
            '종로구',
            '중구',
            '중랑구',
        ],
        busan: [
            '전 지역',
            '강서구',
            '금정구',
            '기장군',
            '남구',
            '동구',
            '동래구',
            '부산진구',
            '북구',
            '사상구',
            '사하구',
            '서구',
            '수영구',
            '연제구',
            '영도구',
            '중구',
            '해운대구',
        ],
        daegu: [
            '전 지역',
            '군위군',
            '남구',
            '달서구',
            '달성군',
            '동구',
            '북구',
            '서구',
            '수성구',
            '중구',
        ],
        incheon: [
            '전 지역',
            '강화군',
            '계양구',
            '남동구',
            '동구',
            '미추홀구',
            '부평구',
            '서구',
            '연수구',
            '옹진군',
            '중구',
        ],
        gwangju: [
            '전 지역',
            '광산구',
            '남구',
            '동구',
            '북구',
            '서구',
        ],
        daejeon: [
            '전 지역',
            '대덕구',
            '동구',
            '서구',
            '유성구',
            '중구',
        ],
        ulsan: [
            '전 지역',
            '남구',
            '동구',
            '북구',
            '울주군',
            '중구',
        ],
        sejong: [
            '전 지역',
            '가람동',
            '고운동',
            '금남면',
            '나성동',
            '다정동',
            '대평동',
            '도담동',
            '반곡동',
            '보람동',
            '부강면',
            '새롬동',
            '소담동',
            '소정면',
            '아름동',
            '어진동',
            '연기면',
            '연동면',
            '연서면',
            '장군면',
            '전동면',
            '전의면',
            '조치원읍',
            '종촌동',
            '집현동',
            '한솔동',
            '해밀동',
        ],
        gyeonggi: [
            '전 지역',
            '가평군',
            '고양시 덕양구',
            '고양시 일산동구',
            '고양시 일산서구',
            '과천시',
            '광명시',
            '광주시',
            '구리시',
            '군포시',
            '김포시',
            '남양주시',
            '동두천시',
            '부천시 소사구',
            '부천시 오정구',
            '부천시 원미구',
            '성남시 분당구',
            '성남시 수정구',
            '성남시 중원구',
            '수원시 권선구',
            '수원시 영통구',
            '수원시 장안구',
            '수원시 팔달구',
            '시흥시',
            '안산시 단원구',
            '안산시 상록구',
            '안성시',
            '안양시 동안구',
            '안양시 만안구',
            '양주시',
            '양평군',
            '여주시',
            '연천군',
            '오산시',
            '용인시 기흥구',
            '용인시 수지구',
            '용인시 처인구',
            '의왕시',
            '의정부시',
            '이천시',
            '파주시',
            '평택시',
            '포천시',
            '하남시',
            '화성시',
        ],
        gangwon: [
            '전 지역',
            '강릉시',
            '고성군',
            '동해시',
            '삼척시',
            '속초시',
            '양구군',
            '양양군',
            '영월군',
            '원주시',
            '인제군',
            '정선군',
            '철원군',
            '춘천시',
            '태백시',
            '평창군',
            '홍천군',
            '화천군',
            '횡성군',
        ],
        chungcheongbukdo: [
            '전 지역',
            '괴산군',
            '단양군',
            '보은군',
            '영동군',
            '옥천군',
            '음성군',
            '제천시',
            '증평군',
            '진천군',
            '청주시 상당구',
            '청주시 서원구',
            '청주시 청원구',
            '청주시 흥덕구',
            '충주시',
        ],
        chungcheongnamdo: [
            '전 지역',
            '계룡시',
            '공주시',
            '금산군',
            '논산시',
            '당진시',
            '보령시',
            '부여군',
            '서산시',
            '서천군',
            '아산시',
            '예산군',
            '천안시 동남구',
            '천안시 서북구',
            '청양군',
            '태안군',
            '홍성군',
        ],
        jeollabukdo: [
            '전 지역',
            '고창군',
            '군산시',
            '김제시',
            '남원시',
            '무주군',
            '부안군',
            '순창군',
            '완주군',
            '익산시',
            '임실군',
            '장수군',
            '전주시 덕진구',
            '전주시 완산구',
            '정읍시',
            '진안군',
        ],
        jeollanamdo: [
            '전 지역',
            '강진군',
            '고흥군',
            '곡성군',
            '광양시',
            '구례군',
            '나주시',
            '담양군',
            '목포시',
            '무안군',
            '보성군',
            '순천시',
            '신안군',
            '여수시',
            '영광군',
            '영암군',
            '완도군',
            '장성군',
            '장흥군',
            '진도군',
            '함평군',
            '해남군',
            '화순군',
        ],
        gyeongsangbukdo: [
            '전 지역',
            '경산시',
            '경주시',
            '고령군',
            '구미시',
            '김천시',
            '문경시',
            '봉화군',
            '상주시',
            '성주군',
            '안동시',
            '영덕군',
            '영양군',
            '영주시',
            '영천시',
            '예천군',
            '울릉군',
            '울진군',
            '의성군',
            '청도군',
            '청송군',
            '칠곡군',
            '포항시 남구',
            '포항시 북구',
        ],
        gyeongsangnamdo: [
            '전 지역',
            '거제시',
            '거창군',
            '고성군',
            '김해시',
            '남해군',
            '밀양시',
            '사천시',
            '산청군',
            '양산시',
            '의령군',
            '진주시',
            '창녕군',
            '창원시 마산합포구',
            '창원시 마산회원구',
            '창원시 성산구',
            '창원시 의창구',
            '창원시 진해구',
            '통영시',
            '하동군',
            '함안군',
            '함양군',
            '합천군',
        ],
        jeju: [
            '전 지역',
            '서귀포시',
            '제주시',
        ],
    }

    switch(nowRegionSelect1) {
        case '전국':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.all;
            break;
        case '서울특별시':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.seoul;
            break;
        case '부산광역시':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.busan;
            break;
        case '대구광역시':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.daegu;
            break;
        case '인천광역시':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.incheon;
            break;
        case '광주광역시':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.gwangju;
            break;
        case '대전광역시':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.daejeon;
            break;
        case '울산광역시':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.ulsan;
            break;
        case '세종특별자치시':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.sejong;
            break;
        case '경기도':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.gyeonggi;
            break;
        case '강원특별자치도':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.gangwon;
            break;
        case '충청북도':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.chungcheongbukdo;
            break;
        case '충청남도':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.chungcheongnamdo;
            break;
        case '전라북도':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.jeollabukdo;
            break;
        case '전라남도':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.jeollanamdo;
            break;
        case '경상북도':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.gyeongsangbukdo;
            break;
        case '경상남도':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.gyeongsangnamdo;
            break;
        case '제주특별자치도':
            var optionOfRegionSelect2 = optionsOfRegionSelect2.jeju;
            break;
    }
 
    regionSelect2.options.length = 0;
    for(var i = 0; i < optionOfRegionSelect2.length; i++) {
        var option = document.createElement('option');
        option.value = optionOfRegionSelect2[i];
        option.innerText = optionOfRegionSelect2[i];
        regionSelect2.append(option);

        if(nowRegionSelect1 === '전국') {
            regionSelect2.classList.add('disabled');
        } else {
            regionSelect2.classList.remove('disabled');
        }
    }

}