$(document).ready(function(){
    var registerForm = $("form.register");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    registerForm.on("submit", function(event){
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
        };

        if (!userData.email || !userData.password) {
            return;
        }
        registerUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    function registerUser(email, password) {
        $.post("/api/register", {
            email: email,
            password: password
        })
        .then(function(data) {
            window.location.replace("/recipes");
        })
        .catch(handleLoginerr);
    }
    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
})