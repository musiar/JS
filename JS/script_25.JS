$(function ()
    {
        var nums = document.getElementsByClassName('num');
            for(var i in nums)
                nums[i].innerHTML = (parseInt(i) + 1) + ')';
    });
function f1()
    {
        var el = document.getElementById('elem'),
            r = document.getElementById('r1');
        r.innerHTML = 'Верхняя граница элемента - ' + el.clientTop + 'px.';
        
    };
function f2()
    {
        var el = document.getElementById('elem'),
            r = document.getElementById('r2');
        r.innerHTML = 'Левая граница элемента - ' + el.clientLeft + 'px.';
    };
function f3()
    {
        var el = document.getElementById('elem'),
            r = document.getElementById('r3');
        r.innerHTML = 'Полная ширина элемента - ' + el.offsetWidth + 'px';
    };
function f4()
    {
        var el = document.getElementById('elem'),
            r = document.getElementById('r4');
        r.innerHTML = 'Полная высота элемента - ' + el.offsetHeight + 'px';
    }
function f5()
    {
        var el = document.getElementById('elem'),
            r = document.getElementById('r5');
        r.innerHTML = 'Ширина элемента без учёта границ - ' + el.clientWidth + 'px.';
    };
function f6()
    {
        var el = document.getElementById('elem'),
            r = document.getElementById('r6');
        r.innerHTML = 'Высота элемента без учёта границ - ' + el.clientHeight + 'px.';
    };
function f7()
    {
        var el = document.getElementById('elem'),
            r = document.getElementById('r7'),
            style = getComputedStyle(el);
        r.innerHTML = 'Ширина элемента - ' + style.width + ', высота элемента - ' + style.height + '.';
    };
function f8()
    {
        var el = document.getElementById('elem2'),
            r = document.getElementById('r8');
        r.innerHTML = 'Элемент прокручен сверху на ' + el.scrollTop + 'px.';
    };
function f9()
    {
        var el = document.getElementById('elem2'),
            r = document.getElementById('r9');
        r.innerHTML = 'Прокрутка элемента слева - ' + el.scrollLeft + 'px.';
    };
function f10()
    {
        var el = document.getElementById('elem2');
        el.scrollTop = 100;
    };
function f11()
    {
        var el = document.getElementById('elem2');
        el.scrollTop+= 100;
    };
function f12()
    {
        var el = document.getElementById('elem2'),
            r = document.getElementById('r12');
        r.innerHTML = 'Высота элемента - ' + el.scrollHeight + 'px.';
    };
function f13()
    {
        var el = document.getElementById('elem2'),
            r = document.getElementById('r13');
        r.innerHTML = 'Ширина элемента - ' + el.scrollWidth + 'px.';
    };
function f14()
    {
        var el = document.getElementById('elem2'),
            h = el.scrollHeight;
        el.scrollTop = h - 100;
    };
function f15()
    {
        document.getElementById('r15').innerHTML = 'Страница прокручена по вертикали на ' + pageYOffset + 'px.';
    };
function f16()
    {
        document.getElementById('r16').innerHTML = 'Страница прокручена по горизонтали на ' + pageXOffset + 'px.';
    };
function f17()
    {
        window.scrollTo(300, 500);
    };
function f18()
    {
        window.scrollTo(0, pageYOffset + 300);
    };
function f19()
    {
        window.scrollTo(0, document.body.clientHeight);
    };
function f20()
    {
        window.scrollBy(0, -400);
    };
function f21()
    {
        var body = document.documentElement;
        if (body.scrollHeight - body.scrollTop == body.clientHeight)
            window.scrollTo(0, 100);
    };
function f22(el)
    {
        var width = el.offsetWidth,
            height = el.offsetHeight;
        el.style.width = width * 2 + 'px';
        el.style.height = height * 2 + 'px';
    };