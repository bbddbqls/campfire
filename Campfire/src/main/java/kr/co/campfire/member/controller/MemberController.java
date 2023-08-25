package kr.co.campfire.member.controller;

import java.util.HashMap;
import java.util.Objects;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

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
		System.out.println(loginUser.toString());
		if (!Objects.isNull(loginUser)) {
			session.setAttribute("memberNum", loginUser.getMemberNum());
			String sessionMemberIdx = String.valueOf(loginUser.getMemberNum());
			session.setAttribute("sessionMemberIdx", sessionMemberIdx);
			session.setAttribute("memberName", loginUser.getMemberName());
			session.setAttribute("memberDivision", loginUser.getMemberDivision());
			System.out.println("memberNum : " + session.getAttribute("memberName"));
			return "redirect:/campSearch/camping.do";
		} else {
//			model.addAttribute("msg", "아이디 비밀번호를 확인해 주세요!");
//			model.addAttribute("status", "error");
			return "/member/login";
		}
	}

	@GetMapping("/go.do")
	public String godo() {

		return "redirect:/campSearch/camping.do";
	}

	@RequestMapping(value = "/kakaoLogin", method = RequestMethod.GET)
	public String kakaoLogin(@RequestParam(value = "code", required = false) String code, HttpSession session,
			Model model) throws Throwable {

		String access_Token = memberService.getAccessTokenKakao(code);
		// 위의 access_Token 받는 걸 확인한 후에 밑에 진행

		HashMap<String, Object> userInfo = memberService.getUserInfoKakao(access_Token);
		System.out.println("###id#### : " + userInfo.get("id"));
		System.out.println("###email#### : " + userInfo.get("email"));
		System.out.println("###nickname#### : " + userInfo.get("nickname"));
		System.out.println("###gender#### : " + userInfo.get("gender"));

		String id = (String) userInfo.get("id");
		int checkId = memberService.checkId(id);
		if (checkId > 0) {
			MemberDto m = new MemberDto();
			m.setMemberId(id);
			MemberDto loginUser = memberService.loginMember(m);
			System.out.println(loginUser.toString());
			if (!Objects.isNull(loginUser)) {
				session.setAttribute("memberNum", loginUser.getMemberNum());
				String sessionMemberIdx = String.valueOf(loginUser.getMemberNum());
				session.setAttribute("sessionMemberIdx", sessionMemberIdx);
				session.setAttribute("memberName", loginUser.getMemberName());
				session.setAttribute("memberDivision", loginUser.getMemberDivision());
				return "redirect:/campSearch/camping.do";
			} else {
//				model.addAttribute("msg", "아이디 비밀번호를 확인해 주세요!");
//				model.addAttribute("status", "error");
				return "/member/login";
			}
		} else {
			MemberDto md = new MemberDto();
			md.setMemberId(id);
			md.setMemberPassword(id);
			md.setMemberName((String) userInfo.get("nickname"));
			md.setMemberGender((String) userInfo.get("gender"));
			md.setMemberKakao((String) userInfo.get("email"));

			int result = memberService.kakaoSingup(md);
			if (result > 0) {
				MemberDto m = new MemberDto();
				m.setMemberId(id);
				MemberDto loginUser = memberService.loginMember(m);
				System.out.println(loginUser.toString());
				if (!Objects.isNull(loginUser)) {
					session.setAttribute("memberNum", loginUser.getMemberNum());
					String sessionMemberIdx = String.valueOf(loginUser.getMemberNum());
					session.setAttribute("sessionMemberIdx", sessionMemberIdx);
					session.setAttribute("memberName", loginUser.getMemberName());
					session.setAttribute("memberDivision", loginUser.getMemberDivision());
					return "redirect:/campSearch/camping.do";
				} else {
//					model.addAttribute("msg", "아이디 비밀번호를 확인해 주세요!");
//					model.addAttribute("status", "error");
					return "/member/login";
				}
			}
			return "/member/login";
		}
		// return에 페이지를 해도 되고, 여기서는 코드가 넘어오는지만 확인할거기 때문에 따로 return 값을 두지는 않았음

	}

	// 네이버 로그인
	@RequestMapping(value = "/naverLogin", method = RequestMethod.GET)
	public String naverLogin(@RequestParam(value = "code", required = false) String code, HttpSession session,
			Model model) throws Throwable {

		String access_Token = memberService.getAccessTokenNaver(code);
		// 위의 access_Token 받는 걸 확인한 후에 밑에 진행
		System.out.println("access_Token" + access_Token);
		
		HashMap<String, Object> userInfo = memberService.getUserInfoNaver(access_Token);
		System.out.println("###id#### : " + userInfo.get("id"));
		System.out.println("###pw#### : " + userInfo.get("pw"));
		System.out.println("###email#### : " + userInfo.get("email"));
		System.out.println("###nickname#### : " + userInfo.get("nickname"));
		System.out.println("###gender#### : " + userInfo.get("gender"));
		System.out.println("###birthyear#### : " + userInfo.get("birthyear"));
		System.out.println("###birthday#### : " + userInfo.get("birthday"));
		String id = (String) userInfo.get("id");
		int checkId = memberService.checkId(id);
		if (checkId > 0) {
			MemberDto m = new MemberDto();
			m.setMemberId(id);
			MemberDto loginUser = memberService.loginMember(m);
			System.out.println(loginUser.toString());
			if (!Objects.isNull(loginUser)) {
				session.setAttribute("memberNum", loginUser.getMemberNum());
				String sessionMemberIdx = String.valueOf(loginUser.getMemberNum());
				session.setAttribute("sessionMemberIdx", sessionMemberIdx);
				session.setAttribute("memberName", loginUser.getMemberName());
				session.setAttribute("memberDivision", loginUser.getMemberDivision());
				return "redirect:/campSearch/camping.do";
			} else {
//				model.addAttribute("msg", "아이디 비밀번호를 확인해 주세요!");
//				model.addAttribute("status", "error");
				return "/member/login";
			}
		} else {
			MemberDto md = new MemberDto();
			md.setMemberId(id);
			md.setMemberPassword(id);
			md.setMemberName((String) userInfo.get("nickname"));
			md.setMemberGender((String) userInfo.get("gender"));
			md.setMemberKakao((String) userInfo.get("email"));

			int result = memberService.kakaoSingup(md);
			if (result > 0) {
				MemberDto m = new MemberDto();
				m.setMemberId(id);
				MemberDto loginUser = memberService.loginMember(m);
				System.out.println(loginUser.toString());
				if (!Objects.isNull(loginUser)) {
					session.setAttribute("memberNum", loginUser.getMemberNum());
					String sessionMemberIdx = String.valueOf(loginUser.getMemberNum());
					session.setAttribute("sessionMemberIdx", sessionMemberIdx);
					session.setAttribute("memberName", loginUser.getMemberName());
					session.setAttribute("memberDivision", loginUser.getMemberDivision());
					return "redirect:/campSearch/camping.do";
				} else {
//					model.addAttribute("msg", "아이디 비밀번호를 확인해 주세요!");
//					model.addAttribute("status", "error");
					return "/member/login";
				}
			}
			return "/member/login";
		}
	}
	// return에 페이지를 해도 되고, 여기서는 코드가 넘어오는지만 확인할거기 때문에 따로 return 값을 두지는 않았음

}
