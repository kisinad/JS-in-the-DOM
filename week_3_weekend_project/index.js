function Contact (first_name, second_name, phone_number, email)
{
	this.first_name = first_name;
	this.second_name = second_name;
	this.phone_number = phone_number;
	this.email = email;
	this.address=street:{'street', city:'city', country:'country'};

	
};

var denis = new Contact('Denis', 'Kisina', '0777005155', 'kisinad@gmail.com', address:{street:'Namugongo Road', city:'Kampala', country:'Uganda'});
Contact.prototype.fullName = function ()
{
	console.log (this.first_name +', ' +this.second_name+' '+this.phone_number);
};
denis.fullName();

// Function to save contact information
// const p = document.querySelector('p');
// const button = document.querySelector('button');
// const saveContact= () => {
//     const p = document.querySelector('p');

//     p.textContent = "I changed because of an inline event handler.";
//     // document.getElementById("savediv").style.color = "red";
// }
// Function to modify the text content of the paragraph
function saveContact  () {
    alert("Hello World");
}

