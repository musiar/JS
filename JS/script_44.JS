function f1(){
    let str = 'aaa@bbb eee7@kkk';
    document.querySelector('#r1').innerHTML = str.replace(/([a-zA-Z0-9]+)@([a-zA-Z0-9]+)/g, '$2@$1');
};

function f2(){
    let str = 'a1b2c3';
    document.querySelector('#r2').innerHTML = str.replace(/([0-9])/g, '$1$1');
};

function f3(){
    let str = getStr('txt3'),
        check = /^[a-zA-Z0-9-._]+@[a-z]+\.[a-z]{2,3}$/.test(str);
    if(check)
        addTextToElem('r3', 'Ок');
    else
        addTextToElem('r3', 'e-mail указан неверно');
};

function f4(){
    let str = getStr('txt4'),
        mails = str.match(/[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+\.[a-z]{2,3}/g);
    addTextToElem('r4', mails);    
};

function f5(){
    let str = getStr('txt5'),
        check = /^[a-z0-9]+\.[a-z]{2,3}$/.test(str);
    if(check)
        addTextToElem('r5', 'Ок');
    else
        addTextToElem('r5', 'домен указан неверно');
};

function f6(){
    let str = getStr('txt6'),
        check = /^https?:\/\/[a-z0-9-._]+\.[a-z]{2,3}\/?$/.test(str);
    if(check)
        addTextToElem('r6', 'Ок');
    else
        addTextToElem('r6', 'домен указан неверно');
};

function f7(){
    let str = getStr('txt7'),
        check = /^https?:\/\/[a-z0-9-._]+\.[a-z]{2,3}\/?$/.test(str);
    if(check)
        addTextToElem('r7', 'Ок');
    else
        addTextToElem('r7', 'домен указан неверно');
};

function f8(){
    let str = getStr('txt8'),
        check = /^https?/.test(str);
    if(check)
        addTextToElem('r8', 'Да');
    else
        addTextToElem('r8', 'Нет');
};

function f9(){
    let str = getStr('txt9'),
        check = /(.+\.txt$)|(.+\.html$)|(.+\.php$)/.test(str);
    if(check)
        addTextToElem('r9', 'Да');
    else
        addTextToElem('r9', 'Нет');
};

function f10(){
    let str = getStr('txt10'),
        check = /(.+\.jpg$)|(.+\.jpeg$)/.test(str);
    if(check)
        addTextToElem('r10', 'Да');
    else
        addTextToElem('r10', 'Нет');
};

function f11(){
    let str = getStr('txt11'),
        check = /^[0-9]{1,12}$/.test(str);
    if(check)
        addTextToElem('r11', 'Да');
    else
        addTextToElem('r11', 'Нет');
};

function f12(){
    let str = getStr('txt12'),
        nums = str.match(/[0-9]+/g),
        sum = nums.reduce((a,b) => Number(a)+Number(b));
    addTextToElem('r12', sum);
};

function f13(){
    let str = getStr('txt13'),
        newStr = str.replace(/(https?:\/\/)([a-z0-9-._]+\.[a-z]{2,3})/g, '<a href = "$1$2">$2</a> ');
    addTextToElem('r13', newStr);
};

function f14(){
    let str = getStr('txt14'),
        newStr = str.replace(/\s+/g, ' ');
    addTextToElem('r14', newStr);
};
function f15(){
    let str = getStr('txt15'),
        newStr = str.replace(/<!--.+-->/g, '');
    document.querySelector('#txt15').value = newStr;
};

function f16(){
    let str = getStr('txt16'),
        newStr = str.replace(/\/\*.+\*\//g, '');
    document.querySelector('#txt16').value = newStr;
};

//вспомогательные функции
//значение элемента с указанным id
function getStr(id){
    return document.getElementById(id).value;
    
};
//вставить текст в абзац с заданным id
function addTextToElem(id, txt){
    document.querySelector('#' + id).innerHTML = txt;
};