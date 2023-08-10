package kr.co.campfire.business.registration.dto;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CampRegistrationDto {
	private int campNum;
	private int memberNum;
	private String campName;
	private int campPostCode;
	private String campAddr;
	private String campPhoneNum;
	private String campType;
	private String campLink;
	private String campAPlace;
	private double campX;
	private double campY;
	private String campCheck;
	private String campIntro;
	private int campOffsdPrice;
	private int campOffswPrice;
	private int campSdPrice;
	private int campSwPrice;
	private int campViews;
	private int campCreateDate;
	private String campAmenity[];
	private String campTag[];
	private List<MultipartFile> files;
	
	@Getter
	@Setter
	@NoArgsConstructor
	@AllArgsConstructor
	public class CampAmenityDto{
		private String campAmenityPhoto;
		private String campAmenityItem;
		private int campNum;
	}
	
	@Getter
	@Setter
	@NoArgsConstructor
	@AllArgsConstructor
	public class CampTagDto{
		private String campTagItem;
		private int campNum;
	}
	
	@Getter
	@Setter
	@NoArgsConstructor
	@AllArgsConstructor
	public class CampPhotoItemDto{
		private int campNum;
		private String campPhotoName;
		private String campPhotoURL;
	}
}
