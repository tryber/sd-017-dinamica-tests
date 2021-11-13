// Importação da função circle, não precisa se preocupar com isso por agora.
const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  ESCREVA SEUS TESTES ABAIXO:
*/

describe('Teste do bão', () => {
  it('Checando se a função existe e se de fato é uma função', () => {
    expect(circle).toBeDefined();
    expect(typeof circle).toBe('function');
  });
  it('Testando o retorno correto da função', () => {
    expect(circle(1)).toEqual({ radius: 1, area: 3.14, circumference: 6.28 });
    expect(circle(7).circumference).toEqual(43.96);
    expect(parseFloat(circle(3).area.toPrecision(4))).toEqual(28.26);
  });
});
