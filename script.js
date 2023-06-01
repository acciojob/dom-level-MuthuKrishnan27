//your JS code here. If required.
let ul = document.getElementsByTagName("ul")[0];
// console.log(ul.children);
// console.log(ul.children.length);

for(let i=0;i<ul.children.length;i++){
	// console.log(ul.children[i]);
	if(ul.children[i].id === "level"){
		// let index = i+1;
		window.alert("The level of the element is: "+i);
	}