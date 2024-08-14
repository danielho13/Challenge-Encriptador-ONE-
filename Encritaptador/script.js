const areaTexto = document.getElementById("area__texto");
const botonEncriptar = document.getElementById("boton__Encriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const mensaje = document.getElementById("mensaje");
const botonCopiar = document.getElementById("botonCopiar");
const muneco = document.getElementById("muneco");
const textoInfo = document.getElementById("textoInfo");

const codificacion = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
];

const esPantallaGrande = () => window.innerWidth > 768;

const ejecucion = (valorNuevo) => {
    mensaje.value = valorNuevo;
    mensaje.style.textAlign = "left"; 
    if (esPantallaGrande()) {
        muneco.style.display = "block";
    } else {
        muneco.style.display = "none";
    }
    muneco.style.display = "none"
    textoInfo.style.display = "none";
    botonCopiar.style.display = "block";
    areaTexto.value = "";
};

botonEncriptar.addEventListener("click", () => {
    let texto = areaTexto.value.toLowerCase();

    function encriptar(texto) {
        for (let i = 0; i < codificacion.length; i++) {
            if (texto.includes(codificacion[i][0])) {
                texto = texto.replaceAll(codificacion[i][0], codificacion[i][1]);
            }
        }
        return texto;
    }

    ejecucion(encriptar(texto));
});

botonDesencriptar.addEventListener("click", () => {
    let texto = areaTexto.value.toLowerCase();

    function desencriptar(texto) {
        for (let i = 0; i < codificacion.length; i++) {
            if (texto.includes(codificacion[i][1])) {
                texto = texto.replaceAll(codificacion[i][1], codificacion[i][0]);
            }
        }
        return texto;
    }

    ejecucion(desencriptar(texto));
});

botonCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(mensaje.value);
    alert("Texto copiado");
    mensaje.value = "";
    mensaje.style.textAlign = "center"; 
    textoInfo.style.display = "block";
    botonCopiar.style.display = "none";
    areaTexto.focus();
    if (esPantallaGrande()) {
        muneco.style.display = "block"; 
    }
});

window.addEventListener('load', () => {
    if (!esPantallaGrande()) {
        muneco.style.display = "none";
    }
});

window.addEventListener('resize', () => {
    if (!esPantallaGrande()) {
        muneco.style.display = "none";
    } else if (mensaje.value === "") {
        muneco.style.display = "block";
    }
});
