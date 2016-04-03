package com.zpw.dao;

import org.apache.ibatis.session.SqlSession;

import com.zpw.po.Enterprise;
import com.zpw.util.MyBatisUtil;

public class EnterpriseDao implements IEnterpriseDao{

	@Override
	public boolean addEnterprise(Enterprise enterprise) {
		
		SqlSession session = null;
		boolean isSuccess = false;
		try {
			session = MyBatisUtil.createSession();
			session.insert(Enterprise.class.getName()+".addEnterprise", enterprise);
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
	public boolean updatEnterprise(Enterprise enterprise) {
		SqlSession session = null;
		boolean isSuccess = false;
		try {
			session = MyBatisUtil.createSession();
			session.update(Enterprise.class.getName()+".updateEnterprise", enterprise);
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
	public Enterprise qByUsername(String username) {
		SqlSession session = null;
		Enterprise enterprise = null;
		try {
			session = MyBatisUtil.createSession();
			enterprise = session.selectOne(Enterprise.class.getName()+".qByUsername", username);
			session.commit();
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			MyBatisUtil.closeSession(session);
		}
		return enterprise;
	}
	
}
