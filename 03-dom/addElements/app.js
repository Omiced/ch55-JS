const container = document.querySelector("main");
const btnAdd = document.querySelector("#btn-add");
const btnClear = document.querySelector("#btn-clear");
const h2El = document.createElement("h2");
const h2Text = document.createTextNode("Hola");
h2El.appendChild(h2Text);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

btnAdd.addEventListener("click", () => {
  const card = 
    `<div class="card" data-id="${getRndInteger(1,100)}" style="width: 18rem;">
      <img src="capi1.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title ${getRndInteger(1,100)}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
  ;
 
  /* innerHTML
    reasigna el valor del html 
    entonces usar el mas igual o se borra todo
    container.innerHTML += card;
    */
  /*
  InserAdajacentHTML
  */
 container.insertAdjacentHTML("afterbegin",card);
/**
 * insertAdjacentElement
 */
  container.insertAdjacentElement("afterbegin",h2El);
});

btnClear.addEventListener("click", () => container.innerHTML = "");