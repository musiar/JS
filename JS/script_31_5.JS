window.addEventListener('load', function(){
    //2
    var y2Min = 1900,
        d2 = document.querySelector('#d2'),
        m2 = document.querySelector('#m2'),
        y2 = document.querySelector('#y2'),
        dt = new Date();
    addOpt(y2, y2Min, dt.getFullYear(), dt.getFullYear());    
    addOpt(m2, 1, 12, (dt.getMonth() + 1));  
    addOpt(d2, 1, 31, dt.getDate());
    y2.addEventListener('change', f2);
    m2.addEventListener('change', f2);
    d2.addEventListener('change', f2);
    //6
    var a6 = document.querySelectorAll('#r6 a'),
        l6 = a6.length;
    for(i = 0; i < l6; i++)
        {
            a6[i].addEventListener('click', function(evt){
                evt.preventDefault();
            });
            a6[i].addEventListener('click', f6);
        }
    
})    
function addOpt(el, min, max, now){
    for(i = min; i <= max; i++)
        {
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            if(now && i == now)
                opt.selected = true;
            el.appendChild(opt);
        }
} 

//1
function f1(){
    var countries = {
            'ru': ['Москва', 'Санкт-Петербург', 'Казань', 'Омск', 'Владивосток', 'Волгоград', 'Нижний Новгород', 'Пермь', 'Смоленск', 'Архангельск'],
            'ukr': ['Киев', 'Одесса', 'Харьков'],
            'bel': ['Минск', 'Витебск', 'Могилёв']
        },
        first = '<option value="" selected disabled hidden>Выберите город</option>',
        s1 = document.querySelector('#r1_1'),
        s2 = document.querySelector('#r1_2'),
        selected = s1.value,
        sL = countries[selected].length;
    s2.innerHTML = first;
    for(i = 0; i < sL; i++)
        {
            var opt = document.createElement('option');
            opt.innerHTML = countries[selected][i];
            s2.appendChild(opt);
        }
    document.querySelector('#c1').innerHTML = s1.options[s1.selectedIndex].text;
    document.querySelector('#city1').innerHTML = '';
};
function city1(){
    document.querySelector('#city1').innerHTML = document.querySelector('#r1_2').value;
}
//2
function f2(){
   var d = document.querySelector('#d2'),
        m = document.querySelector('#m2'),
        y = document.querySelector('#y2'),
        selectedDate = new Date(y.value, m.selectedIndex, d.value),
            year = selectedDate.getFullYear(),
            month = selectedDate.getMonth(),
            
            daysCount = (new Date(y.value, m.selectedIndex + 1, 1) - new Date(y.value, m.selectedIndex, 1)) / (1000*60*60*24);
    if(d.value > daysCount)
        d.value = daysCount;
}
//3
function f3(){
    var rates = {'rur':1.00, 'usd':63.50, 'eur':71.15},
        first = document.querySelector('#r3_1').value,
        second = document.querySelector('#r3_2').value,
        count = + document.querySelector('#cnt3').value,
        res = document.querySelector('#r3');
    if(first != second && count)
        res.innerHTML = rates[first]/rates[second] * count;
    else 
        res.innerHTML = 'неверно указаны параметры'
}
//4
function f4(){
    var col = Number(document.querySelector('#col4').value),
        row = Number(document.querySelector('#row4').value),
        table = document.querySelector('#r4');
    table.innerHTML = '';
    if(row && col)
        for(i = 0; i < row; i++)
            {
                var tr = document.createElement('tr');
                for(k = 0; k < col; k++)
                    {
                        var td = document.createElement('td');
                        td.innerHTML = k + 1;
                        tr.appendChild(td);
                    }
                table.appendChild(tr)
            }
}
//5
function f5(){
    var li = document.querySelectorAll('#r5 li'),
        arr = [],
        l = li.length;
    for(i = 0; i < l; i++)
        {
            arr.push(+ li[i].innerHTML);
        }
    arr.sort(function(a,b){
        if(a>b) return 1;
        if(a==b) return 0;
        if(a<b) return -1;
    })
    for(i = 0; i < l; i++)
        li[i].innerHTML = arr[i];
}
//6
function f6(){
    var active = document.querySelector('#r6 a.red');
    if(active)
        active.classList.remove('red');
    this.classList.add('red');
}