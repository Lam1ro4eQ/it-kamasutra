// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    console.log(nums)
    return nums.reduce((acc, el) => acc + el)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (((a + b) < c) || ((b + c) < a) || ((a + c) < b)) {
        return "00"
    }
    if (a == b && b == c) {
        return "10"
    }
    if (a == b || b == c || a == c) {
        return "01"
    }
    if (a !== b && b !== c && a !== c) {
        return "11"
    }
    return "get side"

}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    const arr = number.toString().split('')
    let sum = 0;
    for (let i = 0; arr.length > i; i++) {
        sum = sum + +arr[i]
    }
    return sum
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let accEven = arr[0]
    let accNotEven = 0
    for (let i = 1; arr.length > i; i++) {
        if ((i % 2) == 0 || i === 0) {
            accEven = accEven + arr[i]
        } else {
            accNotEven = accNotEven + arr[i]
        }
    }
    if (accEven > accNotEven) {
        return true
    } else {
        return false
    }
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    let arrFilter = array.filter(el => el > 0 && Number.isInteger(el))
    return arrFilter.map(el => Math.pow(el, 2))
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    return N * (N + 1) / 2
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    const result = [];
    for (let i = 0; i < banknotes.length; i++) {
        let note = banknotes[i];
        while (note <= amountOfMoney) {
            result.push(note)
            amountOfMoney -= note
        }
    }
    return result
}