const Elevator = require('./elevator.js');
const Person = require('./person.js');
const ascensor = new Elevator();
const jaime = new Person("Jaime", 2, 5);
const julia = new Person("Julia", 6, 3);
const perico = new Person("Perico", 10, 4);

ascensor.call(julia);
ascensor.call(jaime);
ascensor.call(perico);
ascensor.start();
setTimeout(() => ascensor.stop(), 24000);