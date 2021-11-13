// Importação da função countBy, não precisa se preocupar com isso por agora.
const countBy = require('../src/countBy');

/*
  A função countBy recebe dois parametros, retornando um array dos primeiros (number) multiplos de (value).

  Parâmetros:
    - Dois inteiros.
    Exemplos: (1, 10), (2, 5).
  Comportamento:
    - countBy(1, 10); // Retorna: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    - countBy(2, 5); // Retorna: [2, 4, 6, 8, 10]

  // ESCREVA SEUS TESTES ABAIXO:
*/
describe('Teste do bão', () => {
  it('Checando se a função existe e se de fato é uma função', () => {
    expect(countBy).toBeDefined();
    expect(typeof countBy).toBe('function');
  });
  it('Testando o retorno correto da função', () => {
    expect(countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
    expect(countBy(5, 5)).toEqual([5, 10, 15, 20, 25]);
  });
});
