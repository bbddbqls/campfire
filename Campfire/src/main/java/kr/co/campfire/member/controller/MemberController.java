package kr.co.campfire.member.controller;

import java.util.Objects;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.co.campfire.member.dto.*;
import kr.co.campfire.member.service.*;

@Controller
@RequestMapping("/member")
public class MemberController {
	@Autowired
	MemberServiceImpl memberService;


	@PostMapping("/login.do")
	public String loginIndex(MemberDto m, HttpSession session, Model model) {
		MemberDto loginUser = memberService.loginMember(m);

		if (!Objects.isNull(loginUser)) {
			session.setAttribute("memberNum", loginUser.getMemberNum());
			session.setAttribute("memberName", loginUser.getMemberName());
			return "redirect:/user/campSearch.do";
		} else {
//			model.addAttribute("msg", "아이디 비밀번호를 확인해 주세요!");
//			model.addAttribute("status", "error");
			return "/member/login";
		}
	}
 @GetMapping("/go.do")
	public String godo() {
		
		return "redirect:/user/campSearch.do";
	}
}
