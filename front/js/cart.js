
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

                                                   
  } //for
 
  
  function myElementsSuppression(){
    let deleteItem = document.querySelectorAll(".deleteItem");
    for(let i=0; i < deleteItem.length; i++){
      deleteItem[i].addEventListener("click",(event) => {
          console.log(event);
          const getId = event.path[4].getAttribute("data-id");
          const getColor = event.path[4].getAttribute("data-color");

          let check = produitEnregistrerStorage.some( e => e.id == getId && e.couleur == getColor)
          if(check){
            let suppresionStorage = produitEnregistrerStorage.findIndex( e => e.id == getId && e.couleur == getColor) //recupère l'index dans le storage
            console.log(suppresionStorage);
            produitEnregistrerStorage.splice(suppresionStorage,1);
            console.log(produitEnregistrerStorage);
            localStorage.setItem('produit', JSON.stringify(produitEnregistrerStorage));
          }
            const elementSupprimer = event.path[4];
            elementSupprimer.remove();
            console.log(elementSupprimer);

            calculPanier();

      });//event
    }//for   

} //myElementsSuppression
myElementsSuppression();




function changementQuantite(){

  let quantite = document.querySelectorAll('.itemQuantity'); 
  console.log("in");
  for(let i=0; i < quantite.length ; i++){
    quantite[i].addEventListener("change", (event) => {
     let quantiteModifier = quantite[i].value;
      const getId = event.path[4].getAttribute("data-id");
      const getColor = event.path[4].getAttribute("data-color");

        let check = produitEnregistrerStorage.some( e => e.id == getId && e.couleur == getColor);
    if(check){
      let modificationStorage = produitEnregistrerStorage.findIndex( e => e.id == getId && e.couleur == getColor); //recupère l'index dans le storage
      
      produitEnregistrerStorage[modificationStorage].nombre_article = parseInt(quantiteModifier);
      localStorage.setItem('produit', JSON.stringify(produitEnregistrerStorage));
      console.log(produitEnregistrerStorage);

    }// if

    } //event

    )}//for

}// changementQuantite
changementQuantite()

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

/* -----------------------   Formulaire-------------------------------*/



const reName = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
const reMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const reAdress = /^[0-9]+(\,)?\s[a-zA-Z]+\s[a-zA-Z]+(\s)?[a-zA-Z]?/g;

  

function validate(formInformation,regex) {
  
  return regex.test(formInformation);
 }
  
/*function test(){

  
  if( validate(prenomFormulaire,reName) && validate(nomFormulaire,reName) && validate(adresseFormulaire,reAdress) && validate(villeFormulaire,reName) && validate(emailFormulaire,reMail)){
    console.log("nice");
  }
 
  else if(validate(prenomFormulaire,reName)){
    console.log("yo");
    console.log(validate(prenomFormulaire,reName));
  }else{
    console.log("gna");
  }
  return validate(prenomFormulaire,reName);
}
test() */

function validateEmail() {
  var email = document.getElementById('email').value;
  //const result = document.getElementById("emailErrorMsg");

 if (validate(email,reMail)) {
    document.getElementById("emailErrorMsg").innerHTML = email + " is a valid email address ";
    document.getElementById("emailErrorMsg").style.color = "lightgreen";

  } else {
    document.getElementById("emailErrorMsg").innerHTML = email + " is not a valid email address";
    document.getElementById("emailErrorMsg").style.color = "red";

  }//else
  
} //fonction validateEmail()

let listeContactCommande=[];

const boutonSubmit = document.querySelector("#order");
boutonSubmit.addEventListener('click',(event) => {
  event.preventDefault();
  console.log("bonjour");

  var prenomFormulaire = document.getElementById("firstName").value;
  var nomFormulaire = document.getElementById("lastName").value;
  var adresseFormulaire = document.getElementById("address").value;
  var villeFormulaire = document.getElementById("city").value;
  var emailFormulaire = document.getElementById("email").value;

  var random = Math.floor(Math.random() * 1000000) + 1;
  let check = listeContactCommande.some( e => e.id == random )


  if(validate(prenomFormulaire,reName) && validate(nomFormulaire,reName) && validate(adresseFormulaire,reAdress) && validate(villeFormulaire,reName) && validate(emailFormulaire,reMail)){
    console.log("nice")
    do{
      console.log("hr");
      random = Math.floor(Math.random() * 1000000) + 1;
    }while(check);
     
    var numero_commande = random;
    let formulaireContact = {
      id : numero_commande,
      prenom: prenomFormulaire , 
      nom:nomFormulaire,
      adresse:adresseFormulaire,
      ville:villeFormulaire,
      email:emailFormulaire
      } 
    listeContactCommande.push(formulaireContact);
    console.log(listeContactCommande);
      alert("commande effectué");
      window.location.href='confirmation.html'+ "?id=" + numero_commande; //http://127.0.0.1:5500/front/html/confirmation.html?id=107fb5b7560
  }//if

 
  

})//fin event