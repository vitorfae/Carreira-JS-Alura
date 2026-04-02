let contador = 1

//Usando while, testa antes de percorrer
while(contador <= 10){
    console.log(`Numero atual while: ${contador}`)
    contador++
}

console.log('---------------------------------')

let numero = 1
//Usando Do while, testa apos percorrer o while
do{
    console.log(`numero atual Do While ${numero}`)
    numero++
}while(numero <= 10)

console.log('---------------------------------')

let paresImpares = 0

while(paresImpares <= 15){
    if (paresImpares % 2 == 0){
        console.log(`Numero atual while ${paresImpares} e par`)
    }else{
        console.log(`Numero atual while ${paresImpares} e impar`)
    }
    
    paresImpares++
}

console.log('---------------------------------')

let indice = 0
let palavra = 'teste'
do{
    console.log(palavra[indice])
    indice++
}while(indice < palavra.length)

console.log('---------------------------------')

let ind = 0
let palvra = `vitor`
while(ind < palvra.length){
    console.log(palvra[ind])
    ind++
}