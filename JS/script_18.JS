function f1()
    {
        var txt = document.getElementById('f1_txt');
        txt.innerHTML = 'Этот текст <b>поменялся</b>!'
    };
function f2()
    {
        var txt = document.getElementById('f2_txt');
        txt.outerHTML = '<h3>Теперь это заголовок</h3>'
    };
function f3()
    {
        var txt = document.getElementById('f3_txt'),
            t = txt.innerHTML;
        txt.outerHTML = '<h3>' + t + '</h3>';
    };
function f4()
    {
        var num1 = Number(document.getElementById('f4_num1').value),
            num2 = Number(document.getElementById('f4_num2').value),
            res = document.getElementById('f4_res');
        res.innerHTML = num1 + num2;
    };
function f5()
    {
        var elems = document.getElementsByTagName('em'),
            l = elems.length;
        for(i=0; i<l; i++)
            elems[i].innerHTML = 'Текст поменялся';
    };
function f6()
    {
        var elems = document.getElementsByClassName('www'),
            l = elems.length;
        for(i=0; i<l; i++)
            elems[i].innerHTML = i+1;
    };
function f7()
    {
        var elems = document.querySelectorAll('p.ppp'),
            l = elems.length;
        for(i=0; i<l; i++)
            elems[i].innerHTML = i+1;
    };
function f8()
    {
        var p = document.getElementById('f8_p'),
            cl = p.getAttribute('class');
        alert(cl);
    };
function f9()
    {
        var p = document.getElementById('f9_p'),
            cl = p.getAttribute('class');
        alert(cl);
    };
function f9_remove()
    {
        var p = document.getElementById('f9_p');
        alert('Сейчас будет удалён класс');
        p.removeAttribute('class');
    };    

function f10()
    {
        var p = document.getElementById('f10_p'),
            cl = p.getAttribute('class');
        alert(cl);
    };
function f10_replace()
    {
        var p = document.getElementById('f10_p');
        p.removeAttribute('class');
        p.setAttribute('class', 'new-class');
    };
function f11(elem)
    {
        document.getElementById('f11_txt').innerHTML = elem.value;
    };
function f12()
    {
        var a = document.querySelectorAll('a.a'),
            l = a.length;
        for(i=0; i<l; i++)
            {
                var href = a[i].getAttribute('href');
                a[i].innerHTML += ' ' + href;
            }
    };
function f13(el)
    {
        var p = document.getElementById('f13_p');
        p.innerHTML = 'Новый текст';
        p.setAttribute('class', 'my-class');
        el.innerHTML = 'Низя нажать';
        el.setAttribute('disabled', 'true');
    };
function f14()
    {
        var p = document.getElementsByClassName('f14'),
            l = p.length;
        for(i=0; i<l; i++)
            p[i].innerHTML = i;
    };
function f15()
    {
        var p = document.getElementsByClassName('f15'),
            l = p.length;
        for(i=0; i<l; i++)
            {
                var txt = p[i].innerHTML;
                p[i].innerHTML = (i + 1) + '. ' + txt;
            }
    };