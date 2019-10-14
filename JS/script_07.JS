/*Начало*/
function f1()
    {
        var arr1 = [1, 2, 3],
            arr2 = [4, 5, 6],
            arr = arr1.concat(arr2);
        document.getElementById('r1').innerHTML = arr;
        
    };
function f2()
    {
       var arr = [1, 2, 3];
       document.getElementById('r2').innerHTML = arr.reverse();
    };
function f3()
    {
        var arr = [1, 2, 3];
        arr.push(4,5,6)
        document.getElementById('r3').innerHTML = arr;
    };
function f4()
    {
       var arr = [1, 2, 3];
        arr.unshift(4,5,6)
        document.getElementById('r4').innerHTML = arr;
    }
function f5()
    {
       var arr = ['js', 'css', 'jq'];
       document.getElementById('r5').innerHTML = arr.shift() + '<br>Новый массив: ' + arr;
    };
function f6()
    {
        var arr = ['js', 'css', 'jq'];
       document.getElementById('r6').innerHTML = arr.pop() + '<br>Новый массив: ' + arr;
    };
function f7()
    {
        var arr = [1, 2, 3, 4, 5];
        document.getElementById('r7').innerHTML = arr.slice(0, 3);
    };
function f8()
    {
       var arr = [1, 2, 3, 4, 5];
        document.getElementById('r8').innerHTML = arr.slice(3);
    };
function f9()
    {
        var arr = [1, 2, 3, 4, 5];
        arr.splice(1,2);
        document.getElementById('r9').innerHTML = arr;
    };
function f10()
    {
        var arr = [1, 2, 3, 4, 5],
            newArr = arr.splice(1, 3);
        document.getElementById('r10').innerHTML = 'Новый массив: ' + newArr;
    };
function f11()
    {
        var arr = [1, 2, 3, 4, 5];
        arr.splice(3, 0, 'a', 'b', 'c');
        document.getElementById('r11').innerHTML = 'Новый массив: ' + arr;
    };
function f12()
    {
        var arr =[1, 2, 3, 4, 5];
        arr.splice(1,0, 'a','b');
        arr.splice(6, 0, 'c');
        arr.splice(8, 0, 'e')
        document.getElementById('r12').innerHTML = 'Новый массив: ' + arr;
    };
function f13()
    {
        arr =[3, 4, 1, 2, 7];
        document.getElementById('r13').innerHTML = arr.sort();
    };
function f14()
    {
        var obj = {js:'test', jq: 'hello', css: 'world'};
        document.getElementById('r14').innerHTML = Object.keys(obj);
    };
