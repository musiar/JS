window.addEventListener('load', function(){
    var inp2 = document.querySelector('#inp2'),
        btn6 = document.querySelector('#btn6'),
        td7 = document.querySelectorAll('#r7 td'),
        l7 = td7.length,
        li9 = document.querySelectorAll('#r9 > li > p'),
        l9 = li9.length;
    inp2.addEventListener('keypress', f2);
    btn6.addEventListener('click', f6);
    for(i = 0; i < l7; i++)
        td7[i].addEventListener('click', f7Red);
    for(i = 0; i < l9; i++)
        li9[i].addEventListener('click', f9Show);
    //8
    var td8 = document.querySelectorAll('#r8 td'),
        l8 = td8.length;
	for (var i = 0; i < l8; i++) {
		td8[i].addEventListener('dblclick', function () {
 		var val = this.innerHTML;
		this.style.display = "none";
		var inp = document.createElement('input');
		inp.value = val;
		inp.addEventListener('change', function () {
			this.previousElementSibling.innerHTML = this.value;
			this.previousElementSibling.style.display = "";
			this.parentNode.removeChild(this);
		});
		this.parentNode.insertBefore(inp, this.nextSibling);
   		});
	}
})

//1
function f1(){
    
    var inp = document.querySelector('#inp1'),
        txt = inp.value;
    if(txt)
        {
            var ul = document.querySelector('#r1'),
                arr = txt.split(','),
                l = arr.length;
            for(i = 0; i < l; i++)
                {
                    var li = document.createElement('li');
                    li.innerHTML = arr[i];
                    li.addEventListener('dblclick', f1_remove);
                    ul.appendChild(li);
                }
            inp.value = '';
        }
}
//удалить элемент списка
function f1_remove()
    {
        var parent = this.parentElement;
        parent.removeChild(this);
    };
//2
function f2(event)
    {
        if(event.keyCode == 13)
            {
                var p = document.querySelector('#r2');
                if(this.value){
                    p.innerHTML += this.value + ', ';
                    this.value = '';}
            }
    }
//3
function f3()
    {
        var div = document.getElementsByClassName('r3'),
            l = div.length,
            num = 30;
        for(i = 0; i < l; i++)
            {
                var str = div[i].innerHTML.slice(0, num);
                div[i].innerHTML = str + '...'
            }
    }
//4
function f4(){
    var td = document.querySelectorAll('#r4 td'),
        tL = td.length,
        arr = [];
    for(i=0; i < tL; i++)
        arr.push(Number(td[i].innerHTML));
    var maxEl = max(...arr);
    for(i=0; i < tL; i++)
        if(Number(td[i].innerHTML) == maxEl)
            td[i].classList.add('red');
}
//вспомогательная функция
function max(...p){
  //return Math.max.apply(Math, p)
  //или 
  return Math.max(...p) //вместо p может быть массив
}
//5
function f5(){
    var td = document.querySelectorAll('#r5 td'),
        res = document.querySelector('#num5'),
        tL = td.length,
        arr = [];
    for(i = 0; i < tL; i++)
        arr.push(Number(td[i].innerHTML));
    arr.sort(function(e1, e2){
        if(e1 > e2) return 1;
        if(e1 == e2) return 0;
        if(e1 < e2) return -1;
    })
    res.innerHTML = arr;
}
//6
function f6(){
    var allTr = document.querySelectorAll('#r6 tr'),
        col = allTr.length, //высота таблицы
        allTd = document.querySelectorAll('#r6 td'),
        el = allTd.length, //всего ячеек
        row = el/col, //длина строки
        tr = document.createElement('tr');
    
    for(i = 0; i < row; i++)
            {
                var sum = 0;
                for(j = i; j < el; j += row)
                    {
                        var num = Number(allTd[j].innerHTML);
                        sum+=num;
                    }
                var td = document.createElement('td');
                td.classList.add('www')
                td.innerHTML = sum;
                tr.appendChild(td);
            }
    document.querySelector('#r6').appendChild(tr);
    this.removeEventListener('click', f6);
}
//7
function f7Red(){
    this.classList.toggle('red');
}
function getSum(){
    var nums = document.querySelectorAll('#r7 td.red'),
        l = nums.length,
        sum = 0
        res = document.querySelector('#sum7');
    for(i=0; i < l; i++)
        sum +=Number(nums[i].innerHTML);
    res.value = sum;
}
function clearAll(){
    var nums = document.querySelectorAll('#r7 td.red'),
        l = nums.length;
    for(i=0; i < l; i++)
        nums[i].classList.remove('red');
    document.querySelector('#sum7').value = '';
}
//9
function f9Show(){
    this.nextElementSibling.style.display = 'block';
    this.removeEventListener('click', f9Show);
    this.addEventListener('click', f9Hide);
}
function f9Hide(){
    this.nextElementSibling.style.display = 'none';
    this.removeEventListener('click', f9Hide);
    this.addEventListener('click', f9Show);
}