//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    const adicionarNomes = document.querySelector('input');
    const nome = adicionarNomes.value.trim()

    if (nome === '') {
        alert ('Por favor insira um nome.');
    } else if (amigos.includes(nome)) {
        alert ('Esse nome já está na lista.');
    } else {
        amigos.push(nome);
        atualizarLista();
        limparCampo();
    }
}
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(nomeAmigo => {
        const escolhido = document.createElement('li');
        escolhido.innerHTML = nomeAmigo;
        lista.appendChild(escolhido);
    })
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert ('Lista está vazia. Por favor preencha o campo.');
    } else {
        const nomeAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoEscolhido = amigos[nomeAleatorio];
        mostrarResultado(`Amigo sorteado é: ${amigoEscolhido}`);
    }
}
function limparLista() {
    amigos = [];
    atualizarLista();
    mostrarResultado('');
}
function mostrarResultado(mensagem) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = mensagem;
}
