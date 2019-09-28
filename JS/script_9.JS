function f1()
    {
        var num = document.getElementById('f1_num').value,
            res = document.getElementById('r1');
       if(num)
            res.innerHTML = num*num;
    };
function f2()
    {
        var num1 = document.getElementById('f2_num1').value,
            num2 = document.getElementById('f2_num2').value,
            res = document.getElementById('r2');
        if(num1 && num2) 
            res.innerHTML = parseInt(num1) + parseInt(num2);
    };
function f3()
    {
        var num1 = document.getElementById('f3_num1').value,
            num2 = document.getElementById('f3_num2').value,
            num3 = document.getElementById('f3_num3').value,
            res = document.getElementById('r3');
        if(num1 && num2 && num3) 
            res.innerHTML = (parseInt(num1) - parseInt(num2))/parseInt(num3);
    };
function f4()
    { 
       var days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'], 
            dayNum = document.getElementById('f4_num').value,
            res = document.getElementById('r4');
        if(dayNum)
            {
                if(dayNum >=1 && dayNum <=7)
                    res.innerHTML = days[dayNum-1];
                else 
                    res.innerHTML = "Неверное значение"
            }
    }