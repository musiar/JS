function f1(){
    let str = 'ahb acb aeb aeeb adcb axeb';
    document.querySelector('#r1').innerHTML = str.replace(/a.b/g, '!');
};

function f2(){
    let str = 'aba aca aea abba adca abea';
    document.querySelector('#r2').innerHTML = str.replace(/a..a/g, '!');
};

function f3(){
    let str = 'aba aca aea abba adca abea';
    document.querySelector('#r3').innerHTML = str.replace(/ab.a/g, '!');
};

function f4(){
    let str = 'aa aba abba abbba abca abea';
    document.querySelector('#r4').innerHTML = str.replace(/ab+a/g, '!');
};

function f5(){
     let str = 'aa aba abba abbba abca abea';
    document.querySelector('#r5').innerHTML = str.replace(/ab*a/g, '!');
};

function f6(){
     let str = 'aa aba abba abbba abca abea';
    document.querySelector('#r6').innerHTML = str.replace(/ab?a/g, '!');
};

function f7(){
     let str = 'aa aba abba abbba abca abea';
    document.querySelector('#r7').innerHTML = str.replace(/ab*a/g, '!');
};


function f8(){
     let str = 'ab abab abab abababab abea';
    document.querySelector('#r8').innerHTML = str.replace(/(ab)+/g, '!');
};

function f9(){
     let str = 'a.a aba aea';
    document.querySelector('#r9').innerHTML = str.replace(/a\.a/g, '!');
};

function f10(){
     let str = '2+3 223 2223';
    document.querySelector('#r10').innerHTML = str.replace(/2\+3/g, '!');
};

function f11(){
     let str = '23 2+3 2++3 2+++3 345 567';
    document.querySelector('#r11').innerHTML = str.replace(/2\++3/g, '!');
};

function f12(){
     let str = '23 2+3 2++3 2+++3 445 677';
    document.querySelector('#r12').innerHTML = str.replace(/2\+*3/g, '!');
};

function f13(){
     let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
    document.querySelector('#r13').innerHTML = str.replace(/\*q+\+/g, '!');
};

function f14(){
     let str = 'aba accca azzza wwwwa';
    document.querySelector('#r14').innerHTML = str.replace(/ ?a.*?a/g, '!');
};