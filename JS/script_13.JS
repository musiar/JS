function f1()
    {
        var arr = [],
            symbol = 'x',
            str = symbol;
        for(i=0; i < 3; i++)
            {
                arr.push(str);
                str+=symbol;
            }
        document.getElementById('r1').innerHTML = arr;
            
    };
function f2()
    {
        var arr = [],
            str = '', cnt=1;
        for(i=1; i < 10; i++)
            {
                for (j=0; j<cnt; j++)
                    str+= '' + i;
                cnt++;
                arr.push(str);
                str = '';
            }
        document.getElementById('r2').innerHTML = arr;    
        
    };
function f3()
    {
        var arr = [], 
            symbol = document.getElementById('f3_txt').value,
            num = document.getElementById('f3_num').value,
            res = document.getElementById('r3');
        if(symbol && num)
            {
                for(i=0; i < num; i++)
                    arr[i]=symbol;
                res.innerHTML = arr;
            }
        else res.innerHTML = 'Заполните все значения!';
    };
function f4()
    {
        var arr = [1,1,1,2,4,5,6,7,1,3,4,5,6],
            cnt = 0, sum = 0;
        for(i = 0; sum < 10; i++)
            {
                sum+= arr[i];
                cnt++
            }
        document.getElementById('r4').innerHTML = 'Количество элементов: ' + cnt;   
    };
function f5()
    {
        var arr =[1,2,3,4,5,6,7,8,9],
            newArr=[],
            l = arr.length-1;
        for(i=l; i>=0; i--)
            newArr.push(arr[i]);
        document.getElementById('r5').innerHTML = newArr;
    };
function f6()
    {
        var arr = [[1, 2, 3], [4, 5], [6]],
            l = arr.length,
            sum = 0;
        for (i=0; i < l; i++)
            for(j=0; j < arr[i].length; j++)
                sum+=arr[i][j]
         document.getElementById('r6').innerHTML = sum;
    };
function f7()
    {
        var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]],
            l = arr.length,
            sum = 0;
        for (i=0; i < l; i++)
            for(j=0; j < arr[i].length; j++)
                for(k=0; k<arr[i][j].length; k++)
                    sum+=arr[i][j][k]
         document.getElementById('r7').innerHTML = sum;
    };