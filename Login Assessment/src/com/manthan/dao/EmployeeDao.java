package com.manthan.dao;

import com.manthan.beans.EmployeeBeans;

public interface EmployeeDao {
	
	public EmployeeBeans authenticateEmployee(int empId,String empPassword);

}
