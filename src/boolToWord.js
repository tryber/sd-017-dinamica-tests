/*
  A função boolToWord recebe um booleano (tamanho variável) e retorna 'Yes' ou 'No'.
  
  Parâmetros:
    - booleano.
    Exemplos: true; false; 'xablau'; '';
  Comportamento:
    - boolToWord([]) // Retorno: 'Yes';
    - boolToWord('') // Retorno: 'No';
    - boolToWord(true) // Retorno: 'Yes';
*/

const boolToWord = (bool) => (bool ? 'sim' : 'NAô');

module.exports = boolToWord;
// Exportação da função boolToWord, não precisa se preocupar com isso por agora.
