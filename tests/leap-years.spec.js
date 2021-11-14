// Importação do objeto isLeapYear, não precisa se preocupar com isso por agora.
const isLeapYear = require("../src/leap-years");

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

describe("Implementa casos de testes na função  `leap-years`", () => {
  it("testa se a função retorna os valores esperados", () => {
    expect(isLeapYear(2020)).toBe(true);
  });

  it("testa se a função retorna os valores esperados", () => {
    expect(isLeapYear(2021)).toBe(false);
  });

  it("testa se a função retorna os valores esperados", () => {
    expect(isLeapYear(2044)).toBe(true);
  });
});
