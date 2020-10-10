function getCategory(){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php", {
        method:"get"
    }) 
    .then(response => response.json())
    .then(
        category => {
            getInformation(category);
        }
    )
    .catch(error => {
        console.error(error);
    })
}

function getInformation(category){
    let categories = category.categories;
    let rInformation =  [];
    
    categories.forEach(element => {
       information = {
            "id": element.idCategory,
            "categoria": element.strCategory,
            "imagen": element.strCategoryThumb,
            "descripcion": element.strCategoryDescription,
        }
        rInformation.push(information);   
    });
    orderByCategory(rInformation);
    fillCards(rInformation);
    console.log(rInformation); 
}

function orderByCategory(rInformation){
    rInformation.sort(function (a, b) {
        if (a.categoria < b.categoria) {
          return 1;
        }
        if (a.categoria > b.categoria) {
          return -1;
        }
        return 0; 
      });     
}

function fillCards(rInformation){
    let cards ="";
    rInformation.forEach(element => {
    cards = cards +
    `<div class="col-md-4">
         <div class="card shadow border border-secondary p-3 m-3" style="width: 18rem;">
              <img src="`+ element.imagen + `" class="card-img-top" alt="`+ element.categoria + `">
                  <div class="card-body">
                  <h5 class="card-title text-center text-secondary font-weight-bolder">`+ element.categoria + `</h5>
                      <p class="card-text">`+ element.descripcion + `</p>
           </div>
       </div>
    </div>`;
    });
    document.getElementById("cardDetalle").innerHTML= cards;
}