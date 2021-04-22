const
    cartaPaulo = {
        nome: "Seiya de Pegaso",
        imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
        atributos: {
            ataque: 80,
            defesa: 60,
            magia: 90
        }
    },
    cartaRafa = {
        nome: "Bulbasauro",
        imagem: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
        atributos: {
            ataque: 70,
            defesa: 65,
            magia: 85
        }
    },
    cartaGui = {
        nome: "Lorde Darth Vader",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
        atributos: {
            ataque: 88,
            defesa: 62,
            magia: 90
        }
    },
    cartaLol = {
        nome: "Caitlyn",
        imagem: "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
        atributos: {
            ataque: 95,
            defesa: 40,
            magia: 10
        }
    },
    cartaNaruto = {
        nome: "Naruto",
        imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
        atributos: {
            ataque: 80,
            defesa: 60,
            magia: 100
        }
    },
    cartaHarry = {
        nome: "Harry Potter",
        imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
        atributos: {
            ataque: 70,
            defesa: 50,
            magia: 95
        }
    },
    cartaBatman = {
        nome: "Batman",
        imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
        atributos: {
            ataque: 95,
            defesa: 70,
            magia: 0
        }
    },
    cartaMarvel = {
        nome: "Capitã Marvel",
        imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
        atributos: {
            ataque: 90,
            defesa: 80,
            magia: 0
        }
    },
    cartas = [cartaPaulo, cartaRafa, cartaGui, cartaLol, cartaNaruto, cartaHarry, cartaBatman, cartaMarvel];

let pontosJogador = 0,
    cartaMaquina,
    cartaJogador,
    pontosMaquina = 0;

atualizaQuantidadeDeCartas();

// Declarando botoes
const
    btnSortear = document.getElementById('btnSortear'),
    btnJogar = document.getElementById('btnJogar'),
    btnProximaRodada = document.getElementById('btnProximaRodada');

// Adicionando evento aos botoes
btnSortear.addEventListener('click', sortearCarta);
btnJogar.addEventListener('click', jogar);
btnProximaRodada.addEventListener('click', proximaRodada);

// Definindo funções para habilitar/desabilitar botoes
function habilitaBotaoJogar() {
    btnJogar.disabled = false;
}

function desabilitaBotaoJogar() {
    btnJogar.disabled = true;
}

function habilitaBotaoSortear() {
    btnSortear.disabled = false;
}

function desabilitaBotaoSortear() {
    btnSortear.disabled = true;
}

function habilitaBotaoProximaRodada() {
    btnProximaRodada.disabled = false;
}

function desabilitaBotaoProximaRodada() {
    btnProximaRodada.disabled = true;
}

// Functions
function atualizaQuantidadeDeCartas() {
    const
        divQuantidadeCartas = document.getElementById('quantidade-cartas'),
        html = 'Quantidade de cartas no jogo: ' + cartas.length;

    divQuantidadeCartas.innerHTML = html;
}

function atualizaPlacar() {
    const
        divPlacar = document.getElementById('placar'),
        html = 'Jogador ' + pontosJogador + ' / ' + pontosMaquina + ' Máquina';

    divPlacar.innerHTML = html;
}

function sortearCarta() {
    let numeroCartaMaquina = parseInt(Math.random() * cartas.length),
        botaoSortear = document.getElementById('btnSortear');
    cartaMaquina = cartas[numeroCartaMaquina];
    cartas.splice(numeroCartaMaquina, 1);

    let numeroCartaJogador = parseInt(Math.random() * cartas.length);
    cartaJogador = cartas[numeroCartaJogador];
    cartas.splice(numeroCartaJogador, 1);

    // Buttons
    desabilitaBotaoSortear();
    habilitaBotaoJogar();

    exibeCartaJogador();

    botaoSortear.style.display = 'none';
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    let radioAtributo = document.getElementsByName('atributo')
    for (let i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    const
        divResultado = document.getElementById('resultado'),
        atributoSelecionado = obtemAtributoSelecionado();

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu!</p>'
        pontosJogador++;
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu!</p>'
        pontosMaquina++;
    } else {
        htmlResultado = '<p class="resultado-final">Empatou!</p>'
    }

    if (cartas.length == 0) {
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class"resultado-final">VENCEDOR!</p>'
        } else if (pontosJogador == pontosMaquina) {
            htmlResultado = '<p class="resultado-final">EMPATE!</p>'
        } else {
            htmlResultado = '<p class="resultado-final">PERDEDOR :(</p>'
        }

        exibeCartaMaquina();
    } else {
        exibeCartaMaquina();
        habilitaBotaoProximaRodada();
    }

    habilitaBotaoProximaRodada();
    desabilitaBotaoJogar();

    divResultado.innerHTML = htmlResultado;

    if (cartas.length === 0) {
        desabilitaBotaoProximaRodada();
    }

    atualizaPlacar();
    atualizaQuantidadeDeCartas();
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
    const
        divCartas = document.getElementById('cartas'),
        divResultado = document.getElementById('resultado');

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div>
        <div id="carta-maquina" class="carta"></div>`;

    habilitaBotaoSortear();
    desabilitaBotaoJogar();
    desabilitaBotaoProximaRodada();

    divResultado.innerHTML = '';

    sortearCarta();
}