$(document).ready(() => {

    SDK.Users.loadNav();

    $("#login-button").click(() => {

        const email = $("#inputEmail").val();
        const password = $("#inputPassword").val();

        SDK.Users.login(email, password, (err, data) => {
            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
            }
            else if (err) {
                alert("Wrong e-mail or password")
            } else {
                SDK.Users.loadNav();
                window.location.href = "feed.html";
            }
        })







    });
});
