

document.querySelector('#menujs').innerHTML +=`
                <a href="./index.html"><li>Accueil</li></a>
              <a href="./cart.html"><li id="target">Panier</li>   
            <asp:Label ID="totalPanier" runat="server" CssClass="badge badge-warning"  ForeColor="White"/></a>
                                                    `;
/* -----------------------   Storage non null -------------------------------*/
if(localStorage !=null){
    let produitEnregistrerStorage = JSON.parse(localStorage.getItem("produit"));
    var idStorage = produitEnregistrerStorage.length;
    console.log(produitEnregistrerStorage);
    
                                                    
    var style = document.createElement('style');
    style.innerHTML = `
                        #totalPanier {
                            background: #3498db;
                            color: #fff;
                            padding: 0 5px;
                            vertical-align: top;
                            text-align:center;
                            min-width:2em;
                            font-weight:bold;
                            border-style:solid;
                            font-size:50%;
                            padding:.6em;
                            border-radius:999px;
                            line-height:.75em;
                            color: white;
                            position:relative;
                            right:0%;
                            top:-6%;
                        }
                        `;
    document.head.appendChild(style);

/* -----------------------   Calcul du panier -------------------------------*/
    function calculPanier(){
        var articleTotal =0;                                               
          for(let i = 0; i < produitEnregistrerStorage.length; i++){
                  articleTotal += parseInt(produitEnregistrerStorage[i].nombre_article);
                   
                } //for
          document.querySelector('#totalPanier').innerHTML = articleTotal;
         return articleTotal;
      }//fonction
      window.addEventListener('storage',() => {
        calculPanier();
      
  }) //event
  calculPanier();
    
}      //if                                               

