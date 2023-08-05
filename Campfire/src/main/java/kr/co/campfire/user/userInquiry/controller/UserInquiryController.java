package kr.co.campfire.user.userInquiry.controller;


import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.RequestMapping;

import kr.co.campfire.user.campSearch.dto.CampSearchDto;
import kr.co.campfire.user.userInquiry.dto.UserInquiryDto;

@Controller
@RequestMapping("/user")
public class UserInquiryController {


	@RequestMapping("/showUserInquiry.do")
	public String showUserInquiry(UserInquiryDto uid, HttpSession session, Model model) {

		return "user/userInquiry";
	}
	
	@RequestMapping("/detailUserInquiry.do")
	public String detailUserInquiry(UserInquiryDto uid, HttpSession session, Model model) {

		return "user/userInquiryDetail";
	}
	
	@RequestMapping("/enrollUserInquiry.do")
	public String enrollUserInquiry(UserInquiryDto uid, HttpSession session, Model model) {

		return "user/userInquiryEnroll";
	}
	
	@RequestMapping("/modifyUserInquiry.do")
	public String modifyUserInquiry(UserInquiryDto uid, HttpSession session, Model model) {

		return "user/userInquiryModify";
	}

}
