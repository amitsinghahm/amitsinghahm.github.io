var config = {
    apiKey: "AIzaSyBYgsJx-qYTn0lvimMAgK66cOG5aIubDl8",
    authDomain: "cricket-registration.firebaseapp.com",
    databaseURL: "https://cricket-registration.firebaseio.com",
    projectId: "cricket-registration",
    storageBucket: "",
    messagingSenderId: "165636800564"
};
firebase.initializeApp(config);
  
var messageRef=firebase.database().ref('Player');

document.getElementById('cricket form').addEventListener('submit',submitClick);

function submitClick(e){
	
    e.preventDefault();
	
	//get Values
	var name=getInputvalue('name');
	var branch=getInputvalue('branch');
	var year=getInputvalue('year');
	//console.log(name);
	
	//window.alert("hello");

	saveData(name,branch,year);
	//window.alert("Your Cricket Registration Form is Submitted.");
	
	document.querySelector('.alert').style.display='block';
	
	setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
  
	document.getElementById('cricket form').reset();
}


function getInputvalue(id){
	return document.getElementById(id).value;
}

//save Data
function saveData(name,branch,year){
	var newmessageRef=messageRef.push();
	newmessageRef.set({
		Name:name,
		p_Branch:branch,
		p_Year:year
	});
}