const lessonData = {
    title: "Практические задачи на C++",
    topic: "Циклы while и do while",
    footer: "Интерактивные задачи по C++",
    tasks: [
      {
        id: "task1",
        title: "Задача 1. Обратный отсчёт с помощью while",
        conditions: [
          "Создайте целочисленную переменную <code>count</code> со значением <code>10</code>.",
          "С помощью цикла <code>while</code> выведите на экран числа от <code>10</code> до <code>1</code> через пробел.",
          "После завершения цикла выведите слово <code>Старт!</code> с помощью <code>std::cout</code>."
        ],
        solution: `#include <iostream>

int main() {
    int count = 10;

    while (count >= 1) {
        std::cout << count << " ";
        --count;
    }
    std::cout << "Старт!" << std::endl;

    return 0;
}`
      },
      {
        id: "task2",
        title: "Задача 2. Сумма вводимых чисел до нуля",
        conditions: [
          "Создайте переменные <code>number</code> и <code>sum = 0</code> типа <code>int</code>.",
          "Организуйте ввод целых чисел с клавиатуры с помощью <code>std::cin</code> в цикле <code>while</code> до тех пор, пока пользователь не введёт <code>0</code>.",
          "Накапливайте сумму всех введённых чисел в переменной <code>sum</code> и после выхода из цикла выведите её на экран."
        ],
        solution: `#include <iostream>

int main() {
    int number;
    int sum = 0;

    std::cout << "Вводите числа (0 для завершения): ";
    std::cin >> number;

    while (number != 0) {
        sum += number;
        std::cin >> number;
    }

    std::cout << "Сумма введённых чисел: " << sum << std::endl;

    return 0;
}`
      },
      {
        id: "task3",
        title: "Задача 3. Подсчёт количества цифр в числе",
        conditions: [
          "Создайте переменную <code>num</code> со значением <code>482915</code> и счётчик <code>digits = 0</code>.",
          "Используя цикл <code>while</code> и целочисленное деление на <code>10</code>, подсчитайте количество цифр в числе <code>num</code>.",
          "Выведите полученное количество цифр на экран с помощью <code>std::cout</code>."
        ],
        solution: `#include <iostream>

int main() {
    int num = 482915;
    int digits = 0;

    while (num > 0) {
        num /= 10;
        ++digits;
    }

    std::cout << "Количество цифр: " << digits << std::endl;

    return 0;
}`
      },
      {
        id: "task4",
        title: "Задача 4. Проверка пароля в цикле do while",
        conditions: [
          "Задайте правильный пароль в константе <code>const int SECRET_PIN = 1234;</code> и создайте переменную <code>inputPin</code>.",
          "С помощью цикла <code>do while</code> запрашивайте у пользователя ввод PIN-кода через <code>std::cin</code> до тех пор, пока он не совпадёт с <code>SECRET_PIN</code>.",
          "Если введён неверный код, выводите сообщение <code>Неверный PIN. Попробуйте снова.</code>, а после успешного ввода — <code>Доступ разрешён!</code>."
        ],
        solution: `#include <iostream>

int main() {
    const int SECRET_PIN = 1234;
    int inputPin;

    do {
        std::cout << "Введите PIN-код: ";
        std::cin >> inputPin;

        if (inputPin != SECRET_PIN) {
            std::cout << "Неверный PIN. Попробуйте снова." << std::endl;
        }
    } while (inputPin != SECRET_PIN);

    std::cout << "Доступ разрешён!" << std::endl;

    return 0;
}`
      },
      {
        id: "task5",
        title: "Задача 5. Ввод числа в заданном диапазоне (do while)",
        conditions: [
          "Создайте целочисленную переменную <code>grade</code>.",
          "С помощью цикла <code>do while</code> запрашивайте у пользователя оценку от <code>1</code> до <code>5</code> до тех пор, пока не будет введено корректное значение из диапазона <code>[1; 5]</code>.",
          "После выхода из цикла выведите принятую оценку на экран."
        ],
        solution: `#include <iostream>

int main() {
    int grade;

    do {
        std::cout << "Введите оценку от 1 до 5: ";
        std::cin >> grade;
    } while (grade < 1 || grade > 5);

    std::cout << "Принята оценка: " << grade << std::endl;

    return 0;
}`
      },
      {
        id: "task6",
        title: "Задача 6. Консольное меню с повторением действий",
        conditions: [
          "Создайте переменную <code>choice</code> типа <code>int</code>.",
          "В цикле <code>do while</code> выводите меню: <code>1 — Приветствие</code>, <code>2 — Текущий год</code>, <code>0 — Выход</code>, и считывайте выбор пользователя.",
          "Обработайте выбор (выведите соответствующий текст), а цикл завершите при вводе <code>0</code>."
        ],
        solution: `#include <iostream>

int main() {
    int choice;

    do {
        std::cout << "\nМеню:\n1 - Приветствие\n2 - Текущий год\n0 - Выход\nВаш выбор: ";
        std::cin >> choice;

        if (choice == 1) {
            std::cout << "Добро пожаловать в C++!" << std::endl;
        } else if (choice == 2) {
            std::cout << "Сейчас 2026 год." << std::endl;
        } else if (choice != 0) {
            std::cout << "Неизвестная команда." << std::endl;
        }
    } while (choice != 0);

    std::cout << "Работа завершена." << std::endl;

    return 0;
}`
      }
    ]
  };