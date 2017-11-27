$(document).ready(() => {
    $("#createUser-button").click(() => {

        const firstName = $("#inputFirstName").val();
        const lastName = $("#inputLastName").val();
        const email = $("#inputEmail").val();
        const password = $("#inputPassword").val();
        const major = $("#selectMajor").val();
        const major = $("#selectSemester").val();
        const gender = $("#selectGender").val();
        const description = $("#userDescription").val();

        SKD.User.createUser() => {

    }
}