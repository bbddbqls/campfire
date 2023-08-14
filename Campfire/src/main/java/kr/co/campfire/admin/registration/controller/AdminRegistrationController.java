package kr.co.campfire.admin.registration.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import kr.co.campfire.admin.registration.dto.AdminBusinessRegistrationDto;
import kr.co.campfire.admin.registration.service.AdminRegistrationServiceImpl;
import kr.co.campfire.business.registration.dto.BusinessRegistrationDto;
import kr.co.campfire.common.controller.DataValidationController;
import kr.co.campfire.common.controller.LoginCheckController;
import kr.co.campfire.common.controller.Pagination;
import kr.co.campfire.common.controller.SessionManageController;
import kr.co.campfire.common.dto.PageInfo;
import kr.co.campfire.user.userInquiry.dto.UserInquiryDto;

@Controller
@RequestMapping("/adminRegistration")
public class AdminRegistrationController {
	@Autowired
	private AdminRegistrationServiceImpl adminRegistrationService;
	@Autowired
	private SessionManageController sessionManage;

	@Autowired
	private DataValidationController dataValidation;

	@Autowired
	private LoginCheckController loginCheck;

	@GetMapping("/showBusinessRegistrationList.do")
	public String showCampRegistrationList(@RequestParam(value = "cpage", defaultValue = "1") int currentPage,
			HttpSession session, Model model) {
		if (!loginCheck.loginCheck(session)) {
			sessionManage.setSessionMessage("로그인 후 이용할 수 있습니다.", "error", session);

			return "#################################"; // 캠핑장 서치
		} else if (!((String) session.getAttribute("memberDivision")).equals("admin")) {
			sessionManage.setSessionMessage("관리자 로그인 후 이용할 수 있습니다.", "error", session);

			return "#################################"; // 캠핑장 서치
		} else {
			int listCount = adminRegistrationService.selectBusinessRegistrationListCount();
			// 보여질 페이지 수
			int pageLimit = 10;

			// 한 페이지에 보여질 게시글 수
			int boardLimit = 15;

			// 글 번호 뒤에서부터 출력해주는 변수
			int row = listCount - (currentPage - 1) * boardLimit;

			// 페이징 로직 처리
			PageInfo pi = Pagination.getPageInfo(listCount, currentPage, pageLimit, boardLimit);

			List<AdminBusinessRegistrationDto> businessList = null;

			businessList = adminRegistrationService.selectBusinessRegistrationList(pi);

			model.addAttribute("businessList", businessList); // 객체 바인딩
			model.addAttribute("pi", pi);
			model.addAttribute("row", row);

			model.addAttribute("msg", (String) session.getAttribute("msg"));
			model.addAttribute("status", (String) session.getAttribute("status"));

			session.removeAttribute("msg");
			session.removeAttribute("status");

			return "admin/adminBusinessRegistration";

		}
	}

	@RequestMapping("/approvalBusinessRegistration.do")
	public String approvalBusinessRegistration(@RequestParam(value = "brNum", defaultValue = "-1") String brNum, HttpSession session, Model model) {
		if (!loginCheck.loginCheck(session)) {
			sessionManage.setSessionMessage("로그인 후 이용할 수 있습니다.", "error", session);

			return "#################################"; // 캠핑장 서치
		} else if (!((String) session.getAttribute("memberDivision")).equals("admin")) {
			sessionManage.setSessionMessage("관리자 로그인 후 이용할 수 있습니다.", "error", session);

			return "#################################"; // 캠핑장 서치
		} else {
			if (brNum.equals("-1")) {
				sessionManage.setSessionMessage("잘못된 접근 입니다.", "error", session);
			}else {
				// 사업자 등록 승락
				
				int result = adminRegistrationService.approvalBusinessRegistration(brNum);
				
				if(result > 0) {
					sessionManage.setSessionMessage("정상 처리 되었습니다.", "success", session);
				}else {
					sessionManage.setSessionMessage("삭제 처리중 오류 발생.", "error", session);
				}
			}
			return "redirect:/adminRegistration/showBusinessRegistrationList.do";

		}
	}
	
	@RequestMapping("/refuseBusinessRegistration.do")
	public String refuseBusinessRegistration(@RequestParam(value = "brNum", defaultValue = "-1") String brNum,
			@RequestParam(value = "brReason", defaultValue = "") String brReason, HttpSession session, Model model) {
		if (!loginCheck.loginCheck(session)) {
			sessionManage.setSessionMessage("로그인 후 이용할 수 있습니다.", "error", session);

			return "#################################"; // 캠핑장 서치
		} else if (!((String) session.getAttribute("memberDivision")).equals("admin")) {
			sessionManage.setSessionMessage("관리자 로그인 후 이용할 수 있습니다.", "error", session);

			return "#################################"; // 캠핑장 서치
		} else {
			if(brNum.equals("-1")) {
				sessionManage.setSessionMessage("잘못된 접근 입니다.", "error", session);
			}else if(brReason.equals("")){
				sessionManage.setSessionMessage("거절 사유를 입력해 주세요.", "error", session);
			}else {
				//사업자 등록 거절
				AdminBusinessRegistrationDto abrd = new AdminBusinessRegistrationDto();
				abrd.setBrNum(brNum);
				abrd.setBrReason(brReason);
				
				int result = adminRegistrationService.refuseBusinessRegistration(abrd);
				
				if(result > 0) {
					sessionManage.setSessionMessage("정상 처리 되었습니다.", "success", session);
				}else {
					sessionManage.setSessionMessage("처리중 오류 발생.", "error", session);
				}
			}
			return "redirect:/adminRegistration/showBusinessRegistrationList.do";

		}
	}
}

