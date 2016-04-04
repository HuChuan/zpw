package com.zpw.dao;

import java.util.List;

import com.zpw.po.User;

public interface IUserDao {
	public boolean addUser(User user);
	public List<User> getAllUser();
	public User qByUsername(String username);
	public User qByEmail(String email);
	public User loginByUsername(User user);
	public User loginByEmail(User user);
	public boolean updateUser(User User);
	public boolean check_login(User user);
	public boolean delByUsername(String username);
}
