const nome = "Marcelo Eltz"
let nome2 = ""
let pessoaDefault = {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "Programador"
}

let nomes = ["Marcelo Eltz", "Maria Silva", "Pedro Silva"];
let pessoas = [];

function alternarnome() {
    nome2 ="Maria Silva"
    console.log("valor alterado;")
    console.log(nome2)    
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome;")
    console.log(nome2)

}

function imprimirpessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome)
    
    console.log("Idade:");
    console.log(pessoa.idade)
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho)
}



console.log(nomes);

//imprimirpessoa(pessoaDefault);

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva")

//alternarnome();