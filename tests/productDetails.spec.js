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


const arrProduct = [
  {
    name: 'Alcool gel',
    details: {
      productId: 'Alcool gel123'
    }
  },
  {
    name: 'Máscara',
    details: {
      productId: 'Máscara123'
    }
  }
]

test('Verifica se ao entrar o nome de dois produtos retorna um array de objetos com seus nomes e detalhes', () => {

  expect(productDetails('Alcool gel', 'Máscara')).toEqual(arrProduct);
})