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

describe('Implementa casos de testes na função boolToWord `boolToWord`', () => {
  it('testa se com array vazio retorna yes', () =>  {
    expect(boolToWord([])).toBe('Yes');

  })

  it('testa se com string vazia retorna No', () => {
    expect(boolToWord('')).toBe('No');
  })

  it('testa se com o valor true retorna Yes', () => {
    expect(boolToWord(true)).toBe('Yes');

  })

})