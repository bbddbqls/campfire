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
		
		if (brd.getBrArSttCd().equals("Y")) {
			return "business/businessRegistration";
		} else {
//			model.addAttribute("msg", "아이디 비밀번호를 확인해 주세요!");
//			model.addAttribute("status", "error");
			return "";
		}
	}
	
	@PostMapping("/insertRegistration.do")
	public String showRegistration(CampRegistrationDto cr, HttpSession session, Model model) {
		
		System.out.println(cr);
		return "";
	}

}
