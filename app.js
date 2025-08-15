//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const amigos = []; // Array


function adicionarAmigo() {
    const input = document.getElementById('amigo'); // Selecionando dados escritos no Input
    const nome = input.value.trim(); // Tratando dados, antes de os enviar de fato ao Array

    if (nome) {
        amigos.push(nome); // Salvar dados no Array
        input.value = ''; // Apagar conteúdo do campo input
        atualizarLista();
    } else {
        alert("Ocorreu um erro, tente novamente!")
        return
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos'); // Selecionado a área para anexar os dados
    lista.innerHTML = ''; // Limpando 
    amigos.forEach(amigos => { // Percorrer o Array amigos
        const li = document.createElement('li'); // Criando um elemento li
        li.innerText = amigos; // Escrevendo no elemento li o conteúdo do Array amigos
        lista.appendChild(li); // Anexado o seguinte dado ao li criado
    })
}

function sortearAmigo() {
    // Percorrer
    if (amigos.length < 2) {
        alert("Ocorreu um erro, tente novamente!")
        return
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    console.log(sorteado)

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `O amigo sorteado foi: ${sorteado} 🎉😵‍💫🫦`;
    resultado.appendChild(li);
    console.log(`O amigo ${sorteado} foi removido da lista!`)
    amigos.splice(amigos.indexOf(sorteado), 1);

    atualizarLista();
}