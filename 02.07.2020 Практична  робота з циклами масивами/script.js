іуее// Практична 02.07.2020


//Дан масив['a', 'b', 'c'].Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let array = ['a', 'b', 'c'];
// for (let index = 1; index <= 3; index++) {
//     array.push(index)
// }
// console.log(array)

// array.splice(3, 0, 1, 2, 3);
// console.log(array)


// Дан масив[1, 2, 3].Зробіть з нього новий масив[3, 2, 1].
// let array = [1, 2, 3];
// array.splice(0, 3, 3, 2, 1);
// console.log(array)

// let array = [1, 2, 3];
// console.log(array.reverse())

//Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let array = [1, 2, 3];
// array.splice(3, 0, 4, 5, 6);
// console.log(array)

//Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let array = [1, 2, 3];
// array.splice(0, 0, 4, 5, 6);
// console.log(array)

//Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let array = ['js', 'css', 'jq'];
// document.write(array.shift())

//Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let array = ['js', 'css', 'jq'];
// document.write(array.pop())

//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

// let array = [1, 2, 3, 4, 5];
// let array2 = array.slice(-2);
// console.log(array2)

//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2]

// let array = [1, 2, 3, 4, 5];
// let array2 = array.slice(0,2);
// console.log(array2)


//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// - Дан масив[1, 2, 3, 4, 5].За допомогою методу / функції splice зробіть з нього 
// масив[1, 2, 3, 'a', 'b', 'c', 4, 5].
// - Дан масив[1, 2, 3, 4, 5].За допомогою методу / функції splice зробіть з нього 
// масив[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let array = [1, 2, 3, 4, 5];
// array.splice(1, 2);
// console.log(array)

// let array = [1, 2, 3, 4, 5];
// array.splice(3, 0, 'a', 'b', 'c' );
// console.log(array)

// let array = [1, 2, 3, 4, 5];
// array.splice(1, 0, 'a', 'b');
// array.splice(6, 0, 'c');
// array.splice(8, 0, 'e');
// console.log(array)


//Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// - Взяти масив з 10 чисел або створити його.Створити 2й порожній масив.За допомогою будь - якого циклу 
//та push() скопіювати значення одного масиву в інший
//     - Взяти масив з 10 чисел або створити його.Створити 2й порожній масив.За допомогою будь - якого 
//циклу скопіювати значення одного масиву в інший.

// let array = [256, 3.14, 148, 659.36, 8568, 56, 32.589, 1, 568.258, 568];
// for (let index = 0; index < array.length; index++) {
//     let element = array[index];  
//     if (element % 2 === 0) { console.log(element)};
// };

// let array2 = [];
// let array = [256, 3.14, 148, 659.36, 8568, 56, 32.589, 1, 568.258, 568];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     array2.push(element)
//     console.log(array2)
// }

// for (let iterator of array) {
//     array2.push(iterator)
//     console.log(array2)

// }

// let array2 = [];
// let array = [256, 3.14, 148, 659.36, 8568, 56, 32.589, 1, 568.258, 568];
// i=0;
// while (i<array.length) {
//     i++;
//     array2[i] = array[i];

//     console.log(array2);
// }

// зробити масив з 10 чисел[2, 17, 13, 6, 22, 31, 45, 66, 100, -18]та:
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання(окрім 8), але в зворотньому циклі(с заду на перед)

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// i=0
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// i=0
// while (i < arr.length) {
//     if (`${i}`%2===0) {
//         console.log(arr[i]);   
//     }
//     i++ 
// }

// for (let i = 0; i < arr.length; i++) {
//     if (`${i}`%2!==0) {
//         console.log(arr[i]);
//     }

// }

// i=0
// while (i < arr.length) {
//     if (arr[i]%2===0) {
//         console.log(arr[i]);   
//     }
//     i++ 
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2!==0) {
//         console.log(arr[i]);
//     }

// }


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%3===0) {
//         arr[i] = 'octen'
//     };
// console.log(arr[i]);
// }

// let arr2 = [];
// while(arr.length){
//     arr2.unshift(arr.shift())
// }
// console.log(arr2)

// i=9
// while (i >= 0) {
//     console.log(arr[i]);
//     i--
// }

// for (let i = 9; i >= 0; i--) {
//     console.log(arr[i]);
// }

// i=9
// while (i >=0) {
//     if (`${i}`%2===0) {
//         console.log(arr[i]);   
//     }
//     i-- 
// }

//  for (let i = 9; i >=0; i--) {
//     if (`${i}`%2!==0) {
//         console.log(arr[i]);
//     }

// }

// i=9;
// while (i >= 0) {
//     if (arr[i]%2===0) {
//         console.log(arr[i]);   
//     }
//     i--
// }

// for (let i = 9; i >=0; i--) {
//     if (arr[i]%2!==0) {
//         console.log(arr[i]);
//     }

// }

// for (let i = 9; i >=0; i--) {
//     if (arr[i]%3===0) {
//         arr[i] = 'octen'
//     };
// console.log(arr[i]);
// }


//10
// створити пустий масив та:
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

// let arr = [];
// let element = 2;
// for (let i = 0; i < 50; i++) {
//         arr.push(element*i)
//     } 
// console.log(arr)  

// let arr = [];
// for (let i = 0; i < 100; i++) {
//     let element = i;
//     if (i%2!==0) {
//         arr.push(element)
//     } 
// }
// console.log(arr)  

/*
3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
 диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
 2. вывести на консоль  каждый третий елемент
 3. вывести на консоль  каждый третий елемент но при условии что его значение является парным.
 4. вывести на консоль  каждый третий елемент но при условии что он имеет парное значение и
 записать их в другой массив.
 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
  5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
 додати його в інший масив.
*/


// let arr = [];
// for (let i = 0; i < 100; i++) {
//     let element = Math.floor(Math.random() * 100)
//     arr.push(element);
// }
// console.log(arr)

// let arr = [];
// for (let i = 0; i < 100; i++) {
//     let element = Math.floor(Math.random() * (732-8)+8);
//     arr.push(element);
//     if (`${i}` % 3 === 0) {
//         console.log(arr[i])}
// }

// let arr = [];
// for (let i = 0; i < 100; i++) {
//     let element = Math.floor(Math.random() * (732 - 8) + 8);
//     arr.push(element);
//     if (`${i}` % 3 === 0 && arr[i]%2===0) {
//         console.log(arr[i])
//     }
// }

// let arr2 = [];
// let arr = [];
// for (let i = 0; i < 100; i++) {
//     let element = Math.floor(Math.random() * (732 - 8) + 8);
//     arr.push(element);
//     if (`${i}` % 3 === 0 && arr[i]%2===0) {
//         arr2.push(arr[i])
//     }
// }
// console.log(arr2)

//Вывести каждый елемент массива у которого соседний с права элемент - парный

// let arr = [];
// for (let i = 0; i < 100; i++) {
//     let element = Math.floor(Math.random() * (732 - 8) + 8);
//     arr.push(element);
//     if (`${i}` % 1 === 0 && arr[i]%2===0) {
//         console.log(arr[i])
//     }
// }


// let arr = [21, 69, 58, 66, 14, 55, 8, 9, 32, 7];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] % 2 === 0) {
//         console.log(arr[i])
//     }
// } 

// масив з числами[100, 250, 50, 168, 120, 345, 188], Які характеризують вартість окремої покупки.
// обрахувати середній чек.

// let arr = [100, 250, 50, 168, 120, 345, 188]
// let sum = 0;
// for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];
// }
// console.log(sum)


// 4 створити масив з будь якими значеннями(стрінги, числа, і тд...).пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.

// let array2 = [];
// let array = [256, 3.14, true, 659, false, 56, '32.589', 1, 'jhgjfhkj', 568];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (typeof array[index]==='number'){array2.push(element)}
// }
// console.log(array2)
