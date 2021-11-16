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
describe('Testes para o boolToWord', () => {
  test('Verificar se um array vazio retorna Yes', () => {
    expect(boolToWord([]).toString('Yes'));
  });
  test('Verificar se uma string vazia retorna No', () => {
    expect(boolToWord('').toString('No'));
  });
  test('Verificar se um true retorna Yes', () => {
    expect(boolToWord(true).toString('Yes'));
  });
});
