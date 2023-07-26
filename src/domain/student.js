export class Student {
  constructor(studentId, studentName, prohibitions, ordersRecord) {
    this.studentId = studentId;
    this.studentName = studentName;
    this.prohibitions = prohibitions;
    this.ordersRecord = ordersRecord;
  }

  // Student Id

  getStudentId() {
    return this.studentId;
  }

  setStudentId(id) {
    this.studentId = id;
  }

  // Student Name

  getStudentName() {
    return this.studentName;
  }

  setStudentName(name) {
    this.studentName = name;
  }

  // Prohibitions

  getProhibitions() {
    return this.prohibitions;
  }

  setProhibition(prohibition) {
    this.prohibitions.push(prohibition);
  }

  isAProblem(meal) {
    let problem = false;
    for (const warning of meal.getWarnings()) {
      for (const prohibition of this.prohibitions) {
        if (warning == prohibition) {
          problem = true;
        }
      }
    }
    return problem;
  }

  // Orders

  getOrdersRecord() {
    return this.ordersRecord;
  }

  addOrderToRecord(orderToRecord) {
    if (orderToRecord.getOrderStudent() === this) {
      this.ordersRecord.push(orderToRecord);
    }
  }
}
