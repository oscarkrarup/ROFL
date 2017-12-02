$(document).ready(() => {
    SDK.loadNav();

    $("#createPost-button").click((e) => {
        e.preventDefault();

        const owner = SDK.User.current();
        const content = $("#inputContent").val();

        SDK.Post.createPost(owner, content, (err, data) => {
            console.log(err, data);

            if (err) {
                return "failure";
            }
        });

        if (!content) {
            alert("Please Fill All Required Fields");
        }
        else {
            window.alert("Post Created");
            window.location.href="posts.html";
        }
    });
});
