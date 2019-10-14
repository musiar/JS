/*УРОК 3*/
/*Работа с if-else*/
function func_1()
	{
		var a = -3;
		if (a==0) alert('Верно');
		else alert('Неверно');
	};
function func_2()
	{
		var a = -3;
		if (a > 0) alert('Верно');
		else alert ('Неверно');
	};
function func_3 ()
	{
		var a = -3;
		if (a<0) alert ('Верно');
		else alert('Неверно');
	};
function func_4 ()
	{
		var a = -3;
		if (a >= 0) alert('Верно');
		else alert('Неверно');
	};
function func_5()
	{
		var a = -3;
		if (a <= 0) alert('Верно');
		else alert ('Неверно');
	};
function func_6()
	{
		var a = -3;
		if (a!=0) alert('Верно');
		else alert ('Неверно');
	};
function func_7()
	{
		var a = 'test';
		if (a == 'test') alert ('Верно');
		else alert('Неверно');
	}
function func_8()
	{
		var a = '1';
		if (a==='1') alert('Верно');
		else alert('Неверно');
	};
/*Работа с логическими переменными*/
function func_9()
	{
		var test = true;
		if(test) alert('Верно');
		else alert('Неверно');
	};
function func_10()
	{
		var test = false;
		if (!test) alert('Верно');
		else alert('Неверно');
	};
/*Работа с && (и) и || (или)*/
function func_11()
	{
		var a = -1;
		if (a > 0 && a < 5) alert('Верно');
		else alert('Неверно');
	};
function func_12()
	{
		var a = 15;
		if(a==0 || a==2)
			{
				a+=7;
			}
		else 
			{
				a/=10;
			};
		alert(a);
	};
function func_13()
	{
		var a =1, b = 160;
		if(a<=1 && b>=1) alert(a+b);
		else alert (a-b);
	};
function func_14()
	{
		var a = 1, b = 5;
		if ((a>2 && a<11) || (b>=6 && b<14)) alert('Верно');
		else alert('Неверно');

	};
/*Работа с switch-case*/
function func_15()
	{
		var num = 3, result;
		switch(num)
			{
				case 1:
					result = 'Зима';
					break;
				case 2:
					result = 'Весна';
					break;
				case 3:
					result = 'Лето';
					break;
				case 4:
					result = 'Осень';
					break;
				default: 
					result = 'Ошибка';
					break;
			};
		alert(result);
	};
//Задачи
function func_16()
	{
		var day = document.getElementById('day').value;
		if(day >= 1 && day <=10)
			alert ('Первая декада');
		else if(day>10 && day <=21)
			alert('Вторая декада');
		else if(day > 21 && day <=31) 
			alert ('Третья декада');
		else alert('Неверное значение!');
	};
function func_17()
	{
		var month = document.getElementById('month').value, period;
		if ((month >=1 && month <=2) || month == 12)
			period = 'Зима';
		else if (month >= 3 && month <=5)
			period = 'Весна';
		else if (month >= 6 && month <=8)
			period ='Лето';
		else if (month >= 9 && month <=11)
			period = 'Осень';
		else period = 'Неверное значение';
		alert(period);
	};
function func_18()
	{
		var str = 'abcde';
		if (str[0] == 'a')
			alert('Верно');
		else alert('Неверно');
	};
function func_19()
	{
		var str = document.getElementById('str_1').value;
		if (str[0] >= 1 && str[0] <=3)
			alert('Верно');
		else alert('Неверно');
	};
function func_20()
	{
		var str = '12333';
		var result = Number(str[0]) + Number(str[1]) + Number(str[2]);
		alert(result);
		document.getElementById('result_str_2').innerHTML = result;
	};
function func_21()
	{
		var str = document.getElementById('str_21').value;
		var num1, num2;
		num1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
		num2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
		if (str.length < 6)
			alert ('Слишком короткая строка!');
		else if ((str.length) > 5 && ((num1 == NaN || num2 == NaN)))
			alert('Неверное значение!');
		else if ((str.length) > 5 && ((num1 != NaN || num2 != NaN)))
			{
				document.getElementById('str_21_1_3').innerHTML = num1;
				document.getElementById('str_21_4_6').innerHTML = num2;
				if(num1==num2)
					alert('Да');
				else alert('Неть');
			}
		else alert('Неверное значение!');
	};
