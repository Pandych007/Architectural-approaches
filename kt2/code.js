// // Начальный пример
// const car = {
//     brand: 'Toyota',
//     speed: 120,
//     honk: () => console.log('Beep!')
// };

// const bike = {
//     brand: 'Yamaha',
//     speed: 80,
//     honk: () => console.log('Beep Beep!')
// };

// const truck = {
//     brand: 'Volvo',
//     speed: 100,
//     honk: () => console.log('Honk Honk!')
// };

// console.log(car.speed);
// console.log(bike.brand);
// truck.honk();

// // Наследование
// class Vehicle {
//     constructor(brand, speed, hornSound) {
//         this.brand = brand;
//         this.speed = speed;
//         this.hornSound = hornSound;
//     }

//     honk() {
//         console.log(this.hornSound);
//     }
// }

// class Car extends Vehicle {
//     constructor(brand, speed) {
//         super(brand, speed, "Beep!");
//     }
// }

// class Bike extends Vehicle {
//     constructor(brand, speed) {
//         super(brand, speed, "Beep Beep!");
//     }
// }

// class Truck extends Vehicle {
//     constructor(brand, speed) {
//         super(brand, speed, "Honk Honk!");
//     }
// }

// const car = new Car("Toyota", 120);
// const bike = new Bike("Yamaha", 80);
// const truck = new Truck("BMW", 100);

// console.log(car.speed);
// console.log(bike.brand);
// truck.honk();

// // Инкапсуляция
// class Vehicle {
//     #speed;

//     constructor(brand, speed, hornSound) {
//         this.brand = brand;
//         this.#speed = speed;
//         this.hornSound = hornSound;
//     }

//     getSpeed() {
//         return this.#speed;
//     }

//     setSpeed(newSpeed) {
//         if (newSpeed > 0) {
//             this.#speed = newSpeed;
//         } else {
//             console.log("Скорость должна быть положительным числом!");
//         }
//     }

//     honk() {
//         console.log(this.hornSound);
//     }
// }

// const car = new Car("Toyota", 120);
// const bike = new Bike("Yamaha", 80);
// const truck = new Truck("Volvo", 100);

// console.log(car.getSpeed());
// car.setSpeed(150);
// console.log(car.getSpeed());
// car.setSpeed(-10);
// bike.honk();
// truck.honk();

// // Полиморфизм
// class Vehicle {
//     #speed;

//     constructor(brand, speed) {
//         this.brand = brand;
//         this.#speed = speed;
//     }

//     getSpeed() {
//         return this.#speed;
//     }

//     setSpeed(newSpeed) {
//         if (newSpeed > 0) {
//             this.#speed = newSpeed;
//         } else {
//             console.log("Скорость должна быть положительным числом!");
//         }
//     }

//     honk() {
//         console.log("Я транспортное средство!");
//     }
// }

// class Car extends Vehicle {
//     constructor(brand, speed) {
//         super(brand, speed);
//     }

//     honk() {
//         console.log("Beep! Я машина марки " + this.brand);
//     }
// }

// class Bike extends Vehicle {
//     constructor(brand, speed) {
//         super(brand, speed);
//     }

//     honk() {
//         console.log("Beep Beep! Я мотоцикл марки " + this.brand);
//     }
// }

// class Truck extends Vehicle {
//     constructor(brand, speed) {
//         super(brand, speed);
//     }

//     honk() {
//         console.log("Honk Honk! Я грузовик марки " + this.brand);
//     }
// }

// const vehicles = [
//     new Car("Toyota", 120),
//     new Bike("Yamaha", 80),
//     new Truck("Volvo", 100),
// ];

// vehicles.forEach(vehicle => vehicle.honk());

// console.log(vehicles[0].getSpeed());
// vehicles[0].setSpeed(160);
// console.log(vehicles[0].getSpeed());
