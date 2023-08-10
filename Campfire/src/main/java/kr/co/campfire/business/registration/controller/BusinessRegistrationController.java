package kr.co.campfire.business.registration.controller;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Random;
import java.util.stream.Collectors;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import kr.co.campfire.business.registration.dto.BusinessRegistrationDto;
import kr.co.campfire.business.registration.dto.CampRegistrationDto;
import kr.co.campfire.business.registration.service.BusinessRegistrationServiceImpl;
import kr.co.campfire.common.controller.DataValidationController;
import kr.co.campfire.common.controller.LoginCheckController;
import kr.co.campfire.common.controller.SessionManageController;

@Controller
@RequestMapping("/business/registration")
public class BusinessRegistrationController {
	@Autowired
	private BusinessRegistrationServiceImpl businessRegistrationService;

	@Autowired
	private SessionManageController sessionManage;

	@Autowired
	private DataValidationController dataValidation;

	@Autowired
	private LoginCheckController loginCheck;

	@GetMapping("/showRegistration.do")
	public String showRegistration(HttpSession session, Model model) {
		if (!loginCheck.loginCheck(session)) {
			sessionManage.setSessionMessage("로그인 후 이용할 수 있습니다.", "error", session);
			model.addAttribute("msg", (String) session.getAttribute("msg"));
			model.addAttribute("status", (String) session.getAttribute("status"));

			session.removeAttribute("msg");
			session.removeAttribute("status");
			return "user/userInquiry";
		} else {

			int memberNum = (int) session.getAttribute("memberNum");

			BusinessRegistrationDto brd = businessRegistrationService.selectBusinessRegistration(memberNum);
			System.out.println(brd.toString());
			int checkBR = businessRegistrationService.checkBusinessRegistration(memberNum);
			System.out.println(checkBR);

			if (brd.getBrArSttCd().equals("Y")) {
				model.addAttribute("msg", (String) session.getAttribute("msg"));
				model.addAttribute("status", (String) session.getAttribute("status"));

				session.removeAttribute("msg");
				session.removeAttribute("status");

				return "business/businessRegistration";
			
			} else if(!brd.getBrArSttCd().equals("Y")){
				sessionManage.setSessionMessage("사업자 승인이 되지 않은 사용자 입니다.", "error", session);
			}else {
				sessionManage.setSessionMessage("잘못된 접근 입니다.", "error", session);
			}
			model.addAttribute("msg", (String) session.getAttribute("msg"));
			model.addAttribute("status", (String) session.getAttribute("status"));

			session.removeAttribute("msg");
			session.removeAttribute("status");
			return "redirect:/user/campSearch.do";
		}
	}

	@RequestMapping("/insertRegistration.do")
	public String insertRegistration(@ModelAttribute CampRegistrationDto crd, HttpSession session, Model model) {
		System.out.println(crd.toString());
		if (loginCheck.loginCheck(session)) {
			if (((String) session.getAttribute("memberDivision")).equals("business")) {

				if (dataValidation.nullCheck(crd.getCampName()) && dataValidation.nullCheck(crd.getCampAddr())
						&& dataValidation.nullCheck(crd.getCampPhoneNum())
						&& dataValidation.nullCheck(crd.getCampType())) {
					crd.setMemberNum((int) session.getAttribute("memberNum"));
					int resultCampInfo = businessRegistrationService.insertCampInfo(crd);

					if (resultCampInfo > 0) {
						// 편의시설 및 tag, 사진 정보넣을 캠핑장 번호 반환
						int campNum = businessRegistrationService.selectCampNum(crd);

						CampRegistrationDto campDto = new CampRegistrationDto();
						CampRegistrationDto.CampAmenityDto cad = campDto.new CampAmenityDto();
						CampRegistrationDto.CampTagDto ctd = campDto.new CampTagDto();
						CampRegistrationDto.CampPhotoItemDto cpd = campDto.new CampPhotoItemDto();

						// 편의시설 db저장
						if (crd.getCampAmenity() != null) {
							for (String campAmenityItem : crd.getCampAmenity()) {
								cad.setCampNum(campNum);
								cad.setCampAmenityItem(campAmenityItem);
								cad.setCampAmenityPhoto("/resources/images/" + campAmenityItem + ".png");
								businessRegistrationService.insertCampAmenity(cad);
							}
						}
						// Tag db저장
						if (crd.getCampTag() != null) {
							for (String campTagItem : crd.getCampTag()) {
								ctd.setCampNum(campNum);
								ctd.setCampTagItem(campTagItem);

								businessRegistrationService.insertCampTag(ctd);
							}
						}

						// 사진 저장 및 db 저장
						if (crd.getFiles() != null) {
							String uploadFolder = "C:\\Users\\Administrator\\git\\campfire\\Campfire\\src\\main\\webapp\\resources\\uploads\\";
							int i = 0;

							for (MultipartFile file : crd.getFiles()) {
								// 사진 로컬저장
								// 원본 파일이름
								String fileRealName = file.getOriginalFilename();
								// 확장자
								String extension = fileRealName.substring(fileRealName.lastIndexOf("."));

								// 랜덤문자열 생성
								int length = 8;
								String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&()";
								Random random = new Random();
								String randomString = random.ints(length, 0, characters.length())
										.mapToObj(characters::charAt).map(Object::toString)
										.collect(Collectors.joining());

								// 새로운 파일이름
								String campPhotoName = crd.getCampName() + i + "_" + randomString + extension;
								String filePathName = uploadFolder + campPhotoName;
								Path filePath = Paths.get(filePathName);
								long size = file.getSize();

								System.out.println("파일명: " + fileRealName);
								System.out.println("사이즈: " + size);
								// 파일을 저장하거나 처리하는 로직을 추가하세요
								i++;
								try {
									file.transferTo(filePath);
								} catch (Exception e) {
								}

								// 사진 정보 db저장
								cpd.setCampNum(campNum);
								cpd.setCampPhotoName(campPhotoName);
								cpd.setCampPhotoURL("\\resources\\uploads\\");

								businessRegistrationService.insertCampPhoto(cpd);
							}
						}
						return "user/campSearch";
					} else {
						return "common/errorPage";
					}
				} else {

					sessionManage.setSessionMessage("필수 항목을 꼭 적어주세요", "error", session);

//					return "redirect:/business/registration/insertRegistration.do";
					return "";
				}
			} else {
				sessionManage.setSessionMessage("사업자 로그인 후 이용할 수 있습니다.", "error", session);

				//return "redirect:/user/showUserInquiry.do";
				return "";
			}
		} else {
			sessionManage.setSessionMessage("로그인 후 이용할 수 있습니다.", "error", session);

			//return "redirect:/user/showUserInquiry.do";
			return "";
		}
	}

}
