package kr.co.campfire.member.service;

import java.util.HashMap;

import kr.co.campfire.member.dto.*;

public interface MemberService {
	MemberDto loginMember(MemberDto m);
	
//	int checkEmail(String email);
	
//	int singupMember(MemberDto m);
	
	//카카오 로그인
	String getAccessToken(String authorize_code) throws Throwable;
	public HashMap<String, Object> getUserInfo(String access_Token) throws Throwable;
	
	int checkId(String id);
	
	int kakaoSingup(MemberDto md);
}