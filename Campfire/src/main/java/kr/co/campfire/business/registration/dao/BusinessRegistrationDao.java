package kr.co.campfire.business.registration.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import kr.co.campfire.business.registration.dto.BusinessRegistrationDto;
import kr.co.campfire.business.registration.dto.CampRegistrationDto;
import kr.co.campfire.business.registration.dto.CampRegistrationDto.CampAmenityDto;
import kr.co.campfire.business.registration.dto.CampRegistrationDto.CampPhotoItemDto;
import kr.co.campfire.business.registration.dto.CampRegistrationDto.CampTagDto;

@Repository
public class BusinessRegistrationDao {
	public BusinessRegistrationDto selectBusinessRegistration(SqlSessionTemplate sqlSession, int memberNum) {
		return sqlSession.selectOne("registrationMapper.checkBusiness", memberNum);
	}
	public int checkBusinessRegistration(SqlSessionTemplate sqlSession, int memberNum) {
		return sqlSession.selectOne("registrationMapper.checkRegistration", memberNum);
	}
	public int insertCampInfo(SqlSessionTemplate sqlSession, CampRegistrationDto crd) {
		return sqlSession.insert("registrationMapper.insertCampInfo", crd);
	}
	
	public int insertCampAmenity(SqlSessionTemplate sqlSession, CampAmenityDto cad) {
		return sqlSession.insert("registrationMapper.insertCampAmenity", cad);
	}
	
	public int insertCampTag(SqlSessionTemplate sqlSession, CampTagDto ctd) {
		return sqlSession.insert("registrationMapper.insertCampTag", ctd);
	}
	
	public int insertCampPhoto(SqlSessionTemplate sqlSession, CampPhotoItemDto cpd) {
		return sqlSession.insert("registrationMapper.insertCampPhoto", cpd);
	}
	public int selectCampNum(SqlSessionTemplate sqlSession, CampRegistrationDto crd) {
		return sqlSession.selectOne("registrationMapper.selectCampNum", crd);
	}
}
