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
describe('Requisito 7 - isLeapYear tests', () => {
  it('Verifica se retorna true caso um ano bissexto é passado como parâmetro', () => {
    expect(isLeapYear(2020)).toBe(true);
    expect(isLeapYear(2044)).toBe(true);
  });
  it('Verifica se retorna false caso o ano passado como parâmetro não for bissexto', () => {
    expect(isLeapYear(2021)).toBe(false);
    expect(isLeapYear(1994)).toBe(false);
  });
})