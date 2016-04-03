package com.zpw.dao;

public class DAOFactory {
	public static IUserDao getUserDao(){
		return new UserDao();
	}
	
	public static IEnterpriseDao getEnterpriseDao(){
		return new EnterpriseDao();
	}
	
	public static IVitaeDao getVitaeDao(){
		return new VitaeDao();
	}
	
	public static JobDao getJobDao(){
		return new JobDao();
	}
}
