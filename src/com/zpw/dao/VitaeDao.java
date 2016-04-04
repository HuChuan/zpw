package com.zpw.dao;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import com.zpw.po.Job;
import com.zpw.po.User;
import com.zpw.po.Vitae;
import com.zpw.po.VitaeCustom;
import com.zpw.po.Vitae_Job;
import com.zpw.service.UserService;
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
			session.update(Vitae.class.getName()+".updateVitae", vitae);
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
	public List<Vitae_Job> qByUsernameList(String username) {
		SqlSession session = null;
		List<Vitae_Job> list = null;
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

	@Override
	public Map qByKwList(VitaeCustom vc) {
		SqlSession session = null;
		List<Vitae> list = null;
		Map map = new HashMap();
		int count;
		try {
			session = MyBatisUtil.createSession();
			list = session.selectList(Vitae.class.getName()+".qByKwList", vc);
			count = session.selectOne(Vitae.class.getName()+".qAllCount");
			session.commit();
			map.put("list", list);
			map.put("allpage", 1+(count-1)/vc.getNum());
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			MyBatisUtil.closeSession(session);
		}
		return map;
	}

	@Override
	public boolean insertVitaeJob(Vitae_Job vj) {
		SqlSession session = null;
		boolean isSuccess = false;
		Job job = null;
		try {
			session = MyBatisUtil.createSession();
			job = session.selectOne(Job.class.getName()+".qById", vj);
			vj.setEp_username(job.getUsername());
			vj.setJob_name(job.getName());
			session.insert(Vitae.class.getName()+".insertVitaeJob", vj);
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
