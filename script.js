const desculpas = {

trabalho:[
"Meu computador atualizou sozinho.",
"O Excel simplesmente desapareceu.",
"Minha internet decidiu tirar férias.",
"Meu antivírus bloqueou tudo.",
"O sistema caiu exatamente na hora."
],

relacionamento:[
"Meu celular morreu.",
"Eu estava tentando escrever algo perfeito.",
"Eu pensei que era amanhã.",
"Acabei dormindo sem perceber.",
"Minha bateria acabou."
],

social:[
"Meu cachorro ficou doente.",
"O trânsito virou um caos.",
"Confundi completamente o horário.",
"Começou a chover absurdamente.",
"Meu transporte cancelou."
]

};

const absurdas=[

"Um pombo levou meu celular embora.",
"Fui sequestrado por uma reunião inesperada.",
"Meu gato deletou meu compromisso.",
"Um alien me pediu ajuda e perdi a hora.",
"Meu despertador entrou em greve.",
"Meu WiFi foi abduzido.",
"Um monge tibetano me fez refletir sobre a vida.",
"Meu café caiu no teclado e iniciou uma crise existencial.",
"Um cachorro roubou minha agenda.",
"Eu estava salvando o mundo em segredo."

];

function gerarDesculpa(){

const categoria=document.getElementById("categoria").value;

const modoAbsurdo=document.getElementById("modoAbsurdo").checked;

let lista=[];

if(modoAbsurdo){

lista=absurdas;

}else{

if(categoria==="todas"){

lista=[
...desculpas.trabalho,
...desculpas.relacionamento,
...desculpas.social
];

}else{

lista=desculpas[categoria];

}

}

const frase=lista[Math.floor(Math.random()*lista.length)];

document.getElementById("desculpa").innerText=frase;

}

function copiar(){

const texto=document.getElementById("desculpa").innerText;

navigator.clipboard.writeText(texto);

alert("Copiado!");

}

function whatsapp(){

const texto=document.getElementById("desculpa").innerText;

const url=`https://wa.me/?text=${encodeURIComponent(texto)}`;

window.open(url);

}

document.getElementById("gerar").addEventListener("click",gerarDesculpa);

document.getElementById("copiar").addEventListener("click",copiar);

document.getElementById("whatsapp").addEventListener("click",whatsapp);
