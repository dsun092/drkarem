
var submitEmail = function(){
	console.log(document.getElementById('patient_name'));
	var firebase = new Firebase('https://drkazem.firebaseio.com')
	var values = {};

	$.each($('#form1').serializeArray(), function(i, field){
		values[field.name] = field.value;
		if(field.name === 'fullname' && !field.value)
		{
			alert("Please fill out your full name");
		}
		if(field.name === 'phone' && !field.value){
			alert('Please fill out your phone number');
		}
		console.log(field.name);
		console.log(field.value);
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