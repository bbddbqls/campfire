package kr.co.campfire.common.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.gson.Gson;

@Controller
public class IndexController {
	@RequestMapping("/")
	public String loginIndex() {
		
		return "member/login";
	}
}
