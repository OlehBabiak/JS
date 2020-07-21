//=========================================This  lesson5=====================================


// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
//
// function Tag(titleOfTag, actionDescription, titleOfAttr) {
// this.titleOfTag = titleOfTag; //назва тегу
// this.actionDescription = actionDescription; //опис дій
// this.titleOfAttr = titleOfAttr;  //масив з атрибутами
// this.actionOfAttr = titleOfAttr.toString(); //дія атрибуту
// this.discribe = function () {
// 	document.write(`Тег ${this.titleOfTag} виконує наступну дію ${this.actionDescription} має
// такі атрибути як ${this.actionOfAttr} та ${this.titleOfAttr[0].coords} <br>`)
// }
// }
// let tagA = new Tag('a', 'Тег <a> является одним из важных элементов HTML и ' +
// 	'предназначен для создания ссылок', [{
// 		accesskey: 'Активация ссылки с помощью комбинации клавиш',
// 	coords: 'Устанавливает координаты активной области.' }]);
// console.log(tagA)
// tagA.discribe()
//
// ==============================================

// class Tag {
// 	constructor(titleOfTag, actionDescription, titleOfAttr) {
// 		this.titleOfTag = titleOfTag; //назва тегу
// 		this.actionDescription = actionDescription; //опис дій
// 		this.titleOfAttr = titleOfAttr;  //масив з атрибутами
// 	}
// 	discribe() {
// 		document.write(`Тег ${this.titleOfTag} виконує наступну дію ${this.actionDescription} має
// такі атрибути як ${this.titleOfAttr.Object.keys} ${this.titleOfAttr[0].accesskey} та ${this.titleOfAttr[0].coords} <br>`)
// 	}
// }
// let tagA = new Tag('a', 'Тег <a> является одним из важных элементов HTML и ' +
// 	'предназначен для создания ссылок', [{
// 	accesskey: 'Активация ссылки с помощью комбинации клавиш',
// 	coords: 'Устанавливает координаты активной области.' }]);
// console.log(tagA)
// tagA.discribe()


//==============================================================
//- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car ={
// 	model:'X6',
// 	brand:'BMW',
// 	year:2015,
// 	maxSpeed:250,
// 	volumeEngine:2.5,
//
// 	drive()
// 	{console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);},
//
// 	info(){console.log(this);},
//
// 	increaseMaxSpead(newSpeed){this.maxSpeed+=newSpeed;},
// 	changeYear(newValue){this.year=newValue;},
// 	addDriver(driver){this.driver=driver;}
// }
// car.addDriver('Володя')
// car.changeYear(2016)
// car.increaseMaxSpead(40)
// car.info()
// //==========================================================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в
// поточний об'єкт car

// function Car(model, year, brand, maxSpeed, volumEngine) {
// 	this.model = model;
// 	this.year = year;
// 	this.brand = brand;
// 	this.maxSpeed = maxSpeed;
// 	this.volumEngine = volumEngine;
// 	this.driver = null;
// 	this.drive = function () {
// 		console.log(`яка виводить в консоль їдемо зі швидкістю ${this.maxSpeed} на годину`);
// 	}
// 	this.info = function () {console.log(this)}
// 	this.increaseMaxSpeed = function (newSpeed) {this.maxSpeed+=newSpeed}
// 	this.changeYear = function (newValue) {this.year=newValue}
//
// 	this.addDriver = function (driver) {this.driver = driver}
// }
//
//
// let ford = new Car('Fusion', 2015, 'Ford', 250, 240)
// ford.drive()
// ford.info()
// ford.increaseMaxSpeed(30)
// ford.changeYear(2018)
//
// ford.addDriver([{name:'Oleh',age: 25}])


//===========================================================================

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в
// поточний об'єкт car

// class Car {
// 	constructor(model, year, brand, maxSpeed, volumEngine) {
// 		this.model = model;
// 		this.year = year;
// 		this.brand = brand;
// 		this.maxSpeed = maxSpeed;
// 		this.volumEngine = volumEngine;
// 		this.driver = null;
// 		this.drive = function () {
// 			console.log(`яка виводить в консоль їдемо зі швидкістю ${this.maxSpeed} на годину`);
// 		}
// 		this.info = function () {console.log(this)}
// 		this.increaseMaxSpeed = function (newSpeed) {this.maxSpeed+=newSpeed}
// 		this.changeYear = function (newValue) {this.year=newValue}
//
// 		this.addDriver = function (driver) {this.driver = driver}
// 	}
//
// }
//
// let ford = new Car('Fusion', 2015, 'Ford', 250, 240)
// ford.drive()
// ford.info()
// ford.increaseMaxSpeed(30)
// ford.changeYear(2018)
//
// ford.addDriver([{name:'Oleh',age: 25}])

//=============================================================================

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Cinderella(name, age, footSize){
// 	this.name = name,
// 	this.age = age,
// 	this.footSize = footSize
// }
//
//
// let Anja = new Cinderella('Anja', 25, 39)
// let Olja = new Cinderella('Olja', 22, 38)
// let Nastja = new Cinderella('Nastja', 21, 38)
// let Ira = new Cinderella('Ira', 18, 40)
// let Oksana = new Cinderella('Oksana', 23, 36)
// let Nadja = new Cinderella('Nadja', 26, 34)
// let Lesja = new Cinderella('Lesja', 30, 34.5)
// let Alla = new Cinderella('Alla', 27, 35.5)
// let Lena = new Cinderella('lena', 24, 36.5)
// let Julia = new Cinderella('Julia', 20, 37.5)
//
//
// let girls = [Anja, Olja, Nastja, Ira, Oksana, Nadja, Lesja, Alla, Lena, Julia];
//
// let prince = {name:'Alfonco', age: 35, foot: 38}
//
// let Cinderellas = girls.filter(girl => girl.footSize===prince.foot)
// console.log(Cinderellas);
//
// let myCindarella = girls.find(girl => girl.footsize===prince.foot)
//
// console.log(Cinderellas);
// console.log(myCindarella);






