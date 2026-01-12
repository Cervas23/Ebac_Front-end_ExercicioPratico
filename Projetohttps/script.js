//Pegar o nome e email do cliente
const infoCliente = document.getElementById("listaClientes");

fetch("https://crudcrud.com/api/45ca11bda4bb486f8335854d8b1f6170/tarefas")
.then(resposta => resposta.json())
.then((listaClientes) => {

    listaClientes.forEach(cliente => {
      const line = document.createElement("li");
      line.innerHTML = `${cliente.nome} - ${cliente.contato} <button onclick="excluir('${cliente._id}', this)" class="btn_x">X</button>`;
      infoCliente.appendChild(line);
    });
})

document.getElementById("adicionar").addEventListener("click", ()=>{
  const nomeCliente = document.getElementById("nome").value;
  const emailCliente = document.getElementById("email").value;
  //lembrando que o fetch naturalmente já faz o método GET, mas pode fazer os outros também
  fetch("https://crudcrud.com/api/45ca11bda4bb486f8335854d8b1f6170/tarefas", {

    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      nome: nomeCliente,
      contato: emailCliente
    })
  })
  .then(resposta => resposta.json())
  .then((cliente) => {
    const line = document.createElement("li");
    line.innerHTML = `${cliente.nome} - ${cliente.contato} <button onclick="excluir('${cliente._id}', this)" class="btn_x">X</button>`;
    infoCliente.appendChild(line);
  })
})

function excluir(id, botao){
  //console.log(id)
  const li = botao.closest("li");
  fetch(`https://crudcrud.com/api/45ca11bda4bb486f8335854d8b1f6170/tarefas/${id}`, {

    method: "DELETE"

  })
  .then(response => {
  // Verifica se a requisição foi bem-sucedida (status 200-299)
  if (!response.ok) {
    throw new Error(`Erro HTTP! Status: ${response.status}`);
  }
  li.remove();
  })
  .then(data => {
    console.log('Recurso deletado com sucesso:', data);
  })
  .catch(error => {
    console.error('Falha ao deletar o recurso:', error);
  });
}