export class Day {
  constructor(dayOfWeek, dayDate, mealListXDay) {
    this.dayOfWeek = dayOfWeek;
    this.dayDate = dayDate;
    this.mealListXDay = mealListXDay;
  }

  // Day Of Week

  getDayOfWeek() {
    return this.dayOfWeek;
  }

  setDayOfWeek(dayOfWeek) {
    this.dayOfWeek = dayOfWeek;
  }

  // Day Date

  getDayDate() {
    return this.dayDate;
  }

  setDayOfDate(dayDate) {
    this.dayDate = new Date(dayDate);
  }

  // Meal List X Day

  getMealList() {
    return this.mealListXDay;
  }

  addMealToListXDay(meal) {
    this.mealListXDay.push(meal);
  }
}
