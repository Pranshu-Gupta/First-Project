var database=[
	{
	username:"Pranshu",
	password:"123456"
	},
	{
	username: "Okay",
	password:"123"
	}
];
var newsFeed=[
	{
		username: "Lmao",
		timeline:"Hey, This is so funny,lmao"
	},
	{
		username:"Lol",
		timeline:"You what that means, lol"
	}
];

function checkUsername(username, password){
	for(var i=0;i<database.length;i++)
	{
		if(database[i].username===username 
			&& database[i].password===password)
		{
			return true;
		}
	}
	return false;
}
function Signup(username,password)
{
	if(checkUsername(username, password)){
		console.log(newsFeed);
	}
	
	else{
		alert("Enter password/username again!");
	}
}

var usernameprompt = prompt("Enter the username: ");
var passwordprompt = prompt("Enter the password: ");
Signup(usernameprompt,passwordprompt); 