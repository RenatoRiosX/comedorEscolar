import {Day} from '../day.js';

describe('Day', () => {
  let day;
  let currentDate;
  let date;

  beforeEach(() => {
    currentDate = new Date('2023-06-14');
    day = new Day('Lunes', currentDate, []);
    date = new Date('2023-06-15');
  });

  test('getDayOfWeek should return the correct day of the week', () => {
    expect(day.getDayOfWeek()).toBe('Lunes');
  });

  test('setDayOfWeek should update the day of the week', () => {
    day.setDayOfWeek('Martes');
    expect(day.getDayOfWeek()).toBe('Martes');
  });

  test('getDayDate should return the correct day date', () => {
    expect(day.getDayDate()).toBe(currentDate);
  });

  test('setDayDate should update the day date', () => {
    day.setDayOfDate('2023-06-15');
    expect(day.getDayDate()).toEqual(date);
  });

  test('getMealList should return the meal list', () => {
    expect(day.getMealList()).toEqual([]);
  });

  test('addMealToListXDay should add a meal to the meal list', () => {
    day.addMealToListXDay('Milanesa');
    expect(day.getMealList()).toContain('Milanesa');
  });
});
