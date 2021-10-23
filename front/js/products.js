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

         
    }//for
  
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
    };

    console.log(panierJson)
  let objLinea = JSON.stringify(panierJson); //Cette opération transforme l’objet en une chaîne de caractères.
  localStorage.setItem("obj",objLinea); //ne stocke que des valeurs sous forme de chaines de caractères.
  objLinea = localStorage.getItem("obj");
  panierJson = JSON.parse(objLinea);  //reforme l’objet à partir de la chaîne linéarisée.
  console.log(panierJson);
        

      let produitEnregistrerStorage = JSON.parse(localStorage.getItem("produit"));
      console.log(produitEnregistrerStorage);

      if(produitEnregistrerStorage){
       
      }else{
        produitEnregistrerStorage =[];
        produitEnregistrerStorage.push (panierJson);
        console.log(produitEnregistrerStorage);
      } //verifie que la valeur existe deja ou pas dans le panier
      ;
    
    })
   

  
 

  

   })//then jsonListProduct 

    /*     if(!localStorage.getItem('')){
        populateStorage();
      }else{
        setStyles();
      } //verifie que la valeur existe deja ou pas dans le panier

*/
      

     