// Importação do objeto isLeapYear, não precisa se preocupar com isso por agora.
const isLeapYear = require('../src/leap-years');

/*
  Essa função simplesmente determina se um ano é bissexto ou não e retorna true ou false.

  Os anos divisíveis por 4 são anos bissextos
  Os anos divisíveis por 100 não são anos bissextos
  Os anos divisíveis por 400 são anos bissextos

  Parâmetros:
  - Um número inteiro;

  Comportamento:
  isLeapYear(2020) // Retorno: true;
  isLeapYear(2021) // Retorno: false;
  isLeapYear(2044) // Retorno: true;

  ESCREVA SEUS TESTES ABAIXO:
*/

describe('Testes: função isLeapYear', () => {
  test('Verifica se isLeapYear(2020) é ano bissexto', () => {
    expect(isLeapYear(2020)).toBe(true);
  });

  test('Verifica se isLeapYear(2021) é ano bissexto', () => {
    expect(isLeapYear(2021)).toBe(false);
  });

  test('Verifica se isLeapYear(2044) é ano bissexto', () => {
    expect(isLeapYear(2044)).toBe(true);
  });
});