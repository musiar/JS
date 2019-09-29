var seals = ['https://s.tcdn.co/243/0c0/2430c0c2-8e12-3166-a4de-7c27415d2626/29.png',
    'https://s.tcdn.co/243/0c0/2430c0c2-8e12-3166-a4de-7c27415d2626/3.png',
    'https://s.tcdn.co/243/0c0/2430c0c2-8e12-3166-a4de-7c27415d2626/9.png',
    'https://s.tcdn.co/243/0c0/2430c0c2-8e12-3166-a4de-7c27415d2626/1.png',
    'https://s.tcdn.co/243/0c0/2430c0c2-8e12-3166-a4de-7c27415d2626/20.png',
    'https://s.tcdn.co/243/0c0/2430c0c2-8e12-3166-a4de-7c27415d2626/7.png',
    'https://s.tcdn.co/243/0c0/2430c0c2-8e12-3166-a4de-7c27415d2626/8.png',
    'https://s.tcdn.co/243/0c0/2430c0c2-8e12-3166-a4de-7c27415d2626/10.png'
    ], l = seals.length, num = 1,
    num6 = 0,
    t1 ,t2, t3, t4, t5, t6, t7, t8;
function f1()
    {
        t1 = window.setInterval(cnt1, 1000);
    };
function f2()
    {
        t2 = window.setInterval(cnt2, 1000);
    };
function f2_stop()
    {
        window.clearInterval(t2);
    }
function f3()
    {
        t3 = setInterval(showTime, 1000);
    };
function f3_stop()
    {
        clearInterval(t3);
    };
function f4()
    {
       t4 = setInterval(cnt4, 1000);
    }
function f5()
    {
        t5 = setInterval(slideShow5, 1000);
    };
function f5_stop()
    {
        clearInterval(t5);
    };
function f6()
    {
        t6 = setInterval(slideShow6, 1000);
    };
function f6_stop()
    {
        clearInterval(t6);
    };
function f7()
    {
         t7 = setInterval(dayEnd, 1000);
    };
function f7_stop()
    {
        clearInterval(t7);
    };
    

//Вспомогательные функции
window.onload = function()
    {
        var img = document.getElementsByClassName('f6_img'),
            l_i = img.length;
        //console.log('Элементы img - ' + l_i + ', массив с картинками - ' + l)
        for (i=0; i<l_i; i++)
            {
                //console.log('Элемент ' + i + ' - ' + seals[i])
                img[i].setAttribute('src', seals[i]);
            }
    }
function cnt1()
    {
        var num = document.getElementById('r1').innerHTML;
            num++;
        document.getElementById('r1').innerHTML = num;
    }
function cnt2()
    {
        var num = document.getElementById('r2').innerHTML;
            num++;
        document.getElementById('r2').innerHTML = num;
    }    
function showTime()
    {
        var t = new Date(),
            res = document.getElementById('r3');
        res.innerHTML = hours(t) + ':' + minutes(t) + ':' + seconds(t);
    }
//отображение времени
function checkNum(num)
    {
        num = String(num);
        if(num.length == 1)
            {
                return ('0' +  num)  
            }
        return num;
    }

function setTime(date, h, m, s, ms)
    {
        date.setHours(h);
        date.setMinutes(m);
        date.setSeconds(s);
        date.setMilliseconds(ms);
    }
function hours(date)
    {
        return date.getHours();
    }
function minutes(date)
    {
        return checkNum(date.getMinutes());
    };
function seconds(date)
    {
        return checkNum(date.getSeconds());
    };
//конец

function cnt4()
    {
        var num = Number(document.getElementById('r4').innerHTML),
            res = document.getElementById('r4');
        if(num>1)
            {
                num--;
                res.innerHTML = num;
            }
        else
            {
                res.innerHTML = 'Отсчёт закончен!';
                clearInterval(t4);
            }
    }
function slideShow5()
    {
        var img = document.getElementById('r5');
        img.setAttribute('src', seals[num]);
        if (num == l-1)
            num = 0;
        else 
            num++;
    }
function slideShow6()
    {
        var img = document.getElementsByClassName('f6_img'),
            l_i = img.length,
            cnt = 0;
        for(i=num6; i < l_i; i++, cnt++)
            img[cnt].src = seals[i];
        for(i=0; i<num6; i++, cnt++)
            img[cnt].src = seals[i];
        if(num6 == l_i)
            num6 = 0;
        else
            num6++;
    }
function dayEnd()
    {
        var h = document.getElementById('f7_h'),
            m = document.getElementById('f7_m'),
            s = document.getElementById('f7_s'),
            now = new Date(),
            dayEnd = new Date(),
            res = document.getElementById('f7_h'),
            r;
        setTime(dayEnd, 23, 59, 59, 999);
        r = dayEnd - now;
        var hours = Math.floor(r/(1000*60*60)),
            minutes = Math.floor(r/(1000*60)%60),
            seconds = Math.floor((r/1000)%60)
        h.innerHTML = hours;
        m.innerHTML = minutes;
        s.innerHTML = seconds;
    }