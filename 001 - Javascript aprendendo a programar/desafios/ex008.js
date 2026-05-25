//AT-01 -> Usando destructuring para separa o objeto pessoas em diversas variáveis
const pessoa = {
    nome: 'Camila',
    idade: '29',
    email: 'milaverruck@gmail.com'
}

const {nome, idade, email} = pessoa

console.log(nome)
console.log(idade)
console.log(email)

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')

//AT-02 -> Usando destructuring em array, separando lista em várias variáveis
const linguagens = ['Python', 'COBOL', 'JavaScript']

const [linguagem1, linguagem2, linguagem3] = linguagens

console.log(linguagem1)
console.log(linguagem2)
console.log(linguagem3)

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')

//AT-03 -> Rest operator em funçao de soma de parametros
let resultado = 0

function somaArray(...numeros){
    for (i=0; i<numeros.length; i++){
        resultado += numeros[i]
    }
    console.log(resultado)
}

somaArray(10, 2, 5, 3, 7)

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')

//AT-04 -> spread operator em arrays, juntando array de frutas
const frutas1 = ['Maça', 'Pera', 'Banana']
const frutas2 = ['Melancia', 'Uva', 'Kiwi']

const todasAsFrutas = [...frutas1, ...frutas2]

console.log(todasAsFrutas)

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')

//AT-05 -> Spread com objetos
const person = {nome: 'Vitor'}
const info = {idade: 21}

const pessoaComInfo = {...person, ...info}

console.log(pessoaComInfo)

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')

//AT-06 -> Função que imprime nome, mas se estiver vazio imprime visitante
function imprime(nome = 'Visitante'){
    console.log(`Olá, ${nome}`)
}

imprime('Vitor') // imprime o nome passado 
imprime() //imprime visitante caso não passe parametros

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')

//AT-07 -> Trabalhando com data
const dataAtual = new Date
console.log(dataAtual)

const ano = dataAtual.getFullYear()
const mes = dataAtual.getMonth()
const dia = dataAtual.getDate()

console.log(`${dia}/${mes+1}/${ano}`)
console.log('Data formatada BR:', dataAtual.toLocaleString('pt-BR'))

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')

//AT-08
import {somar} from '../calculadora/operacoesMatematicas.js'

somar(10, 12)

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')

//AT-09 -> Objeto e função construtora - Criar função ocnstrutra que recebe e armazena as propriedades do objeto, criado objeto livro1 e 2
function livro(titulo, autor) {
    this.titulo = titulo
    this.autor = autor
}

// Criando objetos
const livro1 = new livro('Dom Casmurro', 'Machado de Assis')
const livro2 = new livro('Harry Potter', 'J.K. Rowling')


console.log(livro1)
console.log(livro2)

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')

//AT-10 -> Adicionando função descrever na função construtora livros
function livros(titulo, autor) {
    this.titulo = titulo
    this.autor = autor
    this.descrever = function (){
        return `Ola, o nome do livro é ${this.titulo} e o autor é ${this.autor}`
    }
}

// Criando objetos
const livros1 = new livros('Dom Casmurro', 'Machado de Assis')
const livros2 = new livros('Harry Potter', 'J.K. Rowling')


console.log(livros1)
console.log(livros2)

console.log(livros1.descrever())
console.log(livros2.descrever())