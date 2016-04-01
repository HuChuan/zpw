package com.zpw.dao;

import java.sql.Date;

import org.apache.ibatis.session.SqlSession;

import com.zpw.po.User;
import com.zpw.util.MyBatisUtil;

public class UserDao implements IUserDao {

	@Override
	public boolean register(User user) {
		SqlSession session = null;
		boolean isSuccess = false;
		try {
			Date datatime = new Date(System.currentTimeMillis());
			user.setReg_time(datatime);
			session = MyBatisUtil.createSession();
			session.insert(User.class.getName()+".register", user);
			session.commit();
			isSuccess = true;
		} catch (Exception e) {
			e.printStackTrace();
			session.rollback();
		}finally{
			MyBatisUtil.closeSession(session);
		}
		return isSuccess;
	}

	@Override
	public User qByUsername(String username) {
		SqlSession session = null;
		User user = null;
		try {
			session = MyBatisUtil.createSession();
			user = (User)session.selectOne(User.class.getName()+".qByUsername", username);
			session.commit();
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			MyBatisUtil.closeSession(session);
		}
				
		
		return user;
	}

	@Override
	public User qByEmail(String email) {

		SqlSession session = null;
		User user = null;
		try {
			session = MyBatisUtil.createSession();
			user = (User)session.selectOne(User.class.getName()+".qByEmail", email);
			session.commit();
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			MyBatisUtil.closeSession(session);
		}
				
		
		return user;
	}
	

}
