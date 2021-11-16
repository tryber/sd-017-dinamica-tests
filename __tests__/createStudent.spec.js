// Importação da função createStudent, não precisa se preocupar com isso por agora.
const createStudent = require('../src/createStudent');

/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome, retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'

*/

const goodPerson = 'Eita pessoa boa!';

describe('5 - Implemente a função `createStudent`', () => {
  it('Verifica se a função `createStudent` retorna o objeto esperado', () => {
    const student = createStudent('Leandrão, o Lobo Solitário');
    const object = {};
    expect(createStudent()).toBeDefined();
    expect(typeof student).toBe(typeof object);
    expect(student.name).toBe('Leandrão, o Lobo Solitário');
    expect(student.feedback()).toBeDefined();
    expect(student.feedback()).toBe(goodPerson);
  });
});
