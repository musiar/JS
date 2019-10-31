var colors = ['#bc92d6', '#92a9d6', '#a4d692', '#92c2d6', '#d6c392', '#d69292', '#ffee57', '#65ff57'],
    l11 = colors.length,
    num11 = 0,
    arr12 = ['Колокольчик', 'Мыши', 'Щавель', 'Время'],
    l12 = arr12.length,
    num12 = 0,
    num13 = 1,
    i13 = 0;

window.addEventListener('load', function(){
    //2
    document.documentElement.addEventListener('mouseup', f2);
    //4
    var p4 = document.querySelectorAll('#r4 p'),
        l4 = p4.length,
        t5 = setInterval(f5, 3000);
    for(i = 0; i < l4; i++)
        p4[i].addEventListener('click', f4);
    //10
    red();
    //11
    var t11 = setInterval(f11, 1000);
    //12
    f12();
    //13
    var t13 = setInterval(f13, 1000);
})    


function getMax(arr){
    return Math.max.apply(Math, arr);
}
//1
function f1(el){
    var num = Number(el.value);
    if(!num)
        el.classList = "";
    else if(num > 0 && num <= 100)
        el.classList = "green";
    else 
        el.classList = "red";
}
//2
function f2(){
        var inp = document.querySelector('#r2'),
            text = window.getSelection().toString();
        inp.value = text;
    }
//3
function f3(){
    var p = document.querySelectorAll('#r3 p'),
        l = p.length,
        arr = [],
        max;
    for(i=0; i < l; i++)
        arr.push(Number(p[i].innerHTML));
    max = getMax(arr);
    for(i=0; i < l; i++)
        if(Number(p[i].innerHTML) == max)
            p[i].classList = "red";
}
//4
function f4(){
    var inp = document.querySelector('#num4'),
        val = inp.value;
    val++;
    inp.value = val;
}
//5
function f5(){
    var inp = document.querySelector('#r5'),
        num = inp.value;
    num = Math.pow(num, 2);
    inp.value = num;
}
//6
function f6(){
    var inp = document.querySelector('#r6'),
        length = 8,
        symbols = "1234567890абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
        sL = symbols.length,
        str = '';
    for(i = 0; i < length; i++)
        str += symbols.charAt(rand(0, sL));
    inp.value = str;    
}
//7
function f7(){
    var inp = document.querySelector('#r7'),
        length = document.querySelector('#r7_2').value,
        symbols = "1234567890абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
        sL = symbols.length,
        str = '';
    for(i = 0; i < length; i++)
        str += symbols.charAt(rand(0, sL));
    inp.value = str;    
}
//8
function f8(){
    var inp = document.querySelector('#r8'),
        length = document.querySelector('#r8_2').value,
        symbols = document.querySelector('#r8_3').value,
        sL = symbols.length,
        str = '';
    for(i = 0; i < length; i++)
        str += symbols.charAt(rand(0, sL));
    inp.value = str;    
}
//вспомогательная функция
function rand(min, max){
    return Math.floor(Math.random() * max - min + 1) + min;
}
//9
var num9, t9, t10;
function f9(inp){
    num9 = inp.value;
    var p = document.querySelector('#r9');
    p.innerHTML = num9;
    t9 = setInterval(counter, 1000);
}
function counter(){
    var p = document.querySelector('#r9');
    if(num9 > 1)
        {
            num9--;
            p.innerHTML = num9;
        }
    else
        {
            p.innerHTML = 'Время вышло!';
            clearInterval(t9);
        }
}
//10
function red(){
    var p = document.querySelector('#r10');
    p.classList = "red";
    t10 = setTimeout(green, 1000);
}
function green(){
    var p = document.querySelector('#r10');
    p.classList = "green";
    t10 = setTimeout(red, 1000);
}
//11
function f11(){
    var p = document.querySelector('#r11');
    p.style.backgroundColor = colors[num11];
    if(num11 < l11)
        num11++;
    else
        num11 = 0;
}
//12
function f12(){
    var p = document.querySelector('#r12');
    if(num12 < l12)
        {
            p.innerHTML += '<br>' + arr12[num12];
            num12++;
        }
}
//13
function f13(){
    var inputs = document.querySelectorAll('#r13 input'),
        l = inputs.length;
    inputs[i13].value = num13;
    num13++;
    i13++;
    if(i13 > l-1)
        i13 = 0;
}