window.addEventListener('load', function(){
    f1();
});
function f1(){
    let inp = document.querySelectorAll('#r1 input'),
        l = inp.length;
    for(let i = 0; i < l; i++)
        {
            inp[i].addEventListener('dblclick', function(){
                this.value = i+1;
            })
        }
};
function f2(){
    let nums = document.querySelector('#r2').value;
    if(nums){
        let arr = strToArr(nums);
        document.querySelector('#r2max').innerHTML = Math.max(...arr);
    }
    
};

function f3(){
    let inp = document.querySelectorAll('#r3 p input'),
        [a,b,c] = inp;
    [a.value, b.value, c.value] = [c.value, a.value, b.value]
    //[inp[0].value, inp[1].value, inp[2].value] = [inp[2].value, inp[0].value, inp[1].value];
};

function f4(){
    let img = document.querySelectorAll('#r4 img'),
        [a, b, c, d, e, f] = img;
    [a.src, b.src, c.src, d.src, e.src, f.src] = [f.src ,a.src, b.src, c.src, d.src, e.src];
};
function f5(){
    let str = document.querySelector('#r5').value;
    if(str)
        {
            let arr = strToArr(str);
            let res = [];
            while(arr.length > 0)
                {
                    [a, b, ...arr] = arr;
                    if(b || b == 0)
                        res.push(b,a);
                    else
                        res.push(a);
                };
            document.querySelector('#r5arr').innerHTML = res;
        }
};
function f6(){
    let arr1 = [1,2,3], 
        arr2 = [4,5,6],
        arr3 = [7,8,9];
    console.log(joinArrs(arr1, arr2, arr3));
};

function f7(){
    let inp = document.querySelectorAll('#r7 p input');
    [a1, a2, a3] = [strToArr(inp[0].value), strToArr(inp[1].value), strToArr(inp[2].value)];
    document.querySelector('#res7').innerHTML = getInt(a1, a2, a3);
    
};


function f8(){
    let inp = document.querySelectorAll('#r8 input'),
        [a1, a2, a3] = [strToArr(inp[0].value),
        strToArr(inp[1].value),
        strToArr(inp[2].value)],
        result = concatAll(a1, a2, a3);
    document.querySelector('#res8').innerHTML = result;
    
};
function f9(){
    let arr = strToArr(document.querySelector('#r9').value),
    l = arr.length,
        [...reversedArr] = arr,
        result = [];
    reversedArr.reverse();
    for(i = 0; i < l; i++)
        result.push(arr[i] + reversedArr[i]);
    document.querySelector('#res9').innerHTML = result;
};
function f10(){
    let arr = strToArr(document.querySelector('#r10').value);
    arr.sort((a,b) => a-b);
    console.log(arr);
    document.querySelector('#res10').innerHTML = arr;
};
function f11(){
    let arr = strToArr(document.querySelector('#r11').value);
    document.querySelector('#res11').innerHTML = [...new Set(arr)];
};

/*вспомогательные функции*/

/*приведение строки в массив*/
function strToArr(str){
    let arr = str.split(','),   
        l = arr.length;
    for(i = 0; i < l; i++){
        if(Number(arr[i]))
            arr[i] = Number(arr[i]);
    };
    
    return arr;
};

/*Функция для слияния нескольких массивов в многомерный массив*/
function joinArrs(...arrs){
    return arrs;
};

/*функции для поиска пересечения в массивах*/
function getInt(...arrs){
    let result = [],
        arr0 = arrs.shift();
    for(let el of arr0){
        if(inArrays(arrs, el))
            result.push(el);
    };
    return result;
};
/*проверить наличие элемента в массивах*/
function inArrays(arrs, el){
    for(let arr of arrs){
        if(!inArray(arr, el))
            return false;
    return true;
    }
}

/*проверить наличие элемента в массиве*/
function inArray(arr, el){
    return arr.find(e => e == el);
};

/*конец функций для поиска пересечения в массивах*/

/*функция для слияния массивов*/
function concatAll(...arrs){
    return [].concat(...arrs);
};