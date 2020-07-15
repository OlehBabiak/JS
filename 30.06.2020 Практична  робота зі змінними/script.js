// ПРАКТИЧНА 30.06.2020

// Class work

// Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

// let str = 'Привет';
// console.log(typeof(str))
// let num = 123;
// console.log(typeof (num))
// let flag = true;
// console.log(typeof (flag))
// let txt = 'true';
// console.log(typeof (txt))

// Создайте переменные a1, a2, a3, a4, a5.При помощи математических операторов(сложение, вычитание
// и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
// поместив результат каждого выражения в соответствующую переменную.Например, let a1 = 5 + 3.

// let numberOne = 5 + 3;
// console.log(numberOne)
// let numberTwo = 5 - 3;
// console.log(numberTwo)
// let numberThree = 5 * 3;
// console.log(numberThree)
// let numberFour =  5 / 3;
// console.log(numberFour)
// let numberFive =  5 % 3;
// console.log(numberFive)


// Создайте переменные a6, a7, a8, a9, a10.Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'


//  let a6 = 5 % 3
//  console.log(a6)


// let a7 = 3 % 5;
// console.log(a7)


// let a8 = 5 + '3'
// console.log(a8)


// let a9 = '5' - 3;
// console.log(a9)


// let a10 = 75 + 'кг';
// console.log(a10)


// 4. Напишите код, который находит площадь прямоугольника высота 23см. (переменная height),
//     шириной 10см(переменная width), значение площади должно хранится в числовой переменной s.

// let height = 23;
// let width = 10;
// let s = height * width;
// console.log(s)


// 5.  Напиши код, который находит объем цилиндра высотой 10м(переменная heightC) и диаметром 
//основания 4м(dC), результат поместите в переменную v. V = π R2 h

// let height = 10;
// let dC = 4;
// let rC = dC/2;
// let p = 3.14;
// let v = p * Math.pow(rC, 2) * height;
// console.log(v)

// У прямоугольного треугольника две стороны n(со значением 3) и m(со значением 4).
// Найдите гипотенузу k по теореме Пифагора(нужно использовать функцию Math.pow(число, степень) 
// или оператор возведения в степень ** ) k2 = n2 + m2

// let n = 3;
// let m = 4;
// let kKw = Math.pow(n, 2) + Math.pow(m, 2);
// let k = Math.sqrt(kKw)
// console.log(k)

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить 
//спомощью document.write, alert и console.log

// let hello = 'Hello world'
// document.write(hello);
// alert(hello);
// console.log(hello);


// 8. Вывести в окно браузера при помощи метода alert() следующие данные: 
//Ваше ФИО, возраст, хобби(каждой на новой строки спомощью \n)

// let name = 'Олег'
// let fatherName = 'Богданович'
// let surname = 'Бабяк'
// let age = 39;
// let hobby = 'gym'

// alert(name + '\n' + fatherName + '\n' + surname + '\n' + age + '\n'+hobby)

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, 
//concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//     Локальной переменной concatenation присвоить результат конкатенации 3 - х строк: str1, str2, 
//str3.
// Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Кто'
// let str2 = 'ты'
// let str3 = 'такой?'
// let concatenation = str1+' '+str2+' '+str3
// document.write(concatenation)

// 10. Какие значения выведет в окно браузера следующий фрагмент кода ? и почему ?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); 205
// document.write(str - a + "<br/>"); 15
// document.write(str * "2" + "<br/>"); 40
// document.write(str / 2 + "<br/>"); 10

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log ?
//     parseInt("3.14")  - 3
//     parseInt("-7.875") - 8
// parseInt("435") - 435
// parseInt("Вася" - NaN

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые 
//будут использоваться далее, повторите код ниже
// let str = prompt("Enter something")
// console.log(str);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, 
//а вывод результата при помощи метода alert

// let numberOne = +prompt();
// let numberTwo = +prompt();
// let result =alert(numberOne+numberTwo)

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя,
// фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32, а вывод результата при помощи метода 
//alert

// let name = prompt();
// let surName = prompt();
// let age = prompt();
// let result = alert('Доброго вечера'+', '+name+' '+surName+', '+"мои поздравления что вам"+' '+age)


// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let a = parseFloat(prompt());
// let b = parseFloat(prompt());
// let c = parseFloat(prompt());


// if (c > b && b > a) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// } else
//     if (b > c && c > a) {
//         console.log(a)
//         console.log(c)
//         console.log(b)
//     } else
//         if (c > a && a > c) {
//             console.log(b)
//             console.log(a)
//             console.log(c)
//         }
//         else
//             if (a > c && c > b) {
//                 console.log(b)
//                 console.log(c)
//                 console.log(a)
//             }
//             else
//                     if (a > c && b > c) {
//                         console.log(c)
//                         console.log(b)
//                         console.log(a)
//                     }
//                     else
//                         // if (c > a && a > b) 
//                         {
//                             console.log(b)
//                             console.log(c)
//                             console.log(a)
//                         }



// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let colorA = prompt();

// if (colorA === 'green') {
//     alert('иди');
// }
// else if (colorA === 'yellow') {
//     alert('жди');
// }
// else if (colorA === 'red') {
//     alert('стой');
// }
// else { alert('делай что хочешь') }


// 3
// Все параметры получаем с клавиатуры!!!!(prompt, confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет - вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!


// let colorA = prompt();
// let isRoadClear = confirm('дорога пустая?')

// if (colorA === 'green' && isRoadClear){
//     alert('иди');
// }
// else if (colorA === 'green' && !isRoadClear){
//     alert('подожди пока нарушители проедут')
// }

// else if (colorA === 'yellow' && isRoadClear) {
//     alert('жди');
// }
// else if (colorA === 'yellow' && !isRoadClear) {
//     alert('все равно жди')
// }

// else if (colorA === 'red' && isRoadClear) {
//     alert('стой все рано');
// }
// else if (colorA === 'red' && !isRoadClear) {
//     alert('стой и жди')
// }
// else { alert('делай что хочешь')}

