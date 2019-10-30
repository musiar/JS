var week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];    
window.addEventListener('load', function(){
    var btn14 = document.getElementById('btn14'),
        btn15 = document.getElementById('btn15'),
        a = document.getElementsByTagName('a'),
        aL = a.length,
        r18 = document.getElementById('r18'),
        nums18 = r18.children,
        l18 = nums18.length,
        img = document.querySelectorAll('div.img img'),
        imgL = img.length,
        img2 = document.querySelectorAll('div.img2 img'),
        img2L = img2.length;
    btn14.addEventListener('click', f14);
    btn15.addEventListener('click', f15);
    //16, 17
    for(i = 0; i < aL; i++)
        {
            a[i].innerHTML += ' (' + a[i].href + ')';
            var h = a[i].href.slice(0, 7);
            if(h == 'http://')
                a[i].innerHTML += '&rarr;'
        }
    //18
    for(i = 0; i < l18; i++)
        nums18[i].addEventListener('click', f18);
    //19, 20
    for(i = 0; i < imgL; i++)
        img[i].addEventListener('click', increaseImg);
    //21
    for(i = 0; i < img2L; i++)
        img2[i].addEventListener('click', f21);
        
})
//1, 2
function getClassSum(className, resultElem){
    var nums = document.getElementsByClassName(className),
        result = document.getElementById(resultElem),
        sum = 0;
    for(var i in nums)
        if(nums[i].value)
            sum += Number(nums[i].value);
    result.value = sum;
}
function clearForm(className, resultElem){
    var nums = document.getElementsByClassName(className),
        result = document.getElementById(resultElem);
    for(var i in nums)
        nums[i].value = ''
    result.value = '';
}
//3
function getNumSum(){
    var num = document.getElementById('f3_num').value, 
        sum = 0,
        result = document.getElementById('r3');
    if(num){
        num = num.split('');
        var l = num.length;
        if (l > 1)
            for(i = 0; i < l; i++)
                sum += Number(num[i]);
        else
            sum = num[0];
    }
    else 
        sum = "введите число!";
    result.innerHTML = sum;
}
//4
function getAvg(){
    var nums = document.getElementById('f4_num').value,
        result = document.getElementById('r4'),
        avg;
    if(nums)
        {
            nums = nums.split(',');
            avg = (arrSum(nums) / nums.length);
        }
    else 
        avg = "введите числа!";
    result.innerHTML = avg;
}
//Сумма массива
function arrSum(arr){
    var l = arr.length,
        sum = 0;
    for(i = 0; i < l; i++)
        sum += Number(arr[i]);
    return sum;
}
//5
function getFio(){
    var fio = document.getElementById('f5_txt').value, 
        inputs = document.querySelectorAll('.fio');
    fio = fio.split(' ');
    for(i = 0; i < 3; i++)
        if(fio[i])
            inputs[i].value = fio[i];
}
//6
function f6(el){
    var str = el.value;
    if(str)
        str = strUp(str);
    el.value = str;
}
//вспомогательная
function strUp(str){
    var arr = str.split(''),
        l = arr.length,
        newStr = arr[0].toUpperCase();
    for(i = 1; i < l; i++)
        {
            if(arr[i-1] == ' ')
                newStr += arr[i].toUpperCase();
            else
                newStr += arr[i];
        }
    return newStr;
}
//7
function f7(str, resultElem){
    var arr = str.split(' '),
        words = arr.length,
        l = arr.length;
    for(i = 0; i < l; i++)
        if(!arr[i])
           words -= 1;
    document.getElementById(resultElem).innerHTML = words;
}
//8
function f8(str, resultElem1, resultElem2){
    var arr = str.split(' '),
        l = arr.length,
        max = arr[0].length, 
        elemNum = 0;
    for(i = 1; i < l; i++)
        if(arr[i].length > max)
            {
                max = arr[i].length;
                elemNum = i;
            }
    document.getElementById(resultElem1).innerHTML = arr[elemNum];
    document.getElementById(resultElem2).innerHTML = max;
}
//9
function f9(el){
    var arr = el.value.split('.');
    arr.reverse();
    var str = arr.join('-');
    console.log(str);
    el.value = str;
}
//10
function f10(el, resultEl){
    var year = (new Date()).getFullYear(),
        birthYear = Number(el.value),
        res = document.querySelector('#' + resultEl);
    if(year >= birthYear)
        res.innerHTML = (year - birthYear);
    else 
        res.innerHTML = 'неверно указан год!';
}
//11
function f11(el, resultEl){
    var date = new Date(el.value),
        dayNum = date.getDay(),
        res;
    if(dayNum == 0)
        res = week[6];
    else if(!dayNum)
        res = 'не указана дата'
    else
        res = week[dayNum - 1];
    document.querySelector('#' + resultEl).innerHTML = res;
}
//12
function f12(str, resultEl){
    str = str.toLowerCase();
    var arr1 = str.split(''),
        arr2 = str.split(''),
        l = arr1.length,
        flag = true,
        res = document.querySelector('#' + resultEl);
    arr2.reverse();
    for(i = 0; i < l; i++)
        if(arr1[i] != arr2[i])
            flag = false;
    if(flag)
        res.innerHTML = 'да'
    else 
        res.innerHTML = 'неть'
}
//13
function f13(el, resElem){
    var res = document.querySelector('#' + resElem),
        el = el.split(''),
        l = el.length,
        flag = false;
    for(i=0; i < l; i++)
        if(el[i] == 3)
            {
                flag = true;
                break;
            }
    if(flag)
        res.innerHTML = 'да'
    else 
        res.innerHTML = 'неть'
}
//14
function f14(){
    var div = document.getElementById('r14'),
        p = div.children,
        l = p.length;
    for(i= 0; i < l; i++)
        p[i].innerHTML += ' ' + (i+1);
    var btn = document.getElementById('btn14');
        btn.removeEventListener('click', f14);
}
//15
function f15(){
    var div = document.getElementById('r15'),
        p = div.children,
        l = p.length,
        arr = [],
        newArr;
    for(i = 0; i < l; i++)
        arr.push(Number(p[i].innerHTML))
    arr = arr.sort(function(a,b){
        if (a > b) return 1; // если первое значение больше второго
        if (a == b) return 0; // если равны
        if (a < b) return -1; // если первое значение меньше второго
    })
    document.getElementById('res15').innerHTML = arr;
}
//18
function f18(){
    var num = Number(this.innerHTML);
    num = Math.pow(num, 2);
    this.innerHTML = num;
}
//19
function increaseImg(){
    this.width = this.width*2;
    this.height = this.height*2;
    this.removeEventListener('click', increaseImg);
    this.addEventListener('click', decreaseImg);
} 

//20
function decreaseImg(){
    this.width = this.width/2;
    this.height = this.height/2;
    this.removeEventListener('click', decreaseImg);
    this.addEventListener('click', increaseImg);
}
//21
function f21(){
    var img = document.getElementById('r21');
    img.removeAttribute('hidden');
    img.src = this.src;
}

//22
function checkNum(el){
    var num = Number(el.value);
    if(num < 0)
        el.value = 0;
}
function plus(){
    var el = document.getElementById('r22'),
        num = Number(el.value);
    num++;
    el.value = num;
}
function minus(){
    var el = document.getElementById('r22'),
        num = Number(el.value);
    num--;
    el.value = num;
    checkNum(el);
}