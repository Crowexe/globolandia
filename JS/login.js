//Correo: admin@admin.com
//Contraseña: admin

//Correo: user@user.com
//Contraseña: user


function login() {
    var email = document.getElementById("logemail").value;
    var pw = document.getElementById("logpass").value;
  

    if(email == "admin@admin.com" && pw == "admin" ) {
        window.location = "home.html";
    } else if(email == "user@user.com" && pw == "user" ) {
        window.location = "home.html";
    } else {
        alert("Invalid username or password");
    }
}