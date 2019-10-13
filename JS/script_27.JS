window.addEventListener('load', function()
        {
            var el1 = document.getElementById('r1'),
                el2 = document.getElementById('r2'),
                el3 = document.getElementById('r3'),
                el4 = document.getElementById('f4_text'),
                el5 = document.getElementById('f5_text'),
                el6 = document.getElementById('r6'),
                el7 = document.getElementById('r7'),
                el8 = document.getElementById('f8_text');
            el1.onmousemove = f1;
            el2.onclick = f2;
            el3.onclick = f3;
            el4.onkeypress = f4;
            el5.onkeypress = f5;
            el6.onclick = f6;
            el7.onclick = f7;
            el8.onkeypress = f8;
        }
    )
function f1(evt)
    {
        var x = document.getElementById('r1_x'),
            y = document.getElementById('r1_y');
        x.innerHTML = 'x: ' + evt.offsetX;
        y.innerHTML = 'y: ' + evt.offsetY;
    };
function f2(evt)
    {
        var ball = document.getElementById('r2_ball'),
            fieldStyle = getComputedStyle(document.getElementById('r2')),
            x = parseInt(fieldStyle.paddingLeft),
            y = parseInt(fieldStyle.paddingTop);
        ball.style.top = (evt.offsetY - y) + 'px';
        ball.style.left = (evt.offsetX - x) + 'px';
    };
function f3(evt)
    {
        var ball = document.getElementById('r3_ball'),
            ballStyle = getComputedStyle(ball),
            ballMiddleX = (parseInt(ballStyle.width))/2,
            ballMiddleY = (parseInt(ballStyle.height))/2,
            fieldStyle = getComputedStyle(document.getElementById('r3')),
            x = parseInt(fieldStyle.paddingLeft),
            y = parseInt(fieldStyle.paddingTop);
        console.log(ballMiddleX)
        ball.style.top = (evt.offsetY - y - ballMiddleY) + 'px';
        ball.style.left = (evt.offsetX - x - ballMiddleX) + 'px';
    };
function f4(evt)
    {
        var result = document.getElementById('r4');
        r4.innerHTML = evt.keyCode;
    };
function f5(evt)
    {
        var result = document.getElementById('r5'),
            key = evt.keyCode;
        result.innerHTML = String.fromCharCode(key);
    };
function f6(evt)
    {
        if(evt.ctrlKey)
            this.style.backgroundColor = 'red';
        if(evt.shiftKey)
            this.style.backgroundColor = 'green';
        if(evt.altKey)
            this.style.backgroundColor = 'blue';
    };
function f7(evt)
    {
        if(evt.ctrlKey)
            this.value = '1';
        else if(evt.altKey)
            this.value = '2';
        else if(evt.shiftKey)
            this.value = '3';
        else this.value = 'Нажата кнопка мыши'
    };
function f8(evt)
    {
        if(evt.keyCode == 13)
            {
                document.getElementById('r8').innerHTML = this.value;
                this.value = '';
            }
    };