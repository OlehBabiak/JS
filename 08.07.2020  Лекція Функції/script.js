// створити функцію яка виводить масив

// let worker = ['Петров', 'Иванов', 'Васильев', 'Яковлева', 'Степанова'];
// console.log(worker);

// - створити функцію яка заповнює масив рандомними числами та виводить його.
// Для виведення використати попвередню функцію.

// let numbers = []
// for ( i = 0; i < 20; i++ ){
// 	numbers.push( Math.round( Math.random() * 100 ));
// } console.log(numbers);

//створити функцію яка приймає три числа та виводить та повертає найбільше. ????????

// function numbers(a, b, c) {
// 	let result = Math.max(a, b, c);
// 	console.log(result)
// 	return result
// }
// let res =numbers(3,5,7)
// console.log(res);


// створити функцію яка приймає три числа та виводить та повертає найменьше.

// function numbers(a, b, c) {
// 	let result = Math.min(a, b, c);
// 	console.log(result)
// }
// numbers(3,5,7)

//створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function numbers() {
// 	console.log('max:',Math.max(...arguments));
// 	return Math.min(...arguments)
// }
// let min = numbers(3,5,7,9,5,3,4) // 3
// console.log('min:',min);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// function summNumb(arr) {
// 	let summ = 0;
// 	for (let i = 0; i<arr.length; i++){
// 		summ += arr[i];
// 	}
// 	return summ
// }
// let result  = summNumb([5, 8, 12, 4, 6])
// console.log(result)


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function summNumb(arr) {
// 	let summ = 0;
// 	for (let i = 0; i<arr.length; i++){
// 		summ += arr[i];
// 	}
// 	return summ/arr.length
// }
// let result  = summNumb([5, 8, 12, 4, 6])
// console.log(result)

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// function objArr(arr) {
// 	let x = 0;
// 	for(let i = 0; i < arr.length; i++) {
// 		if(typeof arr[i] == 'object') {
// 			x += 1;
// 		}
// 	}
// return x;
// }
// let result = objArr([
// 		{name: 'Vasia', age: 15},
// 		{name: 'Kolia', age: 26},
// 		{name: 'Petya', age: 28},
// 		{name: 'jura', age: 39}
// 		]
// 		)
// console.log(result)

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// function keysSumm(arr) {
// 	let sum = 0;
// 	for (let obj of arr) {
// 		let keys = Object.keys(obj)
// 		sum += keys.length
// 	}
// 	return sum
// }
// let result = keysSumm([
// 	{name: 'Vasia', age: 15},
// 	{name: 'Kolia', age: 26},
// 	{name: 'Petya', age: 28},
// 	{name: 'jura', age: 39}
// ]);
// console.log(result);


// let numbers = [2, 5, 6, 30, 3, 9, 1, 7];

// let max = numbers[0]; // 9
// for (let i = 0; i < numbers.length; i++) {
// 	if (numbers[i] > max) {
// 		max = numbers[i];
// 	}
// }

// console.log(Math.max(...numbers));

// console.log(max);

// function fuuu(array) {
// 	let min = array[0];
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] < min) {
// 			min = array[i];
// 		}
// 	}
// 	return min
// }

// console.log(fuuu(numbers));
// fun(numbers);


// let arr = [1,23,4,5,6];
// let newArr = [];
//
// newArr.push(...arr) // 1 23 4 5 6
//
// let newArr2 = [...arr] // [1,23,4,5,6]
//
// console.log(1,arr);
// console.log(2,newArr);
// console.log(3,newArr2);

// function showTemp(x) {
// 	if (x<0) alert(`Dear ${name}, take a hat`);
// 	else if (x>0) alert(`Dear ${name}, You don't need a hat`);
// 	else alert(`Dear ${name}, Do, what you think`)
// }
// let t = prompt('Введіть температуру')
// let name = prompt('Введіть імя')
// showTemp(t)
//
// let t = prompt('Введіть температуру')
// 	if (t<0) alert('Take a hat');
// 	else if (t>0) alert('You don`t need a hat');
// 	else alert('Do, what you think')

// let showTemp = x => {
// 	if (x<0) alert(`Dear ${name}, take a hat`);
// 	else if (x>0) alert(`Dear ${name}, You don't need a hat`);
// 	else alert(`Dear ${name}, Do, what you think`);
// 	return x;
//
// }
// let t = prompt('Введіть температуру')
// let name = prompt('Введіть імя')
// showTemp(t)
//
// let c = [2, 5, 'Vasja', 'kolja', true];
// let out = document.getElementById('out');
// let str = ''
// for (let i = 0; i < c.length; i++) {
// 	str += `${i}` +c[i] + '<br>';
// }
// out.innerHTML = str

// let a = "коля, вася, петя, рома";
// let b = a.split(',');
// console.log(b)
//
// let c = '2, 51.3, 45.8, 65, 99'
// let f = c.split(',')
// console.log(f)
//
//
// let arr = [2, 51.3, 45.8, 65, 99]
// let t = arr.join('; ')
// console.log(t)
//
// let arr2 = ['коля', 'вася', 'петя', 'рома']
// let r = arr2.slice()
// console.log(r)
//
// //Деструктуризація масиву
// let arr3 = ['коля', 'вася', 'петя', 'рома','anru']
// let [y,u,i,o,l] = arr3;
// console.log(y,o,l)

// let t = [12, 16, 18, 19, 22, 28, 24, 20, 17, 14, 12, 10]
//  tSumm = 0;
// for (let i = 0; i<t.length; i++){
// 	tSumm+=t[i];
// }
// console.log(tSumm/t.length)
// console.log(Math.min.apply(null, t));
// console.log(Math.max.apply(null, t));

// let t = [
// 	[12, 16, 18, 19],
// 	[22, 28, 24, 20],
// 	[17, 14, 12, 10]
// 	]
// let tSumm = 0;
// for (let i = 0; i<t.length; i++) {
// 	for (let j = 0; j < t[i].length; j++) {
// 		tSumm += t[i][j];
// 	}
// 	console.log(`Середня температура день ${i+1} - ` + tSumm/t[i].length + ' градусів')
// 	console.log(`Мінімальна температура день ${i+1} - ` + Math.min.apply(null, t[i]));
// 	console.log(`Максимальна температура день ${i+1} - ` + Math.max.apply(null, t[i]));
// }
// let t = [
// 	//0                      1                 2
// 	[12, 16, 18, 19], [22, 28, 24, 20], [17, 14, 12, 10]
// ]
//
// let arr = [];
// for (let i = 0; i<t[0].length; i++) {
// let sum = t[0][i]+t[1][i]+t[2][i]
// arr.push(sum)
// 	}
// console.log(arr)

// function arraySummator(arr1, arr2, arr3) {
// 	let arr = [];
// 	for (let i = 0; i < arr1.length; i++) {
// 		let sum = arr1[i] + arr2[i] + arr3[i]
// 		arr.push(sum)
// 	}
// 	return arr
// }
// let result = arraySummator([12, 16, 18, 19], [22, 28, 24, 20], [17, 14, 12, 10])
// console.log(result)

// створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// 	Двожина масиву від 2 до 100
// function elem0(arr) {
// 	let arr2 = [];
// 	let arr3 = []
// 	for (let i = 0; i<arr.length; i++){
// 		if (arr[i]===0) {arr2.push(arr[i])} else {arr3.push(arr[i])}
// 	}
// 	let result =(arr3.concat(arr2))
// 	return result
//
// }
// let result1 = elem0([1, 0, 5, 9, 7, 12, 0, 8, 97, 57, 22, 0])
// console.log(result1)


// Створити функцію яка :
// 	- Додає в боді блок з текстом "Hello owu"

// function hello(text){
// 	let xxx = document.createElement('div')
// 	xxx.innerText = text;
//
// 	document.body.appendChild(xxx);
// }
// hello('Hello owu')


// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function hello(typeElem, text){
// 	let h = document.createElement(typeElem)
// 	h.innerText = text;
// 	// document.body.appendChild(h);
// 	document.getElementById('out').appendChild(h)
// }
// hello('div','Hello owu')

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих
// автомобілів.

// function cars(carsArr, ID) {    //Чому не пыдставляє весь масив з перемінної в оголошення
// 	let car = document.createElement(ID);
// 	car.innerText = carsArr;
// 	document.body.appendChild(car)
// }
//
// cars(['Ford', 'Renault', 'Mazda', 'Opel', 'BMW'],  'p')

// 	Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості
// 	авто в обному блоці
// let carsAll = ['Ford', 'Renault', 'Mazda', 'Opel', 'BMW']
// function cars(carsArr, ID) {   //Чому не пыдставляє весь масив з перемінної в оголошення
// 	for (let i=0; i<carsArr.length; i++){
// 		let car = document.createElement(ID);
// 		car.innerText = carsArr[i];
// 		document.body.appendChild(car)
// 	}
// }
// cars(carsAll,  'p')

// 	Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості
// 	авто в обному блоці
//
// let carsAll = [
//     { brand: 'Ford', age: 5, color: 'white' },
//     { brand: 'Renault', age: 7, color: 'red' },
//     { brand: 'Mazda', age: 2, color: 'blue' },
//     { brand: 'Opel', age: 4, color: 'green' },
//     { brand: 'BMW', age: 8, color: 'yellow' },
// ]
//
// function cars(carsArr, ID) {
// 	for (let i=0; i<carsArr.length; i++){
// 		let car = document.createElement('div');
// 		car.innerText = 'Бренд '+ carsArr[i].brand + ' Вік ' + carsArr[i].age + ' Колір ' + carsArr[i].color;
// 		let elementById = document.getElementById(ID)
// 		elementById.appendChild(car)
// 	}
// }
// cars(carsAll,  'cars')


// 	Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// 	Для кожної властивості створити всередені блока автомоблія свій блок

// ??????????
// let cars = [
// 	{brand: 'Ford', age: 5, color: 'white'},
// 	{brand: 'Renault', age: 7, color: 'red'},
// 	{brand: 'Mazda', age: 2, color: 'blue'},
// 	{brand: 'Opel', age: 4, color: 'green'},
// 	{brand: 'BMW', age: 8, color: 'yellow'},
// ]

// function wrapContent(carsArr, id) {
// 	for (let i=0; i<carsArr.length; i++){
// 		let car = document.createElement('div');
// 		car.innerText = 'Бренд '+ carsArr[i].brand + ' Вік ' + carsArr[i].age + ' Колір ' + carsArr[i].color;
// 		let elementById = document.getElementById(id)
// 		elementById.appendChild(car)
// 	}
// }
// wrapContent(cars,  'cars')

// function wrap(cars, id) {
// 	const carList = document.getElementById(id);
//
// 	for (const car of cars) { // { brand: 'Ford', age: 5, color: 'white' }
//
// 		const carDiv = document.createElement('div');
//
// 		for (const key in car) { // brand
//
// 			const propertyDiv = document.createElement('div');
//
// 			propertyDiv.innerText = `${key}: ${car[key]}`
//
// 			carDiv.appendChild(propertyDiv)
// 		}
//
// 		carList.appendChild(carDiv);
// 	}
// }
// wrap(cars,'cars')

// функція приймає 2 масиви з рівною кількістю об'єктів та
// з'єднює в один об'єкт користувача
// та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// 	Приклад масивів:
let usersWithId = [
	{id: 1, name: 'vasya', age: 31, status: false},
	{id: 2, name: 'petya', age: 30, status: true},
	{id: 3, name: 'kolya', age: 29, status: true},
	{id: 4, name: 'olya', age: 28, status: false},
];
let citiesWithId = [
	{user_id: 3, country: 'USA', city: 'Portland'},
	{user_id: 1, country: 'Ukraine', city: 'Ternopil'},
	{user_id: 2, country: 'Poland', city: 'Krakow'},
	{user_id: 4, country: 'USA', city: 'Miami'},];


for (let i = 0; i < usersWithId.length; i++) {
	
	for (let j = 0; j < citiesWithId.length; j++) {
		if (usersWithId[i].id === citiesWithId[j].user_id) {
			usersWithId[i].adress = citiesWithId[j]
		}
	}
}

console.log(usersWithId)

// usersCity()


