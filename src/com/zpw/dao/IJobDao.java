package com.zpw.dao;

import java.util.List;

import com.zpw.po.Job;


public interface IJobDao {
	
	public boolean insertJob(Job job);
	
	public String qEp_name(String username);
	
	public List<Job> qByUsernameList(String username);
	
	public Job qById (int id);
	
	
}
