// IF/ELSE

//definir um fluxo para somar ou multiplicar dois números usando if/else

const num1 = 2
const num2 = 4
const operacao = 'divisao'

if(operacao === 'soma'){
    console.log(num1 + num2)
}else if(operacao === 'multiplicacao'){
    console.log(num1 * num2)
}else{
    console.log('Operação não identificada')
}

console.log('-------------------------------------------------------')

// localizar o nivel de bônus de acordo com a faixa salarial 
// ex: $11000 e acima: 3% de bônus 
// $10999 a $7000: 5% de bônus 
// $ 6999 a $4000: 7% de bônus 
// $3999 p baixo: 9% de bônus 

const salario = 6500;

if (salario >= 11000){
    console.log('3% de bônus')
}else if(salario < 11000 && salario >= 7000){
    console.log('5% de bônus')
}else if(salario < 7000 && salario >= 4000){
    console.log('7% de bônus')
}else if(salario < 4000 && salario > 0){
    console.log('9% de bônus')
}else{
    console.log('Salário inválido')
}
