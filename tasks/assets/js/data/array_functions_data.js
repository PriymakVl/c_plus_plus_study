const lessonData = {
    title: "Практические задачи на C++",
    topic: "Функции и алгоритмы для работы с массивами",
    footer: "Интерактивные задачи по C++",
    tasks: [
      {
        id: "task1",
        title: "Задача 1. Определение размера и сортировка массива",
        conditions: [
          "Создайте статический массив <code>arr</code> со значениями <code>{14, 3, 27, 8, 19, 1, 12}</code> без явного указания размера в квадратных скобках.",
          "Вычислите количество элементов массива с помощью оператора <code>sizeof</code> и сохраните результат в переменную <code>size</code>.",
          "Отсортируйте массив по возрастанию, используя функцию <code>std::sort</code> из заголовочного файла <code>&lt;algorithm&gt;</code>.",
          "Выведите отсортированный массив на экран через пробел."
        ],
        solution: `#include <iostream>
#include <algorithm>

int main() {
    int arr[] = {14, 3, 27, 8, 19, 1, 12};
    int size = sizeof(arr) / sizeof(arr[0]);

    std::sort(arr, arr + size);

    for (int i = 0; i < size; ++i) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}`
      },
      {
        id: "task2",
        title: "Задача 2. Поиск минимума, максимума и суммы элементов",
        conditions: [
          "Создайте массив <code>scores</code> из <code>6</code> элементов: <code>85, 92, 74, 98, 63, 88</code>.",
          "С помощью функций <code>std::min_element</code> и <code>std::max_element</code> найдите наименьшее и наибольшее значения (не забудьте разыменовать указатели с помощью <code>*</code>).",
          "С помощью функции <code>std::accumulate</code> из заголовочного файла <code>&lt;numeric&gt;</code> вычислите сумму всех элементов массива.",
          "Выведите минимум, максимум и общую сумму на экран."
        ],
        solution: `#include <iostream>
#include <algorithm>
#include <numeric>

int main() {
    int scores[6] = {85, 92, 74, 98, 63, 88};
    int size = 6;

    int minVal = *std::min_element(scores, scores + size);
    int maxVal = *std::max_element(scores, scores + size);
    int totalSum = std::accumulate(scores, scores + size, 0);

    std::cout << "Минимум: " << minVal << std::endl;
    std::cout << "Максимум: " << maxVal << std::endl;
    std::cout << "Сумма: " << totalSum << std::endl;

    return 0;
}`
      },
      {
        id: "task3",
        title: "Задача 3. Поиск элемента и подсчёт вхождений",
        conditions: [
          "Создайте массив <code>nums</code> из <code>8</code> элементов: <code>5, 10, 15, 10, 20, 25, 10, 30</code>.",
          "С помощью функции <code>std::count</code> подсчитайте, сколько раз в массиве встречается число <code>10</code>, и выведите результат.",
          "С помощью функции <code>std::find</code> проверьте, есть ли в массиве число <code>25</code>. Выведите <code>\"Число 25 найдено\"</code>, если указатель не равен <code>nums + 8</code>, иначе выведите <code>\"Число 25 не найдено\"</code>."
        ],
        solution: `#include <iostream>
#include <algorithm>

int main() {
    int nums[8] = {5, 10, 15, 10, 20, 25, 10, 30};
    int size = 8;

    int countTens = std::count(nums, nums + size, 10);
    std::cout << "Количество чисел 10: " << countTens << std::endl;

    int* found = std::find(nums, nums + size, 25);
    if (found != nums + size) {
        std::cout << "Число 25 найдено" << std::endl;
    } else {
        std::cout << "Число 25 не найдено" << std::endl;
    }

    return 0;
}`
      },
      {
        id: "task4",
        title: "Задача 4. Заполнение, копирование и замена значений",
        conditions: [
          "Объявите два массива: <code>source</code> и <code>backup</code> размером по <code>5</code> элементов.",
          "Заполните массив <code>source</code> значением <code>7</code> при помощи функции <code>std::fill</code>.",
          "Вручную измените третий элемент массива <code>source</code> (индекс <code>2</code>) на значение <code>99</code>.",
          "Скопируйте содержимое <code>source</code> в массив <code>backup</code> с помощью <code>std::copy</code>.",
          "В массиве <code>backup</code> замените все числа <code>7</code> на <code>0</code> при помощи <code>std::replace</code> и выведите <code>backup</code> на экран."
        ],
        solution: `#include <iostream>
#include <algorithm>

int main() {
    int source[5];
    int backup[5];

    std::fill(source, source + 5, 7);
    source[2] = 99;

    std::copy(source, source + 5, backup);
    std::replace(backup, backup + 5, 7, 0);

    for (int i = 0; i < 5; ++i) {
        std::cout << backup[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}`
      },
      {
        id: "task5",
        title: "Задача 5. Разворот и обмен элементов",
        conditions: [
          "Создайте массив <code>data</code> из <code>5</code> элементов: <code>10, 20, 30, 40, 50</code>.",
          "Разверните массив в обратном порядке с помощью функции <code>std::reverse</code>.",
          "Поменяйте местами первый и последний элементы полученного массива с помощью функции <code>std::swap</code>.",
          "Выведите итоговый массив на экран через пробел."
        ],
        solution: `#include <iostream>
#include <algorithm>

int main() {
    int data[5] = {10, 20, 30, 40, 50};
    int size = 5;

    std::reverse(data, data + size);
    std::swap(data[0], data[size - 1]);

    for (int i = 0; i < size; ++i) {
        std::cout << data[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}`
      },
      {
        id: "task6",
        title: "Задача 6. Проверка сортировки и удаление дубликатов",
        conditions: [
          "Создайте массив <code>items</code> из <code>7</code> элементов: <code>4, 2, 4, 1, 2, 5, 1</code>.",
          "С помощью функции <code>std::is_sorted</code> проверьте, отсортирован ли массив изначально, и выведите результат проверки (<code>1</code> или <code>0</code>).",
          "Отсортируйте массив с помощью <code>std::sort</code> (обязательное условие перед удалением дубликатов).",
          "Удалите соседние дубликаты при помощи <code>std::unique</code>, сохранив указатель на новый конец диапазона в переменную <code>newEnd</code>.",
          "Выведите только уникальные элементы, используя цикл от <code>items</code> до <code>newEnd</code>."
        ],
        solution: `#include <iostream>
#include <algorithm>

int main() {
    int items[7] = {4, 2, 4, 1, 2, 5, 1};
    int size = 7;

    std::cout << "Отсортирован изначально: " << std::is_sorted(items, items + size) << std::endl;

    std::sort(items, items + size);
    int* newEnd = std::unique(items, items + size);

    std::cout << "Уникальные элементы: ";
    for (int* ptr = items; ptr != newEnd; ++ptr) {
        std::cout << *ptr << " ";
    }
    std::cout << std::endl;

    return 0;
}`
      }
    ]
  };