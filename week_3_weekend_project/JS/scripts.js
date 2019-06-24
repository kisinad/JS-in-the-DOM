
//Styles the H1
var h1 = document.querySelector("h1");
h1.style.color = "#900C3F";
h1.style.textAlign="center";
var x = 0;
var array = Array();

// Function stores variable on clicking save
function contact_function() {
	fname = document.querySelector("#fname").value;
	//alert(fname);
	sname = document.querySelector("#sname").value;
	tel = document.querySelector("#tel").value;
	email = document.querySelector("#email").value;
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
	if (fname.length=="" || sname.length=="" || tel.length==""|| email.length==""||address=="") {
    	alert("Name field can not be empty!");  
    	Submitted = "false";
	}
	else
	array[0] =fname;
	array[1]=sname;
	array[2]=email;
	array[3]=address;

	alert("Saved!");
	//alert(array[0]);
	

}
//Function to search through saved contacts
function search_function(){

 for (var y=0; y<array.length; y++){
 	var e=array[y];
 	
 //  contactFields.appendChild(div);
 }
 // contactFields.style.display = "block";
 //  var div = document.createElement("div");
 //  div.innerHTML = fname.value;
 document.getElementById("search").innerHTML = e;
}

