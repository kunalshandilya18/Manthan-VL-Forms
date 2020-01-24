package com.manthan.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.manthan.beans.EmployeeBeans;

public class EmployeeDaoImpl implements EmployeeDao {
	
	@Override
	public EmployeeBeans authenticateEmployee(int empId, String empPassword) {
		Connection con=null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		EmployeeBeans employeeInfoBeans=null;

		try {
			//LOAD THE DRIVER
			Class.forName("com.mysql.jdbc.Driver");

			//GET CONNECTION VIA DRIVER
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/employee","root","root");

			//ISSUE SQL QUERY 
			String query = " select * from employee_info where empId=? and password=?";
			pstmt = con.prepareStatement(query);
			pstmt.setInt(1, empId);
			pstmt.setString(2, empPassword);

			rs = pstmt.executeQuery();

			if(rs.next()) {
				employeeInfoBeans=new EmployeeBeans(); //creating object of EmployeeInfoBeans
				employeeInfoBeans.setEmpId(rs.getInt("emp_id"));
				employeeInfoBeans.setEmpName(rs.getString("emp_name"));
				employeeInfoBeans.setEmpAge(rs.getInt("age"));
				employeeInfoBeans.setEmpDesignation(rs.getString("designation"));
				employeeInfoBeans.setEmpMobile(rs.getLong("mobile"));
				employeeInfoBeans.setEmpSalary(rs.getDouble("salary"));
				employeeInfoBeans.setEmpPassword(rs.getString("empPassword"));
			}
		} catch (Exception e) {
		}
		finally {
			//CLOSE JDBC OBJECTS
			if (rs != null) {
				try {
					rs.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if (pstmt != null) {
				try {
					pstmt.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}//end of finally
		return employeeInfoBeans;
	}//end of authenticateEmployee


}
