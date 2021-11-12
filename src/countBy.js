/*
  A função countBy recebe dois parametros, retornando um array dos primeiros (number) multiplos de (value).

  Parâmetros:
    - Dois inteiros.
    Exemplos: (1, 10), (2, 5).
  Comportamento:
    - countBy(1, 10); // Retorna: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    - countBy(2, 5); // Retorna: [2, 4, 6, 8, 10]
*/

const countBy = (value, number) => {
  const result = [];
  const limit = value * number;

  for (let index = 1; index <= limit; index += 1) {
    if (index % value === 0) {
      result.push(index);
    }
  }
  return result;
};

module.exports = countBy;
// Exportação da função countBy, não precisa se preocupar com isso por agora.
