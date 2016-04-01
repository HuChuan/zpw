package com.zpw.dao;

public class DAOFactory {
	public static IUserDao getUserDao(){
		return new UserDao();
	}
	
	public static IVitaeDao getVitaeDao(){
		return new VitaeDao();
	}
}
