//Start Function to validate registration form
function regValidate(){

	//Getting the inputs by ID
	var firstName=document.getElementById("firstname").value;
	var middleName=document.getElementById("middlename").value;
	var lastName=document.getElementById("lastname").value;
	var email=document.getElementById("email").value;
	var mobNo=document.getElementById("mobileno").value;
	var dateOfBirth=document.getElementById("dob").value;
	var country=document.getElementById("country").value;
	var state=document.getElementById("state").value;
	var city=document.getElementById("city").value;
	var houseNo=document.getElementById("houseno").value;
	var street=document.getElementById("street").value;
	var zip=document.getElementById("zip").value;
	var password=document.getElementById("password").value;
	var confirmPassword=document.getElementById("confirmpassword").value;


//Setting Regular Expression for first name
var fNameRegex=/^[a-zA-Z.]{2,30}$/;
var isError=false;
if(fNameRegex.test(firstName)){
	document.getElementById("fNameerror").innerHTML="";
	isError=true;
}
else{
	document.getElementById("fNameerror").innerHTML="**Invalid First Name";
	isError= false;
}


//Setting Regular Expression for middle name
var mNameRegex=/^[a-zA-Z.]{2,30}$/;
if((mNameRegex.test(middleName)) || (middleName.trim()=="")){
	document.getElementById("mNameerror").innerHTML="";
	isError= true;
}
else{
	document.getElementById("mNameerror").innerHTML="**Invalid Middle Name";
	isError= false;
}


//Setting Regular Expression for last name
var lNameRegex=/^[a-zA-Z.]{2,30}$/;
if(lNameRegex.test(lastName)){
	document.getElementById("lNameerror").innerHTML="";
	isError= true;
}
else{
	document.getElementById("lNameerror").innerHTML="**Invalid Last Name";
	isError= false;
}



//Setting Regular Expression for email
var emailRegex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
if(emailRegex.test(email)){
	document.getElementById("emailError").innerHTML="";
	isError= true;
}
else{
	document.getElementById("emailError").innerHTML="**Invalid Email ID";
	isError= false;
}



//Setting Regular Expression for mobile
var mobileRegex= /^[6-9][0-9]{9}$/;
if(mobileRegex.test(mobNo)){
	document.getElementById("moberror").innerHTML="";
	isError= true;
}
else{
	document.getElementById("moberror").innerHTML="**Invalid Mobile no";
	isError= false;
}



//Setting Regular Expression for ZIP
var zipRegex= /^(\d{4})$/;
if(zipRegex.test(zip)){
	document.getElementById("ziperror").innerHTML="";
	isError= true;
}
else{
	document.getElementById("ziperror").innerHTML="**Invalid Pin Code";
	isError= false;
}



//Setting Regular Expression for password
var passwordRegex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8}$/;
if(passwordRegex.test(password)){
	document.getElementById("passworderror").innerHTML="";
	if (password==confirmPassword) {
	document.getElementById("confpassworderror").innerHTML="";
	isError=true;
}
else{
	document.getElementById("confpassworderror").innerHTML="Password doesnt match";
	 isError=false;
}
}
else{
	document.getElementById("passworderror").innerHTML="**Invalid Password";
	isError= false;
}


return isError;

}//End of Function regValidate

function years(){

	var today=new Date();
	var date=today.setFullYear(today.getFullYear()-15);
	var newDate=new Date(date);
	console.log(newDate)
	var mnth=("0"+(newDate.getMonth()+1)).slice(-2),
	day=("0"+(newDate.getDate()+1)).slice(-2);
	var finalDate=[newDate.getFullYear(),mnth,day].join("-");
	document.getElementById('dob').setAttribute("max",finalDate);

}