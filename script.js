const desculpas = {

trabalho: [

"Meu computador decidiu atualizar exatamente quando eu ia terminar.",
"O arquivo simplesmente desapareceu do nada.",
"A internet caiu bem na hora que eu estava enviando.",
"Meu gato caminhou no teclado e bagunçou tudo.",
"O sistema travou e perdi tudo que tinha feito.",
"Recebi uma ligação urgente da família.",
"Estava esperando uma confirmação que nunca chegou.",
"Meu antivírus bloqueou o arquivo sem motivo.",
"O Excel resolveu fazer greve hoje.",
"Meu alarme não tocou por causa da atualização do celular."

],

relacionamento: [

"Meu celular morreu e eu só vi sua mensagem agora.",
"Eu estava tentando escrever algo perfeito e acabei demorando demais.",
"Fiquei sem bateria e sem carregador.",
"Meu dia virou uma loucura inesperada.",
"Eu pensei que era amanhã.",
"Estava resolvendo um problema familiar.",
"Acabei dormindo sem perceber.",
"Eu reli sua mensagem várias vezes antes de responder.",
"Meu cérebro simplesmente entrou em modo avião.",
"Eu estava tentando organizar minhas ideias."

],

social: [

"Meu cachorro ficou doente e precisei cuidar dele.",
"Acabei ajudando um amigo numa emergência.",
"O trânsito virou um caos absurdo.",
"Eu confundi completamente o horário.",
"Começou a chover muito e fiquei preso.",
"Minha bateria acabou e perdi contato.",
"Acordei com uma dor de cabeça gigante.",
"Meu transporte cancelou de última hora.",
"Acabei ficando preso em outra reunião.",
"Um imprevisto familiar apareceu."

]

};

function gerarDesculpa(){

const categoria = document.getElementById("categoria").value;

let lista = [];

if(categoria === "todas"){
lista = [
...desculpas.trabalho,
...desculpas.relacionamento,
...desculpas.social
];
}else{
lista = desculpas[categoria];
}

const aleatoria = lista[Math.floor(Math.random()*lista.length)];

document.getElementById("desculpa").innerText = aleatoria;

}

function copiarDesculpa(){

const texto = document.getElementById("desculpa").innerText;

navigator.clipboard.writeText(texto);

alert("Desculpa copiada!");

}

document.getElementById("gerar").addEventListener("click", gerarDesculpa);
document.getElementById("copiar").addEventListener("click", copiarDesculpa);