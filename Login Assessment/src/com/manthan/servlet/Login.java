package com.manthan.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.manthan.beans.EmployeeBeans;
import com.manthan.dao.EmployeeDao;
import com.manthan.dao.EmployeeDaoImpl;
import com.manthan.dao.EmployeeDaoImplManager;

@WebServlet("/loginServlet")
public class Login extends HttpServlet {
	
	EmployeeDao dao=new EmployeeDaoImpl();
	@Override
		protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		int empId=Integer.parseInt(req.getParameter("empId"));
		String empPassword=(req.getParameter("empPassword"));
		
		EmployeeBeans beans=dao.authenticateEmployee(empId, empPassword);
		if(beans!=null) {
			HttpSession session=req.getSession(true);
			session.setAttribute("beans", beans);
			req.setAttribute("message", "Login Successfully");
			req.getRequestDispatcher("/loginForm").forward(req, resp);
		}else {
			req.setAttribute("invalidMessage", "Invalid id or password");
			req.getRequestDispatcher("/loginForm").forward(req, resp);
		}
	}//end of do post
}//end of class