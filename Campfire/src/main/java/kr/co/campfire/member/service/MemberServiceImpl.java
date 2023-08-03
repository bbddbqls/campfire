package kr.co.campfire.member.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.campfire.member.dao.*;
import kr.co.campfire.member.dto.*;

@Service
public class MemberServiceImpl implements MemberService{
	
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	@Autowired
	private MemberDao memberDao;
	
	@Override
	public MemberDto loginMember(MemberDto m) {
		return memberDao.loginMember(sqlSession, m);
	}
//	@Override
//	public int checkEmail(String email) {
//		return memberDao.checkEmail(sqlSession, email);
//	}
//	@Override
//	public int singupMember(MemberDto m) {
//		return memberDao.singupMember(sqlSession, m);
//	}
}