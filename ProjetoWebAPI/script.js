//"ouvir" o input do cep
document.getElementById("cep").addEventListener("blur", (event) => {
    const inputUser = event.target;
    const cepUser = inputUser.value;
    //validar o cep
    if(!(cepUser.length === 8)){
        return;
    }
    //procurar cep no viacep via fetch
    fetch(`https://viacep.com.br/ws/${cepUser}/json/`)
        .then(response => response.json())
        .then(dado => {
            //verificar se o cep foi realmente encontrado
            if(!dado.erro){
                document.getElementById("logradouro").value = dado.logradouro;
                document.getElementById("bairro").value = dado.bairro;
                document.getElementById("cidade").value = dado.localidade;
                document.getElementById("estado").value = dado.estado;
            }else{
                alert("CEP não encontrado.");
            }
        })
        .catch(error => console.error("Erro ao achar o CEP:", error));

})

//salvar em localstorage os inputs
const form = document.getElementById("formCad");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // impede recarregar a página

  const cep = document.getElementById("cep").value;
  const logradouro = document.getElementById("logradouro").value;
  const bairro = document.getElementById("bairro").value;
  const cidade = document.getElementById("cidade").value;
  const estado = document.getElementById("estado").value;
  const numero = document.getElementById("numero").value;

  localStorage.setItem("cep", cep);
  localStorage.setItem("logradouro", logradouro);
  localStorage.setItem("bairro", bairro);
  localStorage.setItem("cidade", cidade);
  localStorage.setItem("estado", estado);
  localStorage.setItem("numero", numero);

  alert("Dados salvos com sucesso!");
});

//Puxar  elementos salvos pelo localStorage
window.addEventListener("DOMContentLoaded", function () {
  const cepSalvo = localStorage.getItem("cep");
  const logradouroSalvo = localStorage.getItem("logradouro");
  const bairroSalvo = localStorage.getItem("bairro");
  const cidadeSalvo = localStorage.getItem("cidade");
  const estadoSalvo = localStorage.getItem("estado");
  const numeroSalvo = localStorage.getItem("numero");

  if (cepSalvo) {
    document.getElementById("cep").value = cepSalvo;
  }

  if (logradouroSalvo) {
    document.getElementById("logradouro").value = logradouroSalvo;
  }
  if (bairroSalvo) {
    document.getElementById("bairro").value = bairroSalvo;
  }

  if (cidadeSalvo) {
    document.getElementById("cidade").value = cidadeSalvo;
  }
  if (estadoSalvo) {
    document.getElementById("estado").value = estadoSalvo;
  }

  if (numeroSalvo) {
    document.getElementById("numero").value = numeroSalvo;
  }
});

