// fetch("http://localhost:3000/api/products").then(data =>data)
//const fetch = require("node-fetch");
console.log("test1");

    fetch("http://localhost:3000/api/products")
    .then(response => response.json())
    .then(data => {
        console.table(data);
    }) 
    ;
    console.log("test fin");


