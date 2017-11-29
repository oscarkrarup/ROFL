$(document).ready(() => {
    SDK.loadNav();
    const $postTable = $("#postTable");

    SDK.Post.showPosts((err, events) =>{

        events.forEach((event) =>{
            const postsHTML =`
                <tr>
                <td>${event.owner_id}</td>
                <td>${event.content}</td>
                <td>${event.created}</td>
                `;

            $postTable.append(postsHTML)

        });
    });
});
