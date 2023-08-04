package kr.co.campfire.business.registration.dto;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.Arrays;

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
	private String campPhoneNum;
	private String campAmenity[];
	private String campTag[];
	
}
