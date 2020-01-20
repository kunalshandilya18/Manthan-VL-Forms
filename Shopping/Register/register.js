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
var isCorrect=false;
if(fNameRegex.test(firstName)){
	document.getElementById("fNameerror").innerHTML="";
	isCorrect=true;
}
else{
	document.getElementById("fNameerror").innerHTML="**Invalid First Name";
	isCorrect= false;
}


//Setting Regular Expression for middle name
var mNameRegex=/^[a-zA-Z.]{2,30}$/;
if((mNameRegex.test(middleName)) || (middleName.trim()=="")){
	document.getElementById("mNameerror").innerHTML="";
	isCorrect= true;
}
else{																																				
	document.getElementById("mNameerror").innerHTML="**Invalid Middle Name";
	isCorrect= false;
}


//Setting Regular Expression for last name
var lNameRegex=/^[a-zA-Z.]{2,30}$/;
if(lNameRegex.test(lastName)){
	document.getElementById("lNameerror").innerHTML="";
	isCorrect= true;
}
else{
	document.getElementById("lNameerror").innerHTML="**Invalid Last Name";
	isCorrect= false;
}



//Setting Regular Expression for email
var emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(emailRegex.test(email)){
	document.getElementById("emailError").innerHTML="";
	isCorrect= true;
}
else{
	document.getElementById("emailError").innerHTML="**Invalid Email ID";
	isCorrect= false;
}



//Setting Regular Expression for mobile
var mobileRegex= /^[6-9][0-9]{9}$/;
if(mobileRegex.test(mobNo)){
	document.getElementById("moberror").innerHTML="";
	isCorrect= true;
}
else{
	document.getElementById("moberror").innerHTML="**Invalid Mobile no";
	isCorrect= false;
}



//Setting Regular Expression for ZIP
var zipRegex=  /^\d{5}$|^\d{5}-\d{4}$/;
if(zipRegex.test(zip)){
	document.getElementById("ziperror").innerHTML="";
	isCorrect= true;
}
else{
	document.getElementById("ziperror").innerHTML="**Invalid Pin Code";
	isCorrect= false;
}



//Setting Regular Expression for password
var passwordRegex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8-25}$/;
if(passwordRegex.test(password)){
	document.getElementById("passworderror").innerHTML="";
	if (password==confirmPassword) {
	document.getElementById("confpassworderror").innerHTML="";
	isCorrect=true;
}
else{
	document.getElementById("confpassworderror").innerHTML="Password doesnt match";
	 isCorrect=false;
}
}
else{
	document.getElementById("passworderror").innerHTML="**Invalid Password";
	isCorrect= false;
}

if (isCorrect==true) {

	alert("Successfully registered , Login to continue");
}
return isCorrect;

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