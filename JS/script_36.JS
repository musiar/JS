function getArr(str){
    var arr = str.split(',');
    return arr;
};

function getNumsArr(str){
    var arr = getArr(str),
        newArr = [];
    arr.forEach(function(el, i){
            newArr.push(Number(el));
        });
    return newArr;
};

//1
function f1(){
    var inp = document.getElementById('inp_1').value,
        res = document.getElementById('r1');
    if(inp)
        {
            var arr = getNumsArr(inp),
                newArr = [];
            arr.forEach(function(el){
                newArr.push(Math.pow(el, 2));
            })
            res.innerHTML = newArr;
        }
};
//2
function f2(){
    var inp = document.getElementById('inp_2').value,
        res = document.getElementById('r2');
    if(inp)
        {
            var arr = getNumsArr(inp),
                newArr = [],
                sum = 0;
            arr.forEach(function(el){
                sum += el;
            });
            res.innerHTML = sum;
        }
};
//3
function f3(){
    var inp = document.getElementById('inp_3').value,
        res = document.getElementById('r3');
    if(inp)
        {
            var arr = getNumsArr(inp),
                newArr = [];
            arr = arr.map(function(el){
                return el*el;
            });
            res.innerHTML = arr;
        }
};
//4
function f4(){
    var inp = document.getElementById('inp_4').value,
        res = document.getElementById('r4');
    if(inp)
        {
            var arr = getNumsArr(inp),
                check;
            check = arr.every(function(el){
                if(el >= 0)
                    return true;
                else
                    return false;
            });
            if(check)
                res.innerHTML = 'Да';
            else
                res.innerHTML = 'Неть';
        }
};
//5
function f5(){
    var inp = document.getElementById('inp_5').value,
        res = document.getElementById('r5');
    if(inp)
        {
            var arr = getNumsArr(inp),
                check;
            check = arr.some(function(el){
                if(el < 0)
                    return true;
                else
                    return false;
            });
            if(check)
                res.innerHTML = 'Есть';
            else
                res.innerHTML = 'Неть';
        }
};
//6
function f6(){
    var inp = document.getElementById('inp_6').value,
        res = document.getElementById('r6');
    if(inp)
        {
            var arr = getNumsArr(inp),
                newArr;
            newArr = arr.filter(function(el){
                if(el < 0)  
                    return true;
                else 
                    return false;
            });
            res.innerHTML = newArr;
        }
};
//7
function f7(){
    var inp = document.getElementById('inp_7').value,
        res = document.getElementById('r7');
    if(inp)
        {
            var arr = getNumsArr(inp),
                newArr;
            newArr = arr.filter(function(el){
                if(el % 2 == 0)
                    return true;
                else 
                    return false;
            });
            res.innerHTML = newArr;
        }
};
//8
function f8(){
    var inp = document.getElementById('inp_8').value,
        res = document.getElementById('r8');
    if(inp)
        {
            var arr = getArr(inp),
                newArr;
            newArr = arr.filter(function(el){
                if(el.length >= 5)
                    return true;
                else 
                    return false;
            });
            res.innerHTML = newArr;
        }
};
//9
function f9(){
    var arr = [1, 2, [3, 4], 5, [6, 7]],
        res = document.getElementById('r9'),
        newArr = 's';
    newArr = arr.filter(function(el){
        if (typeof(el) == 'object')
            return true;
        else 
            return false;
    });
    res.innerHTML = newArr;
};


//10
function f10(){
    var inp = document.getElementById('inp_10').value,
        res = document.getElementById('r10');
    if(inp)
        {
            var arr = getArr(inp),
                newArr;
            newArr = arr.filter(function(el){
                if(el < 0)
                    return true;
                else 
                    return false;
            });
            res.innerHTML = newArr.length;
        }
};
//11
function f11(){
    var inp = document.getElementById('inp_11').value,
        res = document.getElementById('r11');
    if(inp)
        {
            var arr = getNumsArr(inp),
                s;
            s = arr.reduce(function(sum, el){
                return sum + el;
            }, 0);
        res.innerHTML = s;
        }
};
//12
function f12(){
    var inp = document.getElementById('inp_12').value,
        res = document.getElementById('r12');
    if(inp)
        {
            var arr = getNumsArr(inp), 
            answer,
            result = arr.reduce(function(sum = 0, el){
                if(el == 0)
                    answer = sum;
                else 
                    return sum += el;
            });
            res.innerHTML = answer ? answer : result;
        }
};
//13
function f13(){
    var inp = document.getElementById('inp_13').value,
        res = document.getElementById('r13');
    if(inp)
        {
            var arr = getNumsArr(inp),
                answer,
                result = arr.reduceRight(function(sum = 0, el){
                    if(el == 0 && answer == undefined)
                        answer = sum;
                    else
                        return sum+el;
                });
            res.innerHTML = answer ? answer : result;
        }
};
//14
function f14(){
    var inp = document.getElementById('inp_14').value,
        res = document.getElementById('r14');
    if(inp)
        {
            var arr = getNumsArr(inp),
                counter;
            sum = arr.reduce(function(sum, el, i){
                sum += el;
                if(sum >= 10 && !counter)
                    counter = i + 1;
                else
                    return sum;
            }, 0);
        
        res.innerHTML = counter ? counter : arr.length;
        }
};
//15
function f15(){
    var inp = document.getElementById('inp_15').value,
        res = document.getElementById('r15');
    if(inp)
        {
            var arr = getNumsArr(inp),
            counter,
            sum = arr.reduceRight(function(sum = 0, el, i){
                sum += el;
                if(sum >= 10 && !counter)
                    counter = arr.length - i;
                else
                    return sum;
            });
            res.innerHTML = counter ? counter : arr.length;
        }
}
//16
function f16(){
    var inp = document.getElementById('inp_16').value,
        res = document.getElementById('r16');
    if(inp)
        {
            var arr = getNumsArr(inp),
                resArr = []
                newArr = arr.filter(function(el){
                    if(el > 0)
                        return true;
                    else 
                       return false; 
                });
            newArr.forEach(function(el){
                resArr.push(Math.sqrt(el));
            });
            res.innerHTML = resArr; 
        }
};