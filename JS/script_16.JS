function f1()
    {
        var r = '';
        for(i=1; i<=100; i++)
            r+= i + '<br>';
        document.getElementById('r1').innerHTML = r;
    };
function f1_clear()
    {
        document.getElementById('r1').innerHTML = '';
    };
function f2()
    {
        var r = '';
        for(i=100; i>0; i--)
            r+= i + '<br>'
        document.getElementById('r2').innerHTML = r;
    };
function f2_clear()
    {
        document.getElementById('r2').innerHTML = '';
    };
function f3()
    {
        var r = '';
        for(i=0; i<=100; i = i + 2)
            r+= i + '<br>';
        document.getElementById('r3').innerHTML = r;
    };
function f3_clear()
    {
        document.getElementById('r3').innerHTML = '';
    };
function f4()
    {
        var elem = 'x',
            arr = [];
        for(i=0; i<10; i++)
            arr.push(elem);
        document.getElementById('r4').innerHTML = arr;
    }
function f5()
    {
        var arr = [];
        for(i=1; i<=10; i++)
            arr.push(i);
        document.getElementById('r5').innerHTML = arr;
    };
function f6()
    {
        var arr = [];
        for(i=0; i<10; i++)
            arr.push(Math.random().toFixed(2))
        document.getElementById('r6').innerHTML = arr;
    };
function f7()
    {
        
        var arr = [];
        for(i=0; i<10; i++)
            arr.push(Math.round(Math.random() * 10));
        document.getElementById('r7').innerHTML = arr;
    };
function f8()
    {
        var arr = [-3, 54, 5, 2, 6,1, 8, 45, 78, 2, 6, 4, 4, 7],
            newArr = [],
            l = arr.length;
        for(i=0; i<l; i++)
            if(arr[i] > 0 && arr[i] < 10)
                newArr.push(arr[i]);
        document.getElementById('r8').innerHTML = 'Исходный массив: ' + arr + '<br>Новый массив: ' + newArr;
    };
function f9()
    {
        var arr = [6, 34, 6, 7, 45, 6, 5, 2, 7, 65, 98, 5, 66, 89, 7],
            l = arr.length;
        for(i=0; i<l; i++)
            {
                console.log(arr[i]);
                if(arr[i] == 5)
                    {
                        document.getElementById('r9').innerHTML = 'Есть';
                        break;
                    }
            }
    };
function f10()
    {
        var arr = [5, 65, 8, 5, 3, 74, 1, 22],
            l = arr.length,
            sum = 0;
        for(i=0; i<l; i++)
            sum+=arr[i];
        document.getElementById('r10').innerHTML = 'Массив: ' + arr + '<br>Сумма: ' + sum;
    };
function f11()
    {
        var arr = [0, 4, 74, 14, 2, 33, 8],
            l = arr.length,
            sum = 0;
        for(i=0; i<l; i++)
            sum += arr[i] * arr[i];
        document.getElementById('r11').innerHTML = 'Массив: ' + arr + '<br>Сумма: ' + sum;
    };
function f12()
    {
        var arr = [5, 67, 84, 1, 74, 8, 2, 4, 99, 222, 3],
            l = arr.length, 
            sum = 0;
        for(i=0; i < l; i++)
            sum+=arr[i];
        document.getElementById('r12').innerHTML = 'Массив: ' + arr + '<br>Количество элементов: ' + l + '<br>Среднее: ' + (sum / l);
    };