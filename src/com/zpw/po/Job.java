package com.zpw.po;

import java.util.Date;

public class Job {
	private int id;
	private String username;
	private String ep_name;
	private String name;
	private String city;
	private String edu;
	private String experience;
	private String money;
	private String intro;
	public String getIntro() {
		return intro;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}
	private Date pub_time;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEp_name() {
		return ep_name;
	}
	public void setEp_name(String ep_name) {
		this.ep_name = ep_name;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getEdu() {
		return edu;
	}
	public void setEdu(String edu) {
		this.edu = edu;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public String getMoney() {
		return money;
	}
	public void setMoney(String money) {
		this.money = money;
	}
	public Date getPub_time() {
		return pub_time;
	}
	public void setPub_time(Date pub_time) {
		this.pub_time = pub_time;
	}
	
}
