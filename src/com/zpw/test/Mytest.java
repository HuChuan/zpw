package com.zpw.test;

import java.sql.Date;

import org.apache.ibatis.session.SqlSession;

import com.zpw.po.User;
import com.zpw.util.MyBatisUtil;

public class Mytest {

	public static void main(String[] args) {
		
		
	}
	private static void testRegister(){
		SqlSession session = null;
		try {
			session = MyBatisUtil.createSession();
			
			User u = new User();
			u.setUsername("hheheh");
			u.setPassword("456456");
			u.setEmail("sfsdf");
			u.setImg("sdfas");
			u.setToken("sadf");
			u.setPhone("5465");
			Date datatime = new Date(System.currentTimeMillis());
			u.setReg_time(datatime);
			session.insert(User.class.getName()+".register", u);
			session.commit();
			
			} catch (Exception e) {	
				e.printStackTrace();
				session.rollback();
			}finally{
				session.close();
			}
		
	}
}
