/*УРОК 6*/
function func_1()
	{
		var a = 10, b = 3, res = document.getElementById('f1_res');
		res.innerHTML =  'Остаток от деления  ' + a + ' на '+ b + ' = ' +(a%b);

	};
			
function func_2()
	{
		var a = document.getElementById('f2_a').value,
			b = document.getElementById('f2_b').value,
			c = a/b,
			res = document.getElementById('f2_res');
		if(a%b==0)
			res.innerHTML = 'Делится!<br>'+ a + ' : ' + b + ' = ' + (a/b);
		else 
				res.innerHTML = 'Делится с остатком.<br>' + a + ' : ' + b + ' = ' + Math.floor(a/b) + '<br>Остаток ' + (a%b);
	};

function func_3 ()
	{
		var a = document.getElementById('f3_a').value,
			b = document.getElementById('f3_b').value,
			res = document.getElementById('f3_res');
		res.innerHTML = a + '<sup>' + b + '</sup> = ' + Math.pow(a, b);
	};

function func_4()
	{
		document.getElementById('f4_res').innerHTML = Math.sqrt(245);
	};

function func_5 ()
	{
		var arr = [4, 2, 5, 19, 13, 0, 10],
			res = 0;
		for (i=0; i < arr.length; i++)
			{
				res = res + Math.pow(arr[i], 3);
			}
		document.getElementById('f5_res').innerHTML = 'Квадратный корень из ' + res + ' равен ' + Math.sqrt(res);
	};

function func_6()
	{
		var p = Math.sqrt(379);
		document.getElementById('f6_res').innerHTML = '&radic;379 = ' + p + '<br><br>Округление до целых ' + Math.round(p) + '<br>Округление до десятых ' + p.toFixed(1) + '<br>Округление до сотых ' + p.toFixed(2);
	};

function func_7()
	{
		var x = Math.sqrt(587);
		document.getElementById('f7_res').innerHTML = '&radic;587 = ' + x;
		document.getElementById('f7_res_1').innerHTML = 'Округление в меньшую сторону ' + Math.floor(x);
		document.getElementById('f7_res_2').innerHTML = 'Округление в большую сторону ' + Math.ceil(x);
	};

function func_8()
	{
		var max = Math.max(4, -2, 5, 19, -130, 0, 10),
			min = Math.min(4, -2, 5, 19, -130, 0, 10);
		alert('Максимальное ' + max + ', минимальное ' + min)
	};

function func_9()
	{
		var rand = Math.round(Math.random() * 100);
		document.getElementById('f9_res').innerHTML = rand;
	};

function func_10()
	{
		var arr = [], result ='';
		for (i=0; i < 10; i++)
			{
				arr[i] = Math.round(Math.random() * 100);
				result = result + 'Элемент массива номер ' + (i+1) + ' содержит значение ' + arr[i] + '<br>';
			}
		document.getElementById('f10_res').innerHTML = result;
	};

function func_11()
	{
		var a = document.getElementById('f11_a').value,
			b = document.getElementById('f11_b').value,
			result = Math.abs(a-b);
		document.getElementById('f11_res').innerHTML = a + '-' + b + ' по модулю ' + result;
	};
function func_12()
	{
		var a = document.getElementById('f12_a').value,
			b = document.getElementById('f12_b').value;
		document.getElementById('f12_c').value = Math.abs(a-b);
	};
function func_13()
	{
		var arr = [12, 15, 20, 25, 59, 79], sum = 0;
		for (i = 0; i < arr.length; i++)
				sum += arr[i];
		document.getElementById('f13_res').innerHTML = 'Среднее арифметическое = ' + (sum/arr.length);
	};
function func_14()
	{
		var num = Math.floor(document.getElementById('f14_num').value), f = 1, res = (num+ '! = ');
		
		if (num > 0)
			{
				for ( ; num; num--) 
				{
					f = f*num;
					if (num != 1)
						res = res + num + ' * ';
					else
						res = res + num;
					document.getElementById('f14_res').innerHTML = res + ' = ' + f;
				}
			}
		else 
			document.getElementById('f14_res').innerHTML = 'Отрицательное число!';
	};