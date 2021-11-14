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

test("Verifica se ao receber array retorna 'Yes'", () => {
  expect(boolToWord([])).toMatch('Yes');
})

test("Verifica se ao receber string retorna 'No'", () => {
  expect(boolToWord('')).toMatch('No');
})

test("Verifica se ao receber true retorna 'Yes'", () => {
  expect(boolToWord(true)).toMatch('Yes');
})