function f1()
    {
        var str =  document.getElementById('f1_txt').value,
            res = document.getElementById('r1');
        if(str)
            res.innerHTML = ucfirst(str);
        else
            res.innerHTML = 'Введите значение!';
    };
function f2()
    {
        var str = 'var_text_hello__';
        document.getElementById('r2').innerHTML = getStr(str);
    };
function f3()
    {
        var arr = ['abc', '12', '3', 'Вода', 'ppp'],
            txt = document.getElementById('f3_txt').value,
            res = document.getElementById('r3');
        document.getElementById('f3_arr').innerHTML = arr;
        if(txt)
            res.innerHTML = inArray(txt, arr) ? 'Есть' : 'Неть';
       
    };
function f4()
    {
        var str = document.getElementById('f4_txt').value,
            res = document.getElementById('r4');
        if(str)
            res.innerHTML = changeStr(str);
        else
            res.innerHTML = 'Введите значение!';
    };
function f5()
    {
        var arr = [1,4,5,7,84,2,6,4,2,7];
        showArr(arr);
    };
function f6()
    {
        var num = document.getElementById('f6_num').value,
            res = document.getElementById('r6');
        if(num)
            res.innerHTML = myNum(num);
        else 
            res.innerHTML = 'Введите число';
    };
  
//вспомогательные функции
//первая буква слова заглавная
function ucfirst(str)
    {
        var l = str.length, newStr = '', symbol;
        for(i=0; i < l; i++)
            if((i==0 || str.charAt(i-1) == ' ') && str.charAt(i) != ' ')
                {
                    symbol = str.charAt(i);
                    newStr += symbol.toUpperCase();
                }
            else
                newStr += str.charAt(i)
        return newStr;
    }
// преобразование строки вида 'var_text_hello' 
function getStr(str)
    {
        var l = str.length, newStr = '', symbol;
        for(i=0; i < l; i++)
            if(str.charAt(i-1) == '_' && str.charAt(i) != '_')
                {
                    symbol = str.charAt(i);
                    newStr += symbol.toUpperCase();
                }
            else if (str.charAt(i) != '_')
                newStr += str.charAt(i)
        return newStr;
    }
// поиск элемента в массиве
function inArray(str, arr)
    {
        var l = arr.length;
        for(i = 0; i < l; i++)
            if(arr[i] == str)
                return true;
        return false;
    }
//поменять местами символы в строке
function changeStr(str)
    {
        var newStr = '',
            l = str.length;
        for (i=0; i < l; i+=2)
            {
                if(str.charAt(i+1))
                    newStr += str.charAt(i+1) + str.charAt(i);
                else
                    newStr += str.charAt(i)
            }
        return newStr;
    }
//Вывод элементов массива в консоль (без использования цикла)
function showArr(arr)
    {
        var l = arr.length;
        if(l!=0)
            {
                console.log(arr[0]);
                arr.splice(0,1)
                showArr(arr);
            }
    }
//сложение цифр числа
function myNum(num)
    {
        var strNum = String(num),
            l = strNum.length,
            sum = 0;
        if (l > 1)
            {
               for(i=0; i<=l; i++)
                    sum += Number(strNum.charAt(i));
                console.log(sum);
                //num = sum;
                return myNum(sum);
            }
        else 
            return num;
    }
