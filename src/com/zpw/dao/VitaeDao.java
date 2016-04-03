package com.zpw.dao;

import java.sql.Date;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.zpw.po.User;
import com.zpw.po.Vitae;
import com.zpw.util.MyBatisUtil;

public class VitaeDao implements IVitaeDao{

	@Override
	public Vitae qByUsername(String username) {
		SqlSession session = null;
		Vitae vitae = null;
		try {
			session = MyBatisUtil.createSession();
			vitae = (Vitae)session.selectOne(Vitae.class.getName()+".qByUsername", username);
			session.commit();
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			MyBatisUtil.closeSession(session);
		}
		return vitae;
	}

	@Override
	public boolean insertVitae(Vitae vitae) {
		SqlSession session = null;
		boolean isSuccess = false;
		try {
			session = MyBatisUtil.createSession();
			session.insert(Vitae.class.getName()+".insertVitae", vitae);
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
	public boolean updateVitae(Vitae vitae) {
		SqlSession session = null;
		boolean isSuccess = false;
		try {
			session = MyBatisUtil.createSession();
			session.insert(Vitae.class.getName()+".updateVitae", vitae);
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
	public List<Vitae> qByUsernameList(String username) {
		SqlSession session = null;
		List<Vitae> list = null;
		try {
			session = MyBatisUtil.createSession();
			list = session.selectList(Vitae.class.getName()+".qByUsernameList", username);
			session.commit();
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			MyBatisUtil.closeSession(session);
		}
		return list;
	}

}
