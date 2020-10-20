// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // cms route loads cms.html
    app.get("/grocery", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/grocery.html"));
    });

    // blog route loads blog.html
    app.get("/meal-plan", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/meal-plan.html"));
    });

    app.get("/recipes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/recipes.html"));
    });

};