/*УРОК 2*/
/*Введение (примеры)*/
function func_1()
	{
		var arr = ['Привет, ', 'мир', '!'];
		alert (arr[0] + arr[1] + arr[2]);

	};
function func_2()
	{
		var arr = ['Привет, ','мир','!'];
		var a = arr[0] + arr[1] + arr[2];
		alert(a);
	};
function func_3()
	{
		var arr = ['Привет, ', 'мир', '!'];
		arr[0] = 'Пока';
		alert (arr);
	};
function func_4()
	{
		var obj = {'Петя':'500','Вася':'700','Ваня':'600'};
		alert(obj['Вася']);

	};
function func_5()
	{
		var arr = {
				'ru':['голубой', 'красный', 'зеленый'],
				'en':['blue', 'red', 'green'],
			};
		alert (arr['ru'][0]);
	};
/*Решение задач*/
/*Работа с массивами*/
function func_6()
	{
		var arr = ['a','b','c'];
		alert(arr);
	};
function func_7()
	{
		var arr = ['a', 'b', 'c'];
		alert('Элемент 1 - '+ arr[0] + '\nЭлемент 2 - ' + arr[1] + '\nЭлемент 3 - ' + arr[2]);
	};
function func_8()
	{
		var arr = ['a','b','c','d'];
		alert(arr[0] + ' + ' + arr[2] + ', ' + arr[1] + ' + ' + arr[3]);
	};
function func_9()
	{
		var arr = [2, 5, 3, 9];
		var result = (arr[0]*arr[1])+(arr[2]*arr[3]);
		alert (result);
	};
/*Объекты (ассоциативные массивы)*/
function func_10()
	{
		var obj = {1: 'a', 2: 'b', 3: 'c'};
		alert(obj[1]);
		var obj = {'a': 1, 'b': 2, 'c': 3};
		alert(obj['c']);
	};
function func_11()
	{
		var obj = {'Петя': 100, 'Вася': 200, 'Федя':250};
		alert('Федя зарабатывает ' + obj['Федя'] + 'рублей\nПетя зарабатывает ' + obj['Петя'] + 'рублей');
	};

function func_12()
	{
		var week = {1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье'};
		alert(week[2]);
	};
function func_13()
	{
		var week = {1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье'};
		var day = 5;
		alert(week[day]);
	};
/*Многомерные массивы*/
function func_14()
	{
		var arr = [[1,2,3],[4,5,6],[7,8,9]];
		alert(arr[1][0]);
	};
function func_15()
	{
		var obj = 
			{
				'js':['jQuery', 'Angular'],
				'php': 'hello',
				'css': 'world',
			};
		alert(obj['js'][0]);
	};
function func_16()
	{
		var week =
			{
				'ru':['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
				'en':['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
			};
		alert(week['ru'][0] + '\n' + week['en'][2]);
	};
function func_17()
	{
		var week =
			{
				'ru':['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
				'en':['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
			};
		var lang = ['ru','en'], day = 2;
		alert(week[lang[0]][day]);
	};