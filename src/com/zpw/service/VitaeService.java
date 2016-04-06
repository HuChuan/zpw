package com.zpw.service;

import java.sql.Date;
import java.util.List;
import java.util.Map;

import com.zpw.dao.DAOFactory;
import com.zpw.dao.IVitaeDao;
import com.zpw.po.Vitae;
import com.zpw.po.VitaeCustom;
import com.zpw.po.Vitae_Job;

public class VitaeService {
	
	public static boolean isExistByUsername(String username){
		IVitaeDao v = DAOFactory.getVitaeDao();
		Vitae vitae = v.qByUsername(username);
		if(vitae == null){
			return false;
		}
		return true;
	}
	
	
	public static boolean addAitae(Vitae vitae){
		IVitaeDao v = DAOFactory.getVitaeDao();
		boolean flag = v.insertVitae(vitae);
		
		return flag;
		
	}
	
	
	public static List<Vitae_Job> findVitaeList(String username){
		IVitaeDao v = DAOFactory.getVitaeDao();
		List<Vitae_Job> list = v.qByUsernameList(username);
		
		return list;
		
	}
	
	public static boolean updateVitae(Vitae vitae){
		
		IVitaeDao v = DAOFactory.getVitaeDao();
		boolean flag = v.updateVitae(vitae);
		
		return flag;
		
	}


	public static Vitae findVitae(String username) {
		
		IVitaeDao v = DAOFactory.getVitaeDao();
		Vitae vitae = v.qByUsername(username);
		
		return vitae;
	}
	
	
	public static Map findVitaeByKw(VitaeCustom vc){
		vc.setNum(10);
		if(vc.getKw() != null && vc.getKw().equals("")){
			vc.setKw(null);
		}
		if(vc.getCity() != null && vc.getCity().equals("全国")){
			vc.setCity(null);
		}
		if(vc.getEdu() != null && vc.getEdu().equals("不限")){
			vc.setEdu(null);
		}
		IVitaeDao v = DAOFactory.getVitaeDao();
		Map map = v.qByKwList(vc);
		return map;
	}
	
	public static boolean addAitaeJob(Vitae_Job vj){
		IVitaeDao v = DAOFactory.getVitaeDao();
		Date datatime = new Date(System.currentTimeMillis());
		vj.setVj_time(datatime);
		boolean flag = v.insertVitaeJob(vj);
		
		return flag;
		
	}
	
}
