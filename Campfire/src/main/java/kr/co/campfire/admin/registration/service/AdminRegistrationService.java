package kr.co.campfire.admin.registration.service;

import java.util.List;

import kr.co.campfire.admin.registration.dto.AdminBusinessRegistrationDto;
import kr.co.campfire.common.dto.PageInfo;

public interface AdminRegistrationService {
	int selectBusinessRegistrationListCount();
	
	List<AdminBusinessRegistrationDto> selectBusinessRegistrationList(PageInfo pi);
	
	int approvalBusinessRegistration(String brNum);
	
	int refuseBusinessRegistration(AdminBusinessRegistrationDto abrd);
}
