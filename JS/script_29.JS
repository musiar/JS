window.addEventListener('load', function(){
    var c = document.querySelector('#countries');
    for(var key in countries)
        {
            var opt = document.createElement('option');
            opt.value = key;
            opt.innerHTML = key;
            c.appendChild(opt);
        }
    c.selectedIndex = -1;
    calendar();
    var y = document.querySelector('#year_select'),
        m = document.querySelector('#month_select'),
        d = document.querySelector('#day_select');
    y.addEventListener('change', checkDate);
    m.addEventListener('change', checkDate);
    d.addEventListener('change', checkDate);

    });
var countries = {
    "Россия": ['Москва', 'Санкт-Петербург', 'Нижний Новгород', 'Казань', 'Омск', 'Владивосток', 'Волгоград', 'Пермь', 'Смоленск', 'Архангельск'],
    "Украина": ['Киев', 'Львов', 'Одесса', 'Харьков'],
    "Беларусь": ['Минск', 'Витебск', 'Могилёв', 'Бобруйск'],
    "Австрия": ['Вена', 'Инсбрук', 'Грац', 'Вельс', 'Дорнбирн', 'Зальцбург'],
    "Нидерланды": ['Гаага', 'Амстердам', 'Тилбург', 'Харлем', 'Роттердам', 'Лейден', 'Медемблик', 'Нордвейк'],
    "Канада": ['Ванкувер', 'Торонто', 'Эдмонтон', 'Оттава'],
    "Франция": ['Париж', 'Ницца', 'Лион', 'Тулуза', 'Ле-Ман'],
    "Китай": ['Пекин', 'Шанхай', 'Гуанчжоу'],
    "Эстония": ['Таллин', 'Раквере', 'Пайде', 'Тарту']};
function f1()
    {
        var form = document.forms['form1'],
            result = document.getElementById('r1'),
            sum = countInputSum(form);
        result.value = sum;
    };

function f2()
    {
        var forms = document.forms,
            l = forms.length,
            result = document.getElementById('r2'),
            sum = 0;
        for(i=0; i < l; i++)
            
            {
                var l2 = forms[i].length;
                for(j = 0; j < l2; j++)
                    sum += Number(forms[i].elements[j].value);
            }
        result.value = sum;
    };
function f3()
    {
        var selected = document.getElementById('select3').value;
        document.getElementById('r3').innerHTML = selected;
    };
function f4()
    {
        var select = document.querySelector('#r4'),
        l = select.length,
        num = Number(document.querySelector('#num4').value) - 1;
        if(num >= 0 && num < l)
            select.selectedIndex = num;
    }
function addCities()
    {
        var citiesElem = document.querySelector('#cities');
        if(citiesElem)
            citiesElem.parentNode.removeChild(citiesElem);
        var select = document.createElement('select'),
            c = document.querySelector('#countries'),
            selected = c.value,
            cities = countries[selected],
            l = cities.length;
        cities.sort();
        select.id = 'cities';
        if (c.selectedIndex != -1)
            for(i = 0; i < l; i++)
                {
                    var city  = document.createElement('option');
                    city.innerHTML = cities[i];
                    city.value = cities[i];
                    select.appendChild(city)
                }
        c.parentNode.appendChild(select);
    };
function calendar()
    {
        var y = document.querySelector('#year_select'),
            m = document.querySelector('#month_select'),
            d = document.querySelector('#day_select'),
            today = new Date(),
            year = today.getFullYear(),
            month = today.getMonth(),
            day = today.getDate();
        fillSelect(y, range(year - 20, year));
        fillSelect(m, range(1, 12));
        fillSelect(d, range(1, 31));
        y.value = year;
        m.selectedIndex  = month;
        d.value  = day;
    };

//вспомогательные функции
function countInputSum(elem)
    {
        var l = elem.length,
        sum = 0;
        for(i=0; i < l; i++)
            if(elem[i].value)
                sum += Number(elem[i].value);
        return sum;
    }
//заполнение массива
function range(a, b){
    var arr = [];
    for(i = a; i <= b; i++)
        arr.push(i);
    return(arr);
}
//добавление options в select
function fillSelect(select, arr){
    arr.forEach(function(i){
        select.add(new Option(i));
        })
}
//проверка корректности даты
function checkDate(){
    var y = document.querySelector('#year_select'),
            m = document.querySelector('#month_select'),
            d = document.querySelector('#day_select'),
            selectedDate = new Date(y.value, m.selectedIndex, d.value),
            year = selectedDate.getFullYear(),
            month = selectedDate.getMonth(),
            
            daysCount = (new Date(y.value, m.selectedIndex + 1, 1) - new Date(y.value, m.selectedIndex, 1)) / (1000*60*60*24);
    if(d.value > daysCount)
        d.value = daysCount;
}