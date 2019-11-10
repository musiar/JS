/*Начало*/
window.addEventListener('load', function(){
    var btn8 = document.getElementsByClassName('btn_8'),
        l8 = btn8.length,
        p9 = document.getElementsByClassName('colored'),
        l9 = p9.length,
        btn10 = document.getElementsByClassName('btn_10'),
        l10 = btn10.length,
        i11 = document.getElementsByClassName('i11'),
        l11 = i11.length;
    for(i = 0; i < l8; i++)
        btn8[i].addEventListener('click', f8(this));
    for(i = 0; i < l9; i++)
        p9[i].addEventListener('click', f9(this));
    for(i = 0; i < l10; i++)
        btn10[i].addEventListener('click', f10());
    for(i = 0; i < l11; i++)
        {   
            var counter = f11();
            i11[i].addEventListener('change', counter);
            i11[i].nextElementSibling.addEventListener('click', counter);
            i11[i].previousElementSibling.addEventListener('click', counter);
        }
})    

//1
function f1(a){
    if(a > 0)
        function ggg(){
            alert('!')
        }
    else
        function ggg(){
            alert('!!!')
        }
    ggg();
}
//2
var ggg2 = function(n, f){
    return f(n);
};
var fn2 = function(a){
    return Math.pow(a, 2);
};
function f2(a){
    alert(ggg2((ggg2(a, fn2)), fn2));
};
//3
var a3 = function(){
    return 3;
}
var b3 = function(){
    return 4;
}

function f3(a, b){
    return(a() + b());
}
//4
var sq4 = function(a){
    return Math.pow(a, 2);
};
var cube4 = function(a){
    return Math.pow(a, 3);
};
function f4(a, f1, f2){
    return(f1(a) + f2(a));
}
//5
var f5_1 = function(a){
    return a + 9;
};
var f5_2 = function(a){
    return a-4;
};
var f5_3 = function(a){
    return a/2;
};
var funcArr5 = [f5_1, f5_2, f5_3];
function f5(arr, funcArr){
    var l = arr.length
    for(i = 0; i < l; i++)
        arr[i] = funcArr[i](arr[i]);
    return arr;
}
//6
var f6_1 = function(a){
    return a + 5;
};
var f6_2 = function(a){
    return a*2;
};
var f6_3 = function(a){
    return a-4;
};
var funcArr6 = [f6_1, f6_2, f6_3];
function f6(arr, funcArr){
    var l = arr.length,
        fL = funcArr.length - 1;
    
    for(i = 0, j = 0; i < l; i++)
        {
            arr[i] = funcArr[j](arr[i]);
            if(j == fL)
                j = 0;
            else j++;
        }
    return arr;
}
//7
function counter7() {
    var i = 1;
    return function() {
        console.log(i);
        return i++};
}
var f7 = counter7();
//8
var f8 = function(){
    var num = 1;
    return function(){
        this.innerHTML = num;
        return num++;
    }
}
//9
function f9(){
    var colors = ['#294dff', '#29ff30', '#ff2929', '#ffc229'],
        l = colors.length-1,
        i = 0;
    return function(){
        this.style.color = colors[i];
        if(i < l)
                return i++;
        else
            return i = 0;
    }
}
//10
function f10(){
    var n1 = 0,
        n2 = 1,
        tmp;
    return function(){
        this.nextElementSibling.innerHTML = n1;
        tmp = n1;
        n1 = n2;
        n2 = tmp + n1;
    }
}

//11
function f11(){
    var values = [''],
        currentPosition = 0;
    return function(){
        if(this.tagName == 'INPUT')
            {
                currentPosition++;
                //values[currentPosition] = this.value;
                values.push(this.value);
            }
        if(this.classList[0] == 'prew')
            {
                if(currentPosition > 0)
                    currentPosition--;
                this.nextElementSibling.value = values[currentPosition];
            }
        else if(this.classList[0] == 'next')
            {
                if(currentPosition < values.length - 1)
                    currentPosition++;
                this.previousElementSibling.value = values[currentPosition];
            }
    }
}
//12
function f12(){
    var nums = [],
        min = 1,
        max = 100;
    return function(){
        if(nums.length < max)
            {
                do{
                    var rand = Math.ceil(Math.random() * (max - min + 1));
                } while(nums.indexOf(rand) != -1);
                nums.push(rand);
                console.log('Случайное число: ' + rand +'\nДобавлено чисел: ' + nums.length + '\nВсе числа: ' + nums);
            }
    }
};
var btn12 = f12();