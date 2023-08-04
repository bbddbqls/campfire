package kr.co.campfire.member.dto;

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
public class MemberDto {
	private int memberNum;
	private String memberId;
	private String memberPassword;
	private String memberPasswordChk;
	private String memberName;
	private String memberGender;
	private String memberAddr1;
	private String memberAddr2;
	private Date memberBirthDate;	
	private Timestamp memberCDT;	
	private String memberGoogle;	
	private String memberKakao;	
	private String memberNaver;	
	private String memberDivision;
}

