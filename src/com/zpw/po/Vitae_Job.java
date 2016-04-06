package com.zpw.po;

import java.util.Date;

public class Vitae_Job extends Vitae{
	private int id;
	private int vj_id;
	private String username;
	private String ep_username;
	private int job_id;
	private String job_name;
	private String name;
	private Date time;
	private Date vj_time;
	private int status;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getVj_id() {
		return vj_id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public void setVj_id(int vj_id) {
		this.vj_id = vj_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEp_username() {
		return ep_username;
	}
	public void setEp_username(String ep_username) {
		this.ep_username = ep_username;
	}
	public int getJob_id() {
		return job_id;
	}
	public void setJob_id(int job_id) {
		this.job_id = job_id;
	}
	public String getJob_name() {
		return job_name;
	}
	public void setJob_name(String job_name) {
		this.job_name = job_name;
	}
	
	public Date getVj_time() {
		return vj_time;
	}
	public void setVj_time(Date vj_time) {
		this.vj_time = vj_time;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	
	
	
}
