package com.zpw.po;

public class JobCustom extends Job{
	
	private String kw;
	private int page;
	private int num;
	
	private int ep_id;
	private String ep_name;
	private String ep_img;
	
	
	public String getEp_name() {
		return ep_name;
	}
	public void setEp_name(String ep_name) {
		this.ep_name = ep_name;
	}
	public String getKw() {
		return kw;
	}
	public void setKw(String kw) {
		this.kw = kw;
	}
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public int getEp_id() {
		return ep_id;
	}
	public void setEp_id(int ep_id) {
		this.ep_id = ep_id;
	}
	public String getEp_img() {
		return ep_img;
	}
	public void setEp_img(String ep_img) {
		this.ep_img = ep_img;
	}
	
	
	
}
