// Importação da função boolToWord, não precisa se preocupar com isso por agora.
const boolToWord = require('../src/boolToWord');

/*
A função boolToWord recebe um booleano (tamanho variável) e retorna 'Yes' ou 'No'.
  
  Parâmetros:
    - booleano.
    Exemplos: true; false; 'xablau'; '';
  Comportamento:
    - boolToWord([]) // Retorno: 'Yes';
    - boolToWord('') // Retorno: 'No';
    - boolToWord(true) // Retorno: 'Yes';
    
    ESCREVA SEUS TESTES ABAIXO:
*/

describe('Teste do bão', () => {
  it('Checando se a função existe e se de fato é uma função', () => {
    expect(boolToWord).toBeDefined();
    expect(typeof boolToWord).toBe('function');
  });
  it('Testando o retorno correto da função', () => {
    expect(boolToWord([])).toEqual('Yes');
    expect(boolToWord('')).toEqual('No');
    expect(boolToWord(true)).toEqual('Yes');
    expect(boolToWord(false)).toEqual('No');
    expect(boolToWord('pudim')).toEqual('Yes');
  });
});
