$(document).ready(function () {
    // Getting jQuery references to the post author, recipe-name, ingredients, steps selected
    var authorInput = $("#author");
    var nameInput = $("#recipe-name");
    var ingredientsInput = $("#ingredients");
    var stepsInput = $("#steps");
    var dairyCheck = $("#dairy");
    var eggsCheck = $("#eggs");
    var nutsCheck = $("#nuts");
    var wheatCheck = $("#wheat");
    var soyCheck = $("#soy");
    var fishCheck = $("#fish");
    var recipeForm = $("#recipe");

    // Adding an event listener for when the form is submitted
    $(recipeForm).on("submit", handleFormSubmit);

    // A function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a author, recipe-name, ingredients or steps 
        if (!authorInput.val().trim() || !nameInput.val().trim() || !ingredientsInput.val().trim() || !stepsInput.val().trim()) {
            return;
        }
        // Constructing a newPost object to hand to the database
        var newRecipe = {
            author: authorInput
                .val()
                .trim(),
            recipeName: nameInput
                .val()
                .trim(),
            ingredients: ingredientsInput
                .val()
                .trim(),
            steps: stepsInput
                .val()
                .trim(),
        };

        submitPost(newRecipe);
        clearInputs()
    }

    // Submits a new post and brings user to blog page upon completion
    function submitPost(recipe) {
        $.post("/api/recipes", recipe, function () {
            window.location.href = "/recipes";
        });
    }

    //Clears the fields in the add recipe
    function clearInputs() {
        authorInput.val("");
        nameInput.val("");
        ingredientsInput.val("")
        stepsInput.val("")
    }
});
