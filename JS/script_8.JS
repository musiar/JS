function f1_1()
    {
        var txt = document.getElementById('f1_txt').value;
        if(txt)
            {
                var arr = txt.split('');
                arr[0] = arr[0].toUpperCase();
                txt = arr.join('');
                document.getElementById('r1').innerHTML = txt;
            };
    };
function f1_2()
    {
        var txt = document.getElementById('f1_txt').value;
        if(txt)
            {
                var s =  txt.charAt(0),
                    newTxt = txt.slice(1);
                s = s.toUpperCase();
                newTxt = s + newTxt;
                document.getElementById('r1').innerHTML = newTxt;
            };
    };
function f2()
    {
        var str = '123456',
            arr = str.split('');
        arr.reverse();
        str = arr.join('');
       document.getElementById('r2').innerHTML = str;
    };
function f3()
    {
        var txt = document.getElementById('f3_txt').value,
            res = document.getElementById('r3');
        if(txt)
            {
                var beginTxt = txt.substr(0, 7);
                if(beginTxt == 'http://')
                    r3.innerHTML = 'Да';
                else 
                    r3.innerHTML = 'Нет';
            }
    };
function f4()
    {
       var txt = document.getElementById('f4_txt').value,
            res = document.getElementById('r4');
       if(txt)
            {
               var endTxt = txt.substr(-5);
               console.log(endTxt);
               if(endTxt == '.html')
                  r4.innerHTML = 'Да';
                else 
                    r4.innerHTML = 'Нет';
                        
            }
    }