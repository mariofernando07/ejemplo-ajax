var request = new XMLHttpRequest();


function loadTxt() {
    alert("entro");
    request.onreadystatechange = processTxt();//avisa el estado de la peticion ajax. Escucha cada vez que hay un cambio en el request
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