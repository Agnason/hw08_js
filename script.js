/*Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число*/

console.log(`0 - это ноль
1 - это нечетное число`);

for (let i = 1; i <= 10; i++) {
    if (!(i % 3)) {
        console.log(`${i} - нечетное число`);
    } else if (!(i % 2)) {
        console.log(`${i} - четное число`);

    }
}

/*Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]*/

const arr = [1, 2, 3, 4, 5, 6, 7];

arr.splice(3, 2);
console.log(arr);

/*Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3*/

function generateArrayWithRandomNumber(countOfElement) {
    const arr = [];
    for (let i = 0; i < countOfElement; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}



const arr1 = generateArrayWithRandomNumber(5);
console.log(arr1);

//  1. Рассчитать сумму элементов этого массива

const sumWithInitial = arr1.reduce((sum, currentValue) => sum + currentValue, 0);
console.log(sumWithInitial);

// 2. Найти минимальное число

const minNumberInArray = arr => arr.reduce((x, y) => Math.min(x, y));

console.log(minNumberInArray(arr1));

// 3. Найти есть ли в этом массиве число 3*/

function findAndCountNumberInArray(number, arr) { 
  
    const indices = [];
    let counter = 0;
    let idx = arr.indexOf(number);
    while (idx !== -1) { 
        indices.push(idx);
        counter++;
        idx = arr.indexOf(number, idx + 1);

    }
    console.log(`Под индексом ${indices} массива есть ${number}`);
    console.log(`Число ${number} встречается ${counter} раз`);
    
}

findAndCountNumberInArray(3, arr1);

/**Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:*/

for (let i = 1; i <= 20; i++) {
    console.log('x'.repeat(i));
}

