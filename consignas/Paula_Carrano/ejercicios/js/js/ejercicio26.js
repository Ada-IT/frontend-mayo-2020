let drinks_filt = [];

function obtenerTrago() {
    let letra = document.getElementById("letter").value;
    let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + letra;

    fetch(url, {
        method: "GET"
    })
        .then(response => response.json())
        .then(respuesta => {
            obtenerDetalles(respuesta);
        })
        .catch(error => {
            console.error(error);
        })
}

function obtenerDetalles(respuesta) {
    let drinks = respuesta.drinks;
    drinks.forEach(element => {
        trago = {
            id: element.idDrink,
            drink: element.strDrink,
            categoria: element.strCategory,
            tipoDevaso: element.strGlass,
            instrucciones: element.strInstructions,
            imagen: element.strDrinkThumb,
            tags: element.strTags,
            video: element.strVideo,
            ingredientes: obtenerIngredientes(element)
        }
        drinks_filt.push(trago);
    });
    toCards(respuesta);
    console.log(drinks_filt);
}

function obtenerIngredientes(element) {
    let ingredientes = [];

    for (var i = 1; i <= 15; i++) {
        if (element["strIngredient" + i] != null)
            ingredientes.push(element["strIngredient" + i]);
    }
    return ingredientes;

    console.log(ingredientes);
}

function toCards(respuesta) {
    toPrint ="";

    drinks_filt.forEach(element => {
        toPrint = toPrint + 
            `<div class="col-8 col-md-5 my-3">
        <div class="card" style="height:100%;background-color:coral">
        <img class="card-img-top" src="${element.imagen}" alt="Card image cap">
        <div class="card-body text-center">
        <h2 class="card-title titless"> ${element.drink} </h2>
        <p class="card-text">Categoria: ${element.categoria}</p>
        <p class="card-text">Tipo de vaso: ${element.tipoDeVaso}</p>
        <p class="card-text">Instrucciones: ${element.instrucciones}</p>
        <p class="card-text">Id: ${element.id}</p>
        <p class="card-text">Ingredientes: ${element.ingredientes}</li></p>
        </div>
    </div>    
    </div>`
    });
    console.log(toPrint);
    document.getElementById('cards').innerHTML = toPrint;
}
