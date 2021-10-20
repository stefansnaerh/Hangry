
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    password = id("password"),
    form = id("login-form"),

    errorMsg = classes("error");


document.getElementById("signIn").addEventListener("click", (e) => {
    e.preventDefault();
    idTarget(username, 0, "Username cannot be blank");
    idTarget(password, 1, "Password cannot be blank");

});

let idTarget = (id, serial, message) => { 
    if (id.value === "") {
        errorMsg[serial].innerHTML = message;

    } else {
        errorMsg[serial].innerHTML = "";

    }
};