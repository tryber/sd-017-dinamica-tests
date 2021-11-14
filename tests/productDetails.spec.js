// Importação da função productDetails, não precisa se preocupar com isso por agora.
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  ESCREVA SEUS TESTES ABAIXO:
*/

describe('Testes: função productDetails', () => {
  test('Verificar se productDetails("Álcool gel", "Máscara") retorna o esperado', () => {
    expect(productDetails("Álcool gel", "Máscara")).toMatchObject([{name: 'Álcool gel', details: {productId: 'Álcool gel123'}},
    {name: 'Máscara', details: {productId: 'Máscara123'}}]);
  });

  test('Verificar se productDetails("Sabão em pó", "Amaciante") retorna o esperado', () => {
    expect(productDetails("Sabão em pó", "Amaciante")).toMatchObject([{name: 'Sabão em pó', details: {productId: 'Sabão em pó123'}},
    {name: 'Amaciante', details: {productId: 'Amaciante123'}}]);
  });
});
