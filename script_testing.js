var button = document.querySelector("button");
var input = document.querySelector("input");
function updateList(){
		var li1= document.createElement("li");
		li1.appendChild(document.createTextNode(input.value + " "));
		var delet = document.createElement("button");
		delet.className = "del";
		delet.appendChild(document.createTextNode("Delete"));
		li1.appendChild(delet);
		document.querySelector("ol").appendChild(li1);
		input.value = ""
		delet.addEventListener("click",function(){
			li1.remove();
		})

}


button.addEventListener("click",function(){
	if (input.value.length > 0){
		updateList();
	}
});
input.addEventListener("keypress",function(){
	if (input.value.length > 0 && event.keyCode === 13){
		updateList();
	}
});

