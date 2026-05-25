//Declaração de array frutas
const frutas = ['Maça', 'Banana', 'Goiaba']

//Declaração de array maisFrutas
const maisFrutas = ['Uva', 'Morango', 'Kiwi']

//Clonando o array frutas.
const clone = [...frutas]

//Clonando todas as frutas - (Espalhando todas as frutas no array todasAsFrutas)
const todasAsFrutas = [...frutas, ...maisFrutas]

//Adicionando fruta no array, mas após o clone, ou seja, não aparece no console
frutas.push('Pitanga')

//Printa os arrays
console.log(frutas)
console.log(maisFrutas)
console.log(clone)
console.log(todasAsFrutas)

console.log('---------------------------------------------------')
console.log('                   REST/(RESTO)                    ')

//---------------------------REST

const [primeira, segunda, ...restante] = todasAsFrutas

console.log(primeira)
console.log(segunda)
console.log(restante)