window.addEventListener('load', function(){
    f7();
});
function f1(){
    let arr1 = [1, 2],
        arr2 = [3, 4],
        arr3 = [5, 6],
        map = new Map();
    map.set(arr1, 'какое-то слово');
    map.set(arr2, 'ещё одно');
    map.set(arr3, 'новая запись');
    console.log(map);
    window.myMap = map;
};
function f2(){
    for(let value of myMap)
        console.log(value);
};
function f3(){
    let map = new Map();
    map.set([1,3], 'бла-бла-бла');
    map.set(['десерт',8], 'кукареку');
    map.set({'Вася Петров': 'ok!', 'Васильев Пётр': 'не ок'}, '33');
    let keys = map.keys();
    for(let val of keys)
        console.log(val);
};

function f4(){
    let map = new Map([[['abc', 'bca'], 'крем'], [['bcb', 'cbc'], 'шампунь'],[['caa', 'ccb'], 'гель']]),
        values = map.values();
    for(let val of values)
        console.log(val);
};
function f5(){
    let map = new Map();
    map.set(['тестовая', 'запись'], 'тут');
    map.set(['кошки', 'кушают', 'картошки!'], 'о как!');
    map.set(['123', '333'], '5');
    console.log(map.size);
};
function f6(){
    let p = document.querySelectorAll('#r6 p'),
        map = new Map(),
        num = 1;
    for(let elem of p){
        map.set(elem, num);
        num++;
        elem.addEventListener('click', function(){
            elem.innerHTML += map.get(elem);
        });
    };
};
function f7(){
    let inputs = document.querySelectorAll('#r7 input'),
        map = new Map();
    for(let inp of inputs){
        map.set(inp, {values: [], index: -1})
        inp.addEventListener('change', function(){
            let {values, index} = map.get(this);
            if(values.length - 1 > index)
                values.length = index+1;
            values.push(this.value);
            map.set(this, {values, index: index+1});
            this.value = '';
            console.log(map.get(this));
        });
        inp.addEventListener('keyup', function(evt){
            if(evt.key == 'ArrowLeft'){
                let {values, index} = map.get(this);
                if(index > -1)
                    {
                        this.value = values[index];
                        map.set(this, {values, index: index-1});
                    }
                evt.preventDefault();
            }
            if(evt.key == 'ArrowRight'){
                let {values, index} = map.get(this);
                if(index < values.length - 1)
                    {
                        this.value = values[index + 1];
                        map.set(this, {values, index: index+1});
                    }
                evt.preventDefault();
            }
        })
    }
};