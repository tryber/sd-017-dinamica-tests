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
*/

const isLeapYear = (year) => ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0));

module.exports = isLeapYear;
// Exportação do objeto isLeapYear, não precisa se preocupar com isso por agora.
