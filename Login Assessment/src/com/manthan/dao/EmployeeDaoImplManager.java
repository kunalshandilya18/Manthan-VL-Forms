package com.manthan.dao;

public class EmployeeDaoImplManager {

	private EmployeeDaoImplManager() { //restricting others to make object......

	}
	public static EmployeeDao getDaoManager() {
		return new EmployeeDaoImpl();
	}
	
}
