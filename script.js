
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var item = document.querySelectorAll("li");
var button_status = document.querySelectorAll(".status");
var button_delete = document.querySelectorAll(".delete");


function inputValueLenght() {
	return input.value.length;
}

function createNewItem() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value=""

	var btn1 = document.createElement("button");
	var btn2 = document.createElement("button")
	btn1.appendChild(document.createTextNode("Done"));
	btn2.appendChild(document.createTextNode("Delete"))
	li.appendChild(btn1);
	li.appendChild(btn2);

	btn1.addEventListener("click", doneItem);
	btn2.addEventListener("click", deleteItem);
}

function eventOnClick() {
	if (inputValueLenght()>0){
	    createNewItem();
} else {alert("Please add an item!")}
}

function eventOnKeypress(event) {
	if (inputValueLenght()>0 && event.keyCode === 13){
	    createNewItem();
// } else if (inputValueLenght() === 0) {alert("Please add an item!")}
	}
}

//delete item function
function deleteItem() {
		this.parentNode.remove();
	}
//Toggle done function
function doneItem() {
		this.parentNode.classList.toggle("done");
	}

button.addEventListener("click", eventOnClick);
input.addEventListener("keypress", eventOnKeypress);
for (i=0; i<button_delete.length;i++){button_delete[i].addEventListener("click", deleteItem);}
for (i=0; i<button_status.length;i++){
	button_status[i].addEventListener("click", doneItem);
}


