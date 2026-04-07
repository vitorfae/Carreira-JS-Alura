const frutas = ['Uva', 'Banana', 'Kiwi', 'Maca', 'Morango']

// For desaclopado do array, baseado no tamanho do array
for(let i = 0; i < frutas.length;i++){
    console.log(`Indice ${i}: ${frutas[i]}`)
}

console.log('---------------------------------------')
console.log('Usando forEach:')
//console.log('---------------------------------------')

// forEach usa um callback, onde ele recebe os indices e os valores do array
//1º vem o valor do indice e em 2º vem o indice
frutas.forEach((valor, indice) => {
    console.log(`Indice ${indice}: ${valor}`)
});

console.log('---------------------------------------')
console.log('Usando for of:')

// Para cada Fruta dentro de fruta
for(const fruta of frutas){
    console.log(`Frutas da vez: ${fruta}`)
}