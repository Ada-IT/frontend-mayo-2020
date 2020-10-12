

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
    let drinks_filt = [];

    drinks.forEach(element => {
        trago = {
            id: element.idDrink,
            drink: element.strDrink,
            categoria: element.strCategory,
            tipoDevaso: element.strGlass,
            instrucciones: element.strInstructions,
            imagen: element.strDrinkThumb,
            tags: element.strTags,
            video: obtenerEmbedVideo(element),
            ingredientes: obtenerIngredientes(element)
        }
        drinks_filt.push(trago);
    });
    toCards(drinks_filt);   
    console.log(drinks_filt);
}

function obtenerIngredientes(element) {
    let ingredientes = [];

    for (var i = 1; i <= 15; i++) {
        if (element["strIngredient" + i] != null)
            ingredientes.push(element["strIngredient" + i]);
    }
    return ingredientes;
}


function obtenerEmbedVideo(element){ // cambio el watch por el embed para que levante la url
    let watch = "watch?v=";
    let urlFormateada = element.strVideo;

    if (urlFormateada === null) {        
        return null
    }
    urlFormateada = urlFormateada.replace(watch, "embed/"); // reemplazo el watch por el embed
        return urlFormateada;
}


function mostrarIframe(url){ // Muestra el video o un txt de no disponible
if (url === null){
    return `<p class= "font-weight-bolder"> No disponible </p>`;
}else {
    return `<iframe src= "${url}" frameborder="0" class="embed-responsive-item"></iframe>`;
}
}


function toCards(drinks_filt) { // relleno las cards con la información
    toPrint ="";

    drinks_filt.forEach(element => {
        toPrint = toPrint + 
        `<div class="col-md-5 my-3">
        <div class="card shadow">
            <img class="card-img-top rounded shadow" src="${element.imagen}" alt="Card image cap">
            <div class="card-body text-center">
                <h2 class="card-title titless text-info"></u> ${element.drink} </h2>
                <p class="card-text"><b>Categoria:</b> ${element.categoria}</p>
                <p class="card-text"><u>Id:</u> ${element.id}</p>
                <p class="card-text"><u>Tags:</u> ${element.tags === null ? "No disponible" : element.tags}</p>
                <p class="card-text"><u>Tipo de vaso:</u> ${element.tipoDevaso}</p>
                <p class="card-text"><u>Ingredientes:</u> ${element.ingredientes}</p>
                <p class="card-text"><u>Instrucciones:</u> ${element.instrucciones}</p>
                <div class="col">
                    <a href="#" data-toggle="modal" data-target="#video_${element.id}"><button type="button"
                            class="btn btn-secondary shadow-sm btn-lg"><i class="fas fa-video"></i> Video</button></a>
                    <!--modal-->
                    <div class="modal fade" id="video_${element.id}" tabindex="-1" role="dialog" aria-labelledby="video"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Instrucciones</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    ${mostrarIframe(element.video)}
                                </div>
                                <div class="modal-footer mt-1">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                                    <button type="button" class="btn btn-success"
                                        data-dismiss="modal">Confirmar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    });
    document.getElementById('cards').innerHTML = toPrint;
}
