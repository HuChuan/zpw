package com.zpw.dao;

import java.util.List;
import java.util.Map;

import com.zpw.po.Job;
import com.zpw.po.JobCustom;
import com.zpw.po.Vitae_Job;


public interface IJobDao {
	
	public boolean insertJob(Job job);
	
	public String qEp_name(String username);
	
	public List<Job> qByUsernameList(String username);
	
	public Job qById (int id);
	
	public boolean updateJob(Job job);
	
	public boolean deleteJob(int id);
	
	public Map qByKwList(JobCustom jc);
	
	public JobCustom qCById(int id);
	
	public boolean qByIdAndUsername(Vitae_Job vj);
	
	public List<Vitae_Job> qVJByUsername(String username);
	
	public void updateStatus(Vitae_Job vj);
	
	public List<JobCustom> qJ_v_U_vj();
}
