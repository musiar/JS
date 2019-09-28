function f1()
    {
        var str = document.getElementById('f1_txt').value,
            res = document.getElementById('r1'),
            arr, flag;
        if(str)
            {
                arr = str.split(',');
                flag = checkArr1(arr);
                if(flag == true)
                    res.innerHTML = 'Есть';
                else 
                    res.innerHTML = 'Неть';
            }
        else 
            res.innerHTML = 'Отсутствует массив.';
        
    };
function checkArr1(arr)
    {
        var flag = false,
            l = arr.length;
        for (i=0; i<l; i++)
            {
                if(arr[i] == 5)
                    return true;
            }
        return false;
    }
function f2()
    {
        var num = document.getElementById('f2_num').value,
            flag,
            res = document.getElementById('r2');
        if(num)
            {
                flag = checkNum2(num);
                if(flag == true)
                    res.innerHTML = 'Делится на другие числа';
                else 
                    res.innerHTML = 'Не делится';
            }
        else 
            res.innerHTML = 'Введите число!';
    };
function checkNum2(num)
    {
        if(num>0)
            {
                for (i = 2; i < num; i++)
                    {
                        if(num%i == 0)
                           return true; 
                    }
            }
        if(num<0)
            {
                for (i = -2; i > num; i--)
                    {
                        if(num%i == 0)
                           return true; 
                    }
            }
        return false;
    };
function f3()
    {
        var str = document.getElementById('f3_txt').value,
            arr, flag,
            res = document.getElementById('r3');
        if(str)
            {
                arr = str.split(',');
                flag = checkArr3(arr);
                if(flag == true)
                    res.innerHTML = 'Есть';
                else
                     res.innerHTML = 'Неть';
            }
        else 
            res.innerHTML = 'Введите значения';
            
    };
function checkArr3(arr)
    {
        var l = arr.length;
        for(i=1; i < l; i ++)
            {
                if(arr[i] == arr[i-1])
                    return true;
            }
        return false;
    };