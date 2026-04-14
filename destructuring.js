const pessoa = {
    nome: 'Vitor',
    idade: 21,
    profissao: 'DEV'
}

//console.log(pessoa.nome)
//console.log(pessoa.idade)

//Declaração para objeto, se fosse array era []
//Criando novas consts, para armazenar nome e idade
const {nome, idade} = pessoa

console.log(nome)
console.log(idade)

//EX de usabilidade:

function saudacao(pessoa){
    console.log('olá,', pessoa.nome)
}

saudacao(pessoa)