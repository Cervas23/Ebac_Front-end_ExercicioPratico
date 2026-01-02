let respostaIA = Math.floor(Math.random() * 100) + 1;
    //console.log(respostaIA);
let vidas = 5;
    //console.log(vidas);
const numerosChutados = [];
const botaoChutar = document.getElementById("btnChute");
document.getElementById("numVidas").textContent = "Você tem " + vidas + " tentativas restantes"

function Chutar(){
    let chute = Number(document.getElementById("valorChute").value);

    numerosChutados.push(chute)
    document.getElementById("chutesFeitos").textContent = numerosChutados

    if(chute == respostaIA){
        document.getElementById("resultado").textContent = "Você acertou!"
        botaoChutar.disabled = true;
    }else if(chute < respostaIA){
        document.getElementById("resultado").textContent = "O número secreto é maior"
    }else if(chute > respostaIA){
        document.getElementById("resultado").textContent = "O número secreto é menor"
    }
    vidas--
    //console.log(vidas);
    if(vidas <= 0 && chute != respostaIA) {
        document.getElementById("resultado").textContent = "Você perdeu! O número secreto era " + respostaIA
        botaoChutar.disabled = true;
    }

    document.getElementById("numVidas").textContent = "Você tem " + vidas + " tentativas restantes"
    document.getElementById("valorChute").value = '';
}

function recomecar(){
    numerosChutados.length = 0;
    botaoChutar.disabled = false;
    vidas = 5;
    //console.log(vidas);
    respostaIA = Math.floor(Math.random() * 100) + 1;
    //console.log(respostaIA)
    document.getElementById("chutesFeitos").textContent = "";
    document.getElementById("resultado").textContent = "";
    document.getElementById("numVidas").textContent = "Você tem " + vidas + " tentativas restantes"
}

function dica(){
    let menor = respostaIA - 10;
    let maior = respostaIA + 10;

    if(menor < 0) {
        menor = 0;
    }
    if(maior > 100){
        maior = 100;
    }
    alert('O número sorteado começa em ' + menor + ' até ' + maior + '.');
}

