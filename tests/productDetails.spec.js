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

describe('Teste de bão', () => {
  it('Checando se a função existe e se de fato é uma função', () => {
    expect(productDetails).toBeDefined();
    expect(typeof productDetails).toBe('function');
  });
  it('Testando o retorno correto da função', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBeTruthy();
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
    productDetails('Alcool gel', 'Máscara').forEach((n) => {
      expect(typeof n).toBe('object');
    });
    const itens = productDetails('Alcool gel', 'Máscara');
    expect(itens).not.toStrictEqual(itens[0], itens[1]);
  });
});
