const lessonData = {
    title: "Практические задачи на C++",
    topic: "Двусвязные списки (std::list)",
    footer: "Интерактивные задачи по C++",
    tasks: [
      {
        id: "task1",
        title: "Задача 1. Создание списка и добавление элементов с обеих сторон",
        conditions: [
          "Подключите заголовочный файл <code>&lt;list&gt;</code>.",
          "Создайте пустой список целых чисел <code>numbers</code> (<code>std::list&lt;int&gt;</code>).",
          "Добавьте в конец списка числа <code>20</code> и <code>30</code> с помощью метода <code>push_back()</code>.",
          "Добавьте в начало списка число <code>10</code> с помощью метода <code>push_front()</code>.",
          "Выведите все элементы списка через пробел, используя диапазонный цикл <code>for (int x : numbers)</code>."
        ],
        solution: `#include <iostream>
#include <list>

int main() {
    std::list<int> numbers;

    numbers.push_back(20);
    numbers.push_back(30);
    numbers.push_front(10);

    for (int x : numbers) {
        std::cout << x << " ";
    }
    std::cout << std::endl;

    return 0;
}`
      },
      {
        id: "task2",
        title: "Задача 2. Инициализация списков разными способами",
        conditions: [
          "Создайте список <code>grades</code> типа <code>int</code> со значениями <code>{80, 95, 88}</code>.",
          "Создайте список <code>zeros</code> типа <code>double</code> из <code>5</code> элементов (по умолчанию он заполнится нулями).",
          "Создайте список <code>sevens</code> типа <code>int</code> из <code>4</code> элементов, каждый из которых равен <code>7</code>.",
          "Выведите размер каждого из трёх списков на экран, используя метод <code>size()</code>."
        ],
        solution: `#include <iostream>
#include <list>

int main() {
    std::list<int> grades = {80, 95, 88};
    std::list<double> zeros(5);
    std::list<int> sevens(4, 7);

    std::cout << "Размер grades: " << grades.size() << std::endl;
    std::cout << "Размер zeros: " << zeros.size() << std::endl;
    std::cout << "Размер sevens: " << sevens.size() << std::endl;

    return 0;
}`
      },
      {
        id: "task3",
        title: "Задача 3. Доступ к крайним элементам и удаление",
        conditions: [
          "Создайте список <code>items</code> со значениями <code>{100, 200, 300, 400}</code>.",
          "Выведите первый и последний элементы списка при помощи методов <code>front()</code> и <code>back()</code>.",
          "Удалите первый элемент методом <code>pop_front()</code> и последний элемент методом <code>pop_back()</code>.",
          "Снова выведите первый, последний элементы и новый размер списка."
        ],
        solution: `#include <iostream>
#include <list>

int main() {
    std::list<int> items = {100, 200, 300, 400};

    std::cout << "Первый: " << items.front() << ", Последний: " << items.back() << std::endl;

    items.pop_front();
    items.pop_back();

    std::cout << "После удаления — Первый: " << items.front()
              << ", Последний: " << items.back()
              << ", Размер: " << items.size() << std::endl;

    return 0;
}`
      },
      {
        id: "task4",
        title: "Задача 4. Список строк (std::string)",
        conditions: [
          "Подключите заголовочные файлы <code>&lt;list&gt;</code> и <code>&lt;string&gt;</code>.",
          "Создайте пустой список строк <code>words</code> (<code>std::list&lt;std::string&gt;</code>).",
          "Добавьте в конец слово <code>\"STL\"</code>, затем в начало слово <code>\"C++\"</code>, а затем снова в конец слово <code>\"List\"</code>.",
          "Выведите все слова из списка в одну строку через пробел с помощью диапазонного цикла <code>for</code>."
        ],
        solution: `#include <iostream>
#include <list>
#include <string>

int main() {
    std::list<std::string> words;

    words.push_back("STL");
    words.push_front("C++");
    words.push_back("List");

    for (const std::string& word : words) {
        std::cout << word << " ";
    }
    std::cout << std::endl;

    return 0;
}`
      },
      {
        id: "task5",
        title: "Задача 5. Разделение чётных и нечётных чисел при вводе",
        conditions: [
          "Создайте пустой список целых чисел <code>sortedList</code>.",
          "С помощью цикла <code>for</code> запросите у пользователя <code>5</code> целых чисел через <code>std::cin</code>.",
          "Если введённое число чётное (<code>num % 2 == 0</code>), добавляйте его в начало списка (<code>push_front</code>), иначе — в конец списка (<code>push_back</code>).",
          "Выведите итоговый список на экран через пробел."
        ],
        solution: `#include <iostream>
#include <list>

int main() {
    std::list<int> sortedList;
    int num;

    std::cout << "Введите 5 целых чисел: ";
    for (int i = 0; i < 5; ++i) {
        std::cin >> num;
        if (num % 2 == 0) {
            sortedList.push_front(num);
        } else {
            sortedList.push_back(num);
        }
    }

    for (int x : sortedList) {
        std::cout << x << " ";
    }
    std::cout << std::endl;

    return 0;
}`
      }
    ]
  };