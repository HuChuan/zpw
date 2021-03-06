package com.zpw.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zpw.po.Enterprise;
import com.zpw.service.EnterpriseService;

@Controller
public class EnterpriseController {
	@RequestMapping("update_enterprise")
	@ResponseBody
	public Map update_enterprise(Enterprise enterprise){
		Map map = new HashMap();
		map.put("success", EnterpriseService.updateEnterprise(enterprise));
		return map;
	}
	@RequestMapping("load_enterprise")
	@ResponseBody
	public Enterprise load_enterprise(String username){
		return EnterpriseService.getEnterpriseByName(username);
	}
	@RequestMapping("load_enterprise_info")
	@ResponseBody
	public Enterprise load_enterprise_info(int id){
		
		return EnterpriseService.getEnterpriseById(id);
	}
	@RequestMapping("load_hot_ep")
	@ResponseBody
	public List<Enterprise> load_hot_job(){
		return EnterpriseService.getAllEnterprise();
	}
}
