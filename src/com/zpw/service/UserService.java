package com.zpw.service;

import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.zpw.dao.DAOFactory;
import com.zpw.dao.IUserDao;
import com.zpw.po.User;
import com.zpw.util.MD5Util;

public class UserService {
	public static boolean isExistByUsername(String username) {
		IUserDao u = DAOFactory.getUserDao();
		User user = u.qByUsername(username);
		if (user == null) {
			return false;
		} else {
			return true;
		}
	}

	public static boolean isExistByEmail(String email) {
		IUserDao u = DAOFactory.getUserDao();
		User user = u.qByEmail(email);
		if (user == null) {
			return false;
		} else {
			return true;
		}
	}

	public static boolean checkEmail(String email) {
		boolean flag = false;
		try {
			String check = "^([a-z0-9A-Z]+[-|_|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$";
			Pattern regex = Pattern.compile(check);
			Matcher matcher = regex.matcher(email);
			flag = matcher.matches();
		} catch (Exception e) {
			flag = false;
		}
		return flag;
	}
	public static boolean checkUsername(String username) {
		boolean flag = false;
		try {
			String check = "^[\\w_]{2,20}$";
			Pattern regex = Pattern.compile(check);
			Matcher matcher = regex.matcher(username);
			flag = matcher.matches();
		} catch (Exception e) {
			flag = false;
		}
		return flag;
	}
	public static boolean checkPassword(String password) {
		boolean flag = false;
		if (password.length()==0||password.length()>6) {
			flag = false;
		} else {
			flag = true;
		}
		return flag;
	}
	public static boolean checkPow(int pow) {
		boolean flag = false;
		if (pow==1||pow == 2) {
			flag = true;
		} else {
			flag = false;
		}
		return flag;
	}

	public static boolean registerCheck(User user) {
		boolean username = (checkUsername(user.getUsername())&&!isExistByUsername(user.getUsername()))?true:false;
		boolean password = checkPassword(user.getPassword());
		boolean email = (checkEmail(user.getEmail())&&!isExistByEmail(user.getEmail()))?true:false;
		boolean pow = checkPow(user.getPow());
		boolean flag = false;
		
		if(username&&password&&email&&pow){
			flag = true;
		}else{
			flag = false;
		}
		return flag;
	}
	public static User register(User user){
		String t = new Date().toString()+user.getUsername();
		user.setToken(MD5Util.MD5(t));
		IUserDao u = DAOFactory.getUserDao();
		u.addUser(user);
		return user;
		
	}
	public static boolean loginCheck(String nameOrEmail, String password){
		boolean flag = false;
		IUserDao u = DAOFactory.getUserDao();
		if (u.qByUsername(nameOrEmail)!=null) {
			User user = new User();
			user.setUsername(nameOrEmail);
			user.setPassword(password);
			if(u.loginByUsername(user)!=null){
				flag = true;
			}else{
				flag = false;
			}
			
		} else if(u.qByEmail(nameOrEmail)!=null) {
			User user = new User();
			user.setEmail(nameOrEmail);
			user.setPassword(password);
			if(u.loginByEmail(user)!=null){
				flag = true;
			}else{
				flag = false;
			}
			
		}else{
			flag = false;
		}
		return flag;
	}
	
	public static User getUserByUsername(String username){
		IUserDao u = DAOFactory.getUserDao();
		return u.qByUsername(username);
	}
	public static User getUserByEmail(String email){
		IUserDao u = DAOFactory.getUserDao();
		
		return u.qByEmail(email);
	}
	public static boolean updateToken(String username,String token){
		IUserDao u = DAOFactory.getUserDao();	
		User user = new User();
		user.setToken(token);
		user.setUsername(username);
		return u.updateUser(user);
	}
	public static boolean updateUser(User user){
		IUserDao u = DAOFactory.getUserDao();
		System.out.println(user.getUsername()+user.getEmail()+user.getPhone());
		return u.updateUser(user);
	}
	
	public static boolean check_login(User user){
		IUserDao u = DAOFactory.getUserDao();
		return u.check_login(user);
	}
	
}
