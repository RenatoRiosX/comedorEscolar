import {Responsable} from '../responsable.js';
import {Student} from '../student.js';

describe('Responsable', () => {
  let student1;
  let student2;
  let student3;
  let responsable;

  beforeEach(() => {
    student1 = new Student(234556, 'Juan Macedo', ['GLUTEN'], []);
    student2 = new Student(234586, 'Carla Macedo', [], []);
    student3 = new Student(123, 'Pepe Macedo', [], []);
    responsable = new Responsable('Pedro', 1005, [student2, student1]);
  });

  test('getResponsableName should return the responsable name', () => {
    expect(responsable.getResponsableName()).toBe('Pedro');
  });

  test('setResponsableName should update the responsable name', () => {
    responsable.setResponsableName('Pedro Macedo');
    expect(responsable.getResponsableName()).toBe('Pedro Macedo');
  });

  test('getBalance should return the balance', () => {
    expect(responsable.getBalance()).toBe(1005);
  });

  test('setBalance should update the balance', () => {
    responsable.setBalance(200);
    expect(responsable.getBalance()).toBe(200);
  });

  test('payOrder should reduce the balance by the order price', () => {
    responsable.payOrder(1005);
    expect(responsable.getBalance()).toBe(0);
  });

  test('payOrder should throw an error if the order price exceeds the balance',
      () => {
        expect(() => {
          responsable.payOrder(1006);
        }).toThrow('Saldo insuficiente');
      });

  test('getStudentsInCharge should return the list of students in charge',
      () => {
        expect(responsable.getStudentsInCharge()).
            toStrictEqual([student2, student1]);
      });

  test('addStudentToStudentsInCharge should add a student to the list', () => {
    responsable.addStudentToStudentsInCharge(student1);
    expect(responsable.getStudentsInCharge()).toContain(student1);
  });

  test('particularStudent should return the student with the given ID', () => {
    responsable.addStudentToStudentsInCharge(student3);
    expect(responsable.particularStudent(123)).toBe(student3);
  });

  test(
      'particularStudent should return null' +
      'if the given ID is not from a student',
      () => {
        responsable.addStudentToStudentsInCharge(student3);
        expect(responsable.particularStudent(1235)).toBe(null);
      });
});
