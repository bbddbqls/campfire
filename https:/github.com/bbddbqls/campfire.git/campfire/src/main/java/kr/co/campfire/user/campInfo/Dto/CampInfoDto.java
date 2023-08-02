package kr.co.campfire.user.campInfo.Dto;

public class CampInfoDto {
    private int campId;
    private String campName;
    private String address;
    // 필요한 다른 필드들도 추가할 수 있습니다.

    // 생성자, getter, setter 등의 메서드를 작성합니다.
    // 이는 IDE 등의 도구를 사용하면 자동으로 생성할 수 있습니다.

    public int getCampId() {
        return campId;
    }

    public void setCampId(int campId) {
        this.campId = campId;
    }

    public String getCampName() {
        return campName;
    }

    public void setCampName(String campName) {
        this.campName = campName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "CampInfoDto{" +
                "campId=" + campId +
                ", campName='" + campName + '\'' +
                ", address='" + address + '\'' +
                // 나머지 필드들도 추가해줍니다.
                '}';
    }
}
