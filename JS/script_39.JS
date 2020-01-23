window.addEventListener('load', function(){
    let p11 = document.querySelectorAll('.p11'),
        set11 = new Set;
    for(let elem of p11)
        {
            elem.addEventListener('click', function(){
                set11.add(this);
            });
        };
        
    let btn11 = document.querySelector('#btn11');
    btn11.addEventListener('click', function(){
        for(let elem of set11)
            elem.innerHTML += '!';
        set11.clear();
    })
})
function f1(){
    let set = new Set;
    set.add(1);
    set.add(2);
    set.add(3);
    for(let num of set)
        document.querySelector('#r1').innerHTML += `<br>Элемент '${num}'`;
};
function f2(){
    let set = new Set([1, 2, 3]);
    document.querySelector('#r2').innerHTML = set.size;
};
function f3(){
    let set = new Set([1, 2, 3]),
        res = document.querySelector('#r3');
    res.innerHTML = f3check(set, 3);
    res.innerHTML += '<br>' + f3check(set, 4);
};

function f3check(set, num){
    let answers = ['присутствует', 'отсутсвует'],
        txt;
    if(set.has(num))
        txt = `Число ${num} в сете ${answers[0]};`;
    else 
        txt = `Число ${num} в сете ${answers[1]};`;
    return txt;
}

function f4(){
    let set = new Set([1,2,3]);
    set.add(2);
    console.log(set);
};
function f5(){
    let arr = [1, 2, 48, 25, 2, 6, 8, 9, 8, 2],
        set = new Set;
    for(elem of arr)
        set.add(elem);
    console.log(set);
};
function f6(){
    let arr = [1, 2, 48, 25, 2, 6, 8, 9, 8, 2],
        set = new Set;
    for(let elem of arr)
        if(elem%2 == 0)
            set.add(elem);
    console.log(set);
    
};
function f7(){
    let set = new Set([1, 2, 3]);
    for(let num of set)
        console.log(num);
};
function f8(){
    let set = new Set([1,3,5,23,5,2,7,2,1,6,3,85]),
        sum = 0;
    for(let num of set)
        sum += num;
    document.querySelector('#r8').innerHTML = sum;    
};
function f9(...arr){
    /*let set = new Set(...arr);
    console.log([...set])*/
    console.log([...new Set(...arr)]);
};
function f10(){
    let set = new Set;
    return function(){
        let inp = document.querySelector('#txt10'),
            num = Number(inp.value),
            res = document.querySelector('#r10');
        if(num || num == 0)
            {
                set.add(num);
                res.innerHTML = [...set];
                inp.value = '';
            };
    }
};
let counter10 = f10();