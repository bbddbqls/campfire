package kr.co.campfire.user.campInfo.Dao;

import org.springframework.stereotype.Repository;

import kr.co.campfire.user.campInfo.Dto.CampInfoDto;

@Repository
public class CampInfoDao {
    // 실제로는 데이터베이스와의 연결을 설정하고 쿼리를 실행하는 로직이 들어가야 합니다.
    // 예시로 간단한 메서드를 추가해보겠습니다.

    // 캠핑장 정보를 데이터베이스에서 가져오는 메서드
    public CampInfoDto getCampInfo(int campId) {
        // 실제로는 데이터베이스에서 해당 캠핑장 정보를 가져오는 로직이 들어가야 합니다.
        // 예시로 간단한 객체를 생성하여 리턴합니다.
        CampInfoDto campInfo = new CampInfoDto();
        campInfo.setCampId(campId);
        campInfo.setCampName("다온숲");
        campInfo.setAddress("세종특별자치시 전동면 깊은내길 213");
        // 나머지 필드들도 설정하고 리턴합니다.
        return campInfo;
    }

    // 캠핑장 정보를 데이터베이스에 저장하는 메서드
    public void saveCampInfo(CampInfoDto campInfo) {
        // 실제로는 데이터베이스에 캠핑장 정보를 저장하는 로직이 들어가야 합니다.
        // 여기서는 단순히 콘솔에 정보를 출력하는 예시 코드를 작성합니다.
        System.out.println("캠핑장 정보 저장: " + campInfo);
    }

    // 캠핑장 정보를 데이터베이스에서 삭제하는 메서드
    public void deleteCampInfo(int campId) {
        // 실제로는 데이터베이스에서 해당 캠핑장 정보를 삭제하는 로직이 들어가야 합니다.
        // 여기서는 단순히 콘솔에 메시지를 출력하는 예시 코드를 작성합니다.
        System.out.println("캠핑장 정보 삭제 - 캠핑장 ID: " + campId);
    }
}
