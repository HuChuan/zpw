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
	
}
