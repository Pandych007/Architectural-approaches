// 1. Принцип единственной ответственности (Single Responsibility Principle)
class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }
}

class SalaryCalculator {
  calculateSalary(employee, baseSalary) {
    if (employee.getPosition() === "Manager") {
      return baseSalary * 1.2; // Для менеджера 20% надбавка
    }
    return baseSalary;
  }
}

// 2. Принцип открытости/закрытости (Open/Closed Principle)
class Shape {
  draw() {
    throw new Error("Метод draw() должен быть переопределен");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Рисуем круг");
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("Рисуем прямоугольник");
  }
}

class ShapeDrawer {
  constructor(shape) {
    this.shape = shape;
  }

  drawShape() {
    this.shape.draw();
  }
}

// 3. Принцип подстановки Лисков (Liskov Substitution Principle)
class RectangleBase {
  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends RectangleBase {
  setWidth(width) {
    this.width = width;
    this.height = width; // Для квадрата ширина = высоте
  }

  setHeight(height) {
    this.height = height;
    this.width = height; // Для квадрата высота = ширине
  }
}

// 4. Принцип разделения интерфейсов (Interface Segregation Principle)
class Worker {
  work() {
    throw new Error("Метод work() должен быть переопределен");
  }
}

class Eater {
  eat() {
    throw new Error("Метод eat() должен быть переопределен");
  }
}

class Human extends Worker {
  work() {
    console.log("Человек работает");
  }
}

class Robot extends Worker {
  work() {
    console.log("Робот работает");
  }
}

class HumanEater extends Eater {
  eat() {
    console.log("Человек ест");
  }
}

// 5. Принцип инверсии зависимостей (Dependency Inversion Principle)
class PaymentProcessor {
  processPayment(amount) {
    throw new Error("Метод processPayment() должен быть переопределен");
  }
}

class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Обработка оплаты ${amount} с помощью кредитной карты`);
  }
}

class PayPalProcessor extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Обработка оплаты ${amount} через PayPal`);
  }
}

class OrderService {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  processOrder(amount) {
    this.paymentProcessor.processPayment(amount);
  }
}
