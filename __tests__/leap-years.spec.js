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
  it('Verifica se retorna um valor booleano', () => {
    expect(typeof isLeapYear(2020)).toBe('boolean');
  });
  it('Verifica se retorna true em ano bissexto', () => {
    expect(isLeapYear(2044)).toBe(true);
  });
  it('Verifica se retorna false em ano não-bissexto', () => {
    expect(isLeapYear(2021)).toBe(false);
  });
  it('Verifica se é inserido um valor em numeral', () => {
    const myMock = jest.fn(2021);
    // myMock.mockReturnValueOnce(expect.any(Number));
    myMock.mock.calls[0].toBe(expect.any(Number));
    // expect(isLeapYear()).toHaveBeenCalledWith(expect.any(Number));
  });
});
