package kr.co.campfire.user.campSearch.controller;


import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.RequestMapping;

import kr.co.campfire.user.campSearch.dto.CampSearchDto;

@Controller
@RequestMapping("/user")
public class CampSearchController {


	@RequestMapping("/campSearch.do")
	public String campSearch(CampSearchDto cs, HttpSession session, Model model) {

		return "user/userInquiry";
	}

}
