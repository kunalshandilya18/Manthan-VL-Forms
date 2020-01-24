<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<% String msg=(String)request.getAttribute("invalidMessage"); %>
<% String msg2=(String)request.getAttribute("message"); %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Employee Login</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<h2>Employee Login Form</h2>

<form action="./loginServlet" method="get">
  <div class="form-group">
    <label for="exampleInputEmail1">Employee ID</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="empId" required="">
    <small id="emailHelp" class="form-text text-muted">We'll never share your ID with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="empPassword" required="">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">remember me</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<p style="color: red"><%if(msg!=null) { %>
<%= msg %>
<% } %></p>

<p style="color: green"><% if(msg2!=null) { %>
<%= msg2 %>
<% } %></p>
</body>
</html>