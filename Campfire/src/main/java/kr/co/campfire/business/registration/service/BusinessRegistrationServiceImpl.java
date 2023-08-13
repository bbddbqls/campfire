package kr.co.campfire.business.registration.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.campfire.business.registration.dao.BusinessRegistrationDao;
import kr.co.campfire.business.registration.dto.BusinessRegistrationDto;
import kr.co.campfire.business.registration.dto.CampRegistrationDto;
import kr.co.campfire.business.registration.dto.CampRegistrationDto.CampAmenityDto;
import kr.co.campfire.business.registration.dto.CampRegistrationDto.CampPhotoItemDto;
import kr.co.campfire.business.registration.dto.CampRegistrationDto.CampTagDto;

@Service
public class BusinessRegistrationServiceImpl implements BusinessRegistrationService{
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	@Autowired
	private BusinessRegistrationDao businessRegistrationDao;
	
	//사업자 등록증
	@Override
	public BusinessRegistrationDto selectBusinessRegistration(int memberNum) {
		return businessRegistrationDao.selectBusinessRegistration(sqlSession, memberNum);
	}
	
	@Override
	public int checkBusinessRegistration(int memberNum) {
		return businessRegistrationDao.checkBusinessRegistration(sqlSession, memberNum);
	}
	
	@Override
	public int checkBusinessNum(String brNum) {
		return businessRegistrationDao.checkBusinessNum(sqlSession, brNum);
	}
	
	@Override
	public int insertBusiness(BusinessRegistrationDto brd) {
		return businessRegistrationDao.insertBusiness(sqlSession, brd);
	}

	@Override
	public int deleteBusiness(int memberNum) {
		return businessRegistrationDao.deleteBusiness(sqlSession, memberNum);
	}
	//캠핑장 등록
	@Override
	public int insertCampInfo(CampRegistrationDto crd) {
		return businessRegistrationDao.insertCampInfo(sqlSession, crd);
	}

	@Override
	public int insertCampAmenity(CampAmenityDto cad) {
		return businessRegistrationDao.insertCampAmenity(sqlSession, cad);
	}

	@Override
	public int insertCampTag(CampTagDto ctd) {
		return businessRegistrationDao.insertCampTag(sqlSession, ctd);
	}
	
	@Override
	public int selectCampNum(CampRegistrationDto crd) {
		return businessRegistrationDao.selectCampNum(sqlSession, crd);
	}

	@Override
	public int insertCampPhoto(CampPhotoItemDto cpd) {
		return businessRegistrationDao.insertCampPhoto(sqlSession, cpd);
	}

}
