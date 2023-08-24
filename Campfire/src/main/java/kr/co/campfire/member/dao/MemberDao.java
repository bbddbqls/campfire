package kr.co.campfire.member.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import kr.co.campfire.member.dto.MemberDto;

@Repository
public class MemberDao {
	public MemberDto loginMember(SqlSessionTemplate sqlSession, MemberDto m) {
		return sqlSession.selectOne("memberMapper.loginMember", m);
	}
	
//	public int checkEmail(SqlSessionTemplate sqlSession, String email) {
//		return sqlSession.selectOne("memberMapper.checkEmail", email);
//	}
	
//	public int singupMember(SqlSessionTemplate sqlSession, MemberDto m) {
//		return sqlSession.insert("memberMapper.singupMember", m);
//	}
	
	public int checkId(SqlSessionTemplate sqlSession, String id) {
		return sqlSession.selectOne("memberMapper.checkId", id);
	}
	
	public int kakaoSingup(SqlSessionTemplate sqlSession, MemberDto md) {
		return sqlSession.insert("memberMapper.kakaoSingup", md);
	}
}
