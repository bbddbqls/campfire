package kr.co.campfire.business.registration.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import kr.co.campfire.business.registration.dto.BusinessRegistrationDto;
import kr.co.campfire.member.dto.MemberDto;

@Repository
public class BusinessRegistrationDao {
	public BusinessRegistrationDto selectBusinessRegistration(SqlSessionTemplate sqlSession, int memberNum) {
		return sqlSession.selectOne("registrationMapper.checkBusiness", memberNum);
	}
}
