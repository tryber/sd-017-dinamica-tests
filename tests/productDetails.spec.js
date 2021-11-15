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
describe('Requisito 6 - productDetails tests', () => {
  it('Verifica se ao receber duas strings como parâmetro, a função retorna um array de objetos', () => {
    expect(typeof productDetails('str1','str2') && typeof productDetails('str1', 'str2')[0] && typeof productDetails('str1', 'str2')[1]).toEqual('object');
  });
  it('Verifica se cada objeto retorna os dados necessários', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual([
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
    ]);
    expect(productDetails('Água', 'Menta')).toEqual([
      {
        name: 'Água',
        details: {
          productId: 'Água123'
        }
      },
      {
        name: 'Menta',
        details: {
          productId: 'Menta123'
        }
      }
    ]);
  });
});
