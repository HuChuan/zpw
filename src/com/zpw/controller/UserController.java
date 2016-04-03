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
public class UserController {
	@RequestMapping("register.do")
	@ResponseBody
	public Map register(User user){	
		Map map = new HashMap();
		map.put("success", false);

		if(UserService.registerCheck(user)){
			map.put("user", UserService.register(user));
			map.put("success", true);
		}	
		return map;
	}

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
	@RequestMapping("username_login.do")
	@ResponseBody
	public Map username_login(User user){
		Map map = new HashMap();
		map.put("success", false);
		if(UserService.loginCheck(user.getUsername(), user.getPassword())){
			String t = new Date().toString()+user.getUsername();
			UserService.updateToken(user.getUsername(),MD5Util.MD5(t));
			user = UserService.getUserByUsername(user.getUsername());
			map.put("user", user);
			map.put("success", true);
		}	
		return map;
	}
	@RequestMapping("email_login.do")
	@ResponseBody
	public Map email_login(User user){
		Map map = new HashMap();
		map.put("success", false);
		if(UserService.loginCheck(user.getEmail(), user.getPassword())){
			user = UserService.getUserByEmail(user.getEmail());
			
			String t = new Date().toString()+user.getUsername();
			String token = MD5Util.MD5(t);
			UserService.updateToken(user.getUsername(),token);
			user.setToken(token);
			map.put("user", user);
			map.put("success", true);
		
		}	
		return map;
	}
	
	@RequestMapping("check_login")
	@ResponseBody
	public Map check_login(User user){
		Map map = new HashMap();
		map.put("success", UserService.check_login(user));
		return map;
	}
	@RequestMapping("load_userinfo")
	@ResponseBody
	public User load_userinfo(User user){
		return UserService.getUserByUsername(user.getUsername());
	}
	@RequestMapping("update_userinfo")
	@ResponseBody
	public Map update_userinfo(User user){
		Map map = new HashMap();
		map.put("success", UserService.updateUser(user));
		return map;
	}
	@RequestMapping("update_password")
	@ResponseBody
	Map update_password(String username, String old_psw, String new_psw){
		Map map = new HashMap();
		User user = new User();
		user.setUsername(username);
		user.setPassword(old_psw);
		if(UserService.loginCheck(username, old_psw)){
			user.setPassword(new_psw);
			map.put("success", UserService.updateUser(user));		
			map.put("reason", null);
		}else{
			map.put("reason", "原密码错误");
		}
		return map;
	}
}
