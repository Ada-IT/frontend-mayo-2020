function getRecipe(){
    fetch("https://www.themealdb.com/api/json/v1/1/random.php", {
        method:"get"
    }) 
    .then(response => response.json())
    .then(
        recipe => {
            let myRecipe = getInformation(recipe);
            console.log(myRecipe);
        }
    )
    .catch(error => {
        console.error(error);

    })
}

 function getInformation(recipe){
     let meal = recipe.meals[0]
      
     let rInformation = {
         "id": meal.idMeal,
         "titulo": meal.strMeal,
         "categoria": meal.strCategory,
         "area": meal.strArea,
         "instrucciones": meal.strInstructions,
         "imagen": meal.strMealThumb,
         "tags": meal.strTags,
         "video": meal.strYoutube
     }
    return rInformation;
 }
