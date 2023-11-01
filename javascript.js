let btAdicionar = document.getElementById("btAdicionar")
let btUrgencia = document.getElementById("btUrgencia")
let btAtender = document.getElementById("btAtender")

let pacientes = [] //vetor global


function addPacientes(){
    // cria referência aos elementos de entrada e saída de dados da página
    let inPaciente = document.getElementById("inPaciente")
    let outLista = document.getElementById("outLista")

    let nome = inPaciente.value //Obtem nome do paciente

    //verifica o preenchimento do nome do paciente
    if(nome == ""){
        alert("Informe o nome do paciente")
        inPaciente.focus()
        return
    }

    pacientes.push(nome) // adiciona o nome no final do vetor

    let lista = "" // String para concatenar pacientes

    //percorre os elementos do vetor
    for(let i = 0; i < pacientes.length; i++){
        lista += (i+1) + ". " + pacientes[i] + "\n"
    }

    // altera o conteúdo da tag outLista
    outLista.innerText = lista

    // limpa campo e posiciona cursor em inPaciente
    inPaciente.value = ""
    inPaciente.focus()
}

btAdicionar.addEventListener("click", addPacientes)


function atendimentoUrgente(){
    // cria referência aos elementos de entrada e saída de dados da página
    let inPaciente = document.getElementById("inPaciente")
    let outLista = document.getElementById("outLista")

    let nome = inPaciente.value //Obtem nome do paciente

    //verifica o preenchimento do nome do paciente
    if(nome == ""){
        alert("Informe o nome do paciente")
        inPaciente.focus()
        return
    }

    pacientes.unshift(nome) // adiciona o nome no ínicio do vetor

    let lista = "" // String para concatenar pacientes

    //percorre os elementos do vetor
    for(let i = 0; i < pacientes.length; i++){
        lista += (i+1) + ". " + pacientes[i] + "\n"
    }

    // altera o conteúdo da tag outLista
    outLista.innerText = lista

    // limpa campo e posiciona cursor em inPaciente
    inPaciente.value = ""
    inPaciente.focus()
}

btUrgencia.addEventListener("click", atendimentoUrgente)


function atenderPaciente(){
    // verifica se vetor pacientes está vazio
    if(pacientes.length == ""){
        alert("Não existe paciente na lista de espera")
        inPaciente.focus()
        return
    }

    // verifica se vetor pacientes está vazio
    let outAtendimento = document.getElementById("outAtendimento")
    let outLista = document.getElementById("outLista")

    // remove paciente do início da fila (e obtém nome)
    let atender = pacientes.shift()
    //Exibe o nome do paciente em atendimento
    outAtendimento.innerText = atender

    //String para concatenar pacientes
    let lista = ""

    //Percorre os elementos do valor
    for(let i = 0; i < pacientes.length; i++){
        lista += (i+1) + ". " + pacientes[i] + "\n"
    }
    // altera o conteúdo da tag outLista
    outLista.textContent = lista
}

btAtender.addEventListener("click", atenderPaciente)
