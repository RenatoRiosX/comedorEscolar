import {System} from '../system.js';
import {Day} from '../day.js';
import {Meal} from '../meal.js';
import {Order} from '../order.js';
import {Responsable} from '../responsable.js';
import {Student} from '../student.js';

describe('System', () => {
  let system;
  let order1;
  let meal1;
  let meal2;
  let student1;
  let student2;
  let responsable1;
  let day1;
  let day2;
  let day3;
  let testDate;

  beforeEach(() => {
    system = new System();
    testDate = new Date('2024/06/14');
    student2 = new Student(23678, 'Juan Macedo', [], []);
    student1 = new Student(24002, 'Carla Macedo', ['GLUTEN'], []);
    responsable1 = new Responsable('Pedro Macedo', 200, [student1, student2]);
    meal1 = new Meal(
        'Milanesa de pollo',
        100,
        ['Pollo', 'Pan rallado', 'Huevo', 'Leche', 'Pure de papa'],
        ['LACTOSA', 'GLUTEN'],
    );
    meal2 = new Meal(
        'Arroz con verduras',
        70,
        ['Arroz blanco', 'Papa', 'Cebolla', 'Zanahoria', 'Salsa de soja'],
        [],
    );
    order1 = new Order(responsable1, student1, meal1, testDate);
    day1 = new Day('Martes', new Date('2024/01/15'), [meal1]);
    day2 = new Day('Lunes', new Date('2021/02/14'), [meal2, meal1]);
    day3 = new Day('Jueves', new Date('2024/03/15'), []);
  });

  test('getDayList should return the day list', () => {
    expect(system.getDayList()).toEqual([]);
  });

  test('addDayToList should add a day to the day list', () => {
    system.addDayToList(day1);
    expect(system.getDayList()).toContain(day1);
  });

  test('atLeastOneDay should return true if there is at'+
  'least one valid day in the list', () => {
    system.addDayToList(day1);
    system.addDayToList(day2);
    system.addDayToList(day3);
    expect(system.atLeastOneDay()).toBe(true);
  });

  test('atLeastOneDay should return false if there are' +
  'no valid days in the list', () => {
    system.addDayToList(day2);
    system.addDayToList(day3);
    expect(system.atLeastOneDay()).toBe(false);
  });

  test('setCurrentResponsable should set the current responsable', () => {
    system.setCurrentResponsable(responsable1);
    expect(system.getCurrentResponsable()).toBe(responsable1);
  });

  test('getCurrentOrder should return the current order', () => {
    system.addOrderToCurrentOrder(order1);
    expect(system.getCurrentOrder()).toEqual([order1]);
  });

  test('getCurrentOrderTotalPrice should return current order total'+
    'price', () => {
    system.addOrderToCurrentOrder(order1);
    expect(system.getCurrentOrderTotalPrice()).
        toEqual(order1.getMealOrdered().getMealPrice());
  });

  test('dayUpdate removes invalid days from dayList', () => {
    system.addDayToList(day1);
    system.addDayToList(day2);
    system.addDayToList(day3);
    system.dayUpdate();
    expect(system.getDayList()).toContain(day1);
    expect(system.getDayList()).not.toContain(day2);
    expect(system.getDayList()).not.toContain(day3);
  });

  test('sortDays sorts the days in ascending order', () => {
    system.addDayToList(day1);
    system.addDayToList(day2);
    system.addDayToList(day3);
    system.sortDays();
    expect(system.getDayList()).toEqual([day2, day1, day3]);
  });

  test('mealAlreadyOrdered returns true if the meal has already been' +
  'ordered by the student on the given date', () => {
    system.addOrderToCurrentOrder(order1);
    expect(system.mealAlreadyOrdered(meal1, student1.
        getStudentId(), testDate)).toBe(true);
  });

  test('mealAlreadyOrdered returns false if the meal has not been'+
  'ordered by the student on the given date', () => {
    system.addOrderToCurrentOrder(order1);
    expect(system.mealAlreadyOrdered(meal1, student2.
        getStudentId(), testDate)).toBe(false);
  });

  test('payCurrentOrder pays the order and' +
  'adds it to the students order record', () => {
    system.addOrderToCurrentOrder(order1);
    system.setCurrentResponsable(responsable1);
    system.payCurrentOrder(100);
    expect(system.getCurrentResponsable().
        getStudentsInCharge()[0].getOrdersRecord()).toEqual([order1]);
    expect(system.getCurrentOrder()).toEqual([]);
  });

  test('cancelCurrentOrder cancels the current order', () => {
    system.addOrderToCurrentOrder(order1);
    system.cancelCurrentOrder();
    expect(system.getCurrentOrder()).toEqual([]);
  });

  test('createOrder creates a new order with the provided details', () => {
    const orderDate = new Date('2022/06/14');
    const newOrder = system.
        createOrder(responsable1, student1, meal1, orderDate);
    expect(newOrder.getResponsableWhoOrdered()).toBe(responsable1);
    expect(newOrder.getOrderStudent()).toBe(student1);
    expect(newOrder.getMealOrdered()).toBe(meal1);
    expect(newOrder.getOrderDate()).toBe(orderDate);
  });
});
