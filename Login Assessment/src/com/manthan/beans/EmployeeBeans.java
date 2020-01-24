package com.manthan.beans;

public class EmployeeBeans {
	private int empId;
	private String empName;
	private int empAge;
	private double empSalary;
	private String empDesignation;
	private Long empMobile;
	private String empPassword;

	//getter and setter
	public String getEmpPassword() {
		return empPassword;
	}
	public void setEmpPassword(String empPassword) {
		this.empPassword = empPassword;
	}
	
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public int getEmpAge() {
		return empAge;
	}
	public void setEmpAge(int empAge) {
		this.empAge = empAge;
	}
	public double getEmpSalary() {
		return empSalary;
	}
	public void setEmpSalary(double empSalary) {
		this.empSalary = empSalary;
	}
	public String getEmpDesignation() {
		return empDesignation;
	}
	public void setEmpDesignation(String empDesignation) {
		this.empDesignation = empDesignation;
	}
	public Long getEmpMobile() {
		return empMobile;
	}
	public void setEmpMobile(Long empMobile) {
		this.empMobile = empMobile;
	}

}