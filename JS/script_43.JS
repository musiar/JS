function f1(){
    let str = 'aa aba abba abbba abbbba abbbbba';
    document.querySelector('#r1').innerHTML = str.replace(/ab{2,4}a/g, '!');
};

function f2(){
    let str = 'aa aba abba abbba abbbba abbbbba';
    document.querySelector('#r2').innerHTML = str.replace(/ab{1,3}a/g, '!');
};

function f3(){
    let str = 'aa aba abba abbba abbbba abbbbba';
    document.querySelector('#r3').innerHTML = str.replace(/ab{4,}a/g, '!');
};

function f4(){
    let str = 'a1a a2a a3a a4a a5a aba aca';
    document.querySelector('#r4').innerHTML = str.replace(/a\da/g, '!');
};

function f5(){
    let str = 'a1a a22a a333a a4444a a55555a aba aca';
    document.querySelector('#r5').innerHTML = str.replace(/a\d+a/g, '!');
};

function f6(){
    let str = 'aa a1a a22a a333a a4444a a55555a aba aca';
    document.querySelector('#r6').innerHTML = str.replace(/a\d*a/g, '!');
};

function f7(){
    let str = 'avb a1b a2b a3b a4b a5b abb acb';
    document.querySelector('#r7').innerHTML = str.replace(/a\Db/g, '!');
};


function f8(){
    let str = 'ave a#b a2b a$b a4b a5b a-b acb';
    document.querySelector('#r8').innerHTML = str.replace(/a\Wb/g, '!');
};

function f9(){
    let str = 'ave a#a a2a a$a a4a a5a a-a aca';
    document.querySelector('#r9').innerHTML = str.replace(/\s/g, '!');
};

function f10(){
    let str = 'aba aea aca aza axa';
    document.querySelector('#r10').innerHTML = str.replace(/a[bex]a/g, '!');
};

function f11(){
    let str = 'aba aea aca aza axa a.a a+a a*a';
    document.querySelector('#r11').innerHTML = str.replace(/a[b\.+*]a/g, '!');
};

function f12(){
    let str = 'a5a a1a aca aza axa a6a a3a aba';
    document.querySelector('#r12').innerHTML = str.replace(/a[3-7]a/g, '!');
};

function f13(){
    let str = 'aba aga aca aza axa aaa ata ama';
    document.querySelector('#r13').innerHTML = str.replace(/a[a-g]a/g, '!');
};

function f14(){
    let str = 'aba aga aca aza axa aaa ata ama aha aja apa ara';
    document.querySelector('#r14').innerHTML = str.replace(/a[a-fj-z]a/g, '!');
};
function f15(){
    let str = 'aba aga aJa aza axa aaa aLa ama aha aja aTa ara';
    document.querySelector('#r15').innerHTML = str.replace(/a[a-fA-Z]a/g, '!');
};

function f16(){
    let str = 'apa aea aca aba ata';
    document.querySelector('#r16').innerHTML = str.replace(/a[^be\s]a/g, '!');
};

function f17(){
    let str = 'wйw wiw wЯw wёw wqw';
    document.querySelector('#r17').innerHTML = str.replace(/w[а-яА-ЯЁё]w/g, '!');
};

function f18(){
    let str = 'aAXa aeffa aGha aza ax23a a3sSa';
    document.querySelector('#r18').innerHTML = str.replace(/a[a-z]{1,}a/g, '!');
};

function f19(){
    let str = 'aAXa aeffa aGha aza ax23a a3sSa';
    document.querySelector('#r19').innerHTML = str.replace(/a[a-zA-Z]{1,}a/g, '!');
};

function f20(){
    let str = 'aAXa aeffa aGha aza ax23a a3sSa';
    document.querySelector('#r20').innerHTML = str.replace(/a[a-z1-9]+a/g, '!');
};

function f21(){
    let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
    document.querySelector('#r21').innerHTML = str.replace(/[а-яА-ЯЁё]+/g, '!');
};


function f22(){
    let str = 'aaa aaa aaa';
    document.querySelector('#r22').innerHTML = str.replace(/^aaa/g, '!');
};

function f23(){
    let str = 'aaa aaa aaa';
    document.querySelector('#r23').innerHTML = str.replace(/aaa$/g, '!');
};

function f24(){
    let str = 'aeeea aeea aea axa axxa axxxa';
    document.querySelector('#r24').innerHTML = str.replace(/ae+a|ax+a/g, '!');
};

function f25(){
    let str = 'aeeea aeea aea axa axxa axxxa';
    document.querySelector('#r25').innerHTML = str.replace(/ae{2}a|ax+a/g, '!');
};

function f26(){
    let str = 'a\\a abc';
    
    document.querySelector('#r26').innerHTML = str.replace(/a\\a/g, '!');
};

function f27(){
    let str = 'a\\a a\\\\a a\\\\\\a';
    document.querySelector('#r27').innerHTML = str.replace(/a\\{3}a/g, '!');
};

function f28(){
    let str = 'bbb /aaa\\ bbb /ccc\\';
    document.querySelector('#r28').innerHTML = str.replace(/\/[a-z]+\\/g, '!');
};