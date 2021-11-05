
let produitEnregistrerStorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitEnregistrerStorage);



for (let jsonPanier of produitEnregistrerStorage){
    
    const product = new Product(jsonPanier);
    document.querySelector('#cart__items').innerHTML += `<article class="cart__item" data-id="${product.id}">
                                                            <div class="cart__item__img">
                                                                <img src="${product.image}" alt="${product.alt}">
                                                            </div>
                                                            <div class="cart__item__content">
                                                            <div class="cart__item__content__titlePrice">
                                                                <h2>${product.nom}</h2>
                                                                <p>${(product.prix * product.nombre_article)}€</p>
                                                            </div>
                                                            <div class="cart__item__content__settings">
                                                                <div class="cart__item__content__settings__quantity">
                                                                <p>Qté : </p>
                                                                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.nombre_article}">
                                                                </div>
                                                                <div class="cart__item__content__settings__delete">
                                                                <p class="deleteItem" onclick="myFunction(${product.alt})">Supprimer</p>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </article>`;
         
       
   
 /*  const supprimerArticle = document.querySelector(".deleteItem");
   supprimerArticle.addEventListener("click",(event) => {
    alert ("Hello World!");
        //produitEnregistrerStorage.removeItem(product);
        console.log(product);
        console.log("yo");
    })//event supprimer
                                */                      

/*console.log(product);
console.log("gna"); */
                                                        
  } //for
  function myFunction(e){
    console.log("milie "+ e);
    //produitEnregistrerStorage.removeItem(product);
} 

  const ensemblePanier = document.querySelector("#cart__items");
    ensemblePanier.addEventListener('change',(event) => {

    var articleTotal =0; 
    var prixTotal =0;                                               
    for(let i = 0; i < produitEnregistrerStorage.length; i++){
            articleTotal += parseInt(produitEnregistrerStorage[i].nombre_article);
            prixTotal += parseInt(produitEnregistrerStorage[i].prix)*(produitEnregistrerStorage[i].nombre_article);
            //console.log(articleTotal);
             
          } //for
    document.querySelector('#totalQuantity').innerHTML = articleTotal;
    document.querySelector('#totalPrice').innerHTML = prixTotal;
})//fin event

  