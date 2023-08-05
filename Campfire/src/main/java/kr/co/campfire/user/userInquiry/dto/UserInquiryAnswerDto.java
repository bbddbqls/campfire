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
public class UserInquiryAnswerDto {
	private int inpuiryNum;
	private String answerAdmin;
	private String answerTitle;
	private String answerContext;
	private Timestamp answerDateTimeCreated;
	
}
