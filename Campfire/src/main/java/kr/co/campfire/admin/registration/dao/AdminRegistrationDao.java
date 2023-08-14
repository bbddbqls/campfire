package kr.co.campfire.admin.registration.dao;

import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import kr.co.campfire.admin.registration.dto.AdminBusinessRegistrationDto;
import kr.co.campfire.common.dto.PageInfo;
import kr.co.campfire.user.userInquiry.dto.UserInquiryDto;

@Repository
public class AdminRegistrationDao {
	public int selectBusinessRegistrationListCount(SqlSessionTemplate sqlSession) {
		return sqlSession.selectOne("adminRegistrationMapper.selectBusinessRegistrationListCount");
	}
	
	public List<AdminBusinessRegistrationDto> selectBusinessRegistrationList(SqlSessionTemplate sqlSession, PageInfo pi) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		int limit = pi.getBoardLimit();
		RowBounds rowBounds = new RowBounds(offset, limit);
		return sqlSession.selectList("adminRegistrationMapper.selectBusinessRegistrationList",null,  rowBounds);
	}
	
	public int approvalBusinessRegistration(SqlSessionTemplate sqlSession, String brNum) {
		return sqlSession.update("adminRegistrationMapper.approvalBusinessRegistration", brNum);
	}
	
	public int refuseBusinessRegistration(SqlSessionTemplate sqlSession, AdminBusinessRegistrationDto abrd) {
		return sqlSession.update("adminRegistrationMapper.refuseBusinessRegistration", abrd);
	}
}
