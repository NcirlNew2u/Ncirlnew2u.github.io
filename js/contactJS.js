//Creating the validation function which checks email and username. Sends confirmation of message being sent
function validate() {
	var email = document.getElementById("email");
	var name = document.getElementById("name");

	
	if(email.value == "") {
		alert("Email cannot be blank");
		//Return false stops the form submitting and bypassing the alert. Alerts the user then resets the form
		return false;
	}
	if(name.value == "") {
		alert("Name cannot be blank");
		//Return false stops the form submitting and bypassing the alert. Alerts the user then resets the form
		return false;
	}
	
	else {
		alert("Message has been sent");
		return false;
	}
}
