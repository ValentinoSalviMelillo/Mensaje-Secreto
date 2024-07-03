function secreto() {
    let mensajeCodificado = document.getElementById("frase").value;
    let mensajeAdecodificar = "";
    let res = "";
    for(let i = 0; i < mensajeCodificado.length; i++) {
        if(mensajeCodificado[i] == "(") { 
            let a = i; 
            while(a < mensajeCodificado.length && mensajeCodificado[a] != ")") {
                mensajeAdecodificar += mensajeCodificado[a];
                a++;
            }
            i = a;
            for(let b = mensajeAdecodificar.length - 1; b >= 0; b--) { 
                if(mensajeAdecodificar[b] != "(" && mensajeAdecodificar[b] != ")") {
                    res += mensajeAdecodificar[b];
                }
            }
            mensajeAdecodificar = "";
        } else {
            res += mensajeCodificado[i];
        }
    }
    alert(res);
}