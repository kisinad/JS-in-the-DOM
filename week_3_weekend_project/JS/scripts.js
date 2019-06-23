
var h1 = document.querySelector("h1");
h1.style.color = "#900C3F";
h1.style.textAlign="center";


function contact_function() {
	fname = document.querySelector("#fname").value;
	//alert(fname);
	sname = document.querySelector("#sname").value;
	tel = document.querySelector("#tel").value;
	email = document.querySelector("#email").value.indexOf("@");
	address = document.querySelector("#address").value;
	//Submitted = "true";

	if (fname.length > 10 ) {
    	alert("The First name must have no more than 10 characters");  
    	Submitted = "false";
	}
	if (sname.length >10) {
    	alert("The Second name must have no more than 10 characters");  
    	Submitted = "false";
	}
	if (fname.length=="" || sname.length=="") {
    	alert("Name field can not be empty!");  
    	Submitted = "false";
	}
	// if (@ == -1) {  
	//     alert("The email address you entered is not valid"); 
	//     Submitted = "false";
	// }
	// if (Submitted == "false") {  
	//     return false;
	// }
	 // if (submitOK == "false") {
 	// return false;
 	// }

 	//var denis = new contact_function(fname, sname, tel, email, address);
	contact_function.prototype.fullName = function ()
	{
	log (document.body.appendChild(fname));
	};
	

	alert("Saved!");
	//return true;
	// fname.addEventListener('input', updateValue)
	// var txtOutput = document.getElementById("txtOutput");
 //  	var name = fname.value;
 //  	txtOutput.value = "Hi there, " + name + "!";

}
function search_function(){
	// var fname = document.querySelector("#fname").value;
	//var contactlist = document.getElementById("first_name")
 	//document.getElementById("favoriteElem").value = first_name.text; 
 	// var txtOutput = document.getElementById("txtOutput");
  // 	var name = fname.value;
  // 	txtOutput.value = "Hi there, " + name + "!";
  alert(fname.textContent);
}

// const test1 = () =>{
	
// 	console.log("Works!");
// }


// var button = document.getElementById("button-id").addEventListener("click", Contact.prototype.fullName);

//   var search= document.querySelector("#search");
// 	search.addEventListener("click", myFunction());

// function myFunction() {
//   var x = document.querySelector("#fname").value;
//   // document.getElementById("demo").innerHTML = x;
//   console.log(x);
// };