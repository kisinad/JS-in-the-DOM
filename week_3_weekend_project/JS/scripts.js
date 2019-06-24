
//Styles the H1
var h1 = document.querySelector("h1");
h1.style.color = "#900C3F";
h1.style.textAlign="center";

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
	if (fname.length=="" || sname.length=="") {
    	alert("Name field can not be empty!");  
    	Submitted = "false";
	}
	alert("Saved!");
	

}
//Function to search through saved contacts
function search_function(){
	contactFields.style.display = "block";
  var div = document.createElement("div");
  div.innerHTML = fname.value;
  contactFields.appendChild(div);
}

