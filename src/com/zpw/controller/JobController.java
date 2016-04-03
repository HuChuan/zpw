package com.zpw.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zpw.po.Job;
import com.zpw.service.JobService;

public class JobController {
	
	@RequestMapping("add_job_list")
	@ResponseBody
	public Map add_vitae(Job job){
		Map map = new HashMap();
		boolean success = JobService.addJob(job);
		map.put("success", success);
		
		return map;
	}
	
	@RequestMapping("load_job_list")
	@ResponseBody
	public List<Job> load_job_list(String username){
		List<Job> list = null;
		list = JobService.findJobList(username);
		return list;
	}
	
	@RequestMapping("load_job_info")
	@ResponseBody
	public Job load_job_info(int id){
		Job job = null;
		job = JobService.findJob(id);
		return job;
	}
}
