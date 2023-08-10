package kr.co.campfire.business.registration.service;

import kr.co.campfire.business.registration.dto.BusinessRegistrationDto;
import kr.co.campfire.business.registration.dto.CampRegistrationDto;
import kr.co.campfire.business.registration.dto.CampRegistrationDto.CampAmenityDto;
import kr.co.campfire.business.registration.dto.CampRegistrationDto.CampPhotoItemDto;
import kr.co.campfire.business.registration.dto.CampRegistrationDto.CampTagDto;

public interface BusinessRegistrationService {
	BusinessRegistrationDto selectBusinessRegistration(int memberNum);
	
	int checkBusinessRegistration(int memberNum);
	
	int insertCampInfo(CampRegistrationDto crd);
	
	int insertCampAmenity(CampAmenityDto cad);
	
	int insertCampTag(CampTagDto ctd);
	
	int insertCampPhoto(CampPhotoItemDto cpd);
	
	int selectCampNum(CampRegistrationDto crd);
}
