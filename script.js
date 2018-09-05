
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var button_status = document.querySelectorAll(".status");
var button_delete = document.querySelectorAll(".delete");


//checking input
function inputValueLenght() {
	return input.value.length;
}

//creating new shopping items with buttons
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
	
	//events for new created items
	btn1.addEventListener("click", doneItem);
	btn2.addEventListener("click", deleteItem);
}

//event on clicking Enter button
function eventOnClick() {
	if (inputValueLenght()>0){
	    createNewItem();
				} else {
					alert("Please add an item!")
					}
}

//event on Enter key
function eventOnKeypress(event) {
	if (inputValueLenght()>0 && event.keyCode === 13){
	    						createNewItem();
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

//Events
button.addEventListener("click", eventOnClick);
input.addEventListener("keypress", eventOnKeypress);
for (i=0; i<button_delete.length;i++){button_delete[i].addEventListener("click", deleteItem);}
for (i=0; i<button_status.length;i++){button_status[i].addEventListener("click", doneItem);}


