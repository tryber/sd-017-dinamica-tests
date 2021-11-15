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
describe('Requisito 2 - countBy', () => {
  it('Verifica se retorna [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] para os parâmetros (1, 10)', () => {
    expect(countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it('Verifica se retorna [2, 4, 6, 8, 10] para os parâmetros (2, 5)', () => {
    expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
  });
  it('Verifica se retorna [3, 6, 9, 12, 15, 18] para os parâmetros (3, 6)', () => {
    expect(countBy(3, 6)).toEqual([3, 6, 9, 12, 15, 18]);
  });
})

