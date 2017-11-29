const SDK = {
    serverURL: "https://localhost:8443/api",
    request: (options, cb) => {

        let token = {"AUTHORIZATION": localStorage.getItem("token")}

        $.ajax({
            url: SDK.serverURL + options.url,
            method: options.method,
            headers: token,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(options.data),
            success: (data, status, xhr) => {
                cb(null, data, status, xhr);
            },
            error: (xhr, status, errorThrown) => {
                cb({xhr: xhr, status: status, error: errorThrown});
            }
        });

    },

    User: {

        findAll: (cb) => {
            SDK.request({method: "GET", url: "/users"}, cb);
        },

        current: () => {
            return localStorage.getItem("userId");
        },

        login: (email, password, cb) => {
            SDK.request({
                data: {
                    email: email,
                    password: password
                },
                url: "/auth",
                method: "POST"
            }, (err, data) => {

                //On login-error
                if (err) return cb(err);

                localStorage.setItem("token", data)

                //decode token
                let token = data;

                var base64Url = token.split('.')[0];
                var base64 = base64Url.replace('-', '+').replace('_', '/');
                console.log(JSON.parse(window.atob(base64)));

                localStorage.setItem("userId", JSON.parse(window.atob(base64)).kid);
                localStorage.setItem("token", data);

                cb(null, data);
            }, cb);
        },

        createUser: (firstName, lastName, email, password, major, semester, gender, description, cb) =>
            SDK.request({
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    major: major,
                    semester: semester,
                    gender: gender,
                    description: description

                },
                url: "/users",
                method: "POST"
            }, cb)
    },

    logOut: () => {
        SDK.Storage.remove("tokenId");
        SDK.Storage.remove("userId");
        SDK.Storage.remove("user");
        window.location.href = "login.html";
    },

    loadNav: (cb) => {
        $("#nav-container").load("nav.html", () => {
            const currentUser = SDK.User.current();
            if (currentUser) {
                $(".navbar-right").html(`
           <li><a href="login.html" id="logout-link">Logout</a></li>
          `);
            }
            $("#logout-link").click(() => SDK.User.logOut());
            cb && cb();
        });
    },

    Storage: {
        prefix: "BookStoreSDK",
        persist: (key, value) => {
            window.localStorage.setItem(SDK.Storage.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
        },
        load: (key) => {
            const val = window.localStorage.getItem(SDK.Storage.prefix + key);
            try {
                return JSON.parse(val);
            }
            catch (e) {
                return val;
            }
        },
        remove: (key) => {
            window.localStorage.removeItem(SDK.Storage.prefix + key);
        }
    },

    Event: {
        showEvents: (cb) => {
            SDK.request({
                method: "GET",
                url: "/events",
                headers: {
                    Authorization: "Bearer " + SDK.Storage.load("token")
                }

            }, cb)
        }
    },

        createEvent: (owner_Id, title, startDate, endDate, description, cb) => {
            SDK.request({
                data:{
                    owner_Id: owner_Id,
                    title: title,
                    startDate: startDate,
                    endDate: endDate,
                    description: description
                },
                method: "POST",
                url: "/events",
                headers: {
                    Authorization: "Bearer " + SDK.Storage.load("token")
                }
            }, cb)
        }


    };

    //Event: {
         //showEvents: (cb) => {
        //createEvents: (cb) => {


    //Post: {
        //showPosts (cb): => {
        //createPosts (cb): => {
        //createComment(cb): => {


