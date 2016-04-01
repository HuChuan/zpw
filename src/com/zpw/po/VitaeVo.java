package com.zpw.po;

import java.util.List;

public class VitaeVo {
	
	
	private Vitae vitae;
	
	//批量简历信息
	private List<Vitae> list;

	public Vitae getVitae() {
		return vitae;
	}

	public void setVitae(Vitae vitae) {
		this.vitae = vitae;
	}

	public List<Vitae> getList() {
		return list;
	}

	public void setList(List<Vitae> list) {
		this.list = list;
	}
	
}
