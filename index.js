const titulo = document.getElementById('titulo')

function definirtitulo() {
    const hora = new Date().getHours()
    if (hora < 12 && hora > 5) {
        titulo.innerHTML = "Bom dia!"
    }
    else if (hora >= 12 && hora < 18) {
        titulo.innerHTML = "Boa tarde!"
    }
    else if (hora >= 18 || hora < 6) {
        titulo.innerHTML = "Boa noite!"
    }
}

definirtitulo()

function definirTexto() {
    const horasP = document.getElementById('horas')
    var horas = new Date().getHours()
    var minutos = new Date().getMinutes()
    horasP.innerHTML = "Agora são " + horas + " horas e " + minutos + " minutos."
}

setInterval(definirTexto, 500)

function youtube(){
    window.location.href = "https://youtube.com"
}

function twitter(){
    window.location.href = "https://twitter.com"
}

function github(){
    window.location.href = "https://github.com"
}

function ulife(){
    window.location.href = "https://ulife.com.br"
}

function multicanais(){
    window.location.href = "https://multicanais.com"
}