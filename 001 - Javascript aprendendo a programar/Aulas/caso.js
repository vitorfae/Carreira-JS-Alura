//Entre 09 e 10: Excelente
//Entre 07 e 08: bom
//Entre 04 e 06: medio
//Entre 00 e 03: Ruim

const notaAluno = 8

switch (notaAluno) {
    case 10:
    case 9:    
        console.log(`A nota foi ${notaAluno} que e excelente`)
        break;
    case 8:
    case 7:    
        console.log(`A nota foi ${notaAluno} que e bom`)
        break;
    case 6:
    case 5:
    case 4:    
        console.log(`A nota foi ${notaAluno} que e media`)
        break;
    case 3:
    case 2:
    case 1:    
    case 0:
        console.log(`A nota foi ${notaAluno} que e ruim`)
        break;
    default:
        console.log(`Valor invalido`)
        break;
}