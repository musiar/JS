$(function ()
    {
        var nums = document.getElementsByClassName('num');
            for(var i in nums)
                nums[i].innerHTML = (parseInt(i) + 1) + ')';
    });
function f1()
    {
        var str = 'js',
            res = document.getElementById('r1');
        res.innerHTML = str.toUpperCase();
    };
function f2()
    {
        var str = 'js',
            res = document.getElementById('r2');
        res.innerHTML = str.toLowerCase();
        
    };
function f3()
    {
        var str = 'я учу javascript!',
            res = document.getElementById('r3');
        res.innerHTML = str.length;
    };
function f4_1()
    {
        var str = 'я учу javascript!',
            res = document.getElementById('r4');
        res.innerHTML = str.substr(2, 3);
    }
function f4_2()
    {
        var str = 'я учу javascript!',
            res = document.getElementById('r4');
        res.innerHTML = str.substring(2, 6);
    };
function f4_3()
    {
        var str = 'я учу javascript!',
            res = document.getElementById('r4');
        res.innerHTML = str.slice(2, 6)
    };
function f5()
    {
        var str = 'я учу javascript!',
            res = document.getElementById('r5');
        res.innerHTML = str.indexOf('учу')
    };
function f6()
    {
        var txt = document.getElementById('f6_txt').value,
            num = document.getElementById('f6_num').value
            res = document.getElementById('r6');
        if (txt && num)
            {
                var t = txt.length;
                if(t > num)
                    res.innerHTML = txt.substr(0, num) + '...';
                else 
                    res.innerHTML = txt;
            }
    };
function f6_clear()
    {
        document.getElementById('f6_txt').value = '';
        document.getElementById('f6_num').value = '';
        document.getElementById('r6').innerHTML = '';
    };
function f7()
    {
        var str = 'Я-учу-javascript!',
            res = document.getElementById('r7');
        res.innerHTML = str.replace(/-/g, '!');
        
    };
function f8()
    {
        var str = 'я учу javascript!',
            arr = [], 
            res = document.getElementById('r8');
        arr = str.split(' ');
        var l = arr.length,
            r = '';
        for (i = 0; i < l; i ++)
            r+= 'Элемент массива № ' + (i+1) + ' - ' + arr[i] + '<br>';
        res.innerHTML = r;
       
    };
function f9()
    {
        var str = 'я учу javascript!',
            res = document.getElementById('r9'),
            arr = str.split(''),
            l = arr.length,
            r = '';
        for (i = 0; i < l; i ++)
            r+= 'Элемент массива № ' + (i+1) + ' - "' + arr[i] + '"<br>';
         res.innerHTML = r;    
        
    };
function f10()
    {
        var str = '2025-12-31',
            res = document.getElementById('r10'),  
            arr = str.split('-'), 
            l = arr.length,
            r = '';
        for(i = l-1; i >=0; i--)
            if(i==0)
                r+= arr[i];
            else
                r+= arr[i] + '.';
        res.innerHTML = r;
        
    };
function f11()
    {
        var arr = ['я', 'учу', 'javascript', '!'],
            res = document.getElementById('r11'),
            l = arr.length,
            str = arr.join('+');
       /*for(i=0; i < l; i++)
            str+= arr[i] + '+';*/
        res.innerHTML = str;
    };
function f12()
    {
        var str = document.getElementById('f12_str').value,
            res = document.getElementById('r12'),
            r = '', 
            l = str.length;;
        if(str)
            {   
                for (i = 0; i < l; i ++)
                    {
                        var t;
                        if(i==0)
                           {
                                t = str.charAt(i);
                                r+= t.toUpperCase();
                           }
                        else 
                            r+= str[i]
                    }
            }
        res.innerHTML = r;
    };
function f13()
    {
        var str = document.getElementById('f13_str').value,
            res = document.getElementById('r13'),
            r = '',
            l = str.length;
        if (str)
            {
                var t;
                for(i = 0; i < l; i++)
                    {
                       
                        if(i == 0 || str.charAt(i-1) == ' ')
                            {
                                t = str.charAt(i);
                                r+= t.toUpperCase();
                            }
                        else 
                            r+= str[i];
                    };
                res.innerHTML = r;
            }
    };
function f14()
    {
         var str = document.getElementById('f14_str').value,
            res = document.getElementById('r14'),
            r = '',
            l = str.length;
        if(str)
            {
                var t;
                for(i = 0; i<l; i++)
                   { 
                       if(str.charAt(i) == '_')
                        {}
                       else if(str.charAt(i-1) == '_')
                            {
                                t = str.charAt(i)
                                r+= t.toUpperCase();
                            }
                        else 
                            r+= str.charAt(i);
                   }
                res.innerHTML = r;
            }
    };
