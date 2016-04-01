package com.zpw.dao;

import com.zpw.po.User;

public interface IUserDao {
	public boolean addUser(User user);
	public User qByUsername(String username);
	public User qByEmail(String email);
	public User loginByUsername(User user);
	public User loginByEmail(User user);
	public boolean updateUser(User User);
}
