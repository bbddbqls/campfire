package kr.co.campfire.business.registration.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.campfire.business.registration.dao.BusinessRegistrationDao;
import kr.co.campfire.business.registration.dto.BusinessRegistrationDto;

@Service
public class BusinessRegistrationServiceImpl implements BusinessRegistrationService{
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	@Autowired
	private BusinessRegistrationDao businessRegistrationDao;
	
	@Override
	public BusinessRegistrationDto selectBusinessRegistration(int memberNum) {
		return businessRegistrationDao.selectBusinessRegistration(sqlSession, memberNum);
	}

}
