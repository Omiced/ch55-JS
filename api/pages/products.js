/** 
 * Peticiones http
 * 1. get para obtener info
 * 2. post para enviar informacion
 * 3. delete para borrar algo 
 * 4. patch o put para actualizar informacion
*/
const BASE_URL = "https://fakestoreapi.com/products";
const mainContainer = document.querySelector(".container-j");
const newProduct = {
  title: "picafresas",
  price: 1.0,
  description: "sabrosa gomita de fresa con cubierta de chile",
  category: "snack",
  image: "url"
}




//function declaration async
async function getAllProducts(){
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    data.map((product) => renderProduct(product));
  } catch (error) {
    console.log("Error", error);
  }
}

//function expression async
const getSingleProduct = async function(id){
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

//delete product
const deleteProduct = async function(id){
  try {
    const response = await fetch(`${BASE_URL}/${id}`,{
      method: "DELETE",
      headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();
    console.log("Delete", data)
  } catch (error) {
    console.log("Error", error);
  }
}
//arrow function async
const addProduct = async (productObject) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(productObject)
  });
  const data = await response.json();
  return data;
}

//metodo patch
const updateProduct = async (id, productObject) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(productObject)
  });
  const data = await response.json();
  return data;
}

const renderProduct = async (productPromise) => {
  const data = await productPromise; 
  console.log(data);
  const cardProduct = `
    <div class="card" style="width: 18rem;">
      <img src="${data.image}" class="card-img-top" alt="${data.description}">
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${data.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Price: $${data.price}</li>
        <li class="list-group-item">Categoria: ${data.category}</li>
        <li class="list-group-item">Rating: ${data.rating.rate}</li>
      </ul>
    </div>
`;
  mainContainer.insertAdjacentHTML("afterbegin",cardProduct);
}

getAllProducts();
getSingleProduct(4);
addProduct(newProduct);
updateProduct(5,{price:10});
renderProduct(getSingleProduct(1));
deleteProduct(6);
