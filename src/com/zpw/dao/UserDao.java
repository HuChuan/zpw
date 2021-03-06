package com.zpw.dao;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.zpw.po.User;
import com.zpw.util.MyBatisUtil;

public class UserDao implements IUserDao {

	@Override
	public boolean addUser(User user) {
		SqlSession session = null;
		boolean isSuccess = false;
		try {
			Date datatime = new Date(System.currentTimeMillis());
			user.setReg_time(datatime);
			session = MyBatisUtil.createSession();
			session.insert(User.class.getName()+".addUser", user);
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
	public boolean delByUsername(String username) {
		SqlSession session = null;
		boolean isSuccess = false;
		try {
			session = MyBatisUtil.createSession();
			session.delete(User.class.getName()+".delByUsername", username);
			session.commit();
			isSuccess = true;
		} catch (Exception e) {
			e.printStackTrace();
			session.rollback();
		}finally{
			MyBatisUtil.closeSession(session);
		}
		return isSuccess;
	};

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
	@Override
	public List<User> getAllUser() {
		SqlSession session = null;
		List<User> list = new ArrayList<User>();
		try {
			session = MyBatisUtil.createSession();
			list = session.selectList(User.class.getName()+".getAllUser");
			session.commit();
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			MyBatisUtil.closeSession(session);
		}
		
		return list;
	}

	@Override
	public User loginByUsername(User user) {
		SqlSession session = null;
		
		try {
			session = MyBatisUtil.createSession();
			user = (User)session.selectOne(User.class.getName()+".loginByUsername", user);
			session.commit();
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			MyBatisUtil.closeSession(session);
		}
		return user;
	}

	@Override
	public User loginByEmail(User user) {
		SqlSession session = null;
		
		try {
			session = MyBatisUtil.createSession();
			user = (User)session.selectOne(User.class.getName()+".loginByEmail", user);
			
			session.commit();
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			MyBatisUtil.closeSession(session);
		}
		return user;
	}
	@Override
	public boolean updateUser(User user) {
		SqlSession session = null;
		boolean isSuccess = false;
		try {
			session = MyBatisUtil.createSession();
			session.update(User.class.getName()+".updateUser", user);
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
	public boolean check_login(User user) {
		SqlSession session = null;
		boolean flag = false;
		try {
			session = MyBatisUtil.createSession();
			
			user = (User)session.selectOne(User.class.getName()+".check_login", user);
			session.commit();
			
			if(user!=null){
				flag = true;
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			MyBatisUtil.closeSession(session);
		}
		return flag;
		
		
	}

	
	


	

}
