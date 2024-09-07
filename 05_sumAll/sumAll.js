const sumAll = function(num1,num2) {
    if ((Number.isInteger(num1) && num1 > 0) 
    && (Number.isInteger(num2) && num2 > 0)) {

    let menor = num1 > num2 ? num2 : num1
    let maior = num1 > num2 ? num1 : num2
    let soma = 0
    while (menor <= maior) {
        soma += menor
        menor++
    } return soma 
    } 
    else {
        return 'ERROR'
    }
};
/* 
    Selecionar o menor numero entre os 2
    criar um variavel SOMA
    o menor vai ser somado (menor + (menor +1)) = SOMA
    repetir até alcançar o maior
    retornar SOMA
*/
// Do not edit below this line
module.exports = sumAll;
