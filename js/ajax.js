var request = new XMLHttpRequest();
var requestUsr = new XMLHttpRequest();

function loadTxt() {
    request.onreadystatechange = processTxt;//avisa el estado de la peticion ajax. Escucha cada vez que hay un cambio en el request
    request.open("GET", "data.txt", true);    
    request.send();
}

function processTxt() {
    //4 se confirmo la solicitud
    if(request.status == 200 && request.readyState == 4) {
        var txt = document.getElementById("txt");
        txt.innerHTML = request.responseText;
    }
}

//---------------------------------------------------------------------------------------
function loadUsuario() {
    requestUsr.onreadystatechange = processUsr;
    requestUsr.open("GET", "usuarios.json", true);
    requestUsr.send();
}

function processUsr() {
    if(requestUsr.status == 200 && requestUsr.readyState == 4) {
        var data = requestUsr.responseText;
        data = JSON.parse(data);
        var usr = document.getElementById("usr");
        usr.innerHTML = "";
        for(i = 0; i < data.length; i++) {
            var u = data[i];
            usr.innerHTML += "<h1>" + u.nombre + "</h1>"
                + "<p>" + u.celular + "</p>"
                + "<p>" + u.correo + "</p>"
                + "<hr>";
        }
    }    
}