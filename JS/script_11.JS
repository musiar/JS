function f1()
    {
        var a = document.getElementById('f1_a').value,
            b = document.getElementById('f1_b').value,
            res = document.getElementById('r1');
        if(a && b)
            res.innerHTML = (a == b)
        
    };
function f2()
    {
        var a = parseInt(document.getElementById('f2_a').value),
            b = parseInt(document.getElementById('f2_b').value),
            res = document.getElementById('r2');
        if(a && b)
            res.innerHTML = (10 < (a + b));
    };
function f3()
    {
        var num = document.getElementById('f3_num').value,
            res = document.getElementById('r3');
        if(num)
            {
                res.innerHTML = num > 0;
            }
    };