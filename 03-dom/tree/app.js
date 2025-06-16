const bodyHTML = document.getElementById("body");
console.log(bodyHTML);

//creando elemento 
const root = document.createElement("html");
root.lang = "es";
console.log(root);
const head = document.createElement("head");
const title = document.createElement("title");
//creando un nodo de texto
const titleText = document.createTextNode("HTML con JS");
//agregando hijos a las etiquetas
title.appendChild(titleText);
head.appendChild(title);
root.appendChild(head);
console.log(root);
const body = document.createElement("body");
const h1 = document.createElement("h1");
const h1Text =  document.createTextNode("Hola ch 55");
h1.appendChild(h1Text);
body.appendChild(h1);
root.appendChild(body);
bodyHTML.appendChild(root);
const p =  document.createElement("p");
const pText = document.createTextNode("Esto es un texto desde js");
body.appendChild(p);
p.appendChild(pText);

//manipulando estilos
p.style.fontSize = "64px";
//img
const img = document.createElement("img");
const img2 = document.createElement("img");
body.appendChild(img);
body.appendChild(img2);
//dos parametros, primero nombre del atributo y segundo valor
img.setAttribute("src","imagen1.jpg");
img2.setAttribute("src","imagen2.webp");
img.setAttribute("alt", "imagen con cosas para hacer en los dias");
img.setAttribute("width", "50px");
img.setAttribute("height", "50px");
img2.setAttribute("width", "200px");
img2.setAttribute("height", "200px");
img.removeAttribute("width");
img.removeAttribute("height");

img2.style.borderRadius = "50%";



