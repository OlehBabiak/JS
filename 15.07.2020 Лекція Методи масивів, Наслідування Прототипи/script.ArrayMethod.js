//================================Методи масивів   lesson 6=======================================

// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let numberaArr = [2, 54, 21, 12, 32, 41, 25, 99, 52, 45, 31, 91, 14, 88, 72, 7, 77, 39, 80, 1];
// let sortNumberArr = numberaArr.sort((a, b) => {
// 	return b-a
// })
// console.log(sortNumberArr)

//===================================================================================

// let sortNumberArr2 = numberaArr.sort((a, b) => {
// 	return a-b
// })
// console.log(sortNumberArr2)

//=============================================================================================================

// let filterArr = numberaArr.filter(value => {
// 	return value%3===0
// })
//
// console.log(filterArr);

//====================================================================

// let filterArr = numberaArr.filter(value => {
// 	return value%10===0
// })
// console.log(filterArr);

//=====================================================================

// numberaArr.forEach(value => {
// 	// if (value%2 === 0){return} // return працює по іншому, повертає всі числа які !== умові
// 	//console.log(value)
// })
// console.log(numberaArr[5])
//================================================================

// let map = numberaArr.map(value => {
// 	return value*3
// })
// console.log(map)

//========================================================================

// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

//====================================================================

// let words = ['Дим', 'Тарілка', 'Гроші', 'Лось', 'Лампа', 'Паркет', 'Колесо', 'Крісло', 'Магазин', 'Підлога', 'Вікно', 'Небо', 'Асвальт', 'Машина', 'Ялинка', 'Бакон']
//
//
// let sortWords = words.sort()
// console.log(sortWords)
//
// //===============================================================================
//
// let sortWords2 = words.sort((a, b) => {
// 	if (a-b){return 1} else {return -1}
// })
// console.log(sortWords2)
//
// //=====================================================================
//
// let sortWordsFilter = words.filter(value => {
// return value.length<5
// })
// console.log(sortWordsFilter)
//
// //===========================================================================
//
// let wordMap = words.map(value => {
// 	return value+'!'
// })
// console.log(wordMap)

//==================================================================================

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// 	let users = [ {name: 'vasya', age: 31, status: false},
// 	{name: 'petya', age: 30, status: true},
// 	{name: 'kolya', age: 29, status: true},
// 	{name: 'olya', age: 28, status: false},
// 	{name: 'max', age: 30, status: true},
// 	{name: 'anya', age: 31, status: false},
// 	{name: 'oleg', age: 28, status: false},
// 	{name: 'andrey', age: 29, status: true},
// 	{name: 'masha', age: 30, status: true},
// 	{name: 'olya', age: 31, status: false},
// 	{name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let newUsers = users.sort((a, b) => {
// return a.age-b.age
// })
// console.log(newUsers)
//==========================
// let newUsers2 = users.sort((a, b) => {
// 	return b.age-a.age
// })
// console.log(newUsers2)


// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let signsWord = users.sort((a, b) => {
// 	return a.name.length - b.name.length
// })
// console.log(signsWord)
//===============================
// let signsWord2 = users.sort((a, b) => {
// 	return b.name.length - a.name.length
// })
// console.log(signsWord2)


//
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив
// (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором


// const usersWithId = users.map((user, index) => {
// 	let newUser = {...user};
// 	newUser.id = index + 1;
// 	return newUser;
// });
//
// console.log(usersWithId)
// console.log(users)
//
// let usersSort = usersWithId.sort((a, b) => {
// 	return b.id-a.id
// })
// console.log(usersSort)



//============================================================
	//- взять слдующий массив


// let usersWithAddress = [
// 	{
// 		id: 1,
// 		name: 'vasya',
// 		age: 31,
// 		status: false,
// 		address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
// 	{
// 		id: 2,
// 		name: 'petya',
// 		age: 30,
// 		status: true,
// 		address: {city: 'Lviv', street: 'Horodotcka', number: 1}},
// 	{
// 		id: 3,
// 		name: 'kolya',
// 		age: 29,
// 		status: true,
// 		address: {city: 'Lviv', street: 'Pekarska', number: 121}},
// 	{
// 		id: 4,
// 		name: 'olya',
// 		age: 28, status: false,
// 		address: {city: 'Lviv', street: 'varshavska', number: 90}},
// 	{
// 		id: 5,
// 		name: 'max',
// 		age: 30,
// 		status: true,
// 		address: {city: 'Lviv', street: 'linkolna', number: 115}},
// 	{
// 		id: 6,
// 		name: 'anya',
// 		age: 31,
// 		status: false,
// 		address: {city: 'Lviv', street: 'Chornovola', number: 2}},
// 	{
// 		id: 7,
// 		name: 'oleg',
// 		age: 28,
// 		status: false,
// 		address: {city: 'Lviv', street: 'Siajvo', number: 22}},
// 	{
// 		id: 8,
// 		name: 'andrey',
// 		age: 29,
// 		status: true,
// 		address: {city: 'Lviv', street: 'Mazepy', number: 43}},
// 	{
// 		id: 9,
// 		name: 'masha',
// 		age: 30,
// 		status: true,
// 		address: {city: 'Lviv', street: 'zelena', number: 12}},
// 	{
// 		id: 10,
// 		name: 'olya',
// 		age: 31,
// 		status: false,
// 		address: {city: 'Lviv', street: 'pancha', number: 16}},
// 	{
// 		id: 11,
// 		name: 'max',
// 		age: 31,
// 		status: true,
// 		address: {city: 'Lviv', street: 'holosko', number: 121}}];

//// -- отсортировать его по id пользователей
// let users = usersWithAddress.sort((a, b) => {
// 	return  a.id - b.id
// })
// console.log(users)

//===========================================

// -- отсортировать его по id пользователей в обратном опрядке
// let users = usersWithAddress.sort((a, b) => {
// 	return  b.id-a.id
// })
// console.log(users)

//================================================
// -- отсортировать его по возрасту пользователей

// let users = usersWithAddress.sort((a, b) => {
// 	return a.age - b.age
// })
// console.log(users)

//==================================================

// -- отсортировать его по возрасту пользователей в обратном порядке

// let users = usersWithAddress.sort((a, b) => {
// 	return b.age - a.age
// })
// console.log(users)

//=========================================================

// -- отсортировать его по имени пользователей

// let users = usersWithAddress.sort((a, b) => {
// 	if(a.name > b.name) {return 1} else {return -1}
// })
// console.log(users);

//=============================

// let users = usersWithAddress.sort((a, b) => {
// 	if(a.name<b.name){return 1}else {return  -1}
// })
// console.log(users)

//======================================================
//отсортировать его по названию улицы  в алфавитном порядке
// let users = usersWithAddress.sort((a, b) => {
// 	if(a.address.street.toLowerCase() > b.address.street.toLowerCase()){return -1}else {return 1}
// })
// console.log(users)

//===========================================================

// -- отсортировать его по названию улицы  в алфавитном порядке

//отсортировать его по названию улицы  в алфавитном порядке
// let users = usersWithAddress.sort((a, b) => {
// 	if(a.address.street.toLowerCase() < b.address.street.toLowerCase()){return -1}else {return 1}
// })
// console.log(users)

//++=====================================================

// // -- отсортировать его по номеру дома по возрастанию
// let users = usersWithAddress.sort((a, b) => {
// 	return  a.address.number-b.address.number
// })
// console.log(users)

//=======================================================

//// -- отфильтровать (оставить) тех кто младше 30
//
// let users = usersWithAddress.filter((value) => {
// 	if(value.age<30){return value.age}
// })
// console.log(users);

//============================================

// отфильтровать (оставить) тех у кого отрицательный статус

// let users = usersWithAddress.filter((value) => {
// 	return value.status === false
// })
// console.log(users)

//=================================================

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// let users = usersWithAddress.filter(value => {
// 	return value.status === false && value.age <30
// })
// console.log(users)

//===============================================

// // -- отфильтровать (оставить) тех у кого номер дома четный
//
// let users = usersWithAddress.filter(value => {
// 	return value.address.number%2===0
// })
// console.log(users);

//==================================

// Відфільтрувати масив за наступними крітеріями :

// let cars = [
// 	{producer:"subaru", model: "wrx", year: 2010, color:"blue", type: "sedan", engine: "ej204x", volume: 2, power: 400},
// 	{producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
// 	{producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
// 	{producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
// 	{producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
// 	{producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
// 	{producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
// 	{producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
// 	{producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
// 	{producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
// 	{producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
// 	{producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume: 5,power: 400},
// 	{producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

// 	- двигун більше 3х літрів

// let volumeFilter = cars.filter(value => {
// 	return value.volume >3
// })
// console.log(volumeFilter)

//=========================================================
// - двигун = 2л

// let volumeFilter = cars.filter(value => value.volume===2)
// console.log(volumeFilter)

//=================================================
// - виробник мерс
//  let produceMers = cars.filter(value => value.producer === 'mercedes')
// console.log(produceMers);
 
 //=====================================

// - двигун більше 3х літрів + виробник мерседес

// let produceMers3l = cars.filter(value => value.producer==='mercedes' && value.volume >3)
// console.log(produceMers3l)

//=======================================

// - двигун більше=  3х літрів + виробник субару
//
// let produceSubaru3l = cars.filter(value => value.producer==='subaru' && value.volume >=3)
// console.log(produceSubaru3l)

//======================================

// - сили більше ніж 300
//
// let powerFilter = cars.filter(value => value.power > 300)
// console.log(powerFilter);

//===========================
// - сили більше ніж 300 + виробник субару

// let powerFilterSub = cars.filter(value => value.power > 300&&value.producer==='subaru')
// console.log(powerFilterSub);

//===========================================
// - мотор серіі ej

// let engineSerie = cars.filter(value => value.engine.startsWith('ej'))
// console.log(engineSerie);

//=======================================================

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let engineSerie = cars.filter(value => value.producer==='subaru' && value.engine.startsWith('ej'))
// console.log(engineSerie);

//=================================================================

// - двигун меньше 3х літрів + виробник мерседес

// let powerFilterMers = cars.filter(value => value.power < 300&& value.producer === 'mercedes')
// console.log(powerFilterMers);

//==========================================================

// - двигун більше 2л + сили більше 250

// let powerFilterVolume = cars.filter(value => value.power > 250 && value.volume > 2)
// console.log(powerFilterVolume);

//=============================================================

// - сили більше 250  + виробник бмв
//
// let powerFilterBmw = cars.filter(value => value.power > 250 && value.producer ==='bmw')
// console.log(powerFilterBmw);


//===================================================================
// Створити обєкт автомобіля з полями:
// 	Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// 	Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// 	Створити не менше 7 та не більше 20 машинок.


// Для початку вкладіть всі наші створені автомобілі в масив cars.
// 	Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// 	то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// 	Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
// let cars = [
// 	{producer:"ford", power: 250, owner: {name: 'Oleh', age: 39, experience: 14}, price: 17000, year: 2015},
// 	{producer:"mersedes", power: 180, owner: {name: 'Roman', age: 35, experience: 12}, price: 19000, year: 2016},
// 	{producer:"mazda", power: 150, owner: {name: 'Petro', age: 26, experience: 7}, price: 15000, year: 2013},
// 	{producer:"toyota", power: 160, owner: {name: 'Rostyk', age: 26, experience: 2}, price: 13000, year: 2011},
// 	{producer:"Honda", power: 140, owner: {name: 'Kolja', age: 32, experience: 9}, price: 11000, year: 2014},
// 	{producer:"opel", power: 120, owner: {name: 'Nazar', age: 45, experience: 25}, price: 14000, year: 2017},
// 	{producer:"renault", power: 110, owner: {name: 'Andrij', age: 29, experience: 10}, price: 13500, year: 2010},
// 	]


//	Зробити половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

// let newDrivers = ['John','Pol','Havier','Salvadore','Enrice','Carabas','Woicech']
// newDrivers.forEach((newName) => newName)
// cars.forEach((value, index) => index%2===0)
// cars.forEach((value) => value.power*=1.1)
// cars.forEach((value) => value.price*=1.05)

// })
// for(let i = 0; i < cars.length; i+= 2) {
// 	cars[i].power *= 1.1;
// 	cars[i].price *= 1.05;
// 	cars[i].owner = newDrivers[i];
// }

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// 	то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// for (let i = 0; i < cars.length; i++) {
// if (cars[i].owner.experience<5&&cars[i].owner.age>25){
// 	cars[i].owner.experience+=1
// }
// }
// console.log(cars);
// 	Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let summ = 0
// for (let i = 0; i < cars.length; i++) {
// 	summ += cars[i].price
// }
// console.log(summ);
//======================================

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
//
// arr.forEach(function(elem) {
// 	sum += elem;
// });
//
// console.log(sum);
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и
// наибольший индекс заданного элемента.
// 	Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// 	Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// function minMax(array, el) {
// 	let minIndex = null;
// 	let maxIndex = null;
//
// 	for (let index = 0; index < array.length; index++) {
// 		if ( array[index]===el){
// 			if(!minIndex) minIndex = index;
//
// 			maxIndex = index;
// 		}
//
// 	}
// 	minIndex!==null
// 	?console.log(`MinIndex =${minIndex}, MinIndex =${maxIndex}`)
// 	:console.log(-1)
// }
// minMax(arr, 7)

// function finder(number, arr) {
// 	let minIndex = arr.indexOf(number)
// 	let maxIndex = arr.lastIndexOf(number)
//
// 	console.log('MinInd ' + minIndex)
// 	console.log('MaxInd ' + maxIndex)
// }
// finder(7, arr)
// finder(4, arr)
//
//

