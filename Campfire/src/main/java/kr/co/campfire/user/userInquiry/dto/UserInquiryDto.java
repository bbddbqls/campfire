package kr.co.campfire.user.userInquiry.dto;

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
public class UserInquiryDto {
	private int inpuiryNum;
	private int memberNum;
	private String inpuiryTitle;
	private String inpuiryContext;
	private Timestamp inpuiryDateTimeCreated;
	private String inpuiryAnswerFL;
	private String inpuiryPublicFL;
	
}
