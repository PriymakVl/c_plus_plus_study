const lessonData = {
    title: "Практические задачи на C++",
    topic: "Динамические массивы (std::vector)",
    footer: "Интерактивные задачи по C++",
    tasks: [
      {
        id: "task1",
        title: "Задача 1. Создание вектора и добавление элементов",
        conditions: [
          "Подключите заголовочный файл <code>&lt;vector&gt;</code>.",
          "Создайте пустой вектор целых чисел <code>numbers</code> (<code>std::vector&lt;int&gt;</code>).",
          "С помощью метода <code>push_back()</code> поочерёдно добавьте в него числа <code>10</code>, <code>20</code> и <code>30</code>.",
          "Выведите размер вектора с помощью метода <code>size()</code> и все его элементы на экран через пробел."
        ],
        solution: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers;

    numbers.push_back(10);
    numbers.push_back(20);
    numbers.push_back(30);

    std::cout << "Размер вектора: " << numbers.size() << std::endl;

    for (size_t i = 0; i < numbers.size(); ++i) {
        std::cout << numbers[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}`
      },
      {
        id: "task2",
        title: "Задача 2. Инициализация векторов разными способами",
        conditions: [
          "Создайте вектор <code>grades</code> типа <code>int</code>, инициализировав его списком значений: <code>{85, 90, 78, 92}</code>.",
          "Создайте вектор <code>zeros</code> типа <code>double</code> из <code>5</code> элементов (по умолчанию он заполнится нулями).",
          "Создайте вектор <code>sevens</code> типа <code>int</code> из <code>4</code> элементов, каждый из которых равен <code>7</code>.",
          "Выведите на экран количество элементов каждого из трёх векторов, используя метод <code>size()</code>."
        ],
        solution: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> grades = {85, 90, 78, 92};
    std::vector<double> zeros(5);
    std::vector<int> sevens(4, 7);

    std::cout << "Размер grades: " << grades.size() << std::endl;
    std::cout << "Размер zeros: " << zeros.size() << std::endl;
    std::cout << "Размер sevens: " << sevens.size() << std::endl;

    return 0;
}`
      },
      {
        id: "task3",
        title: "Задача 3. Удаление элементов и безопасный доступ (.at)",
        conditions: [
          "Создайте вектор <code>items</code> со значениями <code>{100, 200, 300, 400}</code>.",
          "Удалите последний элемент вектора с помощью метода <code>pop_back()</code>.",
          "Выведите первый элемент вектора с помощью квадратных скобок <code>items[0]</code>, а последний оставшийся элемент — с помощью безопасного метода <code>items.at(2)</code>.",
          "Выведите новый размер вектора."
        ],
        solution: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> items = {100, 200, 300, 400};

    items.pop_back();

    std::cout << "Первый элемент: " << items[0] << std::endl;
    std::cout << "Последний элемент: " << items.at(2) << std::endl;
    std::cout << "Новый размер: " << items.size() << std::endl;

    return 0;
}`
      },
      {
        id: "task4",
        title: "Задача 4. Вектор строк (std::string)",
        conditions: [
          "Подключите заголовочные файлы <code>&lt;vector&gt;</code> и <code>&lt;string&gt;</code>.",
          "Создайте пустой вектор строк <code>words</code> (<code>std::vector&lt;std::string&gt;</code>).",
          "Добавьте в него слова <code>\"C++\"</code>, <code>\"STL\"</code> и <code>\"Vector\"</code> с помощью <code>push_back()</code>.",
          "Замените второй элемент (индекс <code>1</code>) на слово <code>\"Standard\"</code>, используя метод <code>.at(1)</code>.",
          "Выведите все слова из вектора в одну строку через пробел."
        ],
        solution: `#include <iostream>
#include <vector>
#include <string>

int main() {
    std::vector<std::string> words;

    words.push_back("C++");
    words.push_back("STL");
    words.push_back("Vector");

    words.at(1) = "Standard";

    for (size_t i = 0; i < words.size(); ++i) {
        std::cout << words[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}`
      },
      {
        id: "task5",
        title: "Задача 5. Ввод чисел с клавиатуры в вектор",
        conditions: [
          "Создайте пустой вектор целых чисел <code>userNums</code>.",
          "С помощью цикла <code>for</code> запросите у пользователя <code>5</code> целых чисел через <code>std::cin</code> и добавьте каждое в вектор с помощью <code>push_back()</code>.",
          "Вычислите сумму всех элементов вектора и выведите её на экран."
        ],
        solution: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> userNums;
    int input;

    std::cout << "Введите 5 целых чисел: ";
    for (int i = 0; i < 5; ++i) {
        std::cin >> input;
        userNums.push_back(input);
    }

    int sum = 0;
    for (size_t i = 0; i < userNums.size(); ++i) {
        sum += userNums.at(i);
    }

    std::cout << "Сумма элементов: " << sum << std::endl;

    return 0;
}`
      }
    ]
  };