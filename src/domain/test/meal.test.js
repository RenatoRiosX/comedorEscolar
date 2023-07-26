import {Meal} from '../meal.js';

describe('Meal', () => {
  let meal;

  beforeEach(() => {
    meal = new Meal('Milanesa', 100,
        ['Pollo', 'Pan rallado', 'arroz'], ['GLUTEN']);
  });

  test('getMealName should return the meal name', () => {
    expect(meal.getMealName()).toBe('Milanesa');
  });

  test('setMealName should update the meal name', () => {
    meal.setMealName('Milanesa de pollo');
    expect(meal.getMealName()).toBe('Milanesa de pollo');
  });

  test('getMealPrice should return the meal price', () => {
    expect(meal.getMealPrice()).toBe(100);
  });

  test('setMealPrice should update the meal price', () => {
    meal.setMealPrice(90);
    expect(meal.getMealPrice()).toBe(90);
  });

  test('getIngredients should return the ingredients', () => {
    expect(meal.getIngredients()).toEqual(['Pollo', 'Pan rallado', 'arroz']);
  });

  test(
      'addIngredients should add an ingredient to the ingredients list', () => {
        meal.addIngredients('Tomate');
        expect(meal.getIngredients()).toContain('Tomate');
      });

  test('getWarnings should return the warnings', () => {
    expect(meal.getWarnings()).toEqual(['GLUTEN']);
  });

  test('addWarning should add a warning to the warnings list', () => {
    meal.addWarning('LACTOSA');
    expect(meal.getWarnings()).toContain('LACTOSA');
  });
});
