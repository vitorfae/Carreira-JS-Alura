// OP CONDICIONAL E SWITCH

// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas

const nome = 'Roberto';
const nota = 8
const faltas = 2

const recebeBonus = (nota >= 8) && (faltas <= 2)
    ? `${nome} recebe bônus`
    : `${nome} não recebe bônus`


console.log(recebeBonus);

// Criar um fluxo que identifica o tipo de usuário e comunica de acordo.
// EX: usuário free tem acesso limitado ao app
//     usuário premium tem acesso a todas as funções
//     usuário super premimum tem acesso total e bônus especiais

const user = 'premium'


switch (user) {
    case 'free':
        console.log('Acesso limitado')
        break;
    case 'premium':
        console.log('Acesso total ao App')
        break;
    case 'super premium':
        console.log('Acesso total ao App e Bônus')
        break;
    default:
        console.log('Tipo de user desconhecido')
        break;
}