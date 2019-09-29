function f1() //также для номеров 2, 3, 4
    {
        alert('Я тут!');
    };
function f5()
    {
        var txt = document.getElementById('f5_txt').value;
        if(txt)
            alert(txt)
        else 
            alert('Введите текст');
    };
function f6()
    {
        document.getElementById('f6_txt').value = 'Текст изменён';
    };

var images = ['http://1.bp.blogspot.com/-6x58hMF7IG4/T9oiqgfu36I/AAAAAAAAARA/DtoWan191tY/s320/elephant-seals-eastcott_3718_990x742.jpg', 'https://pp.userapi.com/c849428/v849428047/1aab9e/iU24HSdbFK4.jpg'], imgNum = 0;
function f7()
    {
        var img = document.getElementById('f9_img');
        if (imgNum == 0)
            imgNum++;
        else 
            imgNum--;
        img.setAttribute('src', images[imgNum]);
    };
function f8(elem)
    {
        console.log(elem.value);
    };
function f9(elem)
    {
        elem.value = 'Я поменял текст!';
    };
function f10(elem)
    {
        elem.value = 'Я опять поменял текст!';
    };
function f11(elem)
    {
        elem.innerHTML = 'Низя нажать';
        elem.disabled = true;
    };
function f12(elem)
    {
        elem.innerHTML = 'Текст поменялся!';
    };
function f13_1(elem)
    {
        elem.setAttribute('src', images[1]);
    };
function f13_2(elem)
    {
        elem.setAttribute('src', images[0]);
    };
function f14()
    {
        document.getElementById('f14_txt').style.color = 'red';
    };
function f15_1()
    {
        document.getElementById('f15_txt').style.display = 'none'
    };
function f15_2()
    {
        document.getElementById('f15_txt').style.display = 'inline-block'  
    };
function f16()
    {
        var elem = document.getElementById('f16_txt');
        elem.style.border = '3px red dotted';
        elem.style.borderRadius = '10px';
        elem.style.color = 'blue';
        elem.style.height = '35px';
        elem.value = 'Текст изменён';
    };
function f17_1(elem)
    {
        var b2 = document.getElementById('f17_btn2');
        elem.disabled = 'true';
        b2.style.display = 'inline-block';
    };
function f17_2(elem)
    {
        var b1 = document.getElementById('f17_btn1');
        b1.removeAttribute('disabled');
        elem.style.display = 'none';
    };
var cnt = 0;
function f18()
    {
        cnt++;
        document.getElementById('f18_cnt').innerHTML = cnt;
    };
function f19()
    {
        var el = document.getElementById('f19_txt');
        el.style.float = 'right';
    };
function f20()
    {
        var el = document.getElementById('f20_txt'),
            cl = el.getAttribute('class');
        el.value = 'Классы элемента: ' + cl
        
    };
function f21()
    {
        var t1 =  document.getElementById('f21_txt1'),
            t2 = document.getElementById('f21_txt2'),
            txt1 = t1.value,
            txt2 = t2.value;
        t1.value = txt2;
        t2.value = txt1;
    };
function f22()
    {
        var num = document.getElementById('f22_num1').value,
            sqrt = document.getElementById('f22_num2');
        sqrt.value = Number(num)*Number(num);
    };
function f23()
    {
        var num = document.getElementById('f23_num1').value,
            sqrt = document.getElementById('f23_num2');
        if(Number(num))
            sqrt.value = Number(num)*Number(num);
        else
            sqrt.value = 'Введите число!';
    };
function f24()
    {
         var btn = document.getElementById('f24_btn');
         btn.disabled = 'true';
         btn.style.cursor = 'not-allowed';
    };
function f25(symbol)
    {
        var txt = document.getElementById('f25_txt');
        txt.value += symbol;
    };
function f25_clear()
    {
        document.getElementById('f25_txt').value = '';
    };