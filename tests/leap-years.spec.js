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

describe('Teste de bão', () => {
  it('Checando se a função existe e se de fato é uma função', () => {
    expect(isLeapYear).toBeDefined();
    expect(typeof isLeapYear).toBe('function');
  });
  it('Testando o retorno correto da função', () => {
    expect(isLeapYear(2020)).toEqual(true);
    expect(isLeapYear(2016)).toEqual(true);
    expect(isLeapYear(2021)).toEqual(false);
    expect(isLeapYear(2025)).toEqual(false);
    expect(isLeapYear(2444)).toEqual(true);
  });
});
