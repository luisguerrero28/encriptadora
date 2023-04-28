// e --> enter
// o --> ober 
// i --> imes 
// a --> ai 
// u --> ufat 



function encriptar() {

    var texto = document.getElementById('texto').value;
    var texCifrado = texto.replaceAll(/e/igm,'enter');
    var texCifrado = texCifrado.replace(/o/igm,'ober');
    var texCifrado = texCifrado.replace(/i/igm,'imes');
    var texCifrado = texCifrado.replace(/a/igm,'ai');
    var texCifrado = texCifrado.replace(/u/igm,'ufat');

    //  document.getElementById('imgDer').style.display = "none";
    //  document.getElementById('texto').style.display = "none";
    document.getElementById('mensaje').innerHTML = texCifrado;
    document.getElementById('copiar').style.display = 'show';
    document.getElementById('copiar').style.display = 'inherit';

    var encriptarBoton =document.getElementById(texto);
    encriptarBoton.addEventListener("onclick",encriptar);
}


function desencriptar(){

    var texto = document.getElementById('texto').value;
    var texCifrado = texto.replace(/enter/igm,'e');
    var texCifrado = texCifrado.replace(/ober/igm,'o');
    var texCifrado = texCifrado.replace(/imes/igm,'i');
    var texCifrado = texCifrado.replace(/ai/igm,'a');
    var texCifrado = texCifrado.replace(/ufat/igm,'u');

    // document.getElementById('imgDer').style.display = "none";
    // document.getElementById('texto').style.display = "none";
    document.getElementById('mensaje').innerHTML = texCifrado;
    document.getElementById('copiar').style.display = 'show';
    document.getElementById('copiar').style.display = 'inherit';

    var desencriptarBoton =document.getElementById(texto);
    desencriptarBoton.addEventListener("click",desencriptar);
}


  function copiar(){

    mensaje.select();
    document.execCommand("copy");
 
    

    alert('se copio correctamente');

  }

  copiar.addEventListener('click', copiar())