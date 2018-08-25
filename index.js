var button=document.querySelector(".button");
var id=document.getElementById("input");
var ul=document.querySelector("#info2");
var li2=document.getElementById("li");

function AddElementtoList(){
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}
function inputLength(){
	return input.value.length;
}
function onClickPress(){
	if(inputLength()>0)
	{
		AddElementtoList();
	}
}

function onKeyPress(event){
	if(inputLength()>0 && event.keyCode===13){
		AddElementtoList();
	}
}
function toggle(){
	li2.classList.toggle("toggle");
}
button.addEventListener("click",onClickPress);
id.addEventListener("keypress",onKeyPress);
li2.addEventListener("click",toggle);
