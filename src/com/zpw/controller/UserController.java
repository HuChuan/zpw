package com.zpw.controller;

import java.util.ArrayList;
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

@Controller
@JsonIgnoreProperties(value={"hibernateLazyInitializer"})
public class UserController {
	@RequestMapping("regist.do")
	@ResponseBody
	
	public Map register(User user){
//		System.out.println("aaaaaa");
//		Map map = new HashMap();
//		map.put("success", false);
//		if(CheckUtil.registerCheck(user)){
//			
//			IUserDao u = DAOFactory.getUserDao();
//			u.register(user);
//			map.put("username", user.getUsername());
//			map.put("token", user.getToken());
//			map.put("pow", user.getPow());
//			map.put("success", true);
//		}	
		IUserDao u = DAOFactory.getUserDao();
		//u.register(user);
		Map map = new HashMap();
		map.put("user", user);
		boolean success = true;
		map.put("success", success);
		
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
		return model.addAttribute("success", false);
	}
	@RequestMapping("check_email.do")
	@ResponseBody
	public Model check_email(String email,Model model){
		return model.addAttribute("success", false);
	}
	
}
