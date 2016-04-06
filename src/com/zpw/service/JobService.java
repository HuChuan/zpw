package com.zpw.service;

import java.sql.Date;
import java.util.List;
import java.util.Map;

import com.zpw.dao.DAOFactory;
import com.zpw.dao.JobDao;
import com.zpw.po.Job;
import com.zpw.po.JobCustom;
import com.zpw.po.Vitae_Job;

public class JobService {

	public static boolean addJob(Job job) {
		JobDao j = DAOFactory.getJobDao();
		if (job.getUsername() != null && !job.getUsername().equals("")) {
			String ep_name = j.qEp_name(job.getUsername());
			job.setEp_name(ep_name);
		}
		Date datatime = new Date(System.currentTimeMillis());
		job.setPub_time(datatime);
		boolean flag = j.insertJob(job);

		return flag;

	}

	public static List<Job> findJobList(String username) {
		JobDao j = DAOFactory.getJobDao();
		List<Job> list = j.qByUsernameList(username);
		return list;
	}

	public static Job findJob(int id) {
		JobDao j = DAOFactory.getJobDao();
		Job job = j.qById(id);
		return job;
	}
	
	public static boolean updateJob(Job job){
		JobDao j = DAOFactory.getJobDao();
		boolean flag = j.updateJob(job);
		return flag;
	}
	
	public static boolean deleteJob(int id){
		JobDao j = DAOFactory.getJobDao();
		boolean flag = j.deleteJob(id);
		return flag;
	}
	
	public static Map findJobByKw(JobCustom jc){
		jc.setNum(10);
		if(jc.getKw() != null && jc.getKw().equals("")){
			jc.setKw(null);
		}
		if(jc.getCity() != null && jc.getCity().equals("全国")){
			jc.setCity(null);
		}
		if(jc.getEdu() != null && jc.getEdu().equals("不限")){
			jc.setEdu(null);
		}
		if(jc.getMoney() != null && jc.getMoney().equals("不限")){
			jc.setMoney(null);
		}
		JobDao j = DAOFactory.getJobDao();
		Map map = j.qByKwList(jc);
		return map;
	}

	public static JobCustom ShowJob(int id) {
		JobDao j = DAOFactory.getJobDao();
		JobCustom jobCustom = j.qCById(id);
		return jobCustom;
	}
	
	public static boolean checkJob(Vitae_Job vj){
		JobDao j = DAOFactory.getJobDao();
		boolean flag = j.qByIdAndUsername(vj);
		return flag;
	}
	
	public static List<Vitae_Job> findVJList(String username) {
		JobDao j = DAOFactory.getJobDao();
		List<Vitae_Job> list = j.qVJByUsername(username);
		return list;
	}
	
	public static void readED(Vitae_Job vj) {
		JobDao j = DAOFactory.getJobDao();
		j.updateStatus(vj);
	}
	
	public static List<JobCustom> findHotJob() {
		JobDao j = DAOFactory.getJobDao();
		List<JobCustom> list = j.qJ_v_vj();
		return list;
	}
}
