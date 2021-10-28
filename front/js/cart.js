
let produitEnregistrerStorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitEnregistrerStorage);


for (let jsonPanier of produitEnregistrerStorage){
    
    let product = new Product(jsonPanier);
    document.querySelector('#cart__items').innerHTML += `<article class="cart__item" data-id="${product.id}">
                                                            <div class="cart__item__img">
                                                                <img src="../images/product01.jpg" alt="Photographie d'un canapé">
                                                            </div>
                                                            <div class="cart__item__content">
                                                            <div class="cart__item__content__titlePrice">
                                                                <h2>${product.nom}</h2>
                                                                <p>${product.prix}€</p>
                                                            </div>
                                                            <div class="cart__item__content__settings">
                                                                <div class="cart__item__content__settings__quantity">
                                                                <p>Qté : </p>
                                                                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.nombre_article}">
                                                                </div>
                                                                <div class="cart__item__content__settings__delete">
                                                                <p class="deleteItem">Supprimer</p>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </article>`;
    for(var i = 0; i < produitEnregistrerStorage.length; i++){
            var articleTotal ="";
            //console.log(produitEnregistrerStorage.length);
            //console.log(produitEnregistrerStorage[i]);
            articleTotal += parseInt(produitEnregistrerStorage[i].nombre_article);
            console.log(articleTotal);  
          } //for
    document.querySelector('#totalQuantity').innerHTML = articleTotal;
  
  }