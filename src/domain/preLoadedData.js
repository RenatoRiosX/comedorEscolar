/* IMPORTANTE:
Aqui es donde deben insertar los datos para testing.
Les dejamos debajo algunos datos ya insertados.

Aclaraciones: los días se esperan que sean ingresados por la parte
de la institución, por lo tanto seguramente NO se controlan
todas las entradas de datos que no sean correctas. Esto también
aplica para el responsable, el alumno y los platos.

Nota: en live preview no salen los mensajes tipo 'alert' o 'confirm' algunas
veces, probar en el navegador mismo.
-----------------------------------------------------------------*/
import {Day} from './day.js';
import {Meal} from './meal.js';
import {Order} from './order.js';
import {Responsable} from './responsable.js';
import {Student} from './student.js';
import {System} from './system.js';

export const system = new System();

// Meals:
const m1 = new Meal(
    'Milanesa de pollo',
    100,
    ['Pollo', 'Pan rallado', 'Huevo', 'Leche', 'Pure de papa'],
    ['LACTOSA', 'GLUTEN']);

const m2 = new Meal(
    'Arroz con verduras',
    70,
    ['Arroz blanco', 'Papa', 'Cebolla', 'Zanahoria', 'Salsa de soja'],
    []);
const m3 = new Meal(
    'Milanesa de carne',
    100,
    ['Carne', 'Rebozador', 'Huevo', 'Tomate'],
    ['LACTOSA']);
const m4 = new Meal(
    'Empanada caprese',
    70,
    ['Masa de empanada', 'Queso parmesano', 'Queso muzzarella',
      'Tomate cherry', 'Albahaca'],
    ['LACTOSA', 'GLUTEN']);
const m5 = new Meal('Sopa', 70, ['Caldo', 'Fideos'], []);
const m6 = new Meal('Pizza', 80, ['Harina', 'Salsa de tomate',
  ' Muzzarella'], ['GLUTEN']);

// Days:

const d1 = new Day('Lunes', new Date('2024/06/19'), [m1, m2]);
const d2 = new Day('Martes', new Date('2024/06/20'), [m3, m4]);
const d3 = new Day('Miércoles', new Date('2024/06/21'), [m4, m5]);
const d4 = new Day('Jueves', new Date('2024/06/22'), [m3, m1]);
const d5 = new Day('Viernes', new Date('2024/06/23'), [m3, m1, m6]);

// Students:
const s1 = new Student(23678, 'Juan Macedo', [], []);
const s2 = new Student(24002, 'Carla Macedo', ['GLUTEN'], []);

// Responsable:
const r1 = new Responsable('Pedro Macedo', 2000, [s1, s2]);

// Orders:
const o1 = new Order(r1, s1, m3, new Date('2024/06/22'));

// System:
system.addDayToList(d1);
system.addDayToList(d2);
system.addDayToList(d3);
system.addDayToList(d4);
system.addDayToList(d5);
system.setCurrentResponsable(r1);
system.addOrderToCurrentOrder(o1);
