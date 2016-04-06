package com.zpw.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zpw.po.Vitae;
import com.zpw.po.VitaeCustom;
import com.zpw.po.Vitae_Job;
import com.zpw.service.VitaeService;

@Controller
@JsonIgnoreProperties(value={"hibernateLazyInitializer"})
public class VitaeController {
	
	
	@RequestMapping("check_vitae")
	@ResponseBody
	public Model check_vitae(String username,Model model){
		boolean success = VitaeService.isExistByUsername(username);
		
		return model.addAttribute("success",success);
	}
	
	@RequestMapping("add_vitae")
	@ResponseBody
	public Map add_vitae(Vitae vitae){
		Map map = new HashMap();
		boolean success = VitaeService.addAitae(vitae);
		map.put("success", success);
		
		return map;
		
	}
	
	@RequestMapping("load_vitae")
	@ResponseBody
	public Vitae load_vitae(String username){
		Vitae vitae = VitaeService.findVitae(username);
		
		return vitae;
	}
	
	@RequestMapping("load_receive_vitae")
	@ResponseBody
	public List<Vitae_Job> load_receive_vitae(String username){
		List<Vitae_Job> list = null;
		list = VitaeService.findVitaeList(username);
		return list;
	}
	
	
	
	@RequestMapping("update_vitae")
	@ResponseBody
	public Map update_vitae(Vitae vitae){
		Map map = new HashMap();
		boolean success = VitaeService.updateVitae(vitae);
		map.put("success", success);
		return map;
		
	}
	
	@RequestMapping("load_all_vitae")
	@ResponseBody
	public Map load_all_vitae(VitaeCustom vc){
		Map map = null;
		map = VitaeService.findVitaeByKw(vc);
		return map;
	}
	
	@RequestMapping("apply_job")
	@ResponseBody
	public Map apply_job(Vitae_Job vj){
		Map map = new HashMap();
		vj.setJob_id(vj.getId());
		boolean success = VitaeService.addAitaeJob(vj);
		map.put("success", success);
		
		return map;
		
	}
	
}
