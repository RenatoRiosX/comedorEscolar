import {Order} from '../order.js';
import {Responsable} from '../responsable.js';
import {Student} from '../student.js';
import {Meal} from '../meal.js';

describe('Order', () => {
  let order;
  let currentDate;
  let responsable1;
  let responsable2;
  let student1;
  let student2;
  let meal1;
  let meal2;

  beforeEach(() => {
    currentDate = new Date();
    student1 = new Student(23456, 'Juan Macedo', ['GLUTEN'], []);
    responsable1 = new Responsable('Pedro Macedo', 2000, [student1]);
    student2 = new Student(23456, 'Carla Macedo', ['GLUTEN'], []);
    responsable2 = new Responsable('Ana Macedo', 2000, [student1]);
    meal1= new Meal('Pollo', 100, ['Pollo'], []);
    meal2= new Meal('Milanesa', 90, ['Pollo, Pan rallado'], ['GLUTEN']);
    order = new Order(responsable1, student1, meal1, currentDate);
  });

  test(
      'getResponsableWhoOrdered should return the responsable who ordered',
      () => {
        expect(order.getResponsableWhoOrdered()).toBe(responsable1);
      });

  test('setResponsableWhoOrdered should update the responsable who ordered',
      () => {
        order.setResponsableWhoOrdered(responsable2);
        expect(order.getResponsableWhoOrdered()).toBe(responsable2);
      });

  test('getOrderStudent should return the order for student', () => {
    expect(order.getOrderStudent()).toBe(student1);
  });

  test('setOrderStudent should update the order for student', () => {
    order.setOrderStudent(student2);
    expect(order.getOrderStudent()).toBe(student2);
  });

  test('getMealOrdered should return the meal ordered', () => {
    expect(order.getMealOrdered()).toBe(meal1);
  });

  test('setMealOrdered should update the meal ordered', () => {
    order.setMealOrdered(meal2);
    expect(order.getMealOrdered()).toBe(meal2);
  });

  test('getOrderDate should return the order date', () => {
    expect(order.getOrderDate()).toBe(currentDate);
  });

  test('setOrderDate should update the order date', () => {
    const newDate = new Date('2023-06-15');
    order.setOrderDate(newDate);
    expect(order.getOrderDate()).toBe(newDate);
  });
});
