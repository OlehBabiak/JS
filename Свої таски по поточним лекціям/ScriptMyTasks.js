//=========================================This=====================================

// function Car(color, speed) {
// 	this.color = color;
// 	this.speed = speed;
//
// this.ride = function () {
// document.write(`I am riding ${this.color} car with ${this.speed} km/h`)
// }
// }
// 	let Tesla = new Car('red', 99 )
// console.log(Tesla);
// Tesla.ride()

// function User(name, age, work) {
// this.name = name;
// this.age = age;
// this.work = work;
// this.hobby = function () {
// 	document.write(`${this.name} у віці ${this.age} займається ${this.work} <br>`)
// }
// }
// let Oleh = new User('Oleh', 39, 'машинами');
// let Nastya = new User('Nastya', 28, 'роботою');
// console.log(Oleh)
// console.log(Nastya);
// Oleh.hobby()
// Nastya.hobby()

// Class ========

// class User{
// 	constructor(name, age, work) {
// 		this.name = name;
// 		this.age = age;
// 		this.work = work;
// 		this.hobby = function () {
// 			document.write(`${this.name} у віці ${this.age} займається ${this.work} <br>`)
// 	}
// }
// }
// let Oleh = new User('Oleh', 39, 'машинами');
// let Nastya = new User('Nastya', 28, 'роботою');
// console.log(Oleh)
// console.log(Nastya);
// Oleh.hobby()
// Nastya.hobby()


// ======================================== Наслідування ================================

// class User {
// 	constructor(name,age,isHe) {
// 		this.name = name;
// 		this.age = age;
// 		this.money = 200;
// 		this.isHe = true;
// 	}
// }
// let userOlya = new User('Olya', 22, false)
// console.log(userOlya)
// userOlya.age = 40;
// console.log(userOlya)
//
// class Child extends User{
// 	constructor(name,age,isHe, hair) {
// 		super(name,age,isHe);
// 		this.hair = hair
// 	}
// }
// let userNadya = new Child('nadya', 23, false, 'black')
// console.log(userNadya)


//================================== Методи масивів ==========================================


//Метод Reduce

// let arr = [20, 5, 95, 14, 32, 1, 0, 8, 28]
// let summ = arr.reduce((previousValue, currentValue) => {
// 	return previousValue+currentValue
// 	}
// )
// //Просумувати всі елементи масиву
// let summ2 = arr.reduce((p, c) => p+c)
// console.log(summ);
// console.log(summ2);

// let girls = [
// {name: 'Anja', age: 25, footSize: 39},
// {name: 'Olja', age: 22, footSize: 37},
// {name: 'Nastja', age: 21, footSize: 38},
// {name: 'Ira', age: 18, footSize: 40},
// {name: 'Oksana', age: 23, footSize: 36},
// {name: 'Nadja', age: 26, footSize: 34},
// {name: 'Lesja', age: 30, footSize: 34},
// {name: 'Alla', age: 27, footSize: 35},
// {name: 'lena', age: 24, footSize: 36},
// {name: 'Julia', age: 20, footSize: 37},
// 	];
// let summ = girls.reduce((previousValue, currentValue) => {
// 	return previousValue+' ;'+currentValue.name
// 	},'')
// // 0- initialy value  // previousValue - берем число яке буде = previousValue для початку додавання, оскільки після додавання
// 	// перших 2 чисел ми отримаєм NAN бо отримаєм число а від числа .age не існує
// console.log(summ);


// ===========================================Прототипи=====================================
function User(name, age, work) {
this.name = name;
this.age = age;
this.work = work;
}
User.prototype.hobby = function () {
	document.write(`${this.name} у віці ${this.age} займається ${this.work} <br>`)
} // використовуються замість поведінки, в Класі не треба писати прототип, використовуєм через this,
	// воно автоматом робить як прототип
let Oleh = new User('Oleh', 39, 'машинами');
let Nastya = new User('Nastya', 28, 'роботою');
console.log(Oleh)
console.log(Nastya);
Oleh.hobby()
Nastya.hobby()

// Про Хомяків!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function Humster(name) {
// this.name = name;
// this.stomach = [];
// }
// // Humster.prototype.stomach = [];     //Унікальні значення заносимо не в прототип а в сам клас (ф-цію)
// Humster.prototype.findFood = function (food) {
// 	console.log(`Хомяк ${this.name} зїв ${this.stomach.push(food)} <br>`)
// }
// let Oleh = new Humster('Oleh');
// let Nastya = new Humster('Nastya');
//
// Oleh.findFood('Gruska')
// Nastya.findFood('yabluko')
//
// console.log(Oleh.stomach)
// console.log(Nastya.stomach);

// ================ Наслідування на проптотипах ===============

// function User(name, age, run) {
// 		this.name = name;
// 		this.age = age;
// 		this.money = 200;
// 		this.run = run;
// }
// User.prototype.hobby = function () {
// 	document.write(`Це ${this.name}, їй ${this.age} років, вона має ${this.money} грн любить бігати? ${this.run} <br>`)
// }
// function Child(name, age, run) {
// 	this.name = name;
// 	this.age = age;
// 	this.run = run;
// }
// // User.prototype = Child.prototype
// // User.prototype.__proto__ = Child.prototype
// // Найкращий спосіб
// User.prototype=Object.create(Child.prototype)
//
// 	Child.prototype.hobby = function () {
// 	document.write(`Ох та ${this.name}, якій ${this.age} років, вона не має ${this.money} грн любить бігати? ${this.run} <br>`)
// }
//
// let userOlya = new User('Olya', 36, 'Ні')
// let userNastya = new User('Nastya', 34, 'так')
// let userNadya = new Child('nadya', 23, 'no')
// console.log(userNadya)
// console.log(userOlya)
// console.log(userNastya);
// userOlya.hobby();
// userNastya.hobby()
// userNadya.hobby()

//==============================================================

// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
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
// 		?console.log(`MinIndex =${minIndex}, MinIndex =${maxIndex}`)
// 		:console.log(-1)
// }
// minMax(arr, 7)
//
//
// localStorage.setItem('myArr', JSON.stringify(arr))
// let storArr = localStorage.getItem('myArr')
// console.log(storArr)
// let storArrParced = JSON.parse(storArr)
// console.log(storArrParced)
// let summ = 0;
// storArrParced.forEach(function (el) {
// 	summ += el
// })
// console.log(summ)
//
// localStorage.removeItem('user')

//==================================Reduce=====================
//Базово:
// let arr = [5, 32, 14, 10, 9, 78, 54, 23, 24, 85]
// let summ = arr.reduce((previousValue, currentValue) => {
// 	return previousValue + currentValue
// })
// console.log(summ);
//
// let summ2 = arr.reduce((p, c) => p+c )
// console.log(summ2);

// в обэктах:

// let girls = [
// {name: 'Anja', age: 25, footSize: 39},
// {name: 'Olja', age: 22, footSize: 37},
// {name: 'Nastja', age: 21, footSize: 38},
// {name: 'Ira', age: 18, footSize: 40},
// {name: 'Oksana', age: 23, footSize: 36},
// {name: 'Nadja', age: 26, footSize: 34},
// {name: 'Lesja', age: 30, footSize: 34},
// {name: 'Alla', age: 27, footSize: 35},
// {name: 'lena', age: 24, footSize: 36},
// {name: 'Julia', age: 20, footSize: 37},
// 	];
// let sumAges = girls.reduce((previousValue, currentValue) => {
// 	console.log(previousValue);
// 	console.log(currentValue);
// 	console.log('__________________________________');
// 	return previousValue.age + currentValue.age
// })
//
// console.log(sumAges);
//Result NaN, губим на 2 ітерації до суми віку (previousValue) додаєм .age => 47.age = NaN

// let sumAges2 = girls.reduce((previousValue, currentValue) => {
// 	console.log(previousValue);
// 	console.log(currentValue);
// 	console.log('__________________________________');
// 	return previousValue + currentValue.age
// }, 0) // 0 початкове previousValue
//
// console.log(sumAges2);

//===================================DOM==================================

// let a = document.createElement('div')
// a.innerHTML = 'Hello';
// a.classList.add('one');
// document.querySelector('.trew').appendChild(a)
// console.log(a);
// let ul = document.createElement('ul')
// ul.innerText = 'tittle list'
// document.querySelector('.trew').appendChild(ul)
// ul.classList.add('liska')
//
// let data = ['Лосось', 'Треска', 'Семга', 'Кета']
// for (let i = 0; i < data.length; i++) {
// 	let li = document.createElement('li');
// 	li.innerText = data[i];
// 	ul.appendChild(li)
// }
// ul.appendChild(li)



//============================================ BOM=======================


// navigator.geolocation.getCurrentPosition(position => {
// 	console.log(position.coords);
// })
//
// let videoMyVeb = document.getElementById('videoMyVeb')
// navigator.mediaDevices.getUserMedia({audio:false, video:true}).then(value => {
// 	videoMyVeb.srcObject = value;
// 	videoMyVeb.play()
// })
// console.log(navigator)
//
// console.log(history)
// history.back();
// history.forward()
// //============================================Callback=======================
// function calc(a,b,action){
// 	return action
// }
// calc(10,20,(a,b)=> a+b-5)
//



//==================================setTimeout=============

// let money = 0;
// function clearHouse(isJobDone, cb){
// 	setTimeout(()=>{
// 		if(isJobDone){
// 			money = 500
// 			cb(money)
// 		}
// 		else {
// 			console.log('Zle')
// 		}
// 	}, 3000)
// }
// clearHouse(true, (reward)=>{
// 	console.log(reward);
// })


//====================================Деструктуризація===========================

// let girls = [
// {name: 'Anja', age: 25, footSize: 39},
// {name: 'Olja', age: 22, footSize: 37},
// {name: 'Nastja', age: 21, footSize: 38},
// {name: 'Ira', age: 18, footSize: 40},
// {name: 'Oksana', age: 23, footSize: 36},
// {name: 'Nadja', age: 26, footSize: 34},
// {name: 'Lesja', age: 30, footSize: 34},
// {name: 'Alla', age: 27, footSize: 35},
// {name: 'lena', age: 24, footSize: 36},
// {name: 'Julia', age: 20, footSize: 37},
// 	]
//
// let [us1, us2, ...uthUs] = girls  //чому не дає вибрати як через обєкт з масиву let{cars:[,mers]} = obj
// console.log(us1.age);
// console.log(us2.name);
// console.log(uthUs);  // Чому не дає масив?

// let user = {name: 'Anja', age: 25, footSize: 39, car:{color: 'white', power: 150}};
// let {age, car:{power}} =user
// console.log(age);
// console.log(power)

// let arr = ['Kolja', 'Vasja', 'Petja', 'Sasha', 'Dima']
// let [us1, us2, ...uthersUs] = arr
// console.log(us1);
// console.log(us2);
// console.log(uthersUs);

// let arr = ['Kolja', 'Vasja', 'Petja', 'Sasha', 'Dima']
// let [,,,us1] = arr
//
// console.log(us1);


//=============================... spred operator===============
// let user1 = {name: 'Anja', age: 25, footSize: 39, car:{color: 'white', power: 150}};
// let {age, ...uther} =user1
// console.log(age);
// console.log(uther);
//
// //створюємо новий обєкт і додаємо властивість
// 		//Робим однорівневу копію, берем всі ключі і значення юзера і додаєм новий ключ: значення, той самий Object.assign
// let userNew = {...user1, payment:250};
// console.log(userNew);
//
// let userNew2 = {...userNew}
// userNew2.name = 'Ira';//Робим однорівневу копію, переприсвоюєм значення ключа
// console.log(user1);
// console.log(userNew2);

//==============================Ссилочні типи даних=================================
// let obj = {name: 'Taras'}
// let objCopy = obj;
// objCopy.name='olja'  //objCopy не новий обєкт а ссилається (копія) obj
// console.log(obj);
// console.log(objCopy);

//======================================Object.assign===================
//
// let us1={name: 'Anja', age: 25, job: {title: 'Jun'}};
// let us2={payment: 250,  footSize: 37};
// let newUse = Object.assign(us1, us2);
// // console.log(newUse); // Якщо в 2 обєкті є ті самі ключі, то вони переприсвоюються другим
// // console.log(us1)  // us1 та newUse стали однаковими бо по суті ми з newUse докидуєм в us1
// // console.log(us2)
// console.log(newUse)
// newUse.name = 'Olja'
// console.log(us1)
// console.log(newUse)
// // newUse.job.title = 'Midle'
// // console.log(newUse)




//==============================================



// function calculate(a,b, callback) {
// 	console.log(2)
// 	let result = a + b;
// 	callback(result)
// }
//
// console.log(1)
//
// calculate(5,6, function (result) {
// 	console.log(3)
// 	// console.log(result);
// })

