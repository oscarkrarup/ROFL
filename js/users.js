$(document).ready(() => {
    SDK.loadNav();
    const $userTable = $("#userTable")


    SDK.User.showUsers((err, users) =>{

        users.forEach((user) =>{
            const userHTML =`
                <tr>
                <td>${user.firstName + " " + user.lastName}</td>
                <td>${user.description}</td>
                <td>${user.gender}</td>
                <td>${user.major}</td>
                <td>${user.semester}</td>
                </tr>
                `;
            
            $userTable.append(userHTML)

        });
    });
});
