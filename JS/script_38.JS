window.onload = function(){
    let p = document.querySelectorAll('.r13');
    p.forEach(elem => elem.addEventListener('click', () => window.setInterval(elem.innerHTML = Number(elem.innerHTML) +1, 1000)
        ));
}
function f1(){
    let arr1 = ['6', 'abc', 'привет', 8, 5, 9],
        [elem1, elem2, elem3, ...arr] = arr1,
        r = document.querySelector('#r1');
    r.innerHTML = `<br>elem1 = ${elem1},<br>elem2 = ${elem2},<br>elem3 = ${elem3},<br>arr = ${arr}`;
};
function f2(){
    let arr = [1, 34, 54, 2323, 789, 2, 6, 2, 0,57, 3];
    arr.reverse();
    let [elem1, elem2] = arr;
    document.querySelector('#r2').innerHTML = `последний элемент - ${elem1}, предпоследний - ${elem2}`;
};
function f3(){
    let arr = [1, 2, 3, 4, 5],
        [, elem2] = arr;
    document.querySelector('#r3').innerHTML = `второй эелемент - ${elem2}
    `;
};
function f4(){
    let arr = ['первый', 'два', 'третий'],
        [, elem2 = 'bbb', elem3 = 'eee'] = arr;
    document.querySelector('#r4').innerHTML = `<b>второй элемент</b> - ${elem2}, <b>третий</b>  - ${elem3}`;
};
function f5(){
    let obj = {name: 'Пётр', surname: 'Петров', age: '20 лет'},
        {name, surname, age} = obj;
    document.querySelector('#r5').innerHTML = `<br><b>Фамилия</b>: ${surname}<br><b>Имя</b>: ${name}<br><b>Возраст</b>: ${age}`;
};
function f6(){
    let obj = {name: 'Пётр', surname: 'Петров', /*age: '20 лет'*/},
        {name = 'Аноним', surname = 'Анонимов', age = 'неизвестно'} = obj;
    document.querySelector('#r6').innerHTML = `<br><b>Фамилия</b>: ${surname}<br><b>Имя</b>: ${name}<br><b>Возраст</b>: ${age}`;
};
function f7(){
    let arr = ['это', ' ','просто',' ', 'массив'];
    for(let val of arr)
        document.querySelector('#r7').innerHTML += `<br>${val}`;
};
function f8(){
    let arr = ['!!!', 'one', 2, 'третий', 4, 'пять'];
    arr.reverse();
    for(let val of arr)
        document.querySelector('#r8').innerHTML += `<br>${val}`;  
};
function f9(){
    let arr = [1, 34, 5, 234, 6, 23],
        sum = 0;
    for(let val of arr)
        sum += val;
    document.querySelector('#r9').innerHTML = `Массив: ${arr}<br>Сумма: ${sum}`;
};
function f10(){
    let str = document.querySelector('#txt10').value,
        res = document.querySelector('#r10');
    if(str)
        {
            let counter = 0;
            for(let symbol of str)
                if(symbol == 'o' || symbol == 'O' || symbol == 'о' || symbol == 'О')
                    counter++;
            if(counter)
                res.innerHTML = counter;
            else
                res.innerHTML = 'Не найдено.';
        }
    else
        res.innerHTML = 'Строка отсутствует. Введите значение.';
    
};
function f11(name = 'Аноним'){
    document.querySelector('#r11').innerHTML = `Привет, ${name}!`;
};
function f12({id, color = 'red', fontWeight = 'bold', fontsize = '14pt', background, left = '30px'}){
    let elem = document.querySelector('#' + id),
        params = `color: ${color};
                font-weight: ${fontWeight};
                fontsize: ${fontsize};
                background-color: ${background};
                padding-left: ${left}`;
    elem.style.cssText = params;
};