// fetch("http://localhost:3000/api/products").then(data =>data)
//const fetch = require("node-fetch");
/*let numero = 0;
let p = document.createElement("p");

fetch("http://localhost:3000/api/products")
.then(response => response.json())
.then(data => {
  //output.textConente = ${data[numero].name}; Kanap name1
  const img = document.getElementById('img');
  const nmprod = document.getElementById('nomproduit').appendChild(p);

 / img.src = data[numero].imageUrl;
  nomproduit.src = data[numero].name ;
  p.innerHTML = nomproduit.src;
  
    //console.log(data);
}) 
;
*/
let numero ="107fb5b75607497b96722bda5b504926";


fetch("http://localhost:3000/api/products")
.then(data => data.json())
.then(jsonListProduct => {

    index = jsonListProduct.findIndex(x => x._id ===numero);
    console.log(index);
    
  for (let jsonProduct of jsonListProduct){
    
    let product = new Product(jsonProduct);
    document.querySelector('#items').innerHTML += `<a href="./product.html?id=${product._id}">
                                                    <article>
                                                      <img id='img' src="${product.imageUrl}" alt="${product.altTxt}">
                                                      <h3 id="nomproduit" class="productName">${product.name}</h3>
                                                      <p class="productDescription">${product.description}</p>
                                                    </article>
                                                  </a> `;
  
  }
}) 
;

