
//======================================== Events HTML =====================================

//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку
// исчезал элемент с id="text".

// let element = document.querySelector('#text')
// let button = document.getElementById('button')
// button.onclick = () => {element.remove()}
// console.log(element)

//====================================================
//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
	
// 	let button = document.getElementById('button')
// button.onclick = () => {button.remove()}

//===========================================
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let input = document.querySelector('input')
// let buttonAge = document.getElementById('buttonAge')
// buttonAge.onclick = () => {if(input.value<18) {alert('Ти ше малий')} else {alert('Заходь')}}

//============================================================

// Создайте меню, которое раскрывается/сворачивается при клике

// let menuElement = document.querySelector('.cars');
// let titleElement = menuElement.querySelector('.title');
//
// titleElement.onclick = function() {
// 	menuElement.classList.toggle('hidden');
// };

//===========================================================

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// 	Вывести список комментариев в документ, каждый в своем блоке.
// 	Добавьте каждому комментарию по кнопке для сворачивания его body.




//==========================================================

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на
// консоль інформація з цих 2х форм.
// 	Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let buttonForms = document.getElementById('buttonForms')
//
// let form1 = document.forms.myForm1
// let form2 = document.forms.myForm2
// console.log(form1);
// console.log(form2);
// buttonForms.onclick = () => {console.log(`Ваше імя ${form1.userName.value}
// Ваше прізвище ${form1.userSurname.value} Ваш вік ${form2.userAge.value} Ваш телефон ${form2.userPhone.value}`)}

//===============================================================

// - Створити функцію, яка генерує таблицю.
// 	Перший аргумент визначає кількість строк.
// 	Другий параметр визначає кліькіть ячеєк в кожній строці.
// 	Третій параметр визначає елемент в який потрібно таблицю додати.
// let xxx = document.querySelector('#xxx');
// function f(row, column, el ) {
// 	let table = document.createElement('table');
// 	el.appendChild(table);
// 	for (let i = 0; i < row; i++) {
// 		let tr = document.createElement('tr');
// 		table.appendChild(tr);
// 		for (let j = 0; j < column; j++) {
// 			let td = document.createElement('td')
// 			tr.appendChild(td)
// 			td.innerHTML = `td ${j+1}`;
// 		}
// 	}
// }
//
// f(3, 5, xxx);

//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// 	При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// function f1(row, column, elem) {
// 	let table = document.createElement('table')
// 		let xxx = document.getElementById('tableMain')
// 	xxx.appendChild(table)
// 	for (let i = 0; i < row; i++) {
// 		let tr = document.createElement('tr');
//
// 		table.appendChild(tr);
// 		for (let j = 0; j < column; j++) {
// 			let td = document.createElement('td');
// 			tr.appendChild(td);
// 			td.innerHTML = elem;
// 		}
// 	}
// }
// let buttonForms3 = document.getElementById('buttonForms3')
// const forms = document.forms.form3;
// buttonForms3.onclick = function () {
// 	f1(forms.row.value, forms.column.value, forms.element.value);
// }


//======================================================================

//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.



//====================================================

// - Сворити масив не цензцрних слів.
// 	Сворити інпут текстового типу.
// 	Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// 	Перевірку робити при натисканні на кнопку

// let inputBedWords = document.querySelector('#bedWords')
// let buttonBedWords = document.getElementById('buttonBedWords')
// buttonBedWords.onclick = () => {
// 	let badWords = ['хуй', 'блядь', 'сука', 'піздєц', 'курвамать']
// 	for (let i = 0; i < badWords.length; i++) {
// 		if (badWords[i]===inputBedWords.value){alert('Хуйове слово')} else {alert('Молодець')}
// 	}
// }

// let badWords = ['хуй', 'блядь', 'сука', 'піздєц', 'курвамать']
// let inputBedWords = document.querySelector('#bedWords')
// let buttonBedWords = document.getElementById('buttonBedWords')
// buttonBedWords.onclick = () => {
// 	alert((badWords.includes(inputBedWords.value)==true) ? 'Хуйове слово': 'Молодець')
// }

// let inputBedWords = document.querySelector('#bedWords')
// let buttonBedWords = document.getElementById('buttonBedWords')
// let badWords = ['хуй', 'блядь', 'сука', 'піздєц', 'курвамать']
// buttonBedWords.onclick = () => {
//
// 	for (let i = 0; i < badWords.length; i++) {
//
// 		inputBedWords.value.includes(badWords[i]) && alert('Хуйове слово')
// 	}
//
// }
//======================================

// - Сворити масив не цензцрних слів.
// 	Сворити інпут текстового типу.
// 	Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// 	Кинути алерт з попередженням у випадку якщо містить.
// 	Перевірку робити при натисканні на кнопку
// let buttonBedWords = document.getElementById('buttonBedWords')
// let badWords = ['хуй', 'блядь', 'сука', 'піздєц', 'курвамать']
// let inputBedWords = document.querySelector('#bedWords')
//
// inputBedWords.value
// buttonBedWords.onclick = () => {
// 	alert((badWords.includes(inputBedWords.value))==true) ? 'Хуйове слово': 'Молодець')
//}

//================================================================
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем
// заголовкам которые есть в тексте.
// 	При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// let h2Arr = document.getElementsByTagName('h2');
// let cont = document.getElementById('content');
// let wrap = document.getElementById('wrap');
// let ul = document.createElement('ul');
//
// for (let i = 0; i < h2Arr.length; i++) {
// 	let li = document.createElement('li');
// 	let a = document.createElement('a');
// 	let jakor = 'jakor' + i;
// 	a.href = '#' + jakor;
// 	h2Arr[i].setAttribute('id', jakor);
// 	a.innerHTML = h2Arr[i].innerText;
// 	li.appendChild(a);
// 	ul.appendChild(li);
// }
// cont.appendChild(ul)
// cont.style.width = '20%';
// wrap.style.width = '30%';
// cont.style.float = 'left';
// wrap.style.float = 'left'

	
	
	




// let collectionH2 = document.querySelectorAll('h2')
// for (let i = 0; i<collectionH2.length; i++){
//
// }
// let div = document.createElement('div')
// let div =


//================================================================

// -- взять массив пользователей
//
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let usersWithAddress = [
// 	{id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
// 	{id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
// 	{id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
// 	{id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
// 	{id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
// 	{id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
// 	{id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
// 	{id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
// 	{id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
// 	{id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
// 	{id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
//
//
// let filterObj = document.getElementById('filterObj')
// let checkButton = document.getElementById('checkFilter')
//
// checkButton.onclick = () => {
// 	let myArray = usersWithAddress
//
// const formFilter = document.forms.users;
//
// 	if (formFilter.status.checked) myArray = myArray.filter(value =>!value.status);
//
// 	if (formFilter.age.checked) myArray = myArray.filter(value => value.age > 29);
//
// 	if (formFilter.city.checked) myArray = myArray.filter(value => value.address.city === 'Kyiv');
//
// 	filterObj.innerHTML = JSON.stringify(myArray)
// 	}


//========================================================================

