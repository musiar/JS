var week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    mnth = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
function f1()
    {
        var dt = new Date(),
            res = document.getElementById('r1');
        res.innerHTML = 'Сегодня ' + dt.getDate() + ' число';
            
    };
function f2()
    {
        var dt = new Date(),
            res = document.getElementById('r2');
        res.innerHTML = 'Текущий месяц: ' + mnth[dt.getMonth()];
    };
function f3()
    {
        var dt = new Date(),
            res = document.getElementById('r3');
        res.innerHTML = 'Текущий год:  ' + dt.getFullYear();
    };
function f4()
    {
        var dt = new Date(),
            res = document.getElementById('r4');
            
        res.innerHTML = dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds() + ' ' + checkNum(dt.getDate()) + '.' + checkNum(dt.getMonth() +1) + '.' + dt.getFullYear();
        //checkNum();
    };
function checkNum(num)
    {
        num = String(num);
        if(num.length == 1)
            {
                return ('0' +  num)  
            }
        return num;
    }
function f5()
    {
        var dt = new Date(),
            res = document.getElementById('r5'),
            dayNum = dt.getDay();
        if(dayNum == 0)
            dayNum = 7;
        res.innerHTML = 'Сегодня ' + dayNum + '-й день недели.'
    };    
function f6()
    {
        var dt = new Date(),
            res = document.getElementById('r6'),
            dayNum = dt.getDay();
        if(dayNum == 0)
            dayNum = 7;
        res.innerHTML = 'Сегодня ' + week[dayNum-1];
    };
function f7()
    {
        var dt = new Date('07/01/2015'),
            res = document.getElementById('r7');
        res.innerHTML = 'День недели - ' + week[dt.getDay()-1];
        
    };
function f8()
    {
        var dt = new Date(),
            res = document.getElementById('r8');
        res.innerHTML = dt.getTime()/1000/60 + ' минут';
    };
function f9()
    {
        var dt = Date.parse('1988/03/01'),
            now = new Date(),
            res = document.getElementById('r9'),
            newDt;
        now = now.getTime();
        newDt = now-dt;
        res.innerHTML = newDt/(1000*60*60) + ' часов';
    };
function f10()
    {
        var today = new Date(),
            now = new Date(),
            res = document.getElementById('r10'),
            time;
        setTime(today, 0, 0, 0, 0);
        time = now-today;
        res.innerHTML = time/1000 + ' секунд с начала суток.';
        
    };
function f11()
    {
        var now = new Date(),
            dayEnd = new Date,
            res = document.getElementById('r11'),
            r;
        setTime(dayEnd, 23, 59, 59, 999)
        r = dayEnd - now;
        res.innerHTML = '<b>До конца суток осталось</b>: ' + hours(r) + ':' + minutes(r) + ':' + seconds(r); 
    };
function f12()
    {
        var dt = new Date(document.getElementById('f12_dt').value),
            res = document.getElementById('r12'), 
            today = new Date(),
            r,
            year = today.getFullYear();
        setTime(today, 0, 0, 0, 0);
        console.log(today);
        dt.setYear(year);
        var m1 = dt.getMonth(), m2 = today.getMonth()
        if(m1 > m2)
            r = days(dt - today);
        else if(m1 == m2)
            {
                var d1 = dt.getDate(), 
                    d2 = today.getDate();
                if(d1 == d2)
                    r = 'День рождения сегодня!';
                else if(d1 > d2)
                    r = days(dt - today);
                else
                    {
                        dt.setFullYear(year+1);
                        r = days(dt -today);
                    }
                console.log(r)
            }
        else
            {
                dt.setFullYear(year+1);
                r = days(dt - today);
            };
        
        res.innerHTML = r;
    };

function setTime(date, h, m, s, ms)
    {
        date.setHours(h);
        date.setMinutes(m);
        date.setSeconds(s);
        date.setMilliseconds(ms);
    }
function days(date)
    {
        return parseInt(String(date/1000/3600/24));
    };
function hours(date)
    {
        return parseInt(String(date/1000/3600));
    };
function minutes(date)
    {
        return checkNum(parseInt(String(date/1000/60))%60);
    };
function seconds(date)
    {
        return checkNum(parseInt(String(date/1000))%60);
    };