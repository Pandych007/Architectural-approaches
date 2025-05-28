// 1. Принцип единственной ответственности (Single Responsibility Principle)
class StaffMember {
  constructor(name, title) {
    this.name = name;
    this.title = title;
  }

  getName() {
    return this.name;
  }

  getTitle() {
    return this.title;
  }
}

class CompensationCalculator {
  calculateCompensation(staffMember, baseSalary) {
    if (staffMember.getTitle() === "Manager") {
      return baseSalary * 1.2; // Для менеджера 20% надбавка
    }
    return baseSalary;
  }
}

// 2. Принцип открытости/закрытости (Open/Closed Principle)
class GeometricShape {
  draw() {
    throw new Error("Метод draw() должен быть переопределен");
  }
}

class CircleShape extends GeometricShape {
  draw() {
    console.log("Рисуем круг");
  }
}

class RectangleShape extends GeometricShape {
  draw() {
    console.log("Рисуем прямоугольник");
  }
}

class ShapeRenderer {
  constructor(shape) {
    this.shape = shape;
  }

  renderShape() {
    this.shape.draw();
  }
}

// 3. Принцип подстановки Лисков (Liskov Substitution Principle)
class BasicRectangle {
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

class SquareShape extends BasicRectangle {
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
class JobPerformer {
  performJob() {
    throw new Error("Метод performJob() должен быть переопределен");
  }
}

class FoodConsumer {
  consumeFood() {
    throw new Error("Метод consumeFood() должен быть переопределен");
  }
}

class HumanWorker extends JobPerformer {
  performJob() {
    console.log("Человек работает");
  }
}

class RobotWorker extends JobPerformer {
  performJob() {
    console.log("Робот работает");
  }
}

class HumanFoodConsumer extends FoodConsumer {
  consumeFood() {
    console.log("Человек ест");
  }
}

// 5. Принцип инверсии зависимостей (Dependency Inversion Principle)
class PaymentHandler {
  handlePayment(amount) {
    throw new Error("Метод handlePayment() должен быть переопределен");
  }
}

class CreditCardHandler extends PaymentHandler {
  handlePayment(amount) {
    console.log(`Обработка оплаты ${amount} с помощью кредитной карты`);
  }
}

class PayPalHandler extends PaymentHandler {
  handlePayment(amount) {
    console.log(`Обработка оплаты ${amount} через PayPal`);
  }
}

class PurchaseService {
  constructor(paymentHandler) {
    this.paymentHandler = paymentHandler;
  }

  processPurchase(amount) {
    this.paymentHandler.handlePayment(amount);
  }
}
