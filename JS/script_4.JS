//Задачи с for и while
function func_1()
	{
		for (var i = 0, result = ''; i < 100; i++) 
			{
				result = result + i + '<br>';
			}
		document.getElementById('f_1').innerHTML = result;
	};
function func_1_1()
	{
		document.getElementById('f_1').innerHTML = '';
	};
function func_2()
	{
		for (i = 11, result = ''; i < 34; i++)
			{
				result = result + i + '<br>';
			};
		document.getElementById('f_2').innerHTML = result;
	};
function func_2_1()
	{
		document.getElementById('f_2').innerHTML = '';
	};
function func_3()
	{
		for (i=0, result =''; i <= 100; i +=2)
			{
				result = result + i + '<br>';
			};	
		document.getElementById('f3_res').innerHTML = result;
	};
function func_3_1()
	{
		document.getElementById('f3_res').innerHTML = '';
	};
function func_4()
	{
		for (i=0, result = 0; i<=100; i++)
			{
				result = result+i;
			};
		alert(result);
	};

function func_5()
	{
		var arr = [1,2,3,4,5];
		for (i=0, result =''; i < arr.length; i++)
			{
				result = result + 'Элемент массива №' + (i+1) + '=' + arr[i] + '<br>';
			}
		document.getElementById('f5_res').innerHTML = result;
	};
function func_6()
	{
		var result = 0, arr = [1,2,3,4,5];
		for (i = 0; i<=arr.length; i++)
			{
				result = result + i;
			};
		alert(result);
	}
//Работа с for-in
function func_7()	
	{
		var obj = {
			green: 'зелёный',
			red: 'красный',
			blue: 'синий'
		};
		var result = '';
		for(key in obj)
			{
				result = result + key + ' ' + obj[key] + '<br>';
				document.getElementById('f7_res').innerHTML = result;
			}
	};
function func_7_1()
	{
		document.getElementById('f7_res').innerHTML = '';
	};
function func_8()
	{
		var zp = {'Коля': 200,'Вася': 500, 'Петя': 300}, result = '';
		for (key in zp)
			{
				result = result + 'Сотрудник ' + key + ' получает ' + zp[key] + ' рублей в час.<br>';
				document.getElementById('f59_res').innerHTML = result;
			};
	};
function func_8_1()
	{
		document.getElementById('f59_res').innerHTML = '';
	};
function func_9()
	{
		var arr = [2, 5, 9, 15, 0, 4], result = '';;
		for (i=0; i < arr.length; i++)
			{
				
				if (arr[i] > 3 && arr[i] < 10)
					{
						result = result + arr[i] + '<br>';
					}
				else
					{
						result = result;
					}
			}
		document.getElementById('f60_res').innerHTML = result;
	};
function func_9_1()
	{
		document.getElementById('f60_res').innerHTML = '';
	};
function func_10()
	{
		var arr = [34, 45, 97, -2, 23, 12, 35, -44, 68, -56, -2], result = 0;
		for (i = 0; i < arr.length; i++)
			{
				if(arr[i] > 0)
					{
						result = result + arr[i];
					}
				else 
					{
						result = result;
					}
			}
		document.getElementById('f61_res').innerHTML = result;
		document.getElementById('f61_arr').innerHTML = arr;
		 	
	}
function func_10_1()
	{
		document.getElementById('f61_res').innerHTML = '';
		document.getElementById('f61_arr').innerHTML = '';
	};
function func_11()
	{
		var arr = [1, 2, 5, 9, 4, 13, 4, 10];
		for (i = 0; i < arr.length; i++)
			{
				if (arr[i] == 4)
					{
						alert('Есть!');
						break;
					}
				else {};
			}
	};
function func_12()
	{
		var arr = [10, 20, 30, 50, 235, 3000], p, 
			newArr = [];
		for (i = 0; i < arr.length; i++)
			{
				p = String(arr[i]);
				var symbol = p.charAt(0);
				if(symbol == 1 || symbol == 2 || symbol==5)
					newArr.push(arr[i]);
			}
		alert(newArr);
	};

function func_13()
	{
		var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], result = '';
		for (i = 0; i < arr.length; i++)
			{
				result = result + '-' + arr[i];
			}
		result = result + '-';
		document.getElementById('f64_res').innerHTML = result;
	};

function func_13_1()
	{
		document.getElementById('f64_res').innerHTML = '';
	};

var week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

function func_14()
	{
		var result = '';
		for ( i = 0; i < week.length; i ++)
			{
				if (i<5)
					{
						result = result + week[i] + '<br>';
					}
				else 
					{
						result = result + '<span style = "color:red; font-weight: bold">' + week[i] + '</span><br>';
					}
				}
		document.getElementById('f65_res').innerHTML = result;
	}
function func_14_1()
	{
		document.getElementById('f65_res').innerHTML = '';
	};
function func_15()
	{
		var today = new Date(),
			dayNum = today.getDay(),
			res = '';
		if(dayNum == 0)
			dayNum = 6;
		else dayNum--;
		var day = '<i>' + week[dayNum] + '</i>';
		for(i=0; i < week.length; i++)
			{
				if(i==dayNum)
					res += day + '<br>';
				else
					res += week[i] + '<br>';
			}
		document.getElementById('r15').innerHTML = res;
	};

function func_16()
	{
		var n = 1000, num = 0;
			for (i = 0; n > 50; i++)
				{
					n = n/2;
					num++;
				}
			alert('n = ' + n + '\nКоличество прогонов - '  + num);
	};