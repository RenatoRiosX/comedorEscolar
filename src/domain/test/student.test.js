import {Student} from '../student.js';

describe('Student', () => {
  let student;
  let ordersRecord;

  beforeEach(() => {
    ordersRecord = [];
    student = new Student('12345', 'John Doe', ['spicy', 'nuts'], ordersRecord);
  });

  test('getStudentId should return the student ID', () => {
    expect(student.getStudentId()).toBe('12345');
  });

  test('setStudentId should update the student ID', () => {
    student.setStudentId('54321');
    expect(student.getStudentId()).toBe('54321');
  });

  test('getStudentName should return the student name', () => {
    expect(student.getStudentName()).toBe('John Doe');
  });

  test('setStudentName should update the student name', () => {
    student.setStudentName('Jane Smith');
    expect(student.getStudentName()).toBe('Jane Smith');
  });

  test('getProhibitions should return the list of prohibitions', () => {
    expect(student.getProhibitions()).toEqual(['spicy', 'nuts']);
  });

  test('setProhibition should add a prohibition to the list', () => {
    student.setProhibition('gluten');
    expect(student.getProhibitions()).toContain('gluten');
  });

  test('isAProblem should return true if a meal has a prohibition', () => {
    const mealWithProhibition = {
      getWarnings: () => ['spicy'],
    };
    expect(student.isAProblem(mealWithProhibition)).toBe(true);
  });

  test('isAProblem should return false'+
  'if a meal does not have any prohibitions', () => {
    const mealWithoutProhibition = {
      getWarnings: () => [],
    };
    expect(student.isAProblem(mealWithoutProhibition)).toBe(false);
  });

  test('getOrdersRecord should return the orders record', () => {
    expect(student.getOrdersRecord()).toBe(ordersRecord);
  });

  test('addOrderToRecord should add an order to the orders record', () => {
    const orderToAdd = {
      getOrderStudent: () => student,
    };
    student.addOrderToRecord(orderToAdd);
    expect(student.getOrdersRecord()).toContain(orderToAdd);
  });

  test('addOrderToRecord should not'+
  'add an order if it is not for the student', () => {
    const orderToAdd = {
      getOrderStudent: () => 'Jane Smith',
    };
    student.addOrderToRecord(orderToAdd);
    expect(student.getOrdersRecord()).not.toContain(orderToAdd);
  });
});
