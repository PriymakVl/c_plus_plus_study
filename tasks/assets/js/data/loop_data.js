const lessonData = {
    title: "Практические задачи на C++",
    topic: "Цикл FOR",
    footer: "Интерактивные задачи по C++",
    tasks: [
      {
        id: "task1",
        title: "Задача 1. Объявление и вывод массива",
        conditions: [
          "Создайте целочисленный массив <code>numbers</code> из <code>5</code> элементов: <code>10, 20, 30, 40, 50</code>.",
          "С помощью цикла <code>for</code> выведите все элементы массива на экран через пробел, используя поток вывода <code>std::cout</code>."
        ],
        solution: `#include <iostream>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};

    for (int i = 0; i < 5; ++i) {
        std::cout << numbers[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}`
      },
      {
        id: "task2",
        title: "Задача 2. Сумма и среднее арифметическое элементов",
        conditions: [
          "Создайте массив <code>arr</code> из <code>6</code> целых чисел: <code>4, 8, 15, 16, 23, 42</code>.",
          "Вычислите сумму всех элементов массива и сохраните её в переменную <code>sum</code>.",
          "Вычислите среднее арифметическое элементов и сохраните его в переменную <code>average</code> типа <code>double</code>.",
          "Выведите сумму и среднее арифметическое на экран с помощью <code>std::cout</code>."
        ],
        solution: `#include <iostream>

int main() {
    int arr[6] = {4, 8, 15, 16, 23, 42};
    int sum = 0;

    for (int i = 0; i < 6; ++i) {
        sum += arr[i];
    }

    double average = static_cast<double>(sum) / 6;

    std::cout << "Сумма: " << sum << std::endl;
    std::cout << "Среднее арифметическое: " << average << std::endl;

    return 0;
}`
      },
      {
        id: "task3",
        title: "Задача 3. Поиск минимального и максимального элементов",
        conditions: [
          "Создайте целочисленный массив <code>data</code> из <code>7</code> элементов: <code>14, -3, 27, 0, 8, -11, 19</code>.",
          "Найдите минимальный и максимальный элементы массива, сохранив их в переменные <code>minVal</code> и <code>maxVal</code>.",
          "Выведите найденные значения на экран с помощью потока <code>std::cout</code>."
        ],
        solution: `#include <iostream>

int main() {
    int data[7] = {14, -3, 27, 0, 8, -11, 19};
    int minVal = data[0];
    int maxVal = data[0];

    for (int i = 1; i < 7; ++i) {
        if (data[i] < minVal) {
            minVal = data[i];
        }
        if (data[i] > maxVal) {
            maxVal = data[i];
        }
    }

    std::cout << "Минимум: " << minVal << std::endl;
    std::cout << "Максимум: " << maxVal << std::endl;

    return 0;
}`
      },
      {
        id: "task4",
        title: "Задача 4. Подсчёт чётных и нечётных чисел",
        conditions: [
          "Создайте массив <code>nums</code> из <code>8</code> целых чисел: <code>3, 12, 7, 18, 25, 4, 9, 10</code>.",
          "Подсчитайте количество чётных и нечётных элементов в массиве с помощью переменных <code>evenCount</code> и <code>oddCount</code>.",
          "Выведите оба результата на экран с помощью <code>std::cout</code>."
        ],
        solution: `#include <iostream>

int main() {
    int nums[8] = {3, 12, 7, 18, 25, 4, 9, 10};
    int evenCount = 0;
    int oddCount = 0;

    for (int i = 0; i < 8; ++i) {
        if (nums[i] % 2 == 0) {
            ++evenCount;
        } else {
            ++oddCount;
        }
    }

    std::cout << "Чётных элементов: " << evenCount << std::endl;
    std::cout << "Нечётных элементов: " << oddCount << std::endl;

    return 0;
}`
      },
      {
        id: "task5",
        title: "Задача 5. Разворот массива на месте",
        conditions: [
          "Создайте массив <code>arr</code> из <code>5</code> элементов: <code>1, 2, 3, 4, 5</code>.",
          "Измените порядок элементов в самом массиве на обратный (чтобы получилось <code>5, 4, 3, 2, 1</code>) без создания второго массива.",
          "Выведите обновлённый массив на экран через пробел с помощью <code>std::cout</code>."
        ],
        solution: `#include <iostream>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int size = 5;

    for (int i = 0; i < size / 2; ++i) {
        int temp = arr[i];
        arr[i] = arr[size - 1 - i];
        arr[size - 1 - i] = temp;
    }

    for (int i = 0; i < size; ++i) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}`
      },
      {
        id: "task6",
        title: "Задача 6. Сумма элементов двумерного массива",
        conditions: [
          "Создайте двумерный массив <code>matrix</code> размером <code>3x3</code> и заполните его числами от <code>1</code> до <code>9</code>.",
          "С помощью вложенных циклов <code>for</code> вычислите сумму всех элементов матрицы.",
          "Выведите полученную сумму на экран при помощи потока <code>std::cout</code>."
        ],
        solution: `#include <iostream>

int main() {
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    int totalSum = 0;

    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) {
            totalSum += matrix[i][j];
        }
    }

    std::cout << "Сумма элементов матрицы: " << totalSum << std::endl;

    return 0;
}`
      }
    ]
  };