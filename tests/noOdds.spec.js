// Importação da função noOdds, não precisa se preocupar com isso por agora.
const noOdds = require('../src/noOdds.js');

/*
Uma função que, recebe um array (tamanho variável) e verifica se existe elementos que são números pares, retornando um array que não contêm números impares.

  Parâmetros:
    - Um array (tamanho variável);
  Comportamento:
    noOdds([1, 2, 3, 4, 5, 6]) // Retorno: [2, 4, 6];
    noOdds([2, 7, 9, 10, 16]) // Retorno: [2, 10, 10, 16];

  ESCREVA SEUS TESTES ABAIXO:
*/

describe('Teste do bão', () => {
  it('Checando se a função existe e se de fato é uma função', () => {
    expect(noOdds).toBeDefined();
    expect(typeof noOdds).toBe('function');
  });
  it('Testando o retorno correto da função', () => {
    expect(noOdds([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(noOdds([-2, 3, 5, 6])).toEqual([-2, 6]);
    expect(noOdds([1, 3, 5, 7])).toEqual([]);
  });
});
