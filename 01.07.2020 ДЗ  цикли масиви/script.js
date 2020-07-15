//--створити масив та вивести його в консоль:
// - з 5 числових значень
//     - з 5 стічкових значень
//         - з 5 значень стрічкового, числового та булевого типу

// let numberArray = [2.3, 65, 102, 3.14, 5.5];
// console.log(numberArray);

// let textArray = ['56', 'Lviv', 'ocean', 'bike', 'board'];
// console.log(textArray);

// let mixArray = [256, true, '148', false, 'tire'];
// console.log(mixArray);


// --Створити пустий масив.Наповнити його будь - якими значеннями звертаючись до конкретного індексу.
//Вивести в консоль

// let emptyArray = [];
// emptyArray[0] = 12;
// emptyArray[1] = 'cloud';
// emptyArray[2] = true;
// emptyArray[3] = 325.55;
// emptyArray[4] = '8569';
// emptyArray[5] = false;
// emptyArray[6] = 'rain';
// console.log(emptyArray);


//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let index = 0; index < 10; index++) {
//     document.write(`<div>Hello JS</div>`)
//     document.write('<br>')
// }

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


// for (let index = 0; index < 10; index++) {
//     document.write(`<div>Hello JS ${index}</div>`)
//     document.write('<br>')
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0
// while(i<20){
//     document.write(`<h1>What are you doing?<h1>`)
// i++
// }

// let i = 0
// while (i < 20) {
//     document.write(`<h1>What are you doing? ${i}<h1>`)
//     i++
// }


// Створити масив з 10 числових елементів.Вивести в консоль всі його елементи в циклі.

// let array = [256, 3.14, 148, 659.36, 8568, 56, 32.589, 1, 568.258, 568];
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index])   
// }

// Створити масив з 10 строкрових елементів.Вивести в консоль всі його елементи в циклі.

// let array = ['car', 'bike', 'bus', 'plane', 'ship', 'rocket', 'train', 'helicopter', 'submarine', 'unknow'];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// Створити масив з 10 елементів будь - якого типу.Вивести в консоль всі його елементи в циклі.

// let array = ['car', 256, 'bike', true, 326.658, 'bus', 'plane', false, 'ship', 5.10];

// let i = 0;
// while (i < array.length) {
//     console.log(array[i])
//     i++
// }

// Створити масив з 10 елементів числового, стірчкового і булевого типу.За допомогою if та typeof 
// вивести тільки булеві елементи

// let array = ['car', 256, 'bike', true, 326.658, 'bus', 'plane', false, 'ship', 5.10];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "boolean") {
//         console.log(array[i]);
//     }
// }


// Створити масив з 10 елементів числового, стірчкового і булевого типу.За допомогою if та typeof 
// вивести тільки числові елементи

// let array = ['car', 256, 'bike', true, 326.658, 'bus', 'plane', false, 'ship', 5.10];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//         console.log(array[i]);
//     }
// }


// Створити масив з 10 елементів числового, стрічкового і булевого типу.За допомогою if та typeof 
// вивести тільки рядкові елементи

// let array = ['car', 256, 'bike', true, 326.658, 'bus', 'plane', false, 'ship', 5.10];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string") {
//         console.log(array[i]);
//     }
// }

// Створити порожній масив.Наповнити його 10 елементами(різними за типами) через звернення до 
// конкретних індексів.Вивести в консоль всі його елементи в циклі.

// let emptyArray = [];
// emptyArray[0] = 12;
// emptyArray[1] = 'cloud';
// emptyArray[2] = true;
// emptyArray[3] = 325.55;
// emptyArray[4] = '8569';
// emptyArray[5] = false;
// emptyArray[6] = 'rain';
// emptyArray[7] = 3658
// emptyArray[8] = 'bus'
// emptyArray[9] = 999

// let a=0;
// while (a < emptyArray.length) {
//     console.log(emptyArray[a])
//     a++
// }

//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через 
//console.log та document.write


// for (let index = 0; index < 10; index++) {
//     console.log(`${index}`);
//     document.write(`<div>${index}</div>`)

    
// }

// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log 
// та document.write

//  for (let index = 0; index < 100; index++) {
//     console.log(`${index}`);
//     document.write(`<div>${index}</div>`)

// }

// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log 
// та document.write

// for (let index = 0; index < 100; index = index+=2) {
//     console.log(`${index}`);
//     document.write(`<div>${index}</div>`)
// }

// Створити цикл for на 100 ітерацій.Вивести тільки парні кроки.через console.log + document.write

//   for (let index = 0; index < 100; index++) {
//    if (index%2===0) {
//        console.log(index)
//        document.write(index)
//    }

// }

// for (let index = 0; index < 100; index++) {
//     if (index % 2 !== 0) {
//         console.log(index)
//         document.write(index)
//     }

// }

// Відтворити роботу годинника, відрахувавши 2 хвилини(2 цикли! 1й - хвилини, 2й - секунди)

// let minutes = 0;
// let seconds = 0;
// console.log(minutes);
// for (let m = 0; m <=60; m++) {
//     if(m === 2) {
//         minutes = m;
//     }
//     for (let s = 0; s < 60; s++) {
//         if(s === 20) {
//             seconds = s;
//         }
        
//     }
    
// }

//     console.log(minutes + ' хвилини ' + seconds + 'секунд' );

    //Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 
    //2й - хвилини, 3й - секунди)

// let hour = 0
// let minutes = 0;
// let seconds = 0;

// for (let h = 0; h <= 3; h++) {
//     if(h===2){
//     hour = h;}

//     for (let m = 0; m <= 60; m++) {
//     if (m === 20) {
//         minutes = m;}

//         for (let s = 0; s < 60; s++) {
//         if (s === 0) {
//             seconds = s;
//         }
//     }
// }
// }

// for (let h = 0; h <= 2; h++) {
//     for (let m = 0; m < 60; m++) {
//         if(h===2&&m===20){break};
//         for (let s = 0; s < 60; s++) {
//                 console.log(`${h}hours${m}minutes${s}sec`);
//         }
//         }
//         }



// console.log(hour + 'годин '+ minutes + ' хвилини ' + seconds + 'секунд');


// Додатково
//     - Дано масив: ['a', 'b', 'c'].За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: ['a', 'b', 'c'].За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: ['a', 'b', 'c'].За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: ['a', 'b', 'c'].За допомогою циклу for of зібрати всі букви в слово

// let array = ['a', 'b', 'c'];

// let word = '';
// for (let index = 0; index < array.length; index++) {
    
//     word += array[index];
//     // document.write(word)
//     console.log(word);
// }
// console.log(word);

// let array = ['a', 'b', 'c'];
// let i = 0;
// let word = '';
// while (i<array.length) {
   
//    word += array[i]
//     i++;
// }
// console.log(word);


// let word = '';
// let array = ['a', 'b', 'c'];
// for(element of array){
//    word += element;
// };
// console.log(word)


