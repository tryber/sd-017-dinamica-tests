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

it('Quando passar (1, 10) retornar [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ', () => {
  expect(countBy(1, 10)).toHaveLength(10);
});
it('Quando passar (1, 10) retornar [2, 4, 6, 8, 10] ', () => {
  expect(countBy(2, 5)).toContainEqual([2, 4, 6, 8, 10]);
});

