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
describe('Requisito 6 - Teste para verificar se a função está correta', () => {
  it ('Verifica se retorna um objeto', () => {
    expect(typeof productDetails()).toEqual('object');
  });

  it('Verifica se ao entrar com o nome de produtos "Alcool gel" e "Máscara" retorna o objeto correto', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual(
      [
        {
          name: 'Alcool gel',
          details: {
            productId: 'Alcool gel123',
          }
        },
        {
          name: 'Máscara',
          details: {
            productId: 'Máscara123',
          }
        }
      ]
    )
  });

  it('Verifica se os parâmetros são do tipo string', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual(
    [
        {
          name: expect.any(String),
          details: {
            productId: expect.any(String),
          }
        },
        {
          name: expect.any(String),
          details: {
            productId: expect.any(String),
          }
        }
      ]
    )
  });
});

it('verifica se o array retornado contem objetos', () => {
    expect(productDetails()).toEqual(expect.arrayContaining([expect.any(Object), expect.any(Object)]));
  });

it ('testa se os ids terminam com 123', () => {
    expect(produto[0].details.productId.endsWith('123')).toEqual(true);
    expect(produto[1].details.productId.endsWith('123')).toEqual(true);
  });

  it ('testa se o nome é o nome do produto passado por parametro', () => {
    expect(produto[0].nome).toMatch('Alcool gel');
  });

  it ('verifica o tamanho do array retornado', () => {
    expect(produto).toHaveLength(2);
  });
