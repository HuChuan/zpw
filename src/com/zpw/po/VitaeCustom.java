package com.zpw.po;

public class VitaeCustom extends Vitae{
	
	//简历分页扩展	
	private String kw;
	private int page;
	private int num;
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
	
	
}
