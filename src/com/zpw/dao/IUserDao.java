package com.zpw.dao;

import com.zpw.po.User;

public interface IUserDao {
	public boolean register(User user);
	public User qByUsername(String username);
	public User qByEmail(String email);
}
