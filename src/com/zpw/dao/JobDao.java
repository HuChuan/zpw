package com.zpw.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import com.zpw.po.Job;
import com.zpw.po.JobCustom;
import com.zpw.util.MyBatisUtil;

public class JobDao implements IJobDao{

	@Override
	public boolean insertJob(Job job) {
		SqlSession session = null;
		boolean isSuccess = false;
		try {
			session = MyBatisUtil.createSession();
			session.insert(Job.class.getName()+".insertJob", job);
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
	public String qEp_name(String username) {
		SqlSession session = null;
		String ep_name = null;
		try {
			session = MyBatisUtil.createSession();
			ep_name = session.selectOne(Job.class.getName()+".qEp_name", username);
			session.commit();
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			MyBatisUtil.closeSession(session);
		}
		return ep_name;
	}

	@Override
	public List<Job> qByUsernameList(String username) {
		SqlSession session = null;
		List<Job> list = null;
		try {
			session = MyBatisUtil.createSession();
			list = session.selectList(Job.class.getName()+".qByUsernameList", username);
			session.commit();
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			MyBatisUtil.closeSession(session);
		}
		return list;
	}

	@Override
	public Job qById(int id) {
		SqlSession session = null;
		Job job = null;
		try {
			session = MyBatisUtil.createSession();
			job = session.selectOne(Job.class.getName()+".qById", id);
			session.commit();
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			MyBatisUtil.closeSession(session);
		}
		return job;
	}

	@Override
	public boolean updateJob(Job job) {
		SqlSession session = null;
		boolean isSuccess = false;
		try {
			session = MyBatisUtil.createSession();
			session.update(Job.class.getName()+".updateJob", job);
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
	public boolean deleteJob(int id) {
		SqlSession session = null;
		boolean isSuccess = false;
		try{
			session = MyBatisUtil.createSession();
			session.delete(Job.class.getName()+"deleteJob", id);
			session.commit();
			isSuccess = true;
		}catch(Exception e){
			e.printStackTrace();
			session.rollback();
		}finally{
			MyBatisUtil.closeSession(session);
		}
		return isSuccess;
	}

	@Override
	public Map qByKwList(JobCustom jc) {
		SqlSession session = null;
		List<JobCustom> list = null;
		Map map = new HashMap();
		int count;
		try {
			session = MyBatisUtil.createSession();
			list = session.selectList(Job.class.getName()+".qByKwList", jc);
			count = session.selectOne(Job.class.getName()+".qAllCount");
			session.commit();
			map.put("list", list);
			map.put("allpage", 1+(count-1)/jc.getNum());
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			MyBatisUtil.closeSession(session);
		}
		return map;
	}
	

}
