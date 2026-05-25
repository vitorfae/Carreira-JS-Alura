// Você está desenvolvendo um sistema que exibe a situação da bateria de um dispositivo com base na porcentagem de carga. 
// O sistema deve classificar a bateria nas seguintes categorias:

// "Crítica": se a bateria estiver abaixo de 20%
// "Moderada": se estiver entre 20% e 80%
// "Cheia": se estiver acima de 80%
// Utilize o operador ternário para definir e exibir a categoria da bateria com base no valor da variável bateria.

const bateria = 65;

const resultado = bateria > 80 
    ? 'Cheia' 
    : bateria <= 80 && bateria >= 20 
        ? 'Moderada' 
        : bateria < 20 ? 'Crítica': 'Nível inválido'

console.log(resultado)

console.log('--------------------------------------')

//! OU
 
const statusBateria = (bateria < 20) 
  ? "Crítica" 
  : (bateria <= 80) 
    ? "Moderada" 
    : "Cheia";
 
console.log(statusBateria);