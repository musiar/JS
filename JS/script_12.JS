function f1()
    {
        var num = 1,
            str = '';
        for(num; num <= 9; num++)
            str += num;
        document.getElementById('r1').innerHTML = str;
    };
function f2()
    {
        var num = 9,
            str = '';
        for(num; num > 0; num--)
            str += num;
        document.getElementById('r2').innerHTML = str;
    };
function f3()
    {
        var str = '-';
        for (i=1; i <= 9; i++)
            str += i + '-';
        document.getElementById('r3').innerHTML = str;
    };
function f4()
    {
        var symbol = '*',
            str = '', 
            newSymbol = symbol;
        for(i = 0; i < 20; i++)
            {
                str += newSymbol + '<br>';
                newSymbol += symbol
            }
        document.getElementById('r4').innerHTML =  str;
    };
function f4_clear()
    {
        document.getElementById('r4').innerHTML = '';
    };
function f5()
    {
        var txt = '', str = '';
        for (i=1; i < 10; i++)
            {
                for(j=0; j<i; j++)
                    str+=i;
                txt += str + '<br>';
                str ='';
            }
        document.getElementById('r5').innerHTML = txt;
    };
function f5_clear()
    {
        document.getElementById('r5').innerHTML = '';
    };
function f6()
    {
        var symbol ='xx',
            txt = '',
            str = '';
        for(i=0; i < 5; i++)
            {
                str+=symbol;
                txt+=str + '<br>';
            }
        document.getElementById('r6').innerHTML = txt;    
    };
function f6_clear()
    {
        document.getElementById('r6').innerHTML = '';
    };