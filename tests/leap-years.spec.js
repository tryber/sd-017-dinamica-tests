// Importação do objeto isLeapYear, não precisa se preocupar com isso por agora.
const isLeapYear = require('../src/leap-years.js');

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

describe('Requisito 7 - Verifica função ano bissexto', () => {
  it ('Verifica se retorna um valor booleano', () => {
    expect(typeof isLeapYear(2020)).toBe('boolean');
  });
  it ('Verifica se retorna ano bissexto', () => {
    expect(isLeapYear(2044)).toBe(true);
  });
  it ('Verifica se é inserido um valor em numeral', () => {
    expect(isLeapYear(expect.any(Number)));
  });
});