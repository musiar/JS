function f1()
    {
        var elem = document.getElementById('elem');
        elem.classList.add('www');
    };
function f2()
    {
        var elem = document.getElementById('elem');
        elem.classList.remove('www');
    };
function f3()
    {
        var elem = document.getElementById('elem'),
            res = document.getElementById('r3');
        if(elem.classList.contains('www'))
            res.innerHTML = 'Есть';
        else
            res.innerHTML = 'Неть';
    };
function f4()
    {
        var elem = document.getElementById('elem');
        elem.classList.toggle('www');
    }
function f5()
    {
        var elem = document.getElementById('elem'),
        res = document.getElementById('r5');
        res.innerHTML = elem.classList.length;
    };
function f6()
    {
       
            res = document.getElementById('r6'),
            l = elem.classList.length;
        res.innerHTML = '';
        for(i = 0; i < l; i++)
            {
                res.innerHTML+= (i+1) + ') ' + elem.classList[i] + '<br>';
            }
        
    };
function f7()
    {
         elem.style.cssText = 'padding: 20px; color: #3FAABF';
    };
function f8()
    {
        var elem = document.getElementById('elem'),
            res = document.getElementById('r8');
        res.innerHTML = elem.tagName;
    };
function f9()
    {
        var elem = document.getElementById('elem'),
            res = document.getElementById('r9');
        res.innerHTML = elem.tagName.toLowerCase();
    };
function f10()
    {
        this.innerHTML+= ' - здесь тэг "' + this.tagName.toLowerCase() + '".';
        this.removeEventListener('click', f10);
    };
function f11()
    {
        var ul = document.getElementById('r11'),
            li = document.createElement('li');
        li.innerHTML = 'Пункт';
        ul.appendChild(li);
    };
function f12()
    {
        var ul = document.getElementById('r12'),
            arr = [12, 'Картошка', 'Выходные', 7, 3, 'Что-то ещё'],
            l = arr.length;
        for(i=0; i < l; i++)
            {
                let li = document.createElement('li');
                li.innerHTML = arr[i];
                ul.appendChild(li);
            }
    };
function f13()
    {
       var ul = document.getElementById('r13'),
            arr = ['Тюлень', 'Пельмень', 13, 'Ремень'],
            l = arr.length;
        for(i=0; i < l; i++)
            {
                let li = document.createElement('li');
                li.innerHTML = arr[i];
                li.addEventListener('click', showText); 
                ul.appendChild(li);
            }
    };
function showText()
    {
        alert(this.innerHTML);
    }
var num14 = 1;
function f14()
    {
        var ul = document.getElementById('ul14'),
            li = document.createElement('li');
        li.innerHTML = num14//'!!!';
        ul.insertBefore(li, ul.lastElementChild);
        num14++;
        
    };

var newSpan = '<span>!!!</span>';

function f15()
    {
        var elem = document.getElementById('elem2');
        elem.insertAdjacentHTML('beforeBegin', newSpan);
    };
function f16()
    {
        var elem = document.getElementById('elem2');
        elem.insertAdjacentHTML('afterEnd', newSpan);
    };
function f17()
    {
        var elem = document.getElementById('elem2');
        elem.insertAdjacentHTML('afterBegin', newSpan);
    };
function f18()
    {
        var elem = document.getElementById('elem2');
        elem.insertAdjacentHTML('beforeEnd', newSpan);
    };
function f19()
    {
        var elem = document.getElementById('elem3');
        elem.firstElementChild.style = "color: red;"
    };
function f20()
    {
        var elem = document.getElementById('elem3');
        elem.lastElementChild.style = "color: green;"
    };
function f21()
    {
        var elem = document.getElementById('elem3'),
            ch = elem.children,
            l = ch.length;
        for(i=0; i<l; i++)
            ch[i].innerHTML += '!';
    };
function f22()
    {
        var elem = document.getElementById('elem4'),
            prevElem = elem.previousElementSibling;
        if(prevElem)
            prevElem.innerHTML += '!';
    };
function f23()
    {
        var elem = document.getElementById('elem4'),
            nextElem = elem.nextElementSibling;
        if(nextElem)
            nextElem.innerHTML += '!';
    };
function f24()
    {
        var elem = document.getElementById('elem4'),
            nextElem = elem.nextElementSibling,
            next2Elem = nextElem.nextElementSibling;
        if(next2Elem)
            next2Elem.innerHTML += '!';
    };
function f25()
    {
        var elem = document.getElementById('elem5'),
        parent = elem5.parentElement;
        parent.style = "color: red;"
    };
function f26()
    {
       var elem = document.getElementById('elem5'),
        parent = elem5.parentElement,
        parent2 = parent.parentElement; 
        parent2.style = "color: green;"
    };
function f27()
    {
        var parent = document.getElementById('parent'),
            child = document.getElementById('child');
        if(child)
            parent.removeChild(child);
    };
function f28()
    {
        var parent = document.getElementById('parent'),
            last = parent.lastElementChild;
        if(last)
            parent.removeChild(last);
    };
function f29(elem)
    {
        var parent = elem.parentNode;
        parent.removeChild(elem);
    };
function f30()
    {
        var parent = document.getElementById('r30');
        parent.removeChild(this);
    };
function f31(elem)
    {
        var newElem = elem.cloneNode(true),
            parent = elem.parentNode;
        parent.appendChild(newElem);
    };
function f32()
    {
        var arr = ['Это', 'просто', 'элемент', 'массива', 'ку-ку!'],
            ul = document.createElement('ul'),
            parent = document.getElementById('r32'),
            l = arr.length;
        for(i=0; i<l; i++)
            {
                var li = document.createElement('li');
                li.innerHTML = arr[i];
                ul.appendChild(li);
            }
        parent.appendChild(ul);
    };
function f33()
    {
        var elem = document.getElementById('r33'),
            parent = elem.parentNode,
            newElem = elem.cloneNode(false);
        newElem.value = '';
        parent.appendChild(newElem);
    };
function f34(elem)
    {
        var str = String(elem.value),
            l = str.length,
            parent = elem.parentElement;
        for(i=0; i<l; i++)
            {
                var inp = document.createElement('input');
                inp.setAttribute("type", "number");
                inp.setAttribute("disabled", "disabled");
                inp.value = str[i];
                parent.appendChild(inp);
            }
            
    };
function f34_clear(elem)
    {
        var parent = elem.parentElement;
        for(;parent.children.length > 0;)
            {
                var lastElem = parent.lastElementChild;
                if(!(lastElem.matches('.www')))
                    parent.removeChild(lastElem)
                else 
                    break;
            }
        
    };
function f35(elem)
    {
        var parent = elem.parentNode;
        console.log(elem.parentNode);
        parent.setAttribute('hidden', 'true');
    };
window.onload = function()
    {
        var c = document.getElementsByClassName('ccc'),
            l = c.length;
        for(i=0; i < l; i++)
            c[i].addEventListener('click', f10)
        var r30 = document.getElementById('r30'),
            ch30 = r30.children,
            l30 = ch30.length;
        for(i=0; i < l30; i++)
            ch30[i].addEventListener('click', f30);
    }