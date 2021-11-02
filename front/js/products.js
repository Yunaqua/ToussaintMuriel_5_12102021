 // ------------------------------------- Recuperation de l'id -------------------------------------

var str = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search
var url = new URL(str);
var search_params = new URLSearchParams(url.search)


if(search_params.has('id')) {
        var id = url.searchParams.get('id');
        console.log(id);
}



fetch("http://localhost:3000/api/products/"+id)
  .then(data => data.json())
  .then(jsonListProduct => {

  var productObject = new Product(jsonListProduct);
  console.log(productObject);
        
 /* document.querySelector('.item__img').innerHTML += ` <img src="${productObject.imageUrl}" alt="${productObject.altTxt}">`;
        
  document.querySelector('.item__content__titlePrice').innerHTML += ` <h1 id="title">${productObject.name}</h1>
                                                                <p>Prix : <span id="price">${productObject.price}</span>€</p>`;
  document.querySelector('.item__content__titlePrice').innerHTML += `<p class="item__content__description__title">Description :</p>
                                                                                <p id="description">${productObject.description}</p>`; */

document.querySelector('.item').innerHTML += `<article>
                                                  <div class="item__img">
                                                    <img src="${productObject.imageUrl}" alt="${productObject.altTxt}">
                                                  </div>
                                                  <div class="item__content">

                                                    <div class="item__content__titlePrice">
                                                      <h1 id="title">${productObject.name}</h1>
                                                      <p>Prix : <span id="price">${productObject.price}</span>€</p>
                                                    </div>

                                                    <div class="item__content__description">
                                                      
                                                    </div>

                                                    <div class="item__content__settings">
                                                      <div class="item__content__settings__color">
                                                        <label for="color-select">Choisir une couleur :</label>
                                                        <select name="color-select" id="colors">
                                                          <option value="">--SVP, choisissez une couleur --</option>
                                                          <!-- <option value="vert">vert</option>
                                                            <option value="blanc">blanc</option> -->  
                                                        </select>
                                                      </div>

                                                      <div class="item__content__settings__quantity">
                                                        <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
                                                        <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
                                                      </div>
                                                    </div>

                                                    <div class="item__content__addButton">
                                                      <button id="addToCart">Ajouter au panier</button>
                                                    </div>

                                                  </div>
                                                  </article> `
  const listColor = document.querySelector('#colors');
  const listcolor = productObject.colors;
  console.log(listcolor);

 for (let couleurs of listcolor){
    var option = document.createElement("option");
    option.text = couleurs;
    option.value = couleurs;
    var select = document.getElementById("colors");
    //select.appendChild(option);
    listcolor.innerHTML += select.appendChild(option);

         
    }//for couleur 
  
  const quantite = document.querySelector('#quantity'); 

  var nomProduit= productObject.name;
  var prixProduit= productObject.price;

  // ------------------------------------- Fonction Addlistener -------------------------------------
    const ajouterPanier = document.querySelector("#addToCart");
    
    
ajouterPanier.addEventListener('click',(event) => {
    event.preventDefault();
    
    const quantiteProduit = parseInt(quantite.value) ;
    const couleurProduit = listColor.value;
   // console.log(quantiteProduit) ;
// ------------------------------------- Variable panier produit -------------------------------------
  let panierJson = {
    id:id , 
    nom:nomProduit,
    couleur:couleurProduit, 
    nombre_article:quantiteProduit,
    prix: prixProduit
  }
  let produitEnregistrerStorage = JSON.parse(localStorage.getItem("produit"));

  if(panierJson.couleur =="" || panierJson.nombre_article=='0'){
    alert("Veuillez selectionnez une couleur et un nombre d'article")
  }else{
    if(!produitEnregistrerStorage){
      produitEnregistrerStorage=[]
    }
  
    for (let i=0; i< produitEnregistrerStorage.length; i++){
      if ((panierJson.couleur === produitEnregistrerStorage[i].couleur) && (panierJson.id === produitEnregistrerStorage[i].id)){
        
        produitEnregistrerStorage[i].nombre_article += parseInt(panierJson.nombre_article);
        localStorage.setItem('produit',JSON.stringify(produitEnregistrerStorage))
      }
    } //for
  
    let check = produitEnregistrerStorage.some( e => e.id === panierJson.id && e.couleur === panierJson.couleur)
    console.log(check)
    console.log(produitEnregistrerStorage)
  
    if(!check){
      produitEnregistrerStorage.push(panierJson)
      localStorage.setItem('produit', JSON.stringify(produitEnregistrerStorage))
    }
  }// si l'entrée est valide
  ;

}) //event



})//then jsonListProduct 
 

     