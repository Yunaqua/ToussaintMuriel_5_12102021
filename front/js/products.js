 // ------------------------------------- Recuperation de l'id -------------------------------------

var str = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search
var url = new URL(str);
var search_params = new URLSearchParams(url.search)


if(search_params.has('id')) {
        var id = url.searchParams.get('id');
        console.log(id);
}



fetch("http://localhost:3000/api/products")
  .then(data => data.json())
  .then(jsonListProduct => {

  index = jsonListProduct.findIndex(x => x._id ===id);
  console.log(index);
        
  document.querySelector('.item__img').innerHTML += ` <img src="${jsonListProduct[index].imageUrl}" alt="${jsonListProduct[index].altTxt}">`;
        
  document.querySelector('.item__content__titlePrice').innerHTML += ` <h1 id="title">${jsonListProduct[index].name}</h1>
                                                                <p>Prix : <span id="price">${jsonListProduct[index].price}</span>€</p>`;
  document.querySelector('.item__content__titlePrice').innerHTML += `<p class="item__content__description__title">Description :</p>
                                                                                <p id="description">${jsonListProduct[index].description}</p>`;

  const listColor = document.querySelector('#colors');
  const listcolor = jsonListProduct[index].colors;
  console.log(listcolor);

  for (let couleurs of listcolor){
    var option = document.createElement("option");
    option.text = couleurs;
    option.value = couleurs;
    var select = document.getElementById("colors");
    select.appendChild(option);

         
    }//for couleur
  
  const quantite = document.querySelector('#quantity');  

  var nomProduit= jsonListProduct[index].name;
  var prixProduit= jsonListProduct[index].price;

  // ------------------------------------- Fonction Addlistener -------------------------------------
    const ajouterPanier = document.querySelector("#addToCart");
    
    
ajouterPanier.addEventListener('click',(event) => {
    event.preventDefault();
    
    const quantiteProduit = quantite.value ;
    const couleurProduit = listColor.value;
   
// ------------------------------------- Variable panier produit -------------------------------------
  let panierJson = {
    id:id , 
    nom:nomProduit,
    couleur:couleurProduit, 
    nombre_article:quantiteProduit,
    prix: prixProduit
  }

  let produitEnregistrerStorage = JSON.parse(localStorage.getItem("produit"));
  console.log(produitEnregistrerStorage);

  if(produitEnregistrerStorage){
    //console.log(produitEnregistrerStorage);
   
      for(var i = 0; i < produitEnregistrerStorage.length; i++){
       // console.log();
       console.log(localStorage.length);
       console.log(produitEnregistrerStorage[i].couleur);
       console.log(panierJson.couleur);
         if (
              (panierJson.couleur === produitEnregistrerStorage[i].couleur) && (panierJson.id === produitEnregistrerStorage[i].id)
          ){
            
            produitEnregistrerStorage[i].nombre_article = parseInt(panierJson.nombre_article) + parseInt(produitEnregistrerStorage[i].nombre_article) ;
            localStorage.setItem("produit", JSON.stringify(produitEnregistrerStorage));
            //break;
          
          }else{
            produitEnregistrerStorage.push (panierJson);
          localStorage.setItem("produit", JSON.stringify(produitEnregistrerStorage));
          //console.log(produitEnregistrerStorage);

          } //if else into for
          
      } //for
      
        
   
  }else{
    produitEnregistrerStorage =[];
    produitEnregistrerStorage.push (panierJson);
    localStorage.setItem("produit", JSON.stringify(produitEnregistrerStorage));
    console.log(produitEnregistrerStorage);
  } //verifie que la valeur existe deja ou pas dans le panier
  ;

}) //event



})//then jsonListProduct 
 

     