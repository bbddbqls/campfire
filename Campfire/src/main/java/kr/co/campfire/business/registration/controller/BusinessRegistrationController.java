package kr.co.campfire.business.registration.controller;


import java.util.Objects;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.co.campfire.business.registration.dto.BusinessRegistrationDto;
import kr.co.campfire.business.registration.dto.CampRegistrationDto;
import kr.co.campfire.business.registration.service.BusinessRegistrationServiceImpl;

@Controller
@RequestMapping("/business/registration")
public class BusinessRegistrationController {
	@Autowired
	BusinessRegistrationServiceImpl businessRegistrationService;

	@GetMapping("/showRegistration.do")
	public String showRegistration(HttpSession session, Model model) {
		int memberNum = (int)session.getAttribute("memberNum");
		
		BusinessRegistrationDto brd = businessRegistrationService.selectBusinessRegistration(memberNum);
		int checkBR = businessRegistrationService.checkBusinessRegistration(memberNum);
		
		if (brd.getBrArSttCd().equals("Y")) {
			return "business/businessRegistration";
		}else if(checkBR != 0) {
			model.addAttribute("msg", "이미 캠핑장 정보를 입력한 사용자 입니다.");
			model.addAttribute("status", "error");
			return "user/userInquiry";
		}else {
			model.addAttribute("msg", "사업자 승인이 되지 않은 사용자 입니다.");
			model.addAttribute("status", "error");
			return "user/userInquiry";
		}
	}
	
	@PostMapping("/insertRegistration.do")
	public String showRegistration(CampRegistrationDto crd, HttpSession session, Model model) {
		
		System.out.println(crd);
		return "";
	}

}
