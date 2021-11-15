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
describe('Requisito 1 - boolToWord', () => {
  it('Teste se retorna Yes para o parâmetro 1', () => {
    expect(boolToWord(1)).toBe('Yes');
  });
  it('Teste se retorna No para o parâmetro 0', () => {
    expect(boolToWord(0)).toBe('No');
  });
  it('Teste se retorna Yes para o parâmetro []', () => {
    expect(boolToWord([])).toBe('Yes');
  });
  it('Teste se retorna No para o parâmetro ""', () => {
    expect(boolToWord('')).toBe('No');
  });
})