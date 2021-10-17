// fetch("http://localhost:3000/api/products").then(data =>data)
//const fetch = require("node-fetch");
console.log("test1");
if (window.fetch) {
    fetch("http://localhost:3000/api/products")
    .then(response => response.json())
    .then(data => {
        console.table(data);
    }) 
    ;
    console.log("test fin");
} else {
    console.log("pff");
}

    
