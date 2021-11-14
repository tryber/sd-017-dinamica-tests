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

it ('Verifica se retorna um array', () => {
  expect(typeof countBy(2, 5)).toBe('object');
});

it ('Verifica se são recebidos números', () => {
  expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
});
