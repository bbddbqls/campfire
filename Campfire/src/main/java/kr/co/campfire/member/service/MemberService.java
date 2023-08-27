package kr.co.campfire.member.service;

import java.util.HashMap;

import kr.co.campfire.member.dto.*;

public interface MemberService {
	MemberDto loginMember(MemberDto m);
	
//	int checkEmail(String email);
	
//	int singupMember(MemberDto m);
	
	//카카오 로그인
	String getAccessTokenKakao(String authorize_code) throws Throwable;
	
	public HashMap<String, Object> getUserInfoKakao(String access_Token) throws Throwable;
	
	int checkId(String id);
	
	int kakaoSingup(MemberDto md);
	
	int naverSingup(MemberDto md);
	
	int googleSingup(MemberDto md);
	
	String getAccessTokenNaver(String authorize_code) throws Throwable;
	
	public HashMap<String, Object> getUserInfoNaver(String access_Token) throws Throwable;
	
	String getAccessTokenGoogle(String authorize_code) throws Throwable;
	
	public HashMap<String, Object> getUserInfoGoogle(String access_Token) throws Throwable;
}