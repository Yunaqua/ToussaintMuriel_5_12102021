

fetch("http://localhost:3000/api/products")
.then(data => data.json())
.then(jsonListProduct => {

    
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

