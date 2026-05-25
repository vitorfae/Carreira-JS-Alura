//AT-01
const idade = 15
idade >= 18 ? console.log('Pode comprar bebida alcoolica') : console.log('Venda proibida para menores de 18 anos')

//AT-02
let horaAtual = new Date().toLocaleTimeString('pt-BR');
let hora = horaAtual.slice(0,2)
hora >= 6 && hora < 12 ? console.log('Bom dia') :
    hora >= 12 && hora < 18 ? console.log('Boa tarde') :
        console.log('Boa noite')
console.log(hora)

//AT-03
const numero = 1
numero > 0 ? console.log('positivo') :
    numero < 0 ? console.log('negativo'):
        console.log('Zero')

//AT-04
const nota = 3
if (nota > 9){
    console.log('Sua nota corresponde a um (A)')
}else if(nota >= 8){
    console.log('Sua nota corresponde a um (B)')
}else if(nota >= 6){
    console.log('Sua nota corresponde a um (C)')
}else if(nota >= 4){
    console.log('Sua nota corresponde a um (D)')
}else{
    console.log('Sua nota corresponde a um (E)')
}

//AT-05
const parOuImpar = 2
parOuImpar % 2 == 0 ? console.log(`O valor ${parOuImpar} e par`) : console.log(`O valor ${parOuImpar} e impar`)

//AT-06
let opcao = 2
switch (opcao) {
    case 1:
        console.log('Cadastrar')    
        break;
    case 2:
        console.log('Listar')   
        break;
    case 3:
        console.log('Sair')   
        break;
    default:
        console.log('Opcao invalida')   
        break;
}

//AT-07
const email = '' //se tiver vazio e falso

if (email){
    console.log('Email Valido')
}else{
    console.log('Preencha o campo de e-mail')
}

//AT-08
let senha = 'Abc1234*'
let senhaValida = true

if (senhaValida){
    console.log('Senha Valida')
}else{
    console.log('Senha muito curta')
}

//AT-09
let saldoDisponivel = 100
let valorCompra  = 150
saldoDisponivel >= valorCompra ? console.log('Compra aprovada') : console.log('Saldo insulficiente')

//AT-10
let nome = 'Vitor'
let emailPessoal = ''
let anos = 21
const formularioValido = false
if (!formularioValido){
    console.log('Por favor, preencha todos os campos corretamente')
}else{
    console.log('Formulário enviado com sucesso')
}