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


//AT-08
