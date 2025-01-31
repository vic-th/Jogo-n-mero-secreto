let listaDeNúmerosSorteado = [];
let númerolimite = 10
let numeroSecreto = NumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.5; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    } 
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "você acertou!");
        
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        
        let mensagemTentativas = `parabens Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        
        exibirTextoNaTela("p", mensagemTentativas);
        
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor que o escolhido");} 
            else { exibirTextoNaTela('p', "O número secreto é maior que esse");}
        
            tentativas++;
        limparCampo();
    }
}

function NumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * númerolimite + 1);
   let quantidadeDeElementosnaLista = listaDeNúmerosSorteado.length;

   if (quantidadeDeElementosnaLista == númerolimite) {
    listaDeNúmerosSorteado = []
   }
if (listaDeNúmerosSorteado.includes(numeroEscolhido)) {
    return NumeroAleatorio();
}else {
    listaDeNúmerosSorteado.push(numeroEscolhido);
    console.log(listaDeNúmerosSorteado);
    return numeroEscolhido;
}
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = NumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true)
}






