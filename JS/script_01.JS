/*УРОК 1*/
function func_1()
	{
		var num1 = 3;
		alert(num1);
	};
			
function func_2()
	{
		var a=10, b=2;
		alert('a + b = ' + (a+b) + '\na * b = ' + (a*b) + '\na - b = ' +(a-b) + '\na : b = ' + (a/b));
	};
function func_3 ()
	{
		var c = 15, d = 2;
		var result = c + d;
		alert(result);
	};
function func_4()
	{
		var a = 10, b = 2, c = 5;
		alert(a+b+c);
	};
function func_5 ()
	{
		var a =17, b = 10;
		var c = a - b;
		var d = 7;
		var result = c + d;
		alert(result);
	};
function func_6()
	{
		var str = 'Привет, Мир!';
		alert(str);
	};
function func_7()
	{
		var str1 = 'Привет, ', str2 = 'Мир!';
		alert(str1+str2);
	};
function func_8()
	{
		var name = 'Мария';
		alert('Привет, ' + name +'!');
	};
function func_9()
	{
		var age = 24;
		alert('Мне ' + age + ' годика');
	};
function func_10 ()
	{
		var name = prompt('Как Вас зовут?', 'Введите Ваше имя');
		alert('Ваше имя ' + name + ' :)');
	};
function func_11()
	{
		var num11 = prompt('Введите число', 'Введите число');
		if (isNaN (num11))
			{
				alert('Это не число :(');
			}
		else
			{
				alert(num11*num11);
			};
	};
function func_12()
	{
		var str = 'abcde';
		alert(str[0]);
		alert(str[2]);
		alert(str[4]);
	};
function func_13()
	{
		var a = '12345';
		alert(a[0] * a[1]* a[2] * a[3] * a[4]);
	};
