const lessonData = {
    title: "Практические задачи на C++",
    topic: "Переменные и вывод данных",
    footer: "Интерактивные задачи по C++",
    tasks: [
      {
        id: "task1",
        title: "Задача 1. Сумма двух чисел",
        conditions: [
          "Создайте переменную <code>num1</code> и присвойте ей значение <code>10</code>.",
          "Создайте переменную <code>num2</code> и присвойте ей значение <code>20</code>.",
          "Создайте переменную <code>sum</code>, присвойте ей сумму значений переменных <code>num1</code> и <code>num2</code>.",
          "Выведите значение переменной <code>sum</code> на экран с помощью потока вывода <code>std::cout</code>."
        ],
        solution: `#include <iostream>
  
  int main() {
      int num1 = 10;
      int num2 = 20;
      int sum = num1 + num2;
      
      std::cout << sum << std::endl;
      
      return 0;
  }`
      },
      {
        id: "task2",
        title: "Задача 2. Вывод имени и возраста",
        conditions: [
          "Создайте переменную <code>name</code> и присвойте ей свое имя.",
          "Создайте переменную <code>age</code> и присвойте ей свой возраст.",
          "При помощи потока <code>std::cout</code> выведите на экран строку в формате: <code>Привет, [name]. Тебе [age] лет.</code>"
        ],
        solution: `#include <iostream>
  #include <string>
  
  int main() {
      std::string name = "Алексей";
      int age = 20;
      
      std::cout << "Привет, " << name << ". Тебе " << age << " лет." << std::endl;
      
      return 0;
  }`
      },
      {
        id: "task3",
        title: "Задача 3. Расчет высоты прямоугольника",
        conditions: [
          "Площадь прямоугольника равна <code>30</code> кв.м.",
          "Ширина прямоугольника равна <code>10</code> м.",
          "Напишите программу, которая посчитает высоту прямоугольника.",
          "Выведите высоту на экран при помощи потока <code>std::cout</code>."
        ],
        solution: `#include <iostream>
  
  int main() {
      double area = 30.0;
      double width = 10.0;
      
      double height = area / width;
      
      std::cout << "Высота прямоугольника: " << height << " м" << std::endl;
      
      return 0;
  }`
      },
      {
        id: "task4",
        title: "Задача 4. Площадь круга",
        conditions: [
          "Радиус круга равен <code>10</code> м.",
          "Напишите программу, которая определит площадь этого круга (S = &pi; &middot; r<sup>2</sup>).",
          "Выведите площадь на экран при помощи потока <code>std::cout</code>."
        ],
        solution: `#include <iostream>
  
  int main() {
      double radius = 10.0;
      const double PI = 3.1415926535;
      
      double area = PI * radius * radius;
      
      std::cout << "Площадь круга: " << area << " кв. м" << std::endl;
      
      return 0;
  }`
      },
      {
        id: "task5",
        title: "Задача 5. Обмен значений двух переменных",
        conditions: [
          "Объявить переменную <code>a</code> и присвоить ей значение <code>5</code>.",
          "Объявить переменную <code>b</code> и присвоить ей значение <code>10</code>.",
          "Поменять значения в переменных местами с использованием третьей переменной <code>c</code>.",
          "Вывести значения переменных на экран, используя поток <code>std::cout</code>."
        ],
        solution: `#include <iostream>
  
  int main() {
      int a = 5;
      int b = 10;
      
      // Обмен значений с помощью дополнительной переменной c
      int c = a;
      a = b;
      b = c;
      
      std::cout << "a = " << a << std::endl;
      std::cout << "b = " << b << std::endl;
      
      return 0;
  }`
      }
    ]
  };