// var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul")
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");



// Add eventlisteners on first delete buttons 
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}



// Target the parent element of li when x button is pressed
function removeParent(e) {
  e.target.parentNode.remove();
}



// Strikethrough the list item when clicked
function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}

ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}



// Add new items on the list
function inputLength(){
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "x";
	btn.classList.add('delete');
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value="";
}


// function addToListAfterClick(){
// 	if(inputLength() > 0){
// 			createListElement();
// 		}
// }

function addToListAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


// button.addEventListener("click", addToListAfterClick);
input.addEventListener("keypress", addToListAfterKeypress);