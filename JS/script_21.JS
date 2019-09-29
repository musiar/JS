function f1()
    {
       document.getElementById('r1').innerHTML = this.src; 
    };
function f2()
    {
        this.title = this.innerHTML;
        //console.log(this);
        this.removeEventListener('mouseover', f2);
    };
function f3() //f4();
    {
        this.innerHTML += '(' + this.href + ')';
        this.removeEventListener('mouseover', f3);
        console.log(this);
    };
function f5()
    {
        document.getElementById('r5').innerHTML = this.value;
    };
function f6()
    {
        document.getElementById('r6').innerHTML = this.value;
        this.removeEventListener('click', f6);
    };
function f7()
    {
        var num = Number(this.innerHTML);
        this.innerHTML = num * num;
    };
function f8()
    {
        var dl = this.getAttribute('data-length') //правильное количество
        var l = this.value.length; //вбитое в инпут количество
        if(dl == l)
            this.style.borderColor = 'green';
        else if (l == 0)
            this.removeAttribute('style');
        else
            this.style.borderColor = 'red';
    };
function f9_1()
    {
        this.style.backgroundColor = '#6DFF6B';
        this.removeEventListener('click', f9_1);
        this.addEventListener('click', f9_2);
    };
function f9_2()
    {
        this.style.backgroundColor = '#FFF465';
        this.removeEventListener('click', f9_2);
        this.addEventListener('click', f9_3);  
    };
function f9_3()
    {
        this.style.backgroundColor = '#FF1919';
        this.removeEventListener('click', f9_3);
        this.addEventListener('click', f9_1);  
    };
window.onload = function()
    {
        //для задания 1
        var img = document.getElementsByTagName('img'),
            iL = img.length;
        for(i=0; i< iL; i++)
            img[i].addEventListener('click', f1);
        //для заданий 2, 3, 4
        var a = document.getElementsByTagName('a'),
            aL = a.length;
        for(i=0; i< aL; i++)
            {
                a[i].addEventListener('mouseover', f2);
                a[i].addEventListener('mouseover', f3);
            }
        // для задания 5
        var txt5 = document.getElementsByClassName('f5_txt'),
            txt5L = txt5.length;
        for(i=0; i < txt5L; i++)
            txt5[i].addEventListener('blur', f5);
        //для задания 6
        var txt6 = document.getElementsByClassName('f6_txt'),
            txt6L = txt6.length;
        for(i=0; i < txt6L; i++)
            txt6[i].addEventListener('click', f6);
        //для задания 7
        var num7 = document.getElementsByClassName('num7'),
            num7L = num7.length;
        for(i=0; i < num7L; i++)
            num7[i].addEventListener('click', f7);
        //для задания 8
        var txt8 = document.getElementsByClassName('f8_txt'),
            txt8L = txt8.length;
        for(i=0; i < txt8L; i++)
            txt8[i].addEventListener('blur', f8);
        //для задания 9
        var r9 = document.getElementsByClassName('r9'),
            r9L = r9.length;
        for(i=0; i < r9L; i++)
            r9[i].addEventListener('click', f9_1);
    }