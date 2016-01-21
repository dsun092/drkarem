var submitEmail = function(){
	var firebase = new Firebase('https://drkazem.firebaseio.com')
	console.log("hello");
	var values = {};

	$.each($('#form1').serializeArray(), function(i, field){
		values[field.name] = field.value;
	})
	values.subject = "Appointment for " + values.fullname;
	var emailRef = firebase.child("emails");
	emailRef.push().set(values, function(error){
		if(error){
			alert("Email could not be sent");
		}else{
			alert("Thank you for contacting us. We will reply shortly");
		}
	})
}