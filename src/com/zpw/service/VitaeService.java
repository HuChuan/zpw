package com.zpw.service;

import java.util.List;

import com.zpw.dao.DAOFactory;
import com.zpw.dao.IVitaeDao;
import com.zpw.po.Vitae;

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
	
	
	public static List<Vitae> findVitaeList(String username){
		IVitaeDao v = DAOFactory.getVitaeDao();
		List<Vitae> list = v.qByUsernameList(username);
		
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
	
}
