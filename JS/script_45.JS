function f1(){
    let str = 'aaab aaac aaag aaab aaat';
    addTextToElem('r1', str.replace(/aaa(?=b)/g, '!'));
};

function f2(){
    let str = 'aaab aaac aaag aaab aaat';
    addTextToElem('r2', str.replace(/aaa(?!b)/g, '!'));
};

function f3(){
    let str = getStr('txt3'),
        newStr = str.replace(/\d+/g, function(num){
            return num*num;
        });
    addTextToElem('r3', newStr);
};

function f4(){
    let str = getStr('txt4'),
        newStr = str.replace(/\d+(?=\')/g, function(num){return num*2});
    addTextToElem('r4', newStr);
};

function f5(){
    let str = getStr('txt5'),
        newStr = str.replace(/{{.+}}/g, function(res){
            let arr = res.split('');
            for(i = 0; i < 2; i++){
                arr.shift();
                arr.pop();
            };
            arr.reverse();
            return arr.join('');
        });
    addTextToElem('r5', newStr);
};

function f6(){
    let str = getStr('txt6'),
        newStr = str.replace(/\d+\s?[\+\-\*\/]\s?\d+\s?\=/g, function(res){
            let r = res.replace(/\=/g, '');
            return res + eval(r) + '<br>';
        });
    addTextToElem('r6', newStr);
};

function f7(){
    let str = getStr('txt7'),
        check = str.search(/(^19\d{2}$)|(^20\d{2}$)|(^2100$)/),
        res = (check != -1) ? 'Да':'Нет';
    addTextToElem('r7', res);
};

function f8(){
    let str = getStr('txt8'),
        check = str.search(/^([01][0-9]|2[0-3]):[0-5][0-9]$/),
        res = (check != -1) ? 'Да':'Нет';
    addTextToElem('r8', res);
};

function f9(){
    let str = getStr('txt9'),
        check = str.search(/^(0?[1-9]|1[0-2])\.[0-5][0-9]\s?[ap]m$/),
        res = (check != -1) ? 'Да':'Нет';
    addTextToElem('r9', res);
};

function f10(){
    let str = getStr('txt10'),
        newStr = str.replace(/\W*\w*(\w)\1\w*\W*/g, ' ');
    newStr.replace(/\s+/g, ' ');
    addTextToElem('r10', newStr);
};

function f11(){
    let str = getStr('txt11'),
        newStr = str.replace(/\b(\w+)\s+\1/g, '');
    newStr.replace(/\s+/g, ' ');
    addTextToElem('r11', newStr);
};

function f12(){
    let str = getStr('txt12'),
        newStr = str.replace(/\b(\w+)\b(?:\s+\1\b)/g, '');
    newStr.replace(/\s+/g, ' ');
    addTextToElem('r12', newStr);
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