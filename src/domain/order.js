export class Order {
  constructor(responsableWhoOrdered, student, mealOrdered, orderDate) {
    this.responsableWhoOrdered = responsableWhoOrdered;
    this.student = student;
    this.mealOrdered = mealOrdered;
    this.orderDate = orderDate;
  }

  // Responsable Who Ordered

  getResponsableWhoOrdered() {
    return this.responsableWhoOrdered;
  }

  setResponsableWhoOrdered(responsable) {
    this.responsableWhoOrdered = responsable;
  }

  // Order For Student

  getOrderStudent() {
    return this.student;
  }

  setOrderStudent(student) {
    this.student = student;
  }

  // Meals Ordered

  getMealOrdered() {
    return this.mealOrdered;
  }

  setMealOrdered(meal) {
    this.mealOrdered = (meal);
  }

  // Order Date

  getOrderDate() {
    return this.orderDate;
  }

  setOrderDate(date) {
    this.orderDate = date;
  }
}
