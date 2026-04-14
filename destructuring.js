//DESTRUCTURING:
// Desestruturacao de array e objetos

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

// Assim funciona, mas tem manera melhor
// function saudacao(pessoa){
//     console.log('olá,', pessoa.nome)
// }

// saudacao(pessoa)

// Maneira ideal
// Recebe um objeto como parametro, mas so vamos utilizar o atributo NOME do objeto passado
function saudacao({nome}){
    console.log('olá,', nome)
}

saudacao(pessoa)

// Pegando nome e idade de um objeto
function saudacaoEIdade({nome, idade}){
    console.log(`Ola ${nome}, voce tem ${idade} anos de idade`)
}

saudacaoEIdade(pessoa)

//--------------------------//
// TESTANDO COM ARRAY

const frutas = ['Uva', 'Banana']

const [primeira, segunda] = frutas

// O que esta em cima seria a mesma coisa que o de baixo
// const primeira = frutas[0]
// const segunda = frutas[1]