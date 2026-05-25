//AT-01 - Criar objeto com minhas caracteristicas

const pessoa = {
    nome: 'Vitor',
    idade: 21,
    profissao: 'Desenvolvedor COBOL Pleno'
}
console.log('Valores inciais',pessoa)

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')


//AT-02 - Acessar a propriedade nome e exibir no console
console.log('Exibindo nome do objeto pessoa com notação de ponto:', pessoa.nome) // Usando notação de ponto
//-------------------------------------------------
console.log('Exibindo nome do objeto pessoa com notação de colchetes:', pessoa["nome"]) //Usando notação de colchetes

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')


//AT-03 - Atualizando valor da idade no objeto pessoa
pessoa.idade = 15

//verificando se valor da idade foi alterado
console.log('Valor após alterado idade',pessoa)

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')


//AT-04
//Criando novo atributo chamado cidade
pessoa.cidade = 'Campos Novos'

//Verificando se foi adicionado o atribito cidade no objeto pessoa com o valor 'Campos Novos'
console.log('Verificando se foi adicionado o atributo cidade:', pessoa)

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')


//AT-05 - criar funcao que recebe o objeto e a função deve retornar uma frase montada com strings
function exibeAtributos_Valores(objeto) {
    return `Meu nome é ${objeto.nome}, tenho ${objeto.idade} anos de idade e trabalho como ${objeto.profissao}`
}

//Chamada para executar a função e ser exibida.
console.log(exibeAtributos_Valores(pessoa))

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')


//AT-06 - Criar array com 3 pessoas dentro dele

const pessoas = [
    {nome: 'Lucia', idade: 51},
    {nome: 'Camila', idade: 28},
    {nome: 'Luis', idade: 15}
]
//Verificando se criação funcionou
console.log(pessoas)

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')


console.log('Verificando maiores de idade dentro de array')
//AT-07 - filtrar maiores de idade do array
for(const pessoa of pessoas){
    if (pessoa.idade >= 18){
        console.log(`${pessoa.nome} é maior de idade`)
    }
}

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')


//AT-08 - Criando objeto usuario e definido saudacao como uma funçao 
const usuario = {
    nome: 'Vitor',
    saudacao: function(){
        console.log('Exibe mensagem da funcao armazenada em saudação e o', this.nome)
    }
}
//Fazer a chamada da funçao com objeto . o atributo/chave sendo chamado com () pois ele tem uma função.
//Tentei chamar com o console.log antes da chamada, mas da erro, pois a função já tem.
usuario.saudacao()

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')


//AT-09
//For in só funciona com objetos - para chave em pessoa - ele retorna o atributo/chave.
//Usamos chave com notacao de colchetes no objeto pessoa, para trazer o valor daquela chave.
for(let chave in pessoa){
    console.log(`Chave: ${chave}, valor: ${pessoa[chave]}`)
}

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')


//AT-10 - Criando objeto produto para ver o valor total da compra
const produto = {
    preco: 100,
    quantidade: 2
}

//Usei um for para adicionar os valores em um totalizador
let valorTotFor = 0
for(let i = 0; i < produto.quantidade; i++){
    valorTotFor += produto.preco
}
console.log(`O valor total da compra com for é: R$${valorTotFor}`)

// Usei um let direto para a multiplicação
let valorTot = produto.preco * produto.quantidade
console.log('Calculo direto com let', valorTot)