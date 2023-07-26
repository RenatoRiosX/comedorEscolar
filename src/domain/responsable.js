export class Responsable {
  constructor(responsableName, balance, studentsInCharge) {
    this.responsableName = responsableName;
    this.balance = balance;
    this.studentsInCharge = studentsInCharge;
  }

  // Responsable Name

  getResponsableName() {
    return this.responsableName;
  }

  setResponsableName(name) {
    this.responsableName = name;
  }

  // Balance

  getBalance() {
    return this.balance;
  }

  setBalance(balance) {
    this.balance = balance;
  }

  payOrder(orderPrice) {
    if (orderPrice > this.balance) {
      throw new Error('Saldo insuficiente');
    } else {
      this.balance -= orderPrice;
    }
  }

  // Students in charge

  getStudentsInCharge() {
    return this.studentsInCharge;
  }

  addStudentToStudentsInCharge(student) {
    this.studentsInCharge.push(student);
  }

  particularStudent(idStudent) {
    for (const student of this.studentsInCharge) {
      if (student.studentId === idStudent) {
        return student;
      }
    }
    return null;
  }
}
