var db = require("../models");

module.exports = function (app) {
    // POST route for saving a new recipe
    app.post("/api/recipes", function (req, res) {
        db.Recipes.create(req.body).then(function (dbRecipes) {
            res.json(dbRecipes);
        });
        console.log(req.body)
    });
}