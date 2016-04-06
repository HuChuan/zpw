package com.zpw.controller;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CarouselController {
	@RequestMapping("load_carousel")
	@ResponseBody
	public List load_carousel(){
		List list = new ArrayList();
		Map map1 = new HashMap();
		Map map2 = new HashMap();
		Map map3 = new HashMap();
		map1.put("url","http://jobs.wanmei.com");
		map2.put("url","http://www.bluemp.cn/School2.html");
		map3.put("url","http://www.mgtv.com/");
		map1.put("img","images/source/jobs.wanmei.com.png");
		map2.put("img","images/source/www.bluemp.cnSchool2.htmlRIO0T1P.png");
		map3.put("img","images/source/aaa.png");
		list.add(map1);
		list.add(map2);
		list.add(map3);
		return list;
	}
	
}
