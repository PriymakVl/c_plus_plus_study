const lessonData = {
    title: "Практические задачи на C++",
    topic: "Условные операторы (if / else)",
    footer: "Интерактивные задачи по C++",
    tasks: [
      {
        id: "task1",
        title: "Задача 1. Сравнение двух чисел",
        conditions: [
          "Напишите программу, которая считывает из консоли два целых числа с помощью <code>std::cin</code>.",
          "Сравните полученные числа с помощью условного оператора <code>if</code>.",
          "Выведите в консоль большее из двух чисел через поток <code>std::cout</code>.",
          "Если числа равны, выведите сообщение <code>Числа равны</code>."
        ],
        solution: `#include <iostream>

int main() {
    int a, b;
    std::cout << "Введите два числа: ";
    std::cin >> a >> b;

    if (a > b) {
        std::cout << "Большее число: " << a << std::endl;
    } else if (b > a) {
        std::cout << "Большее число: " << b << std::endl;
    } else {
        std::cout << "Числа равны" << std::endl;
    }

    return 0;
}`
      },
      {
        id: "task2",
        title: "Задача 2. Сравнение трёх чисел",
        conditions: [
          "Напишите программу, которая считывает из консоли три целых числа с помощью <code>std::cin</code>.",
          "Используйте логические операторы и конструкции <code>if / else if</code> для определения наибольшего числа.",
          "Выведите наибольшее из трёх чисел.",
          "Если все три числа равны между собой, выведите сообщение <code>Все числа равны</code>."
        ],
        solution: `#include <iostream>

int main() {
    int a, b, c;
    std::cout << "Введите три числа: ";
    std::cin >> a >> b >> c;

    if (a == b && b == c) {
        std::cout << "Все числа равны" << std::endl;
    } else {
        int max = a;
        if (b > max) {
            max = b;
        }
        if (c > max) {
            max = c;
        }
        std::cout << "Наибольшее число: " << max << std::endl;
    }

    return 0;
}`
      },
      {
        id: "task3",
        title: "Задача 3. Проверка на чётность",
        conditions: [
          "Напишите программу, которая принимает с клавиатуры целое число с помощью <code>std::cin</code>.",
          "Определите, является ли число чётным, используя оператор остатка от деления <code>%</code>.",
          "Выведите в консоль сообщение <code>Число чётное</code> или <code>Число нечётное</code>."
        ],
        solution: `#include <iostream>

int main() {
    int number;
    std::cout << "Введите целое число: ";
    std::cin >> number;

    if (number % 2 == 0) {
        std::cout << "Число чётное" << std::endl;
    } else {
        std::cout << "Число нечётное" << std::endl;
    }

    return 0;
}`
      },
      {
        id: "task4",
        title: "Задача 4. Определение знака числа",
        conditions: [
          "Напишите программу, которая считывает целое или вещественное число из консоли.",
          "Проверьте, является ли оно положительным, отрицательным или равным нулю.",
          "Выведите соответствующее сообщение: <code>Число положительное</code>, <code>Число отрицательное</code> или <code>Число равно нулю</code>."
        ],
        solution: `#include <iostream>

int main() {
    double number;
    std::cout << "Введите число: ";
    std::cin >> number;

    if (number > 0) {
        std::cout << "Число положительное" << std::endl;
    } else if (number < 0) {
        std::cout << "Число отрицательное" << std::endl;
    } else {
        std::cout << "Число равно нулю" << std::endl;
    }

    return 0;
}`
      },
      {
        id: "task5",
        title: "Задача 5. Проверка попадания в диапазон",
        conditions: [
          "Напишите программу, которая считывает число с помощью <code>std::cin</code>.",
          "Используя оператор И (<code>&&</code>), проверьте, находится ли число в отрезке от <code>10</code> до <code>50</code> включительно.",
          "Если число входит в диапазон, выведите <code>Число входит в отрезок</code>, иначе выведите <code>Число вне отрезка</code>."
        ],
        solution: `#include <iostream>

int main() {
    int number;
    std::cout << "Введите число: ";
    std::cin >> number;

    if (number >= 10 && number <= 50) {
        std::cout << "Число входит в отрезок" << std::endl;
    } else {
        std::cout << "Число вне отрезка" << std::endl;
    }

    return 0;
}`
      },
      {
        id: "task6",
        title: "Задача 6. Оценка по баллам",
        conditions: [
          "Введите балл ученика (от <code>1</code> до <code>12</code>) с помощью <code>std::cin</code>.",
          "Если балл <code>&ge; 10</code>, выведите <code>Отлично</code>.",
          "Если балл <code>&ge; 7</code>, выведите <code>Хорошо</code>.",
          "Иначе выведите <code>Нужно поработать</code>."
        ],
        solution: `#include <iostream>

int main() {
    int score;
    std::cout << "Введите балл ученика (1-12): ";
    std::cin >> score;

    if (score >= 10) {
        std::cout << "Отлично" << std::endl;
    } else if (score >= 7) {
        std::cout << "Хорошо" << std::endl;
    } else {
        std::cout << "Нужно поработать" << std::endl;
    }

    return 0;
}`
      },
      {
        id: "task7",
        title: "Задача 7. Скидка на покупку",
        conditions: [
          "Введите сумму покупки с клавиатуры с помощью <code>std::cin</code>.",
          "Если сумма превышает <code>1000 грн</code>, предоставьте скидку <code>10%</code>.",
          "Выведите итоговую сумму к оплате."
        ],
        solution: `#include <iostream>

int main() {
    double total;
    std::cout << "Введите сумму покупки: ";
    std::cin >> total;

    if (total > 1000) {
        total *= 0.9;
    }

    std::cout << "Итоговая сумма: " << total << " грн" << std::endl;

    return 0;
}`
      },
      {
        id: "task8",
        title: "Задача 8. Существование треугольника",
        conditions: [
          "Считайте три стороны <code>a</code>, <code>b</code>, <code>c</code> из консоли.",
          "Проверьте, существует ли треугольник с такими сторонами (каждая сторона должна быть меньше суммы двух других).",
          "Выведите сообщение о существовании треугольника."
        ],
        solution: `#include <iostream>

int main() {
    double a, b, c;
    std::cout << "Введите три стороны треугольника: ";
    std::cin >> a >> b >> c;

    if (a < b + c && b < a + c && c < a + b) {
        std::cout << "Треугольник существует" << std::endl;
    } else {
        std::cout << "Треугольник не существует" << std::endl;
    }

    return 0;
}`
      }
    ]
  };