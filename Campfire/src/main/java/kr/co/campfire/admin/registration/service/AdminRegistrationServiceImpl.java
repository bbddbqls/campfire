package kr.co.campfire.admin.registration.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.campfire.admin.registration.dao.AdminRegistrationDao;
import kr.co.campfire.admin.registration.dto.AdminBusinessRegistrationDto;
import kr.co.campfire.common.dto.PageInfo;

@Service
public class AdminRegistrationServiceImpl implements AdminRegistrationService {
	@Autowired
	private AdminRegistrationDao adminRegistrationDao;

	@Autowired
	private SqlSessionTemplate sqlSession;

	@Override
	public int selectBusinessRegistrationListCount() {
		return adminRegistrationDao.selectBusinessRegistrationListCount(sqlSession);
	}

	@Override
	public List<AdminBusinessRegistrationDto> selectBusinessRegistrationList(PageInfo pi) {
		return adminRegistrationDao.selectBusinessRegistrationList(sqlSession, pi);
	}

	@Override
	public int approvalBusinessRegistration(String brNum) {
		return adminRegistrationDao.approvalBusinessRegistration(sqlSession, brNum);
	}

	@Override
	public int refuseBusinessRegistration(AdminBusinessRegistrationDto abrd) {
		return adminRegistrationDao.refuseBusinessRegistration(sqlSession, abrd);
	}

}
