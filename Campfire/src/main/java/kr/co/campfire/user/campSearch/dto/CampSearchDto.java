package kr.co.campfire.user.campSearch.dto;

import java.sql.Date;
import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CampSearchDto {
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
}
