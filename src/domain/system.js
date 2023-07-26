import {Order} from './order.js';

export class System {
  constructor() {
    this.dayList = [];
    this.currentResponsable = null;
    this.currentOrder = [];
  }

  // Day List

  getDayList() {
    return this.dayList;
  }

  addDayToList(day) {
    this.dayList.push(day);
  }

  // Check if there is at least one day to load in the menu
  atLeastOneDay() {
    let valid = false;
    const actualDate = new Date();
    for (const d of this.dayList) {
      const menuDate = new Date(d.dayDate);
      if (menuDate >= actualDate &&
        d.getMealList().length > 0) {
        valid = true;
      }
    }
    return valid;
  }

  // Remove invalid days from list of days (out of date or with no meals)
  dayUpdate() {
    const actualDate = new Date();
    // The function goes backwards to use the splice method
    for (let i = this.dayList.length - 1; i >= 0; i--) {
      const dayDate = new Date(this.dayList[i].dayDate);
      if (actualDate >= dayDate || this.dayList[i].getMealList().length === 0) {
        this.dayList.splice(i, 1);
      }
    }
  }

  sortDays() {
    this.dayList = this.dayList.sort((a, b) => a.getDayDate() - b.getDayDate());
  }

  // Current Responsable

  setCurrentResponsable(responsable) {
    this.currentResponsable = responsable;
  }

  getCurrentResponsable() {
    return this.currentResponsable;
  }

  // Current Order

  getCurrentOrder() {
    return this.currentOrder;
  }

  addOrderToCurrentOrder(order) {
    this.currentOrder.push(order);
  }

  getCurrentOrderTotalPrice() {
    let totalPrice = 0;
    for (const cO of this.currentOrder) {
      totalPrice += cO.getMealOrdered().getMealPrice();
    }
    return totalPrice;
  }

  mealAlreadyOrdered(meal, studentId, date) {
    let alreadyOrdered = false;
    for (const order of this.currentOrder) {
      if (order.getOrderStudent().
          getStudentId() == studentId &&
         order.getMealOrdered() === meal && order.getOrderDate() === date) {
        alreadyOrdered = true;
      }
    }
    return alreadyOrdered;
  }

  payCurrentOrder(price) {
    this.getCurrentResponsable().payOrder(price);
    for (const student of this.getCurrentResponsable().getStudentsInCharge()) {
      for (const currentOrder of this.getCurrentOrder()) {
        if (currentOrder.getOrderStudent() === student) {
          student.addOrderToRecord(currentOrder);
        }
      }
    }
    this.currentOrder = [];
  }

  cancelCurrentOrder() {
    this.currentOrder = [];
  }

  // Order creator

  createOrder(responsable, student, mealOrdered, orderDate) {
    const newOrder = new Order(responsable, student, mealOrdered, orderDate);
    return newOrder;
  }
}
