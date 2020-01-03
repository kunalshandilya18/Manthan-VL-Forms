//Function to validate login form
function loginUserValidate(){

	//Geting input by ID
    var username=document.getElementById("username");
    var password=document.getElementById("password");
    var regex=/E00/;
   
   //Condtions for null value
if(username.value.trim()==""){
    alert("Please enterUsername");
    return false
}
else if (password.value.trim()=="") {
	alert("Please Enter Password");
	return false;
}

//Condition for length of password
else if(password.value.trim().length<8){
	alert("Password too short");
	return false;
}
else{
	return true;
}

//Providing regular expression to user name
if(regex.test(username.value)){
	return true;
}
else{
	alert("Invalid username");
}

}//End Of loginUservalidate
