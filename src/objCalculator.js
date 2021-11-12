/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  As funções dentro do objecto são arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
  add: (a, b) => a + b,
  mult: (c, d) => c * d,
  div: (e, f) => Math.floor(e / f),
  sub: (g, h) => g - h,
};

module.exports = calculator;
// Exportação do objeto calculator, não precisa se preocupar com isso por agora.
