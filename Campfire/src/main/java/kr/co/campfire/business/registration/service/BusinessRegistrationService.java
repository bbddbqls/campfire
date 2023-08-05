package kr.co.campfire.business.registration.service;

import kr.co.campfire.business.registration.dto.BusinessRegistrationDto;

public interface BusinessRegistrationService {
	BusinessRegistrationDto selectBusinessRegistration(int memberNum);
	
	int checkBusinessRegistration(int memberNum);
}
