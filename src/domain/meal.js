export class Meal {
  constructor(mealName, mealPrice, ingredients, warnings) {
    this.mealName = mealName;
    this.mealPrice = mealPrice;
    this.ingredients = ingredients;
    this.warnings = warnings;
  }

  // Meal Name

  getMealName() {
    return this.mealName;
  }

  setMealName(mealName) {
    this.mealName = mealName;
  }

  // Meal Price

  getMealPrice() {
    return this.mealPrice;
  }

  setMealPrice(mealPrice) {
    this.mealPrice = mealPrice;
  }

  // Ingredients

  getIngredients() {
    return this.ingredients;
  }

  addIngredients(ingredient) {
    this.ingredients.push(ingredient);
  }

  // Warnings

  getWarnings() {
    return this.warnings;
  }

  addWarning(warning) {
    this.warnings.push(warning);
  }
}
