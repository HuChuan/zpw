package com.zpw.dao;

import java.util.List;

import com.zpw.po.Enterprise;

public interface IEnterpriseDao {
	public boolean addEnterprise(Enterprise enterprise);
	public boolean updatEnterprise(Enterprise enterprise);
	public Enterprise qByUsername(String username);
	public Enterprise qById(int id);
	public List<Enterprise> getAllEnterprise();
	public boolean delByUsername(String username);
}
