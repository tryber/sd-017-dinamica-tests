/*
  Uma função que, recebe um array (tamanho variável) e verifica se existe elementos que são números pares, retornando um array que não contêm números impares.

  Parâmetros:
    - Um array (tamanho variável);
  Comportamento:
    noOdds([1, 2, 3, 4, 5, 6]) // Retorno: [2, 4, 6];
    noOdds([2, 7, 9, 10, 16]) // Retorno: [2, 10, 10, 16];
*/

const noOdds = (values) => values.filter((value) => value % 2 === 0);

module.exports = noOdds;
// Exportação da função noOdds, não precisa se preocupar com isso por agora.
