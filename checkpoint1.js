// 1º Checkpoint
// Vinicius Marques Souza - grupo 8

let opcao = 0;

function microondas(opcao,temp) {
    let tInicio = 0;
    let prato = '';

    switch(opcao) {
        case 1: 
            tInicio = 10;
            prato = 'Pipoca';
            break;
        case 2: 
            tInicio = 8;
            prato = 'Macarrão';
            break;
        case 3:
            tInicio = 15;
            prato = 'Carne';
            break;
        case 4:
            tInicio = 12;
            prato = 'Feijão';
            break;
        case 5: 
            tInicio = 8;
            prato = 'Brigadeiro';
            break;
        default:
            return 'Prato inexistente';
            break;
    }

    if (temp < tInicio) {
        console.log("Tempo insuficiente");
    } else if (temp >= 2 * tInicio && temp < 3 * tInicio) { 
        console.log("A comida queimou."); 
    } else if (temp >= 3 * tInicio) {
        console.log("kabumm!!!");
    } else if (temp >= tInicio && temp < 2* tInicio ) {
        console.log(`Prato de ${prato} pronto, bom apetite!!!`);
    } 

}

microondas(3,30); // console para testes
