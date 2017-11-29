$(document).ready(() => {
    SDK.loadNav();

    $("#createEvent-button").click(() => {
        const owner_id = SDK.User.current();
        const title = $("#inputTitle").val();
        const startDate = $("#inputStartDate").val();
        const endDate = $("#inputEndDate").val();
        const description = $("#inputDescription").val();

        SDK.Event.createEvent(owner_id, title,startDate,endDate,description, (err, data) => {
        console.log(err, data);

        if (err) {
            return "failure";
        }
    });

    if (!title ||
        !startDate ||
        !endDate ||
        !description) {
        alert("Please Fill All Required Fields");

    } else {
        window.alert("Event Created")
    }
    });
});
