package com.zpw.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.zpw.dao.DAOFactory;
import com.zpw.dao.IUserDao;
import com.zpw.dao.UserDao;
import com.zpw.po.User;
import com.zpw.service.UserService;
import com.zpw.util.MD5Util;

@Controller
@JsonIgnoreProperties(value={"hibernateLazyInitializer"})
public class UserController {
	@RequestMapping("register.do")
	@ResponseBody
	public Map register(User user){
		
		Map map = new HashMap();
		map.put("success", false);

		if(UserService.registerCheck(user)){
			
			String t = new Date().toString()+user.getUsername();
			user.setToken(MD5Util.MD5(t));
			IUserDao u = DAOFactory.getUserDao();
			u.register(user);
			
			map.put("user", user);
			map.put("success", true);
		}	
		return map;
	}
//	@RequestMapping("check_user.do")
//	@ResponseBody
//	public Model check_user(String username,Model model){
//		return model.addAttribute("success", CheckUtil.isExistByUsername(username));
//	}
//	@RequestMapping("check_email.do")
//	@ResponseBody
//	public Model check_email(String email,Model model){
//		return model.addAttribute("success", CheckUtil.isExistByEmail(email));
//	}
	@RequestMapping("check_user.do")
	@ResponseBody
	public Model check_user(String username,Model model){
		return model.addAttribute("success", UserService.isExistByUsername(username));
	}
	@RequestMapping("check_email.do")
	@ResponseBody
	public Model check_email(String email,Model model){
		return model.addAttribute("success", UserService.isExistByEmail(email));
	}
	
}
