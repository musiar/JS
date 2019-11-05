//1
function f1(){
    var div = document.querySelector('#r1');
    document.querySelector('#r1_1').innerHTML = div.firstChild.textContent;
    document.querySelector('#r1_2').innerHTML = div.firstElementChild.textContent;
};
//2
function f2(){
    var div = document.querySelector('#r2');
    document.querySelector('#r2_1').innerHTML = div.firstChild.data;
};
//3
function f3(){
    var div = document.querySelector('#r3');
    div.firstChild.data = '!!!'
};
//4
function f4(){
    var div = document.querySelector('#r4');
    div.lastChild.data = '!!!'
};
//5
function f5(){
    var div = document.querySelector('#r5'),
        res = document.querySelector('#r5_1');
    res.parentElement.classList.remove('hide');
    res.innerHTML = div.firstChild.data;
};
//6
function f6(){
    var div = document.querySelector('#r6'),
        oldComm = div.firstChild.data,
        r1 = document.querySelector('#r6_1'),
        r2 = document.querySelector('#r6_2');
    div.firstChild.data = '!!!';
    r1.parentElement.classList.remove('hide');
    r2.parentElement.classList.remove('hide');
    r1.innerHTML = oldComm;
    r2.innerHTML = div.firstChild.data;
};
//7
function f7(){
    var div = document.querySelector('#r7'),
        r1 = document.querySelector('#r7_1'),
        r2 = document.querySelector('#r7_2'),
        cN = div.childNodes,
        ch = div.children;
    addList(cN, r1);
    addList(ch, r2);
};
//вспомогательная
function addList(elems, parent){
    var l = elems.length;
    for(i = 0; i < l; i++)
        {
            var li = document.createElement('li');
            li.innerHTML = elems[i].textContent;
            parent.appendChild(li);
        }
};
//8
function f8(){
    var div = document.querySelector('#r8'),
        res = document.querySelector('#r8_1'),
        cN = div.childNodes;
    res.innerHTML = cN[1].textContent;
}
//9
function f9(){
    var div = document.querySelector('#r9'),
        res = document.querySelector('#r9_1'),
        cN = div.children;
    res.innerHTML = cN[1].textContent;
};
//10
function f10(){
    var div = document.querySelector('#r10'),
        r1 = document.querySelector('#r10_1'),
        r2 = document.querySelector('#r10_2'),
        cN = div.childNodes,
        elem = cN[2];
    r1.innerHTML = elem.nextSibling.textContent;
    r2.innerHTML = elem.previousSibling.textContent;
};
//11
function f11(){
    var div = document.querySelector('#r11'),
        r1 = document.querySelector('#r11_1'),
        r2 = document.querySelector('#r11_2'),
        cN = div.childNodes,
        elem = cN[2];
    r1.innerHTML = elem.nextElementSibling.textContent;
    r2.innerHTML = elem.previousElementSibling.textContent;
};
//12
function f12(){
    var div = document.querySelector('#r12'),
        res = document.querySelector('#r12_1'),
        cN = div.childNodes,
        elem = cN[2];
    res.innerHTML = elem.nextSibling.textContent;
};
//13
function f13(){
    var div = document.querySelector('#r13'),
        table = document.querySelector('#t13'),
        cN = div.childNodes,
        l = cN.length;
    for(i = 0; i < l; i++)
        {
            var tr = document.createElement('tr'),
                td1 = document.createElement('td'),
                td2 = document.createElement('td'),
                type = cN[i].nodeType,
                t;
            td1.innerHTML = cN[i].textContent;
            td2.innerHTML = checkNodeType(cN[i]);
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);
        }
};
//вспомогательная
function checkNodeType(elem){
    var type = elem.nodeType, t;
    if(type == 1)
        t = 'Элемент';
    else if(type == 3)
        t = 'Текст';
    else if(type == 8)
        t = 'Комментарий';
    else
        t = 'Другое';
    return t;
};
//14
function f14(){
     var div = document.querySelector('#r14');
     //Вывод NodeList
     console.log(div.childNodes); //или div.querySelectorAll('#r14 > *')
 };
//15
function f15(){
     var div = document.querySelector('#r14');
     //Вывод HTML-Collection
     console.log(div.children); //также getElementsByTagName('p') 
 };
//16
function f16(){
    var div = document.querySelector('#r14'),
        elements = div.childNodes,
        arr = Array.from(elements); // arr = [...elements]
    console.log(arr)
};
//17
function f17(){
    var div = document.querySelector('#r14'),
        elements = div.children,
        arr = [...elements]; //arr = Array.from(elements);  
    console.log(arr)
};
//18
function f18(){
    var div = document.querySelector('#r18'),
        txt = document.createTextNode('!!!');
    div.insertBefore(txt, div.children[0]);
};
//19
function f19(){
    var div = document.querySelector('#r19'),
        txt = document.createTextNode('!!!');
    div.insertBefore(txt, div.childNodes[1]);
};
//20
function f20(){
    var div = document.querySelector('#r20');
    div.removeChild(div.childNodes[0])
};
function f21(){
    var p = document.querySelector('#r21'),
        res = document.querySelector('#res21'),
        elements = p.childNodes;
    elements.forEach(function(el){
        var newEl = document.createElement('p');
        if(el.nodeType == 1)
            newEl.innerHTML = '<b>DOM-элемент</b>: ' + el.innerHTML;
        else 
            newEl.innerHTML = '<b>Другое</b>: ' + el.textContent;
        res.appendChild(newEl);
    })
};