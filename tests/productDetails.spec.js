// Importação da função productDetails, não precisa se preocupar com isso por agora.
const productDetails = require("../src/productDetails");

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

describe("Implementa casos de testes na função  `productDetais`", () => {
  it("testa se ao receber duas strings, o retorno da função é um array de objetos e se existem os dados esperados", () => {
    expect(productDetails("", "")).toBe[
      ({ detais: { productId: "123" }, name: "" },
      { details: { productId: "123" }, name: "" })
    ];
  });
});
