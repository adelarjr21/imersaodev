// ALURAFLIX: FIRST EDITION

const
    btnFilmes = document.getElementById('btnFilmes'),
    btnClear = document.getElementById('btnClear');

// Add event listeners
btnFilmes.addEventListener('click', listaFilmes);
btnClear.addEventListener('click', limpaFilmes);

// Functions
function listaFilmes() {
    let output = document.getElementById('output'),
        listaFilmes = [
            "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
        ];

        for(let i = 0; i < listaFilmes.length; i++) {
            output.innerHTML += "<img class=imgFilmes src=" + listaFilmes[i] + ">";
        }

    // Buttons
    btnFilmes.disabled = true;
    btnClear.disabled = false;
}

function limpaFilmes() {
    output.innerHTML = '';

    // Buttons
    btnFilmes.disabled = false;
    btnClear.disabled = true;
}

// ALURAFLIX: SECOND EDITION

const
    btnAddFilmes = document.getElementById('addFilme'),
    btnLimpaFilmes = document.getElementById('limpaFilmes');

// Add event Listeners
btnAddFilmes.addEventListener('click', addFilmes);
btnLimpaFilmes.addEventListener('click', limparFilmes)

// Functions
function addFilmes() {
    let inputFilme = document.getElementById('filme');
    validaFilme(inputFilme.value);
    inputFilme.value = '';

    btnLimpaFilmes.disabled = false;
}

function mostrarFilmes(filme) {
    let listaFilmes = document.getElementById('listaFilmes'),
        elementoFilme = "<img class='imgFilmes' src=" + filme + ">";

        listaFilmes.innerHTML += elementoFilme;
}

function validaFilme(filme) {
    if(filme.endsWith(".jpg")) {
        mostrarFilmes(filme);
    } else {
        alert('Insira uma imagem válida..');
    }
}

function limparFilmes() {
    document.getElementById('listaFilmes').innerHTML = '';

    // Disable
    btnLimpaFilmes.disabled = true;
}