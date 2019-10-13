function f1()
    {
        document.getElementById('r1').innerHTML = 'Высота окна браузера - ' + window.innerHeight + 'px';
    };
function f2()
    {
        var h = Math.max(
                document.body.scrollHeight, 
                document.documentElement.scrollHeight,
                document.body.offsetHeight, 
                document.documentElement.offsetHeight,
                document.body.clientHeight, 
                document.documentElement.clientHeight
            );
        window.scrollTo(0, h);
    };
function f3()
    {
        document.getElementById('r3').innerHTML = 'Текущая вертикальная прокрутка - ' + window.pageYOffset + 'px';
    };