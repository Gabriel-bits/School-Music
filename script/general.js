
// contents alternative
// contants-right

var OrientationContentItens = document.getElementsByClassName("contents-right");
for (let ContentItem of OrientationContentItens){
    ContentItem.style.flexDirection = "row-reverse"
    ContentItem.style.textAlign = "end"
    
}

//Menu responsivo e acompanhável 

// function HeaderMovement(){
//     var header = document.getElementById("HeaderMover");
//     header.classList.toggle("sticky", window.scrollY > 0);
//     header.style.backgroundColor = "rgba(185, 186, 191, 1)"

// }

// window.addEventListener("scroll", HeaderMovement)

// Paleta de cores

var PaletaAzul = [
    "#07060D", 
    "#161426",
    "#252C40",
    "#3F4659",
    "#BABBBF"
]


function Paleta_de_cor(){
    // Corpo
    document.getElementById("Body").style.backgroundColor = PaletaAzul[3]
    // Cabeçalho
    document.getElementById("Header").style.backgroundColor = PaletaAzul[0]
    // Botao
    document.getElementById("Botao").style.backgroundColor = PaletaAzul[3]
    // Banner
    document.getElementById("Banner").style.backgroundColor = PaletaAzul[2]
    // Fonte Cabeçalho
    const TextoCabecalho = document.getElementsByClassName("TextoCabecalho")
    for (let TextoColor of TextoCabecalho) {
        TextoColor.style.color = "snow"
    }
    // Fonte Banner
    const TextoBanner = document.getElementsByClassName("TextoCabecalho")
    for (let TextoColor of TextoCabecalho) {
        TextoColor.style.color = "snow" //"#D9D3C1"
    }
    // Fonte Boxes
    const TextoBoxes = document.getElementsByClassName("TextoBoxes")
    for (let TextoColor of TextoBoxes) {
        TextoColor.style.color = "snow"
    }

    // document.getElementById("TextoCabecalho").style.color = PaletaAzul[4]
}

Paleta_de_cor()