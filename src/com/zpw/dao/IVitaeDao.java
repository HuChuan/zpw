package com.zpw.dao;

import java.util.List;

import com.zpw.po.Vitae;

public interface IVitaeDao {
	
	public Vitae qByUsername(String username);
	
	public boolean insertVitae(Vitae vitae);
	
	public boolean updateVitae(Vitae vitae);
	
	public List<Vitae> qByUsernameList(String username);
	
}
