function f1()
    {
        var myNum = document.getElementById('f1_num').value;
        //alert(myNum)
        if(myNum)
            document.getElementById('r1').innerHTML = isNumberInRange(myNum);
    };
function f2()
    {
        var arr = [123, 45, 73, 61, 6, 8, 4, 16],
            newArr =[],
            l = arr.length, 
            elem = [], elemSum = 0, 
            newArr =[];
        
        for(j = 0; j < l; j++)
            {
                elem = getDigitsArr(arr[j]);
                elemLen = elem.length;
                elemSum = getArrElemSum(elem);
                if(isNumberInRange(elemSum))
                    newArr.push(arr[j]);
            }
        document.getElementById('r2').innerHTML = newArr;
            
    };
function f3()
    {
       var num = document.getElementById('f3_num').value,
            res = document.getElementById('r3');
       if(num)
            {
                num = getDigitsArr(num);
                num = getArrElemSum(num);
                res.innerHTML = num;
                
            }
        else res.innerHTML = 'Неть';
            
    };
function f4()
    {
        var arr =[];
        for(num = 1; num < 2020; num++)
            {
                var myNum = getDigitsArr(num);
                myNum = getArrElemSum(myNum);
                if(myNum==13)
                    arr.push(num);
            }
        res =  document.getElementById('r4').innerHTML = arr;
    };
function f5()
    {
        var num = document.getElementById('f5_num').value,
            res =  document.getElementById('r5');
        if(num)
            {
                if(isEven(num))
                    res.innerHTML = 'Чётное';
                else
                 res.innerHTML = 'Нечётное';
            }
    };
function f6()
    {
        var arr =[1,56, 5, 65, 234, 6, 234, 56, 12, 5, 4],
            newArr = [],
            l = arr.length;
        for(i=0; i<l;i++)
            if(isEven(arr[i]))
                newArr.push(arr[i]);
        document.getElementById('r6').innerHTML = newArr;
    };
function f7()
    {
        var num = document.getElementById('f7_num').value,
            res = document.getElementById('r7');
        if(num)
            {
                var arr = getDivisors(num);
                res.innerHTML = arr;
            }
                
    };

//входит в промежуток 1-10
function isNumberInRange(num)
    {
        return num > 0 && num < 10;   
    };
//создать массив из числа
function getDigitsArr(num)
    {
        var str = String(num);
        return str.split('');
    }
//сумма массива
function getArrElemSum(arr)
    {
        var sum = 0;
        for(i=0; i<arr.length; i++)
            sum+=Number(arr[i]);
        return sum;
    }
//четное-нечетное
function isEven(num)
    {
        return (num % 2 == 0)
    }
// возврат делителей числа
function getDivisors(num)
    {
        var arr = [];
        for(i = num; i > 0; i--)
            if(num % i == 0)
                arr.push(i);
        return arr;
    }