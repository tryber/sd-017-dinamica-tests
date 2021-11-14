// Importação da função myCounter, não precisa se preocupar com isso por agora.
const myCounter = require('../src/myCounter');

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array. Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada. Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];

  ESCREVA SEUS TESTES ABAIXO:
*/

it('Verifica se ao chamar a função o retorno será [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3]', () => {
  expect(myCounter()).toEqual([0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3])
})
