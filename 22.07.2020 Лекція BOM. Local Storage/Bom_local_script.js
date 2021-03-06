//================================Local Storage=====================


// - Дана textarea.
// 	В неё вводится текст.
// 	Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// const textarea = document.getElementById('info');
//
// textarea.value = localStorage.getItem(textarea.id);
//
// textarea.oninput = () => {
// 	localStorage.setItem(textarea.id, textarea.value)
// }

//======================================

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// 	Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// 	Сделайте ваш скрипт как можно более универсальным.

// const textarea2 = document.getElementById('response');
// textarea2.value = localStorage.getItem(textarea2.id);
// textarea2.oninput = () => {
// 	localStorage.setItem(textarea2.id, textarea2.value)
// }
//
// const select = document.getElementById('mySelect');
// select.value = localStorage.getItem(select.id);
// select.oninput = () => {
// 	localStorage.setItem(select.id, select.value)
// }
//
// const input1 = document.getElementById("input1")
// const input2 = document.getElementById("input2")
//
// input1.value = localStorage.getItem(input1.id)
// input1.oninput = () => {
// 	localStorage.setItem(input1.id, input1.value)
// }
// input2.value = localStorage.getItem(input2.id)
// input2.oninput = () => {
// 	localStorage.setItem(input2.id, input2.value)
// }
//
//
// const check = document.getElementById('check');
// check.onclick = () => {
// 	localStorage.setItem(check.id, check.checked)
// }
// check.checked = localStorage.getItem(check.id) === 'true' ? true : false;
//
// let radios = document.getElementsByName('raz')// Не дороблено
// for (let i = 0; i < radios.length; i++) {
// 	const radio = radios[i];
// 	radio.oninput = () => {
// 		localStorage.setItem(radio.name, radio.checked)
// 	}
// 	radio.checked = localStorage.getItem(radio.name) === 'true' ? true : false;
// }
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let textarea3 = document.getElementById('info3')
// let button = document.getElementById('save')
// let buttonBack = document.getElementById('back')
// let buttonForward = document.getElementById('forward')
//
// let step = localStorage.length - 1;
// textarea3.value = localStorage.getItem(step);
//
// button.onclick = () => {
// 	localStorage.setItem(String(localStorage.length), textarea3.value)
// }
//
//
// buttonBack.onclick = () => {
// 	step -= 1;
// 	textarea3.value = localStorage.getItem(step);
// }
// buttonForward.onclick = () => {
// 	step += 1;
//
// 	textarea3.value = localStorage.getItem(step);
// }

//=============================================
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// 	Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

// const form = document.forms.form
// const formButton = document.getElementById('saveForm');
//
// for (let i = 0; i < form.length; i++) {
// 	formButton.oninput = () => {
// 		localStorage.setItem(form.input, form.input.value)
// 	}
// }

