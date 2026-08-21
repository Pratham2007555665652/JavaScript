const div = document.createElement("div");

div.className = "container";
div.id = "first-box";

const addtext = document.createTextNode("i love js");
div.appendChild(addtext);

document.body.appendChild(div);
console.log(div);
