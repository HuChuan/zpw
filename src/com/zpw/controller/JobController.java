package com.zpw.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zpw.po.Job;
import com.zpw.po.JobCustom;
import com.zpw.po.Vitae_Job;
import com.zpw.service.JobService;

@Controller
@JsonIgnoreProperties(value={"hibernateLazyInitializer"})
public class JobController {
	
	@RequestMapping("add_job_info")
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
	
	@RequestMapping("update_job_info")
	@ResponseBody
	public Map update_job_info(Job job){
		Map map = new HashMap();
		boolean success = JobService.updateJob(job);
		map.put("success", success);
		
		return map;
	}
	
	@RequestMapping("delete_job_info")
	@ResponseBody
	public Model delete_job_info(int id,Model model){
		boolean success = JobService.deleteJob(id);
		return model.addAttribute("success", success);
	}
	
	@RequestMapping("load_all_job")
	@ResponseBody
	public Map load_all_job(JobCustom jc){
		Map map = null;
		map = JobService.findJobByKw(jc);
		return map;
	}
	
	@RequestMapping("show_job_info")
	@ResponseBody
	public JobCustom show_job_info(int id){
		JobCustom jobCustom = null;
		jobCustom = JobService.ShowJob(id);
		return jobCustom;
	}
	
	@RequestMapping("check_apply_job")
	@ResponseBody
	public Map check_apply_job(Vitae_Job vj){
		Map map = new HashMap();
		boolean success = JobService.checkJob(vj);
		map.put("success", success);
		
		return map;
	}
	
	@RequestMapping("load_cv_job")
	@ResponseBody
	public List<Vitae_Job> load_cv_job(String username){
		List<Vitae_Job> list = null;
		list = JobService.findVJList(username);
		return list;
	}
	
	@RequestMapping("update_cv_job_status")
	@ResponseBody
	public void update_cv_job_status(Vitae_Job vj){
		JobService.readED(vj);
	}
}
