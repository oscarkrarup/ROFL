$(document).ready(() => {
    SDK.loadNav();
    const $postTable = $("#postTable");

    SDK.Post.showPosts((err, posts) =>{

        posts.forEach((post) =>{
            const postsHTML =`
                <tr>
                <td>${post.owner_id}</td>
                <td>${post.content}</td>
                <td>${post.created}</td>
                </tr>
                `;

            $postTable.append(postsHTML)

        });
    });
});
