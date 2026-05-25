const idade = 17

if (idade >= 18){
    console.log(`E maior de idade`)
}else{
    console.log(`E menor de idade`)
}

//Entre 09 e 10: Excelente
//Entre 07 e 08: bom
//Entre 04 e 06: medio
//Entre 00 e 03: Ruim

const notaDoAluno = 8
if (notaDoAluno >= 9){
    console.log(`A nota foi ${notaDoAluno} que e excelente`)
}else if(notaDoAluno >= 7){
    console.log(`A nota foi ${notaDoAluno} que e bom`)
}else if(notaDoAluno >= 4){
    console.log(`A nota foi ${notaDoAluno} que e medio`)
}else{
    console.log(`A nota foi ${notaDoAluno} que e ruim`)
}

console.log(`---------------------------------------------------------------------------------------------------`)
//---------------------------------------------------------------------------------------------------//
//OPERADORES TERNARIOS

const idade1 = 15
//condicao  ?        verdadeiro             : falso
idade >= 18 ? console.log(`Maior de idade`) : console.log(`Menor de idade`)

//Normalmente mais usado quando tem apenas duas condicoes

const notaDoAluno1 = 8

//condicao       ?                       verdadeiro                       : falso(else if)
notaDoAluno >= 9 ? console.log(`Nota foi ${notaDoAluno} que e excelente`) :
    notaDoAluno >= 7 ? console.log(`Nota foi ${notaDoAluno} que e bom`) :
        notaDoAluno >= 4 ? console.log(`Nota foi ${notaDoAluno} que e medio`) :
            console.log(`Nota foi ${notaDoAluno} que e ruim`)