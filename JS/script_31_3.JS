window.addEventListener('load',
    function(){
        var ch3 = document.querySelectorAll('#div3 input[type = radio]'),
            l3 = ch3.length,
            ch4 = document.querySelectorAll('#div4 input[type = checkbox]'),
            l4 = ch4.length,
            ch6 = document.querySelectorAll('.f6_inp'),
            l6 = ch6.length,
            ch8 = document.querySelectorAll('.f8_inp'),
            l8 = ch8.length,
            btn9 = document.querySelectorAll('.closeDiv'),
            l9 = btn9.length;
        for(i = 0; i < l3; i++)
            ch3[i].addEventListener('change', f3);
        for(i = 0; i < l4; i++)
            ch4[i].addEventListener('change', f4);
        for(i=0; i < l6; i++)
            ch6[i].addEventListener('click', f6);
        f6();
        for(i=0; i < l8; i++)
            ch8[i].addEventListener('click', f8);
        for(i = 0; i < l9; i++)
            btn9[i].addEventListener('click', f9);
    })


//1
function f1(){
    var ch = document.querySelector('#r1');
    if(ch.checked)
        ch.checked = false;
    else 
        ch.checked = true;
}
//2
function f2(){
    var ch = document.querySelectorAll('#r2 input[type = checkbox]'),
        l = ch.length;
    for(i = 0; i < l; i++)
        ch[i].checked = 'checked';
}
//3
function f3(){
    if(this.checked)
        document.querySelector('#r3').innerHTML = this.value;
}
//4
var arr4 =[];
function f4(){
    var v = this.value,
        r = document.querySelector('#r4');
    if(this.checked)
        arr4.push(v);
    else 
        {
           var k = arr4.indexOf(v);
           arr4.splice(k, 1);
        }
    r.innerHTML = arr4;
}
//5
function f5(el){
    var inp = document.querySelector('#r5');
    if(inp.hidden)
        inp.removeAttribute('hidden');
    else
        inp.setAttribute('hidden', 'true');
}
//6
function f6(){
    var check = document.querySelectorAll('input.f6_inp'),
        p = document.querySelectorAll('input.f6_inp + p'),
        l = check.length;
    for(i = 0; i < l; i++){
        var c = check[i].checked;
        if(!c)
            p[i].style.display = "none";
        else
            p[i].style.display = "block";
    }
}
//7
function f7(el){
    var list = document.querySelector('#r7').children,
        l = list.length,
        el = Number(el);
    if(el)
        {
            el = el-1;
            for( i = 0; i < l; i++)
                {
                    if(i != el-1 && list[i].classList.contains('red'))
                        list[i].classList.remove('red');
                    else if(i == el)
                        list[i].classList.add('red');
                }
        }
}
//8
function f8(){
    var p = document.getElementById('r8'),
        prop = this.value,
        l = prop.length,
        style = p.style.cssText;
	if (this.checked)
		style += this.value;
	else 
		style = style.replace(style.substr(style.indexOf(prop), l), '');
	p.style.cssText = style;
};
//9
function f9(){
    var parent = this.parentElement;
    parent.style.display = 'none';
}