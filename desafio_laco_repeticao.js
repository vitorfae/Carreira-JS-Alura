//Contar quantos numeros pares temos entre 0 e 100

let totalNumerosPares = 0
let totalNumeroImpares = 0

//Lacos de repeticao
for(let contador = 0; contador <= 100; contador++){
    if (contador % 2 == 0){
        totalNumerosPares++
    }else{
        totalNumeroImpares++
    }
    //console.log(contador)
}
console.log(`No for temos um total de ${totalNumerosPares} numeros pares e ${totalNumeroImpares} numeros impares`)

console.log('---------------------------------')

// zerando valores para proximo laco
totalNumerosPares = 0
totalNumeroImpares = 0
let indice = 0
while(indice <= 100){
    if (indice % 2 == 0){
        totalNumerosPares++
    }else{
        totalNumeroImpares++
    }
    indice++
}
console.log(`No while temos um total de ${totalNumerosPares} numeros pares e ${totalNumeroImpares} numeros impares`)

console.log('---------------------------------')

// zerando valores para proximo laco
totalNumerosPares = 0
totalNumeroImpares = 0
let ind = 0
do{
    if (ind % 2 == 0){
        totalNumerosPares++
    }else{
        totalNumeroImpares++
    }
    ind++
}while(ind <= 100)
console.log(`No Do while temos um total de ${totalNumerosPares} numeros pares e ${totalNumeroImpares} numeros impares`)