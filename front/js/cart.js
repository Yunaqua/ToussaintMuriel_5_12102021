
let produitEnregistrerStorage = JSON.parse(localStorage.getItem("produit"));
var idStorage=produitEnregistrerStorage.length;
console.log(produitEnregistrerStorage);



for (let jsonPanier of produitEnregistrerStorage){
    
    const product = new Product(jsonPanier);
    document.querySelector('#cart__items').innerHTML += `<article class="cart__item" data-id="${product.id}" data-color="${product.couleur}">
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
                                                                <p class="deleteItem">Supprimer</p>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </article>`;
                                              

  
  /*const supprimerArticle = document.querySelector(".deleteItem");
   supprimerArticle.addEventListener("click",(event) => {
    //alert ("Hello World!");
        console.log(product);
    })//event supprimer */
                                                   
  } //for
 
  
  function myElements(){
    let deleteItem = document.querySelectorAll(".deleteItem");
    for(let i=0; i < deleteItem.length; i++){
      deleteItem[i].addEventListener("click",(event) => {
        const getId = event.path[4].getAttribute("data-id");
        const getColor = event.path[4].getAttribute("data-color");

        let check = produitEnregistrerStorage.some( e => e.id == getId && e.couleur == getColor)
    console.log("yo");
    if(check){
      let suppresionStorage = produitEnregistrerStorage.findIndex( e => e.id == getId && e.couleur == getColor) //recupère l'index dans le storage
      console.log(suppresionStorage);
      produitEnregistrerStorage.splice(suppresionStorage,1);
      console.log(produitEnregistrerStorage);
      localStorage.setItem('produit', JSON.stringify(produitEnregistrerStorage));
    }
      });
    }//for

    

} //myElements
myElements();

function calculPanier(){
  var articleTotal =0; 
    var prixTotal =0;                                               
    for(let i = 0; i < produitEnregistrerStorage.length; i++){
            articleTotal += parseInt(produitEnregistrerStorage[i].nombre_article);
            prixTotal += parseInt(produitEnregistrerStorage[i].prix)*(produitEnregistrerStorage[i].nombre_article);
             
          } //for
    document.querySelector('#totalQuantity').innerHTML = articleTotal;
    document.querySelector('#totalPrice').innerHTML = prixTotal;
}
calculPanier();

  const ensemblePanier = document.querySelector("#cart__items");
    ensemblePanier.addEventListener('change',(event) => {
      calculPanier();
    
})//fin event

  