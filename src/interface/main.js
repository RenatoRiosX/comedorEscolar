import {system} from '../domain/preLoadedData.js';

window.addEventListener('load', init);

function init() {
  // Nav
  navigation();
  showOrders();
  // Wallet
  updateBalance();

  // Menu
  recognizeValidDaysForMenu();

  const menus = document.getElementsByClassName('day-menu');
  for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener('click', function() {
      displayMenuOption(i);
    });
  }

  // Orders:
  document.getElementById('idBtnCancelOrder').
      addEventListener('click', cancelOrder);
  document.getElementById('idBtnPayOrder').
      addEventListener('click', payOrder);
  updateOrderPrice();

  // Record
  showRecord();
}

// Nav:

function navigation() {
  document.getElementById('idNavMenu').addEventListener('click', function() {
    showSection('idMenuSection');
  });

  document.getElementById('idNavRecord').addEventListener('click', function() {
    showSection('idRecordSection');
  });

  document.getElementById('idNavOrders').addEventListener('click', function() {
    showSection('idOrdersSection');
  });
}

let elementoAnterior = document.getElementById('idMenuSection');
function showSection(id) {
  const elementoActual = document.getElementById(id);

  if (elementoAnterior !== null) {
    if (elementoAnterior.classList.contains('visible')) {
      elementoAnterior.classList.remove('visible');
      elementoAnterior.classList.add('invisible');
    }
  }

  if (elementoActual.classList.contains('invisible')) {
    elementoActual.classList.remove('invisible');
    elementoActual.classList.add('visible');
    document.getElementById('idOrderDayMealSection').innerHTML = '';
  }
  elementoAnterior = elementoActual;
}

// Wallet:

function updateBalance() {
  document.getElementById('idResponsableBalance').innerHTML =
    'Saldo: $' + (system.getCurrentResponsable().getBalance());
}

// Menu:

/* This function determines every time you access which days in the
system.dayList are eligible to add to the menu window.
These are the ones which date is the same as
the current day and the following ones*/
function recognizeValidDaysForMenu() {
  // Erases every day that has already passed or with no meals
  system.dayUpdate();
  // Order the days for date
  system.sortDays();
  if (system.atLeastOneDay()) {
    document.getElementById('idMenuContent').innerHTML = '';
    for (let i = 0; i < system.dayList.length; i++) {
      showMenu(i);
    }
  } else {
    const noMenu = document.createElement('p');
    noMenu.className = 'no-data';
    noMenu.textContent = 'No hay pedidos en este momento';
    const noDataDiv = document.getElementById('idNoMenuInfo');
    noDataDiv.appendChild(noMenu);
  }
}

/* Manipulates the html of the menu of the day in the position
'position' at the dayList array on system.*/
function showMenu(position) {
  const days = system.getDayList();
  const dayNameSystem = days[position].dayOfWeek;
  const dayDateSystem = days[position].dayDate.getDate();
  const monthDateSystem = days[position].dayDate.getMonth() + 1;
  const meals = days[position].getMealList();

  const tree = document.createDocumentFragment();
  const dayMenu = document.createElement('div');
  dayMenu.classList.add('day-menu');
  dayMenu.id = 'idMenu' + position;

  const aHref = document.createElement('a');
  aHref.setAttribute('href', '#');
  dayMenu.appendChild(aHref);

  const dayDiv = document.createElement('div');
  dayDiv.classList.add('day');
  aHref.appendChild(dayDiv);

  const dayName = document.createElement('h4');
  const dayDate = document.createElement('h4');
  dayName.classList.add('day-name');
  dayDate.classList.add('date');
  dayName.innerHTML = dayNameSystem;
  dayDate.innerHTML = dayDateSystem + '/' + monthDateSystem;
  dayDiv.appendChild(dayName);
  dayDiv.appendChild(dayDate);

  const ulMenu = document.createElement('ul');
  const liMenu = document.createElement('li');
  aHref.appendChild(ulMenu);
  ulMenu.appendChild(liMenu);

  /* Iterates on the meal array of the day sected*/
  for (let i = 0; i < meals.length; i++) {
    const divMeal = document.createElement('div');
    divMeal.classList.add('meal');
    liMenu.appendChild(divMeal);

    const pMealName = document.createElement('p');
    const pMealPrice = document.createElement('p');
    pMealName.classList.add('meal-name');
    pMealPrice.classList.add('meal-price');
    pMealName.innerHTML = (meals[i].mealName);
    pMealPrice.innerHTML = '$ ' + (meals[i].mealPrice);

    divMeal.appendChild(pMealName);
    divMeal.appendChild(pMealPrice);
  }

  const smallMeal = document.createElement('small');
  smallMeal.classList.add('view-order-txt');
  smallMeal.innerHTML = 'Pedir/Más información';
  aHref.appendChild(smallMeal);
  tree.appendChild(dayMenu);
  document.getElementById('idMenuContent').appendChild(tree);
  document.getElementById('idMenuContent').classList.add('visible');
}

/* Manipulates the html to expand a determinated
 option of the menu when you click it.*/
function displayMenuOption(menuNumber) {
  document.getElementById('idMenuSection').classList.remove('visible');
  document.getElementById('idMenuSection').classList.add('invisible');

  const sectionOrder = document.getElementById('idOrderDayMealSection');
  const dayList = system.getDayList();
  const selectedDay = dayList[menuNumber];

  const h3Order = document.createElement('h3');
  h3Order.innerHTML = selectedDay.getDayOfWeek() +
  ' ' + selectedDay.dayDate.getDate() + '/' +
  (selectedDay.dayDate.getMonth() +
   1);
  sectionOrder.appendChild(h3Order);

  const divOrder = document.createElement('div');
  divOrder.id = 'menuOfDay' + menuNumber;
  sectionOrder.appendChild(divOrder);

  /* iterates on the selected day mealList*/
  for (let i = 0; i < selectedDay.getMealList().length; i++) {
    const divOrderMeals = document.createElement('div');
    divOrderMeals.classList.add('day-meals');
    divOrder.appendChild(divOrderMeals);
    divOrderMeals.id = 'dayMeal' + i;

    const divDayMeal = document.createElement('div');
    divDayMeal.classList.add('day-meal');
    divOrderMeals.appendChild(divDayMeal);

    const h4MealName = document.createElement('h4');
    const h4MealPrice = document.createElement('h4');
    h4MealName.classList.add('day-meal-name');
    h4MealPrice.classList.add('day-meal-price');
    h4MealName.innerHTML = selectedDay.getMealList()[i].getMealName();
    h4MealPrice.innerHTML = '$' + selectedDay.getMealList()[i].getMealPrice();
    divDayMeal.appendChild(h4MealName);
    divDayMeal.appendChild(h4MealPrice);

    const divMealInfo = document.createElement('div');
    divMealInfo.classList.add('meal-info');
    divOrderMeals.appendChild(divMealInfo);

    const pIngredients = document.createElement('p');
    let tempIngredients = 'Ingredientes:';

    /* Iterates on the ingredients of each of the meals*/
    for (let j = 0; j < selectedDay.getMealList()[i].
        getIngredients().length; j++) {
      tempIngredients = tempIngredients + ' ' +
      selectedDay.getMealList()[i].getIngredients()[j];
    }
    pIngredients.innerHTML = tempIngredients;
    divMealInfo.appendChild(pIngredients);

    const formStudents = document.createElement('form');
    divOrderMeals.appendChild(formStudents);

    const smallStudents = document.createElement('small');
    smallStudents.innerHTML = 'Seleccionar alumnos';
    formStudents.appendChild(smallStudents);

    /* Iterates on the students array at the current responsable*/
    for (let k = 0; k < system.currentResponsable.
        getStudentsInCharge().length; k++) {
      const currentStudent = system.currentResponsable.getStudentsInCharge()[k];

      const divStudent = document.createElement('div');
      formStudents.appendChild(divStudent);

      const inputCheckStudent = document.createElement('input');
      inputCheckStudent.setAttribute('type', 'checkbox');
      /* Separates que students of each meal*/
      inputCheckStudent.classList.add('student-check' + i);
      const textidStudent = 'idStudent' + currentStudent.getStudentId();
      inputCheckStudent.id = textidStudent;
      formStudents.appendChild(inputCheckStudent);

      const labelStudent = document.createElement('label');
      labelStudent.setAttribute('for', '' + textidStudent);
      labelStudent.innerHTML = currentStudent.getStudentName();
      formStudents.appendChild(labelStudent);
    }
    const divBtnContainer = document.createElement('div');
    divBtnContainer.classList.add('add-meal-btn-container');
    divOrderMeals.appendChild(divBtnContainer);

    /* The first number of the id of each button is the position of the day
    in the array of days within the system
    and the second the position of the food in the array
    of meals within that day.*/
    const btnAddMeal = document.createElement('button');
    btnAddMeal.setAttribute('type', 'submit');
    btnAddMeal.classList.add('add-meal-to-orders');
    btnAddMeal.innerHTML = 'Añadir';
    btnAddMeal.id = 'btnAddMeal' + '-' + menuNumber + '-' + i;
    btnAddMeal.addEventListener('click', function() {
      addMealToOrder(btnAddMeal.id);
    });
    divBtnContainer.appendChild(btnAddMeal);
  }
}

/* Evaluate if the order is possible and if it is the case,
adds the order (by clicking on the button of each meal for the
checked students) to the current orderList */
function addMealToOrder(btnId) {
  const btnIdData = btnId.split('-');
  const days = system.getDayList();
  const meals = days[btnIdData[1]].getMealList();
  const meal = meals[btnIdData[2]];
  const students = document.
      getElementsByClassName('student-check' + btnIdData[2]);
  for (let i = 0; i<students.length; i++) {
    if (students[i].checked) {
      if (system.getCurrentResponsable().
          getStudentsInCharge()[i].isAProblem(meal)) {
        alert('Su hijo/a ' + system.getCurrentResponsable().
            getStudentsInCharge()[i].getStudentName() +
            ' no debería consumir esta comida');
      } else {
        if (system.mealAlreadyOrdered(meal,
            system.getCurrentResponsable().getStudentsInCharge()[i]
                .getStudentId(),
            days[btnIdData[1]].getDayDate())) {
          alert('La orden para ' + system.getCurrentResponsable()
              .getStudentsInCharge()[i].getStudentName() +
              ' de ' + meal.getMealName() + ' ya está en el sistema');
        } else {
          const newOrder = system.createOrder(system.getCurrentResponsable(),
              system.getCurrentResponsable().getStudentsInCharge()[i],
              meal, days[btnIdData[1]].getDayDate());
          system.addOrderToCurrentOrder(newOrder);
          alert('La orden para ' + system.getCurrentResponsable().
              getStudentsInCharge()[i].getStudentName() +
                ' fue realizada con éxito');
        }
      }
    }
    students[i].checked = false;
  }
  showOrders();
  updateOrderPrice();
}

// Record:

/* Manipulates the html of the record Section to show the meals
every student asociated to the current responsable ate.*/
function showRecord() {
  document.getElementById('idRecordContent').innerHTML = '';
  document.getElementById('idNoRecordInfo').innerHTML = '';
  const responsable = system.getCurrentResponsable();
  const stdInCharge = responsable.getStudentsInCharge();

  for (let i = 0; i < stdInCharge.length; i++) {
    if (stdInCharge[i].getOrdersRecord().length === 0) {
      const studentNoRecord = document.createElement('p');
      studentNoRecord.className = 'no-data';
      studentNoRecord.textContent = stdInCharge[i].
          getStudentName() + ' no tiene platos registrados';
      const noDataDiv = document.getElementById('idNoRecordInfo');
      noDataDiv.appendChild(studentNoRecord);
    } else {
      const listOrdRecord = stdInCharge[i].getOrdersRecord();

      const studentRecord = document.createElement('div');
      studentRecord.className = 'student-record';

      const studentName = document.createElement('h4');
      studentName.className = 'student-name';

      studentName.textContent = stdInCharge[i].getStudentName();

      const ul = document.createElement('ul');

      studentRecord.appendChild(studentName);
      studentRecord.appendChild(ul);

      document.getElementById('idRecordContent').appendChild(studentRecord);

      let total = 0;
      for (let j = 0; j < listOrdRecord.length; j++) {
        const recordOrder1 = document.createElement('div');
        recordOrder1.className = 'record-order';

        const li = document.createElement('li');

        li.appendChild(recordOrder1);

        ul.appendChild(li);

        const mealDate1 = document.createElement('p');
        mealDate1.className = 'ordered-meal-date';
        const orderDate = listOrdRecord[j].getOrderDate();
        mealDate1.textContent = listOrdRecord[j].getMealOrdered().
            getMealName() + ' (' + orderDate.
            getDate() + '/' + (orderDate.getMonth() + 1) + '/' +
            orderDate.getFullYear() + ')';

        const price1 = document.createElement('p');
        price1.className = 'ordered-price';
        price1.textContent = '$' + listOrdRecord[j].
            getMealOrdered().getMealPrice();

        recordOrder1.appendChild(mealDate1);
        recordOrder1.appendChild(price1);

        total = total + listOrdRecord[j].getMealOrdered().getMealPrice();
      }
      const studentTotal = document.createElement('small');
      studentTotal.className = 'student-total';
      studentTotal.textContent = 'Total: $' + total;
      studentRecord.appendChild(studentTotal);
    }
  }
}

// Orders:

/* Manipulates the html to show the orders on the currentOrderList
at the system*/

function showOrders() {
  document.getElementById('idOrdersContent').innerHTML = '';
  document.getElementById('idNoOrderInfo').innerHTML = '';
  const listOrders = system.getCurrentOrder();
  if (listOrders.length === 0) {
    document.getElementById('idCurrentOrderTotal').className = 'invisible';
    document.getElementById('idBtnCancelOrder').className = 'invisible';
    document.getElementById('idBtnPayOrder').className = 'invisible';
    const noCurrentOrders = document.createElement('p');
    noCurrentOrders.className = 'no-data';
    noCurrentOrders.textContent = 'No hay pedidos en este momento';
    const noDataDiv = document.getElementById('idNoOrderInfo');
    noDataDiv.appendChild(noCurrentOrders);
  } else {
    document.getElementById('idCurrentOrderTotal').className = 'orders-total';
    document.getElementById('idBtnCancelOrder').className = '';
    document.getElementById('idBtnPayOrder').className = '';

    for (let i = 0; i < listOrders.length; i++) {
      const studentOrders = document.createElement('div');
      studentOrders.className = 'student-orders';
      document.getElementById('idOrdersContent').appendChild(studentOrders);

      const studentName = document.createElement('p');
      studentName.className = 'order-student-name';

      studentName.textContent = listOrders[i].getOrderStudent().
          getStudentName();
      studentOrders.appendChild(studentName);

      const ordersTextParagraph = document.createElement('p');
      ordersTextParagraph.className = 'orders-text';
      ordersTextParagraph.textContent = 'Pedido:';
      studentOrders.appendChild(ordersTextParagraph);

      const ulElement = document.createElement('ul');

      studentOrders.appendChild(ulElement);

      const listFood = listOrders[i].getMealOrdered();
      const liElement = document.createElement('li');

      const orderDivElement = document.createElement('div');
      orderDivElement.className = 'order';

      liElement.appendChild(orderDivElement);
      ulElement.appendChild(liElement);

      const orderInfo = document.createElement('p');
      orderInfo.className = 'order-info';
      const orderDate = listOrders[i].getOrderDate();
      orderInfo.textContent = listFood.getMealName() + ' (' +
      orderDate.getDate() + '/' +
      (orderDate.getMonth() + 1) + ')';
      orderDivElement.appendChild(orderInfo);

      const orderPrice = document.createElement('p');
      orderPrice.className = 'order-price';
      orderPrice.textContent = '$' + listFood.getMealPrice();
      orderDivElement.appendChild(orderPrice);
    }
  }
}

function updateOrderPrice() {
  document.getElementById('idCurrentOrderTotal').innerHTML =
    'Total a pagar: $' + (system.getCurrentOrderTotalPrice());
}

function cancelOrder() {
  const cancel = confirm('¿Deseas cancelar todos tus pedidos?');
  if (cancel) {
    system.cancelCurrentOrder();
    showOrders();
  }
}

function payOrder() {
  const pay = confirm('¿Desea confirmar el pago?');
  if (pay) {
    const currentOrderTotal = system.getCurrentOrderTotalPrice();
    if (currentOrderTotal > system.getCurrentResponsable().getBalance()) {
      alert('Pago rechazado: Saldo insuficiente');
    } else {
      system.payCurrentOrder(currentOrderTotal);
      updateBalance();
      showOrders();
      showRecord();
      alert('Pago realizado');
    }
  }
}
