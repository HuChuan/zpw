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
	public Map add_vitae(Vitae vitae,Model model){
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
	public List load_receive_vitae(String username){
		List list = null;
		list = VitaeService.findVitaeList(username);
		return list;
	}
	
	
	
	@RequestMapping("update_vitae")
	@ResponseBody
	public Model update_vitae(Vitae vitae,Model model){
		boolean success = VitaeService.updateVitae(vitae);
		
		return model.addAttribute("success", success);
		
	}
	
	@RequestMapping("load_all_vitae")
	@ResponseBody
	public List load_all_vitae(VitaeCustom vc){
		List list = null;
		list = VitaeService.findVitaeByKw(vc);
		return list;
	}
	
}
