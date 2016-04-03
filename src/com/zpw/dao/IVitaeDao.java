package com.zpw.dao;

import java.util.List;
import java.util.Map;

import com.zpw.po.Vitae;
import com.zpw.po.VitaeCustom;
import com.zpw.po.Vitae_Job;

public interface IVitaeDao {
	
	public Vitae qByUsername(String username);
	
	public boolean insertVitae(Vitae vitae);
	
	public boolean updateVitae(Vitae vitae);
	
	public List<Vitae_Job> qByUsernameList(String username);
	
	public Map qByKwList(VitaeCustom vc);
	
}
