function  validateForm(){
		var x=document.forms["myForm"]["email"].value;
		if(x==""){alert("Enter valid emailid");
		return false;}
		 var x = document.forms["myForm"]["email"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
         if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;}

		var x=document.forms["myForm"]["psw"].value;
		if(x==""){alert("Enter your password");
		return false;}

		var x=document.forms["myForm"]["psw-repeat"].value;
		if(x==""){alert("confirm your password");
		return false;}
	}