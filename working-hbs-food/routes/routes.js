// Dependencies
// =============================================================

// Routes
// =============================================================
module.exports = function (app) {


    // index route loads view.html

    app.get("/", (req, res) => {
        res.render("index", {
            title: "Home",
            home: "active"
        })
    })

    app.get("/grocery", (req, res) => {
        res.render("grocery", {
            title: "Grocery",
            grocery: "active"
        })
    })

    app.get("/meal-plan", (req, res) => {
        res.render("meal-plan", {
            title: "Meal-Plan",
            mealPlan: "active"
        })
    })

    app.get("/recipes", (req, res) => {
        res.render("recipes", {
            title: "Recipes",
            recipes: "active",
            script: "/js/recipes.js"
        })
    })

    app.get("/login", (req, res) => {
        res.render("login", {
            title: "Login",
            login: "active",
        })
    })

    app.get("/register", (req, res) => {
        res.render("register", {
            title: "Register",
            register: "active",
        })
    })

};