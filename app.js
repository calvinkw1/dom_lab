// Your code here


function changeGreet(greeting) {
	greeting = "Hello, Planet Earth!";
}


function listToYellow(listItems) {
	for (var i = 0; i < listItems.length; i++) {
		listItems[i].style.backgroundColor = "yellow";
	    listItems[i].addEventListener('click', addClass);
	}
}

function addClass(event) {
	this.className = "selected";
	document.querySelector("img").setAttribute("src", "./images/" + this.innerHTML + ".jpeg");
}


function resetAll() {
	list_items = document.querySelectorAll("li");  
	for (var i = 0; i < list_items.length; i++) {
		list_items[i].className = ""; 
	}
	document.querySelector("img").setAttribute("src", "./images/panic.jpeg");
}







window.addEventListener("load", function() {
	var greetMsg = document.getElementById("greeting").innerHTML;
	var list = document.getElementsByTagName("li");

	changeGreet(greetMsg);
	listToYellow(list);
	document.getElementById("reset").addEventListener("click", resetAll);







});