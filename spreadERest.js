// ! REST parece encapsular os elementos. junta vários dados em um array por exemplo a função somarTudo()
// ! SPREAD espalha os valores (desempacota), exemplo juntar arrays ou passar argumento de funções como no exemplo do Math.max

//Criado objeto 1
const camila1 = {
    nome: 'Camila',
    idade: 29,
    profissao: 'Psicologa'
}

//Criando objeto 2 e recebendo o valor da primeira
// ! NÃO CLONA - APENAS ELE ESTÁ REFERENCIANDO O MESMO OBJETO, AMBOS REFERENCIAM O MESMO OBJETO.
const camila2 = camila1 

camila2.idade = 30

//Exibindo objeto 1
console.log(camila1)

//Exibindo objeto 2
console.log(camila2)

//Criando espaçamento entre exibiçao do console.log
console.log('--------------------------------------------')
console.log('              CLONANDO OBJETOS              ')

// ? CLONANDO OBJETOS
// criando o objeto 1
let vitor1 = {
    nome: 'Vitor',
    idade: 21,
    profissao: 'Desenvolvedor Pleno'
}

// ! Usando Spread Operator (significa espalhar)
// cria um outro objeto totalmente desvinculado do primeiro
const vitor2 = {...vitor1}

vitor2.idade = 50

//Exibindo objeto 1
console.log(vitor1)

//Exibindo objeto 2
console.log(vitor2)

console.log('--------------------------------------------')
console.log('             ATUALIZANDO OBJETO             ')

//Atualizando dados de Vitor1
vitor1 = {
    ...vitor2, // Copiando dados do objeto 2, já que ambos são iguais
    profissao: 'Desenvolvedor Senior', //Atualizando cargo
    possuiCNH: true //Adicionando novo valor no objeto 1
}

//Exibindo objeto 1
console.log(vitor1)

console.log('--------------------------------------------')
console.log('             EXEMPLOS DE REST               ')

// Caso precise separar em partes, exibir só o nome ou todo o restante
const {nome, ...restante} = vitor1

console.log(nome)
console.log(restante)

//Parâmetros de função (quando você não sabe quantos argumentos virão):
function somarTudo(...numeros) {
  // 'numeros' é agora um array contendo todos os argumentos passados
  return numeros.reduce((total, num) => total + num, 0);
}
console.log(somarTudo(1, 2, 3, 4)); // Resultado: 10


//Desestruturação de Arrays (pegando o "resto" dos itens):
const frutas = ["Maçã", "Banana", "Laranja", "Uva"];
const [primeira, segunda, ...outrasFrutas] = frutas;

console.log(primeira);      // "Maçã"
console.log(outrasFrutas); // ["Laranja", "Uva"] (Agrupou o resto)

//Desestruturação de objetos
const carro = { marca: "Ford", modelo: "Ka", ano: 2020 };
const { marca, ...detalhes } = carro;

console.log(detalhes); // { modelo: 'Ka', ano: 2020 }


console.log('--------------------------------------------')
console.log('             EXEMPLOS DE SPREAD             ')

const pares = [2, 4, 6];
const impares = [1, 3, 5];
// "Espalha" os elementos dos arrays dentro de um novo array
const todosOsNumeros = [...impares, ...pares]; 

console.log(todosOsNumeros)

//Exemplo com função
const numeros = [10, 5, 20];
// Math.max não aceita um array, ele aceita números separados. O spread resolve isso.
const maximo = Math.max(...numeros); 
console.log(maximo)
// Equivalente a Math.max(10, 5, 20) -> Resultado: 20