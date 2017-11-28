$(document).ready(() => {

    SDK.loadNav();

    $("#createUser-button").click((e) => {
        e.preventDefault();

        const firstName = $("#inputFirstName").val();
        const lastName = $("#inputLastName").val();
        const email = $("#inputEmail").val();
        const password = $("#inputPassword").val();
        const major = $("#selectMajor").val();
        const semester = $("#selectSemester").val();
        const gender = $("#selectGender").val();
        const description = $("#userDescription").val();

        SDK.User.createUser(firstName, lastName, email, password, major, semester, gender, description, (err, data) => {
            console.log(err, data);

            if (err) {
                return "failure";
            }
        });

        if (!firstName ||
            !lastName ||
            !email ||
            !password ||
            !major ||
            !semester ||
            !gender ||
            !description) {
            alert("Please Fill All Required Fields");

        } else {
            window.alert("User Created");
            window.location.href = "feed.html";

        }

    });
});