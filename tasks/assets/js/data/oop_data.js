const lessonData = {
    title: "Практические задачи на C++",
    topic: "Объектно-ориентированное программирование (ООП)",
    footer: "Интерактивные задачи по C++",
    tasks: [
      {
        id: "task1",
        title: "Задача 1. Создание класса, полей и методов",
        conditions: [
          "Создайте класс <code>Book</code> с публичными полями <code>title</code> (<code>std::string</code>), <code>author</code> (<code>std::string</code>) и <code>year</code> (<code>int</code>).",
          "Добавьте в класс метод <code>printInfo()</code>, который выводит информацию о книге в формате: <code>&quot;Название&quot; — Автор (Год)</code>.",
          "В функции <code>main()</code> создайте объект класса <code>Book</code>, заполните его поля и вызовите метод <code>printInfo()</code>."
        ],
        solution: `#include <iostream>
#include <string>

class Book {
public:
    std::string title;
    std::string author;
    int year;

    void printInfo() const {
        std::cout << "\"" << title << "\" — " << author << " (" << year << ")" << std::endl;
    }
};

int main() {
    Book myBook;
    myBook.title = "Преступление и наказание";
    myBook.author = "Ф. М. Достоевский";
    myBook.year = 1866;

    myBook.printInfo();

    return 0;
}`
      },
      {
        id: "task2",
        title: "Задача 2. Конструкторы и список инициализации",
        conditions: [
          "Создайте класс <code>Rectangle</code> с приватными полями <code>width</code> и <code>height</code> типа <code>double</code>.",
          "Реализуйте конструктор по умолчанию (устанавливает оба значения в <code>1.0</code>) и параметризованный конструктор с использованием списка инициализации.",
          "Добавьте методы <code>getArea()</code> и <code>getPerimeter()</code>, возвращающие площадь и периметр прямоугольника.",
          "В <code>main()</code> создайте два объекта (через оба конструктора) и выведите их площадь и периметр."
        ],
        solution: `#include <iostream>

class Rectangle {
private:
    double width;
    double height;

public:
    Rectangle() : width(1.0), height(1.0) {}

    Rectangle(double w, double h) : width(w), height(h) {}

    double getArea() const {
        return width * height;
    }

    double getPerimeter() const {
        return 2 * (width + height);
    }
};

int main() {
    Rectangle defaultRect;
    Rectangle customRect(4.5, 2.0);

    std::cout << "По умолчанию — Площадь: " << defaultRect.getArea()
              << ", Периметр: " << defaultRect.getPerimeter() << std::endl;

    std::cout << "Пользовательский — Площадь: " << customRect.getArea()
              << ", Периметр: " << customRect.getPerimeter() << std::endl;

    return 0;
}`
      },
      {
        id: "task3",
        title: "Задача 3. Инкапсуляция, геттеры и сеттеры",
        conditions: [
          "Создайте класс <code>BankAccount</code> с приватными полями <code>owner</code> (<code>std::string</code>) и <code>balance</code> (<code>double</code>).",
          "Реализуйте конструктор, принимающий имя владельца и начальный баланс (если баланс отрицательный, установите <code>0.0</code>).",
          "Добавьте методы <code>deposit(double amount)</code> (пополнение только на положительную сумму) и <code>withdraw(double amount)</code> (снятие, если сумма положительна и не превышает баланс).",
          "Добавьте геттер <code>getBalance()</code> и продемонстрируйте работу методов в <code>main()</code>, включая попытку снять больше средств, чем есть на счёте."
        ],
        solution: `#include <iostream>
#include <string>

class BankAccount {
private:
    std::string owner;
    double balance;

public:
    BankAccount(const std::string& ownerName, double initialBalance)
        : owner(ownerName), balance(initialBalance >= 0 ? initialBalance : 0.0) {}

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            std::cout << "Пополнено: +" << amount << std::endl;
        } else {
            std::cout << "Ошибка: сумма пополнения должна быть положительной." << std::endl;
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            std::cout << "Снято: -" << amount << std::endl;
        } else {
            std::cout << "Ошибка: недостаточно средств или неверная сумма." << std::endl;
        }
    }

    double getBalance() const {
        return balance;
    }
};

int main() {
    BankAccount acc("Алексей", 1000.0);
    std::cout << "Начальный баланс: " << acc.getBalance() << std::endl;

    acc.deposit(500.0);
    acc.withdraw(2000.0); // Ошибка
    acc.withdraw(350.0);

    std::cout << "Итоговый баланс: " << acc.getBalance() << std::endl;

    return 0;
}`
      },
      {
        id: "task4",
        title: "Задача 4. Наследование и ключевое слово protected",
        conditions: [
          "Создайте базовый класс <code>Vehicle</code> с защищённым полем <code>speed</code> (<code>int</code>) и конструктором для его инициализации.",
          "Добавьте в <code>Vehicle</code> метод <code>showSpeed()</code>, выводящий текущую скорость.",
          "Создайте производный класс <code>Car</code> (публичное наследование от <code>Vehicle</code>), добавив поле <code>brand</code> (<code>std::string</code>) и метод <code>honk()</code>, выводящий сообщение с маркой машины.",
          "В <code>main()</code> создайте объект <code>Car</code> и вызовите методы как базового, так и производного классов."
        ],
        solution: `#include <iostream>
#include <string>

class Vehicle {
protected:
    int speed;

public:
    Vehicle(int s) : speed(s) {}

    void showSpeed() const {
        std::cout << "Текущая скорость: " << speed << " км/ч" << std::endl;
    }
};

class Car : public Vehicle {
private:
    std::string brand;

public:
    Car(const std::string& carBrand, int s) : Vehicle(s), brand(carBrand) {}

    void honk() const {
        std::cout << brand << " сигналит: Би-бип!" << std::endl;
    }
};

int main() {
    Car myCar("Toyota", 90);
    myCar.honk();
    myCar.showSpeed();

    return 0;
}`
      },
      {
        id: "task5",
        title: "Задача 5. Полиморфизм и виртуальные функции",
        conditions: [
          "Создайте базовый класс <code>Animal</code> с чисто виртуальным методом <code>makeSound()</code> (<code>= 0</code>) и виртуальным деструктором.",
          "Создайте два производных класса: <code>Dog</code> и <code>Cat</code>, переопределив в каждом метод <code>makeSound()</code> с ключевым словом <code>override</code>.",
          "В <code>main()</code> создайте <code>std::vector</code> указателей <code>Animal*</code>, поместите туда объекты <code>Dog</code> и <code>Cat</code>, вызовите <code>makeSound()</code> в цикле и корректно освободите память."
        ],
        solution: `#include <iostream>
#include <vector>

class Animal {
public:
    virtual void makeSound() const = 0;
    virtual ~Animal() = default;
};

class Dog : public Animal {
public:
    void makeSound() const override {
        std::cout << "Собака: Гав-гав!" << std::endl;
    }
};

class Cat : public Animal {
public:
    void makeSound() const override {
        std::cout << "Кошка: Мяу!" << std::endl;
    }
};

int main() {
    std::vector<Animal*> zoo;
    zoo.push_back(new Dog());
    zoo.push_back(new Cat());

    for (const Animal* animal : zoo) {
        animal->makeSound();
    }

    for (Animal* animal : zoo) {
        delete animal;
    }

    return 0;
}`
      },
      {
        id: "task6",
        title: "Задача 6. Статические члены класса и перегрузка операторов",
        conditions: [
          "Создайте класс <code>Point</code> с полями <code>x</code> и <code>y</code> (<code>double</code>) и статическим полем <code>objectCount</code>, подсчитывающим количество созданных объектов.",
          "Реализуйте конструктор и деструктор, обновляющие <code>objectCount</code>, а также статический метод <code>getCount()</code>.",
          "Перегрузите оператор сложения <code>operator+</code>, чтобы две точки можно было складывать по координатам (<code>p1 + p2</code>).",
          "В <code>main()</code> создайте несколько точек, сложите две из них и выведите координаты результата и общее число активных объектов."
        ],
        solution: `#include <iostream>

class Point {
private:
    double x;
    double y;
    static int objectCount;

public:
    Point(double xVal = 0.0, double yVal = 0.0) : x(xVal), y(yVal) {
        ++objectCount;
    }

    Point(const Point& other) : x(other.x), y(other.y) {
        ++objectCount;
    }

    ~Point() {
        --objectCount;
    }

    Point operator+(const Point& other) const {
        return Point(x + other.x, y + other.y);
    }

    void print() const {
        std::cout << "(" << x << ", " << y << ")" << std::endl;
    }

    static int getCount() {
        return objectCount;
    }
};

int Point::objectCount = 0;

int main() {
    Point p1(2.5, 4.0);
    Point p2(1.5, -1.0);
    Point p3 = p1 + p2;

    std::cout << "Результат сложения: ";
    p3.print();
    std::cout << "Всего активных объектов Point: " << Point::getCount() << std::endl;

    return 0;
}`
      }
    ]
  };