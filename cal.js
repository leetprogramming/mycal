// for display the input value into the id=sum input area. 

function dis( x ) {
		document.getElementById("sum").value +=x ;
	}


// for evaluate the value of the id=sum input area. and display the value also.

function dis1() {
	
		
		document.getElementById("sum").value= eval(document.getElementById("sum").value);
		
	}	

//for Show and Hide  property in to the web page.	

{	
let count=0;		
function slidUp(){
	
	if(count == 0)
	{
	 let x;
		x=document.getElementById("con");
		x.style.height= "100%";
		document.getElementById("Up").value = "Hide";
	    count = 1;
    }
    else{
          let x;
		  x=document.getElementById("con");
		  x.style.height= 0;
		  document.getElementById("Up").value = "Show";
          count = 0;
    }
}
}
// for apply the input data by the user in to the web page

function apply() { 
	 document.getElementById("page").style.backgroundColor = document.getElementById("backgroundColor").value;
	 for(let n=0; n<10;n++){
	 	document.getElementById(n).style.color = document.getElementById("textColor").value;
       }

	    document.getElementById("add").style.color = document.getElementById("textColor").value;
	    document.getElementById("sub").style.color = document.getElementById("textColor").value;
	    document.getElementById("mul").style.color = document.getElementById("textColor").value;
	    document.getElementById("div").style.color = document.getElementById("textColor").value;
	    document.getElementById("result").style.color = document.getElementById("textColor").value;
	    document.getElementById("reset").style.color = document.getElementById("textColor").value;
        
     
	}

// for RD_Develpment slide horizentaly.
{	
let count=0;		
function right(){
	
	if(count == 0)
	{
	 document.getElementById("style").style.width= "100%";
	 
	 count = 1;
    }
    else{
     document.getElementById("style").style.width=0;	
     
     count = 0;
    }
}
}

function dateG() {
		let x;
		x = new Date();
		document.getElementById("date").innerHTML = x.getDay() + "/" + x.getMonth() + "/" + x.getFullYear();
		document.getElementById("date").innerHTML = x.toLocaleDateString();

	}	
