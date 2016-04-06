package com.zpw.service;

import java.util.List;

import com.zpw.dao.DAOFactory;
import com.zpw.dao.IEnterpriseDao;
import com.zpw.po.Enterprise;

public class EnterpriseService {
	public static boolean updateEnterprise(Enterprise enterprise){
		IEnterpriseDao e = DAOFactory.getEnterpriseDao();
		return e.updatEnterprise(enterprise);
	}
	public static Enterprise getEnterpriseByName(String username){
		IEnterpriseDao e = DAOFactory.getEnterpriseDao();
		return e.qByUsername(username);
	}
	public static Enterprise getEnterpriseById(int id){
		IEnterpriseDao e = DAOFactory.getEnterpriseDao();
		return e.qById(id);
	}
	public static List<Enterprise> getAllEnterprise(){
		IEnterpriseDao e = DAOFactory.getEnterpriseDao();
		return e.getAllEnterprise();
	}
}
