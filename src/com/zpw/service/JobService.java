package com.zpw.service;

import java.sql.Date;
import java.util.List;

import com.zpw.dao.DAOFactory;
import com.zpw.dao.JobDao;
import com.zpw.po.Job;

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
}