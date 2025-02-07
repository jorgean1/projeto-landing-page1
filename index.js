var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var SetaDireita = window.document.getElementById("SetaDireita")
var SetaEsquerda = window.document.getElementById("SetaEsquerda")
function RolarParaDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    SetaDireita.style = "display:none";"magin-top: 55px"
    SetaEsquerda.style= "display:flex"
}
function RolarParaEsquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    SetaDireita.style = "display:flex"; 
    SetaEsquerda.style= "display:none"
}