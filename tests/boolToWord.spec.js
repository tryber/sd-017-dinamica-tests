// Importação da função boolToWord, não precisa se preocupar com isso por agora.
const { testPathPatternToRegExp } = require('jest-util');
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

describe('Testes: função boolToWord', () => {
  test('Verificar se boolToWord([]) retorna o resultado esperado', () => {
    expect(boolToWord([])).toBe('Yes');
  });

  test('Verificar se boolToWord("") retorna o resultado esperado', () => {
    expect(boolToWord('')).toBe('No');
  });

  test('Verificar se boolToWord(true) retorna o resultado esperado', () => {
    expect(boolToWord(true)).toBe('Yes');
  });
});