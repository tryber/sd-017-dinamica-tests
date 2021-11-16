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

it('Verifica se a função existe', () => {
  expect(boolToWord).toBe('function');
});

it('Verifica se a função retorna um valor booleano', () => {
  expect(typeof boolToWord(true)).toBe('boolean');
});

it('Verifica se a função retorna um valor esperado', () => {
  expect(boolToWord(true)).toBe('Yes');
  expect(boolToWord([])).toBe('Yes');
  expect(boolToWord('')).toBe('No');
  expect(boolToWord([1, 2, 3])).toBe('Yes');
  expect(boolToWord(false)).toBe('No');
  expect(boolToWord('xablau')).toBe('Yes');
});
