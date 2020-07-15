// --створити об'єкт (не меньше 5ти властивостей) який описує
//     - собаку
//     - людину
//     - автомобіль
//     - квартиру
//     - книгу

// let objDog = {};
// objDog['name'] = 'Rex';
// objDog['color'] = 'Grey';
// objDog['ears'] = 'long';
// objDog['collar'] = 'yes';
// objDog['age'] = 5;
// console.log(objDog)

// let objMan = {};
// objMan['name'] = 'Oleh';
// objMan['height'] = 180;
// objMan['weight'] = 80;
// objMan['age'] = 39;
// objMan['married'] = 'yes';
// console.log(objMan)

// let objCar = {};
// objCar['brand'] = 'Ford';
// objCar['model'] = 'Fusion';
// objCar['color'] = 'white';
// objCar['doors'] = 4;
// objCar['year'] = 2015;
// console.log(objCar)

// let objFlat = {};
// objFlat['rooms'] = 3;
// objFlat['height'] = 2.6;
// objFlat['floor'] = 6;
// objFlat['area'] = 86;
// objFlat['street'] = 'maloholoskivska';
// console.log(objFlat)


// let objBook = {};
// objBook['name'] = 'JS for children';
// objBook['pages'] = 230;
// objBook['chapter'] = 54;
// objBook['Author'] = 'Nick Morgan';
// objBook['cover'] = 'soft';
// console.log(objBook)

// --Створити масив та вивести його в консоль:
// - з 5 собак
//     - 3 5 людей
//         - з 5 автомобілів

// let arr = [];

//  let objDog[0] = {};
//  objDog['name'] = 'Rex';
//  objDog['color'] = 'Grey';
//  objDog['ears'] = 'long';
//  objDog['collar'] = 'yes';
//  objDog['age'] = 5;
 
 
//  let objMan[1] = {};
//  objMan['name'] = 'Oleh';
//  objMan['height'] = 180;
//  objMan['weight'] = 80;
//  objMan['age'] = 39;
//  objMan['married'] = 'yes';
 
 
//  let objCar[2] = {};
//  objCar['brand'] = 'Ford';
//  objCar['model'] = 'Fusion';
//  objCar['color'] = 'white';
//  objCar['doors'] = 4;
//  objCar['year'] = 2015;
 
 
//  let objFlat[3] = {};
//  objFlat['rooms'] = 3;
//  objFlat['height'] = 2.6;
//  objFlat['floor'] = 6;
//  objFlat['area'] = 86;
//  objFlat['street'] = 'maloholoskivska';
 
 
 
//  let objBook[4] = {};
//  objBook['name'] = 'JS for children';
//  objBook['pages'] = 230;
//  objBook['chapter'] = 54;
//  objBook['Author'] = 'Nick Morgan';
//  objBook['cover'] = 'soft';

 
// console.log(arr)






 // let arrDogs = ['Affenpinscher', 'Akita', 'Beagle', 'Whippet', 'Doberman'];
 // console.log(arrDogs);
 // let arrPeople = ['Оксана','Вітя','Надя','Роман','Христина'];
 // console.log(arrPeople);
 // let arrCars = ['Mercedes', 'BMW', 'Ford', 'Renault', 'ГАЗ'];
 // console.log(arrCars)

// --створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково 
//повинна бути об'єктом,ще одна - масивом
//     - будинок
//     - водій
//     - іграшку
//     - стіл
//     - сумка

// let objHous = {
//     street: 'Horodocka',
//     number: 137,
//     floors: 2,
//     roof: 'brown',
//     facade: 'whiеу',
//     describe: {rooms: 5, area: 250, bathrooms: 3}
// };
// console.log(objHous)
//
// let objDriver = {
//     bus: 'Etalon',
//     route: 41,
//     routeLength: 21,
//     routeTime: 1.36,
//     dayOff: 'sunday',
//     describe: {name: 'Petro', age: 48, height: 176}
// };
// console.log(objDriver)
//
// let objToy = {
//     forAge: 3,
//     brand: 'Peppa',
//     model: 'peppaPig',
//     size: 'big',
//     price: 5,
//     describe: {color: 'pink', talk: 'No'}
// };
// console.log(objToy)


//Доробити Стіл і Сумку

// Дан массив:

// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
//     - статус Андрія
//         - статус Максима
//             - ім'я передостаннього об'єкту
//                 - ім'я третього об'єкта
//                     - вік Олега
//                         - вік Олі
//                             - вік + ім'я 5го об'єкта
//                                 - вік + сатус Анни

// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'max', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true }
// ];
// console.log(users[7].status)
// console.log(users[10]['status'])
// console.log(users[9]['name'])
// console.log(users[2].name)
// console.log(users[6].age)
// console.log(users[10]['age'])
// console.log(users[4]['age'], users[4]['name'])
// console.log(users[5]['age'], users[5]['status'])


// --Напишіть код, який за допомоги document.getElementById або document.getElementsByClassName 
//або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
//     - отримує текст з блоку з id "rules"
//         - замініть текст параграфа з id 'content' на будь - який інший
//             - замініть текст параграфа з id 'rules' на будь - який інший
//                 - змініть кожному елементу колір фону на червоний
//                     - змініть кожному елементу колір тексту на синій
//                 отримати весь список класів елемента з id = rules і вивести їх в console.log
//                             - отримати всі елементи з класом fc_rules
//                                 - поміняти колір тексту у всіх елементів fc_rules на червоний

// let content = document.getElementById('content');
// console.log(content);

// let rules = document.getElementsByClassName('fc')
// for(let element of rules){
//     console.log(element.textContent)
// }


// let element = document.getElementById('rules');
// console.log(element.classList)


// document.getElementById('content').textContent = 'Свойство textContent позволяет получить
// текстовый контент указанного узла и всех его потомков. Данное значение можно представить как конкатенацию (сложение)
// все текстовых узлов, которые являются потомками узла, для которого вызывается данное свойство.'
// document.getElementById('rules').textContent = 'Кроме этого, данное свойство позволяет также установить элементу текстовый контент.
// При этом все дочерние узлы будут удалены и заменены единственным текстовым узлом, содержащий этот контент.'

// document.getElementById('content').style.backgroundColor = 'red' !!!
// document.getElementById('rules').style.backgroundColor = 'red'    !!!
// document.getElementById('content').style.color = 'blue'    !!!
// document.getElementById('rules').style.color = 'blue'   !!!



// let classList = document.getElementsByClassName  ??

// let fcRules = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < fcRules.length; i++) {
//     fcRules[i].style.color = 'red'
// }
//asd
/*
Взяти файл template_2.html та працювати в ньому
- Напишіть код, який :
-- змінює колір тексту елемнту з ід main_header на будь-який інший
-- робить шириниу елементу ul 400 пікселів
-- робить шириниу всіх елементів з класом linkList шириною 50%
-- отримує текст який зберігається в елементі з класом listElement2
-- отримує всі елементи li та змінює ім колір фону на сірий
-- отримує всі елементи 'a' та додає їм клас anchor
-- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, 
змінює йому розмір тексту на 40 пікселів
-- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
-- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
-- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = 
content 2 segment . Колір отримати з prompt()
-- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
-- отримати елементи p та змінити їм paddin на довільне значення
-- отримати елементи з класом text2 та змінити їм текст на довільне значення
*/

// document.getElementById('main_header').style.color = 'red'

// let ulElement = document.getElementsByTagName('ul');
// ulElement[0].style.width = '600px'

// let linkList = document.getElementsByClassName('linkList');
// for (let index = 0; index < linkList.length; index++) {
//     linkList[index].style.width = '50%'
// }

// let listElement2Text = document.getElementById('listElement2');
// console.log(listElement2Text)



// let liElements = document.getElementsByTagName('li');
// for (let index = 0; index < liElements.length; index++) {
//     liElements[index].style.backgroundColor = 'grey'
// }

// // let aElements = document.getElementsByTagName('a');
// // for (let index = 0; index < aElements.length; index++) {
// //     liElements[index].classList.add('anchor')
// // }

// let aElements = document.getElementsByTagName('a');
// for (let index = 0; index < aElements.length; index++) {
//     if (aElements[index].textContent === 'link3') {
//         aElements[index].style.fontSize = '40px'
//     }
// }

//--отримує всі елементи 'a' та додає їм клас element_XXX.Де XXX - текстовий контент елементу a

// let aElements = document.getElementsByTagName('a');
// for (let index = 0; index < aElements.length; index++){
//     aElements[index].classList.add('element_XXX');
//     aElements[index].innerText = 'XXX'
// }

//-- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let subHeader = document.getElementsByClassName('sub-header');
// let clr = prompt() 
// for (let index = 0; index < subHeader.length; index++) {
     
//     subHeader[index].style.backgroundColor = clr
    
// }

// --отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту =
//     content 2 segment.Колір отримати з prompt()

// let subHeader = document.getElementsByClassName('sub-header');
// let clr = prompt() 
// for (let index = 0; index < subHeader.length; index++) {
//     if (subHeader[index].textContent ==='content 2 segment') {
//         subHeader[index].style.backgroundColor = clr
//     }
// }

//отримати елементи p та змінити їм paddin на довільне значення

// let pPad = document.getElementsByTagName('p')
// for (let index = 0; index < pPad.length; index++) {
//     pPad[index].style.padding = '20px'
// }

//отримати елементи з класом text2 та змінити їм текст на довільне значення

// let elementText2 = document.getElementsByClassName('text2')
// for (let index = 0; index < elementText2.length; index++) {
//     elementText2[index].innerText = 'до побачення'
// }