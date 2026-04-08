const pessoa = {
    nome: 'Vitor',
    idade: 21,
    pets: ['Kick', 'Mimoso', 'Atena'],
    nacionalidade: 'Brasileiro'
}

//SÓ FUNCIONA COM OBJETOS
//Quero precorrer apenas as chaves do objeto.
for(const chave in pessoa){
    console.log('Chave: ',chave) //Exibe a chave, é tipo um indice
    console.log('Valor', pessoa[chave]) //Exibe o valor da chave, é tipo o valor do indice
}

//Para pegar todas as chaves do objeto
const chaves = Object.keys(pessoa) //Usar objeto global chamado object e usa o metodo keys e entre parenteses o objeto desejado

//Para pegar todos os valores do objeto
const valores = Object.values(pessoa) //Usar objeto global chamado object e usa o metodo values e entre parenteses o objeto desejado

//Para pegar o todas as chaves e valores
const entradas = Object.entries(pessoa) //Usar objeto global chamado object e usa o metodo entries e entre parenteses o objeto desejado

console.log('Chaves: ', chaves)
console.log('Valores: ', valores)
console.log('Entradas: ', entradas)

//NOTACAO DE COLCHETES = pessoa[idade] -> Usado quando a chave tem espaço ou caracter especial

//NOTACAO DE PONTO = pessoa.idade